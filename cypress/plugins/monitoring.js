// Libraries
var FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
const {commitInfo} = require('@cypress/commit-info');

const {create} = require('../services/Cypress');
const {upload} = require('../services/Upload');

const getVideoUrls = async (runs = []) => {
    let videoUrls = [];
    const videoFormData = new FormData();

    for (const run of runs) {
        const file = fs.createReadStream(run.video);

        videoFormData.append('file', file);
    }

    const responseUpload = await upload({
        formData: videoFormData,
        headers: videoFormData.getHeaders()
    });

    if (responseUpload && responseUpload.data) {
        const {data = {}} = responseUpload.data;

        videoUrls = data.path;
    }

    return videoUrls;
};

const handleGetImageUrl = async (runs) => {
    const newRuns = [...runs];

    for (const runIdx in runs) {
        const {tests = []} = runs[runIdx];

        for (const testIdx in tests) {
            const {attempts = []} = tests[testIdx];

            for (const attemptIdx in attempts) {
                const {screenshots = []} = attempts[attemptIdx];
                let newScreenshots = [...screenshots];
                const imageFormData = new FormData();

                for (const screenshotIdx in screenshots) {
                    const imageFile = fs.createReadStream(screenshots[screenshotIdx].path);
                    
                    imageFormData.append('file', imageFile);
                }
            
                const responseUpload = await upload({
                    formData: imageFormData,
                    headers: imageFormData.getHeaders()
                });

                if (responseUpload && responseUpload.data) {
                    const {data = {}} = responseUpload.data;
                    const {path: imagePaths = []} = data;

                    newScreenshots = newScreenshots.map((screenshot, index) => ({
                        ...screenshot,
                        path: imagePaths[index]
                    }));            
                }
                newRuns[runIdx].tests[testIdx].attempts[attemptIdx].screenshots = newScreenshots;
            }
        }
    }

    return newRuns;
};

module.exports.handleMonitor = async (results = {}) => {
    const {
        runs = [],
        startedTestsAt,
        endedTestsAt,
        totalDuration,
        totalSuites,
        totalTests,
        totalFailed,
        totalPassed,
        totalPending,
        totalSkipped,
        browserPath,
        browserName,
        browserVersion,
        osName,
        osVersion,
        cypressVersion,
        status
    } = results;

    const videoUrls = await getVideoUrls(runs);

    let newRuns = [...runs];

    newRuns = newRuns.map((run, index) => ({...run, video: videoUrls[index]}));
    newRuns = await handleGetImageUrl(newRuns);

    const branchInfo = await commitInfo();

    const data = {
        runs: JSON.stringify(newRuns),
        startedTestsAt,
        endedTestsAt,
        totalDuration,
        totalSuites,
        totalTests,
        totalFailed,
        totalPassed,
        totalPending,
        totalSkipped,
        browserPath,
        browserName,
        browserVersion,
        osName,
        osVersion,
        cypressVersion,
        status,
        branchInfo: JSON.stringify(branchInfo)
    };

    await create({...data});
};
