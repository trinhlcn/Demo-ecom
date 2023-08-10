/// <reference types="Cypress" />

// Data
import {data} from './bar-chart.data';

// Components
import {SwitchModeReport} from 'Components/page-header';
import {AddChartDropdown, MasterDateRange, SaveReportButton} from 'Components/report/toolbar';
import {Dimension, DrillDown, Filter, Interactions, OptionalMetric, Sort} from 'Components/report/side-panel/data';
import {BarChartComponent, ChartComponent, RightMenu} from 'Components/report/work-space';

// Constants
import {api, reportConfig} from 'Pages/report/report-design/workspace/constant';

// State
let state = {
    reportConfig: {},
    componentId: 0
};

describe('Test Bar chart', () => {
    // Page Header
    const switchModeReport = new SwitchModeReport();

    // Tool Bar
    const addChartDropdown = new AddChartDropdown();
    const masterDateRange = new MasterDateRange();
    const saveReportBtn = new SaveReportButton();

    // Workspace
    const rightMenu = new RightMenu();

    // Tab Data
    const dimension = new Dimension();
    const drillDown = new DrillDown();
    const filter = new Filter();
    const interactions = new Interactions();
    const optionalMetric = new OptionalMetric();
    const sort = new Sort();

    before(() => {
        cy.login();

        cy.visit('/1600007830/report/design/523609522/edit');
    });

    beforeEach(() => {
        cy.clearIndexedDB();
        cy.login();

        cy.viewport(1920, 1080);

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');
    });

    it('Pre-Condition', () => {
        // Remove all components
        cy.log('Remove old components');
        rightMenu.deleteAllComponent();

        cy.log('Create master date range');
        masterDateRange.createMasterDateRange(800, 100);
        masterDateRange.changeMasterDateRange(data.global.masterDateRange);
    });

    it('[BAR_03] - Column chart - Toggle on Drill down', () => {
        const {dataInput, dataExpected} = data.testCases.BAR_03;

        // Step 2: Add Column chart
        cy.log('Add Column Chart');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.COLUMN_CHART.style_id);

        // Check API data after step 3
        cy.log('Check data API after add chart');
        cy.wait('@getPerformance')
            .then(xhr => {
                const {request, response} = xhr;

                state.componentId = request.body.componentId;

                cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                cy.checkApiPerformanceRequest(dataExpected.api.afterStep3.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.afterStep3.response, response.body);

                // Step 4: Toggle Drill Down
                drillDown.switch();

                // Step 5: Add Dimension (according to test case, this will be Product)
                dimension.addDimension(dataInput.data.dimension.label);

                // Step 6: Switch report to mode View
                switchModeReport.switchViewMode();

                cy.wait('@saveReport');

                return cy.wrap(new ChartComponent(request.body.componentId));
            })
            .then(chartComponent => {
                // Step 6: Click button Drill down
                chartComponent.getIconDrillDownDown().click({force: true});

                // Check API data after step 6
                cy.log('Check data API after click button Drill down');

                cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
                cy.get('@getPerformance.last').then(xhr => {
                    const {request, response} = xhr;

                    cy.log('Wait for chart completely loaded');
                    cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                    cy.log('Check api performance request - response');
                    cy.checkApiPerformanceRequest(dataExpected.api.afterStep6.request, request.body);
                    cy.checkApiPerformanceResponse(dataExpected.api.afterStep6.response, response.body);
                });

                // Step 7: Click button Drill up
                chartComponent.getIconDrillDownUp().click({force: true});

                // Check API data after step 7
                cy.log('Check data API after click button Drill up');

                cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
                cy.get('@getPerformance.last').then(xhr => {
                    const {request, response} = xhr;

                    cy.log('Wait for chart completely loaded');
                    cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                    cy.log('Check api performance request - response');
                    cy.checkApiPerformanceRequest(dataExpected.api.afterStep7.request, request.body);
                    cy.checkApiPerformanceResponse(dataExpected.api.afterStep7.response, response.body);
                });

                return cy.wrap(chartComponent);
            })
            .then((chartComponent) => {
                switchModeReport.switchEditMode();
                rightMenu.deleteComponent(chartComponent.componentId);
            });
    });

    it('[BAR_04] - Column chart - Toggle on Optional metric', () => {
        const {dataInput, dataExpected} = data.testCases.BAR_04;

        // Step 2: Add Column chart
        cy.log('Add Column chart');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.COLUMN_CHART.style_id);

        // Check API data after step 3
        cy.log('Check data API after add chart');
        cy.wait('@getPerformance')
            .then(xhr => {
                const {request, response} = xhr;

                state.componentId = request.body.componentId;

                cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                cy.checkApiPerformanceRequest(dataExpected.api.afterStep3.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.afterStep3.response, response.body);

                // Step 4: Toggle Optional Metric
                optionalMetric.getOptionalMetricSwitch().click();

                // Step 5: Add Optional Metric (according to test case, this will be Units Stored)
                optionalMetric.addOptionalMetric(dataInput.data.optionalMetric.label);

                // Step 6: Switch report to mode View
                switchModeReport.switchViewMode();

                cy.wait('@saveReport');

                return cy.wrap(new ChartComponent(request.body.componentId));
            })
            .then(chartComponent => {
                // Hover to chart
                cy.log('Hover to chart');
                chartComponent.getComponent().trigger('mouseover');
                chartComponent.checkIconOptionalMetric(false);

                // Step 7: Click icon Optional metric --> Check Units Stored
                cy.log('Click icon Optional metric');
                chartComponent.getIconOptionalMetric().click();

                cy.log('Check Units Stored');
                chartComponent.getOptionalMetricItem(dataInput.data.optionalMetric.label).click();
                chartComponent.getOptionalMetricCheckbox(dataInput.data.optionalMetric.label).should('be.checked');

                // Check API data after step 7
                cy.log('Check data API after check Optional Metric');

                cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
                cy.get('@getPerformance.last').then(xhr => {
                    const {request, response} = xhr;

                    cy.log('Wait for chart completely loaded');
                    cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                    cy.log('Check api performance request - response');
                    cy.checkApiPerformanceRequest(dataExpected.api.afterStep7.request, request.body);
                    cy.checkApiPerformanceResponse(dataExpected.api.afterStep7.response, response.body);
                });

                // Step 8: Uncheck Units Sold
                cy.log('Uncheck Units Sold');
                chartComponent.getOptionalMetricItem(dataInput.data.metric.label).click();
                chartComponent.getOptionalMetricCheckbox(dataInput.data.metric.label).should('not.be.checked');

                // Check API data after step 8
                cy.log('Check data API after uncheck Metric');

                cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
                cy.get('@getPerformance.last').then(xhr => {
                    const {request, response} = xhr;

                    cy.log('Wait for chart completely loaded');
                    cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                    cy.log('Check api performance request - response');
                    cy.checkApiPerformanceRequest(dataExpected.api.afterStep8.request, request.body);
                    cy.checkApiPerformanceResponse(dataExpected.api.afterStep8.response, response.body);
                });

                return cy.wrap(chartComponent);
            })
            .then((chartComponent) => {
                switchModeReport.switchEditMode();
                rightMenu.deleteComponent(chartComponent.componentId);
            });
    });

    it('[BAR_05] - Column chart - Filter', () => {
        const {dataInput, dataExpected} = data.testCases.BAR_05;

        // Step 2: Add Column chart
        cy.log('Add Column chart');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.COLUMN_CHART.style_id);

        // Step 4: Add Filter
        cy.log('Add a filter');
        filter.getNewFilterButton().click();

        // Step 5 -> 12: Apply or init filter
        filter.applyOrInitFilter(dataInput.data.filter.name, dataInput.data.filter.rules);

        filter.getFilterPanelBackBtn().click();

        // Check API data
        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

        cy.get('@getPerformance.last')
            .then(xhr => {
                const {request, response} = xhr;

                cy.log('Wait for chart completely loaded');
                cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                // Step 13: Switch report to mode View
                cy.log('Check data API after view');
                switchModeReport.switchViewMode();

                cy.wait('@saveReport');

                cy.log('Check api performance request - response');
                cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

                return cy.wrap(new ChartComponent(request.body.componentId));
            })
            .then((chartComponent) => {
                switchModeReport.switchEditMode();
                rightMenu.deleteComponent(chartComponent.componentId);
            });
    });

    it('[BAR_07] - Column chart - Check Interaction', () => {
        const {dataInput, dataExpected} = data.testCases.BAR_07;

        // Step 2: Add Column chart
        cy.log('Add Column chart');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.COLUMN_CHART.style_id);

        // Step 4: Tick Apply interactions
        cy.log('Tick Apply interactions');
        interactions.getApplyFilter().click();

        // Check API data
        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

        cy.get('@getPerformance.last')
            .then(xhr => {
                const {request, response} = xhr;

                cy.log('Wait for chart completely loaded');
                cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                // Step 5: Switch report to mode View
                cy.log('Check data API after view');
                switchModeReport.switchViewMode();

                cy.wait('@saveReport');

                cy.log('Check api performance request - response');
                cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

                return cy.wrap(new BarChartComponent(request.body.componentId));
            })
            .then(barChartComponent => {
                // Step 6: Click on column John
                barChartComponent.getXAxisTickIndex(dataInput.data.interactions.column).as('index');

                cy.get('@index')
                    .then(index => {
                        barChartComponent.getColumnBarList().children().eq(index).trigger('mouseenter').click();

                        cy.wait(500);

                        // Validate interactions color
                        barChartComponent.getColumnBarList().children().each(($el, _index) => {
                            if (index !== _index) {
                                cy.wrap($el).children().eq(0).should('have.attr', 'opacity').and('eq', '0.4');
                            }
                        })
                    });

                return cy.wrap(barChartComponent);
            })
            .then((chartComponent) => {
                switchModeReport.switchEditMode();
                rightMenu.deleteComponent(chartComponent.componentId);
            });
    });

    it('[BAR_16] - Bar chart - Sort', () => {
        const {dataInput, dataExpected} = data.testCases.BAR_16;

        // Step 2: Add Bar chart
        cy.log('Add Bar chart');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.BAR_CHART.style_id);

        // Step 4: Change sort metrics
        cy.log('Change sort metrics');
        sort.changeSortItem(dataInput.data.sort.label);

        // Step 5: Change sort direction
        cy.log('Change sort direction');
        sort.changeAzSort(dataInput.data.sort.az);

        // Check API data
        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

        cy.get('@getPerformance.last')
            .then(xhr => {
                const {request, response} = xhr;

                cy.log('Wait for chart completely loaded');
                cy.checkLoadedDataOnChartSuccess(request.body.componentId);

                // Step 5: Switch report to mode View
                cy.log('Check data API after view');
                switchModeReport.switchViewMode();

                cy.wait('@saveReport');

                cy.log('Check api performance request - response');
                cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

                return cy.wrap(new BarChartComponent(request.body.componentId));
            })
            .then((chartComponent) => {
                switchModeReport.switchEditMode();
                rightMenu.deleteComponent(chartComponent.componentId);
            });
    });

    it('Post-Condition', () => {
        rightMenu.deleteAllComponent();
        saveReportBtn.saveReport();
    });
});
