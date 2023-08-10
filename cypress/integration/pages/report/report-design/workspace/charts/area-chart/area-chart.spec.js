/// <reference types="Cypress" />

// Data
import {data} from './area-chart.data';

// Components
import CreateReport from 'Components/report/create-report';
import {AddChartDropdown, MasterDateRange, SaveReportButton} from 'Components/report/toolbar';
import {
    Dimension,
    Sort,
    Filter,
    Interactions,
    DrillDown,
    OptionalMetric
} from 'Components/report/side-panel/data';
import {RightMenu} from 'Cypress/integration/components/report/work-space';
import {SwitchModeReport} from 'Cypress/integration/components/page-header';
import {AreaChartComponent} from 'Cypress/integration/components/report/work-space/chart-component/components';

// Constant
import {reportConfig, api} from 'Pages/report/report-design/workspace/constant';

// Variables
const {global, testCases} = data;

// State
let state = {
    reportConfig: {},
    calenderComponentId: ''
};

describe('Test Area chart', () => {
    const createReport = new CreateReport();

    // Toolbar
    const addChartDropdown = new AddChartDropdown();
    const masterDateRange = new MasterDateRange();

    // Workspace
    const rightMenu = new RightMenu();
    const saveReportBtn = new SaveReportButton();

    // Page header
    const switchModeReport = new SwitchModeReport();

    // Tab data
    const interactions = new Interactions();
    const dimension = new Dimension('Time dimension');
    const sort = new Sort('Breakdown dimension sort');
    const drillDown = new DrillDown();
    const optionalMetric = new OptionalMetric();
    const filter = new Filter();

    before(() => {
        cy.login();

        cy.getUserCookie(user => {
            cy.visit(`/${user.user_id}/report/design/${global.reportId}/edit`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.viewport(1920, 1080);

        cy.clearIndexedDB();

        cy.wait(1000);
    });

    it('Re-Condition', () => {
        rightMenu.deleteAllComponent();

        // cy.log('Create new report');
        // cy.intercept('GET', api.REPORT_INFO).as('getReportInfo');

        // createReport.createNewReport(global.dataSourceId);

        // cy.wait('@getReportInfo').then(xhr => {
        //     const data = xhr.response.body.data;

        //     state.reportConfig = data;
        // });

        cy.log('Create master date range');
        masterDateRange.createMasterDateRange(600, 100);
        masterDateRange.changeMasterDateRange(global.masterDateRange);
    });

    it('[AREA_02] - Area chart with Drilldown feature', () => {
        const {dataInput, dataExpected} = testCases.AREA_02;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');

        addChartDropdown.createChart(reportConfig.CHART_STYLES.AREA_CHART.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api performance after step 3 request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.afterStep3.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.afterStep3.response, response.body);

            cy.log('Toggle on Drilldown');
            drillDown.switch();

            cy.log('Click add time dimension --> select filed Time');
            dimension.addDimension(dataInput.timeDimension.label);

            cy.log('Change name from Time to Time 123');
            dimension.changeAliasName(dataInput.timeDimension.label, dataInput.timeDimension.alias);

            cy.log('Select ISO Year Week(YYYYww)');
            dimension.changeDataType(dataInput.timeDimension.label, dataInput.timeDimension.dataType, dataInput.timeDimension.subType);

            const areaChartComponent = new AreaChartComponent(componentId);

            cy.log('Click button View report');
            switchModeReport.switchViewMode();
            cy.wait('@saveReport');

            areaChartComponent.getComponent().trigger('mouseover');
            areaChartComponent.getIconDrillDownDown().click();

            cy.wait(2000);
            cy.get('@getPerformance.last').then(xhr => {
                const {request, response} = xhr;

                cy.log('Check api performance after step 11 request - response');
                cy.checkApiPerformanceRequest(dataExpected.api.afterStep11.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.afterStep11.response, response.body);
            });

            areaChartComponent.getIconDrillDownUp().click();

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[AREA_03] - Area chart with optional metric', () => {
        const {dataInput, dataExpected} = testCases.AREA_03;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');

        cy.log('Select Area chart');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.AREA_CHART.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api performance after step 3 request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.afterStep3.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.afterStep3.response, response.body);

            const areaChartComponent = new AreaChartComponent(componentId);

            cy.log('Toggle on Optional metric');
            optionalMetric.getOptionalMetricSwitch().click();

            cy.log('In Optional metric, click Add metric and select field Units Stored');
            optionalMetric.addOptionalMetric(dataInput.optionalMetric.label);

            cy.log('Click button View');
            switchModeReport.switchViewMode();
            cy.wait('@saveReport');

            areaChartComponent.getComponent().trigger('mouseover');
            areaChartComponent.getIconOptionalMetric().should('be.visible').click();

            cy.log('Click Optional metric and select metric Units Stored');
            areaChartComponent.getOptionalMetricItem(dataInput.optionalMetric.label).click();

            cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
            cy.get('@getPerformance').then(xhr => {
                const {request, response} = xhr;

                cy.log('Check api performance after step 7 request - response');
                cy.checkApiPerformanceRequest(dataExpected.api.afterStep7.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.afterStep7.response, response.body);

                switchModeReport.switchEditMode();

                rightMenu.deleteComponent(componentId);
            });
        });

    });

    it('[AREA_05] - Area chart - Filter', () => {
        const {dataInput, dataExpected} = testCases.AREA_05;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');
 
        addChartDropdown.createChart(reportConfig.CHART_STYLES.AREA_CHART.style_id);

        cy.wait('@getPerformance');

        cy.log('Click button Add a filter');
        filter.getNewFilterButton().click();
        filter.applyOrInitFilter(dataInput.filter.name, dataInput.filter.rules);
        filter.getFilterPanelBackBtn().click();

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
        cy.get('@getPerformance.last').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            const areaChartComponent = new AreaChartComponent(componentId);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            switchModeReport.switchViewMode();
            cy.wait('@saveReport');

            areaChartComponent.getComponent(componentId).trigger('mouseover');
            areaChartComponent.getVerticalLine(12).trigger('mouseover', 'center', {force: true});

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[AREA_06] - Area chart - Apply filter Interaction', () => {
        const {dataInput, dataExpected} = testCases.AREA_06;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.LOGGING).as('clickItemInteraction');
        cy.intercept(api.REPORT_INFO).as('saveReport');
 
        addChartDropdown.createChart(reportConfig.CHART_STYLES.AREA_CHART.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            const areaChartComponent = new AreaChartComponent(componentId);

            cy.log('In Interactions - Tick Apply Filter');
            interactions.getApplyFilter().click();

            cy.log('Click button View');
            switchModeReport.switchViewMode();
            cy.wait('@saveReport');

            cy.log('Click point of 06/11/2021');
            areaChartComponent.getCirclePoint(dataInput.point.index, 0).click({force: true});

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });

    });

    it('[AREA_07] - Area chart - Apply filter Interaction', () => {
        const {dataInput, dataExpected} = testCases.AREA_07;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.LOGGING).as('clickItemInteraction');
        cy.intercept(api.REPORT_INFO).as('saveReport');
 
        cy.log('Add area chart');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.AREA_CHART.style_id);

        sort.changeAzSort(dataInput.sort.az);

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
        cy.get('@getPerformance.last').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            cy.log('Switch view mode');
            switchModeReport.switchViewMode();
            cy.wait('@saveReport');

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });

    });

    it('Final step', () => {
        rightMenu.deleteAllComponent();

        saveReportBtn.saveReport();
    });
});
