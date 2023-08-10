/// <reference types="Cypress" />
// Data
import {data} from './line-chart.data';

// Components
import CreateReport from 'Components/report/create-report';
import SidePanelTabs from 'Components/report/side-panel/tabs';
import {AddChartDropdown, MasterDateRange, SaveReportButton} from 'Components/report/toolbar';
import {
    Dimension,
    Metric,
    DateRangeDimension,
    DefaultDateRange,
    Interactions,
    DrillDown,
    OptionalMetric,
    Compare,
    Filter
} from 'Components/report/side-panel/data';
import {Series, XYAxis} from 'Components/report/side-panel/style/line';
import {RightMenu, ChartComponent} from 'Cypress/integration/components/report/work-space';
import {LineChartComponent} from 'Cypress/integration/components/report/work-space/chart-component/components';
import {SwitchModeReport} from 'Components/page-header';

// Constant
import {reportConfig, api} from 'Pages/report/report-design/workspace/constant';

// Variables
const {global, testCases} = data;

// State
let state = {
    reportConfig: {}
};

describe('Test Line chart', () => {
    // Declare components
    const createReport = new CreateReport();
    const sidePanelTabs = new SidePanelTabs();
    const addChartDropdown = new AddChartDropdown();
    const metric = new Metric();
    const dimension = new Dimension('Time dimension');
    const breakdownDimension = new Dimension('Breakdown dimension');
    const masterDateRange = new MasterDateRange();
    const dateRangeDimension = new DateRangeDimension();
    const defaultDateRange = new DefaultDateRange();
    const interactions = new Interactions();
    const drillDown = new DrillDown();
    const optionalMetric = new OptionalMetric();
    const compare = new Compare();
    const filter = new Filter();
    const series = new Series();
    const rightMenu = new RightMenu();
    const xyAxis = new XYAxis();
    const switchModeReport = new SwitchModeReport();
    const saveReportBtn = new SaveReportButton();

    before(() => {
        cy.login();

        cy.visit('/1600007830/report/design/523609719/edit');
    });

    beforeEach(() => {
        cy.login();

        cy.viewport(1400, 990);

        // cy.intercept('POST', api.PERFORMANCE, req => {
        //     req.continue(res => {
        //         expect(res.statusCode).to.eq(200);
        //     });
        // }).as('getPerformance');
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
        masterDateRange.changeMasterDateRange(data.global.masterDateRange);
    });

    // it('[LINE_01] - Default line chart', () => {
    //     const {dataExpected} = data.testCases.LINE_01;

    //     cy.intercept(api.PERFORMANCE).as('getPerformance');

    //     // Add LINE chart
    //     addChartDropdown.createChart(reportConfig.CHART_STYLES.TIME_SERIES_CHART.style_id);

    //     cy.wait('@getPerformance').then(xhr => {
    //         const {request, response} = xhr;
    //         const {componentId} = request.body;

    //         cy.checkLoadedDataOnChartSuccess(componentId);

    //         cy.log('Check Tab data');
    //         cy.log('Date range dimension: select the first available date field in the datasource');
    //         dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

    //         cy.log('Time dimension: select the first available date field in the datasource');
    //         dimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dimension.label);

    //         cy.log('Metric : select the first available metric field in the datasource');
    //         metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
    //         metric.checkAggregation(0, dataExpected.data.metric.aggregation);

    //         cy.log('Default date range: select auto');
    //         defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
    //         defaultDateRange.getAutoCheckBox().should('be.checked');

    //         cy.log('Disable drill down and optional metric');
    //         drillDown.getDrillDownInput().should(dataExpected.data.drillDown ? 'be.checked' : 'not.be.checked');
    //         optionalMetric.getOptionalMetricInput().should(dataExpected.data.optionalMetric ? 'be.checked' : 'not.be.checked');

    //         cy.log('Compare None, Filter Blank, Interation not be ticked');
    //         compare.getCompareToggle().should('contain', dataExpected.data.compare.label);
    //         filter.getEditSections().should('not.exist');
    //         interactions.getApplyFilterCheckbox().should(dataExpected.data.interaction ? 'be.checked' : 'not.be.checked');

    //         cy.log('Check Tab style');
    //         sidePanelTabs.getStyleTab().click();

    //         cy.log('Series#1 : Select Line, untick Cumulative + Show points + Show data label, Trendline -None');
    //         series.getRadioBoxLine().should('have.class', 'active');
    //         series.getCucumlativeCheckBox().should(dataExpected.style.series.cucumlative ? 'have.class' : 'not.have.class', 'active');
    //         series.getShowDataLabelsCheckBox().should(dataExpected.style.series.showDataLabels ? 'have.class' : 'not.have.class', 'active');
    //         series.getShowPointsCheckBox().should(dataExpected.style.series.showPoints ? 'have.class' : 'not.have.class', 'active');
    //         series.getTrendlineToggle().should('contain', dataExpected.style.series.trendLine.label);

    //         cy.log('Reference Line: Show button Add reference line ');
    //         series.getReferenceLineAddBtn().should('exist');

    //         cy.log('Grid : Axis font size + Label font size are 11');
    //         series.getGridAxisFontSizeToggle().should('contain', dataExpected.style.grid.axisFontSize);
    //         series.getGridLabelFontSizeToggle().should('contain', dataExpected.style.grid.labelFontSize);

    //         rightMenu.deleteComponent(componentId);
    //     });

    //     // Check API data
    //     cy.get('@getPerformance.last').then((xhr) => {
    //         const {request, response} = xhr;

    //         cy.log('Check api performance request - response');
    //         cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
    //         cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
    //     });
    // });

    // it('[LINE_02] - Line chart with 2 metrics and breakdown dimension', () => {
    //     const {dataInput, dataExpected} = data.testCases.LINE_02;

    //     cy.intercept(api.PERFORMANCE).as('getPerformance');

    //     // Add LINE chart
    //     addChartDropdown.createChart(reportConfig.CHART_STYLES.TIME_SERIES_CHART.style_id);

    //     cy.log('Click Add metric and select Units Stored');
    //     metric.addMetric(dataInput.metric.label);

    //     cy.log('In Breakdown dimension, click Add dimension and select field Member');
    //     breakdownDimension.addDimension(dataInput.breakdownDimension.label, false);

    //     cy.wait('@getPerformance').then(xhr => {
    //         const {request, response} = xhr;
    //         const {componentId} = request.body;

    //         cy.log('REQUEST', JSON.stringify({request, response}));

    //         cy.checkLoadedDataOnChartSuccess(componentId);

    //         cy.log('Check Tab data');
    //         cy.log('Date range dimension: select the first available date field in the datasource');
    //         dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

    //         cy.log('Time dimension: select the first available date field in the datasource');
    //         dimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dimension.label);

    //         cy.log('Breakdown dimension: show second dimenson as selection');
    //         breakdownDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.breakdownDimension.label);

    //         cy.log('Metric : select the first available metric field in the datasource');

    //         metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
    //         metric.checkAggregation(0, dataExpected.data.metric.aggregation);
    //         metric.getMetricItems().eq(1).should('contain', dataExpected.data.secondMetric.label);

    //         cy.log('Default date range: select auto');
    //         defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
    //         defaultDateRange.getAutoCheckBox().should('be.checked');

    //         cy.log('Disable drill down and optional metric');
    //         drillDown.getDrillDownInput().should(dataExpected.data.drillDown ? 'be.checked' : 'not.be.checked');
    //         optionalMetric.getOptionalMetricInput().should(dataExpected.data.optionalMetric ? 'be.checked' : 'not.be.checked');

    //         cy.log('Compare None, Filter Blank, Interation not be ticked');
    //         compare.getCompareToggle().should('contain', dataExpected.data.compare.label);
    //         filter.getEditSections().should('not.exist');
    //         interactions.getApplyFilterCheckbox().should(dataExpected.data.interaction ? 'be.checked' : 'not.be.checked');

    //         cy.log('Check Tab style');
    //         sidePanelTabs.getStyleTab().click();

    //         cy.log('All Series: Select Line, untick Cumulative + Show points + Show data label, Trendline -None');
    //         series.getListSeriesSection().each(($el) => {
    //             if ($el.text().match(/^Series #\d+$/)) {
    //                 series.getRadioBoxLine(cy.wrap($el).parent()).should('have.class', 'active');
    //                 series.getCucumlativeCheckBox(cy.wrap($el).parent()).should(dataExpected.style.series.cucumlative ? 'have.class' : 'not.have.class', 'active');
    //                 series.getShowDataLabelsCheckBox(cy.wrap($el).parent()).should(dataExpected.style.series.showDataLabels ? 'have.class' : 'not.have.class', 'active');
    //                 series.getShowPointsCheckBox(cy.wrap($el).parent()).should(dataExpected.style.series.showPoints ? 'have.class' : 'not.have.class', 'active');
    //                 series.getTrendlineToggle(cy.wrap($el).parent()).should('contain', dataExpected.style.series.trendLine.label);
    //             }
    //         });

    //         cy.log('Number of series 1 and 2: 16, untick Show others');
    //         series.getListSeriesSection().each(($el) => {
    //             let idx = 0;

    //             if ($el.text().match(/^Number of Series #\d+$/)) {
    //                 series.getNumberOfSeriesInput(cy.wrap($el).parent()).should('have.value', dataExpected.style.numberOfSeries.label[idx++]);
    //                 series.getNumberOfSeriesOtherCheckbox(cy.wrap($el).parent()).should(dataExpected.style.numberOfSeries.showOther[idx++] ? 'have.class' : 'not.have.class', 'active');
    //             }
    //         });

    //         cy.log('Reference Line: Show button Add reference line ');
    //         series.getReferenceLineAddBtn().should('exist');

    //         cy.log('Grid : Axis font size + Label font size are 11');
    //         series.getGridAxisFontSizeToggle().should('contain', dataExpected.style.grid.axisFontSize);
    //         series.getGridLabelFontSizeToggle().should('contain', dataExpected.style.grid.labelFontSize);

    //         cy.log('Left Y Axis and Right Y Axis: choose the middle option, parameters auto');
    //         xyAxis.getAxisPositionItems(1).should('have.class', 'active');
    //         xyAxis.getAxisParamInputs().each(($el) => {
    //             cy.wrap($el).should('have.value', '');
    //         });

    //         rightMenu.deleteComponent(componentId);
    //     });

    //     // Check API data
    //     cy.get('@getPerformance.last').then((xhr) => {
    //         const {request, response} = xhr;

    //         cy.log('Check api performance request - response');
    //         cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
    //         cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
    //     });
    // });

    // it('[LINE_03] - Line chart with optional metric', () => {
    //     const {dataInput, dataExpected} = data.testCases.LINE_03;

    //     cy.intercept(api.PERFORMANCE).as('getPerformance');

    //     // Add LINE chart
    //     addChartDropdown.createChart(reportConfig.CHART_STYLES.TIME_SERIES_CHART.style_id);

    //     cy.log('In Optional metric, click Add metric and select Units Stored in the list');
    //     optionalMetric.getOptionalMetricSwitch().click();
    //     optionalMetric.addOptionalMetric(dataInput.optionalMetric.label);

    //     cy.wait('@getPerformance').then(xhr => {
    //         const {request, response} = xhr;
    //         const {componentId} = request.body;

    //         cy.log('REQUEST', JSON.stringify({request, response}));

    //         cy.checkLoadedDataOnChartSuccess(componentId);

    //         cy.log('Check Tab data');
    //         cy.log('Date range dimension: select the first available date field in the datasource');
    //         dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

    //         cy.log('Time dimension: select the first available date field in the datasource');
    //         dimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dimension.label);

    //         cy.log('Metric : select the first available metric field in the datasource');
    //         metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
    //         metric.checkAggregation(0, dataExpected.data.metric.aggregation);

    //         cy.log('Default date range: select auto');
    //         defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
    //         defaultDateRange.getAutoCheckBox().should('be.checked');

    //         cy.log('Disable drill down and optional metric');
    //         drillDown.getDrillDownInput().should(dataExpected.data.drillDown ? 'be.checked' : 'not.be.checked');
    //         optionalMetric.getOptionalMetricInput().should(dataInput.optionalMetric ? 'be.checked' : 'not.be.checked');

    //         cy.log('Compare None, Filter Blank, Interation not be ticked');
    //         compare.getCompareToggle().should('contain', dataExpected.data.compare.label);
    //         filter.getEditSections().should('not.exist');
    //         interactions.getApplyFilterCheckbox().should(dataExpected.data.interaction ? 'be.checked' : 'not.be.checked');

    //         cy.log('Check Tab style');
    //         sidePanelTabs.getStyleTab().click();

    //         cy.log('All Series: Select Line, untick Cumulative + Show points + Show data label, Trendline -None');
    //         series.getListSeriesSection().each(($el) => {
    //             if ($el.text().match(/^Series #\d+$/)) {
    //                 series.getRadioBoxLine(cy.wrap($el).parent()).should('have.class', 'active');
    //                 series.getCucumlativeCheckBox(cy.wrap($el).parent()).should(dataExpected.style.series.cucumlative ? 'have.class' : 'not.have.class', 'active');
    //                 series.getShowDataLabelsCheckBox(cy.wrap($el).parent()).should(dataExpected.style.series.showDataLabels ? 'have.class' : 'not.have.class', 'active');
    //                 series.getShowPointsCheckBox(cy.wrap($el).parent()).should(dataExpected.style.series.showPoints ? 'have.class' : 'not.have.class', 'active');
    //                 series.getTrendlineToggle(cy.wrap($el).parent()).should('contain', dataExpected.style.series.trendLine.label);
    //             }
    //         });

    //         cy.log('Number of series 1 and 2: 16, untick Show others');
    //         series.getListSeriesSection().each(($el) => {
    //             let idx = 0;

    //             if ($el.text().match(/^Number of Series #\d+$/)) {
    //                 series.getNumberOfSeriesInput(cy.wrap($el).parent()).should('have.value', dataExpected.style.numberOfSeries.label[idx++]);
    //                 series.getNumberOfSeriesOtherCheckbox(cy.wrap($el).parent()).should(dataExpected.style.numberOfSeries.showOther[idx++] ? 'have.class' : 'not.have.class', 'active');
    //             }
    //         });

    //         cy.log('Reference Line: Show button Add reference line ');
    //         series.getReferenceLineAddBtn().should('exist');

    //         cy.log('Grid : Axis font size + Label font size are 11');
    //         series.getGridAxisFontSizeToggle().should('contain', dataExpected.style.grid.axisFontSize);
    //         series.getGridLabelFontSizeToggle().should('contain', dataExpected.style.grid.labelFontSize);

    //         cy.log('Left Y Axis and Right Y Axis: choose the middle option, parameters auto');
    //         xyAxis.getAxisPositionItems(1).should('have.class', 'active');
    //         xyAxis.getAxisParamInputs().each(($el) => {
    //             cy.wrap($el).should('have.value', '');
    //         });

    //         cy.log('Click button View');
    //         cy.intercept('PUT', api.REPORT_INFO).as('saveReport');
    //         switchModeReport.switchViewMode();

    //         cy.wait('@saveReport').then(() => {
    //             cy.log('Click Optional metric and tick Units Stored');
    //             const chartComponent = new ChartComponent(componentId);

    //             chartComponent.selectOptionalMetric(dataExpected.view.optionalMetric.label);
    //             cy.wait('@getPerformance');

    //             switchModeReport.switchEditMode();

    //             rightMenu.deleteComponent(componentId);
    //         });

    //         // Check API data
    //         cy.log('Check api performance request - response');
    //         cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
    //         cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
    //     });

    // });

    it('[LINE_04] - Line chart - Compare Previous period', () => {
        const {dataInput, dataExpected} = data.testCases.LINE_04;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add LINE chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TIME_SERIES_CHART.style_id);

        cy.log('In Compare - Select Previous period ');
        compare.selectCompareOption(dataInput.compare.label);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('REQUEST', JSON.stringify({request, response}));

            cy.checkLoadedDataOnChartSuccess(componentId);

            const lineChartComponent = new LineChartComponent(componentId);

            lineChartComponent.getLines().should('have.length', 2);

            cy.log('Click button View');
            cy.intercept('PUT', api.REPORT_INFO).as('saveReport');
            switchModeReport.switchViewMode();

            cy.wait('@saveReport').then(() => {
                cy.log('Click Optional metric and tick Units Stored');
                lineChartComponent.getLines().should('have.length', 2);

                switchModeReport.switchEditMode();

                rightMenu.deleteComponent(componentId);
            });
        });

        // Check API data
        cy.get('@getPerformance.all').then((xhr) => {
            const {request, response} = xhr[0];

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });

    });

    it('[LINE_07] - Line chart - Filter', () => {
        const {dataInput, dataExpected} = data.testCases.LINE_07;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add LINE chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TIME_SERIES_CHART.style_id);

        cy.log('Click button Add a filter');
        filter.getNewFilterButton().click();
        filter.applyOrInitFilter(dataInput.filter.name, dataInput.filter.rules);
        cy.intercept(api.PERFORMANCE).as('getPerformance');
        filter.getFilterPanelBackBtn().click();

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('REQUEST', JSON.stringify({request, response}));

            cy.checkLoadedDataOnChartSuccess(componentId);

            const lineChartComponent = new LineChartComponent(componentId);

            lineChartComponent.getLines().should('have.length', 1);

            cy.log('Click button View');
            cy.intercept('PUT', api.REPORT_INFO).as('saveReport');
            cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
            switchModeReport.switchViewMode();

            cy.wait('@saveReport').then(() => {
                cy.log('Chart can be viewed normally');
                lineChartComponent.getLines().should('have.length', 1);

                switchModeReport.switchEditMode();

                rightMenu.deleteComponent(componentId);
            });
        });

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });

    });

    it('[LINE_08] - Line chart - Apply filter Interaction', () => {
        const {dataInput, dataExpected} = data.testCases.LINE_08;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add LINE chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TIME_SERIES_CHART.style_id);

        interactions.getApplyFilter().click();

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('REQUEST', JSON.stringify({request, response}));

            cy.checkLoadedDataOnChartSuccess(componentId);

            const lineChartComponent = new LineChartComponent(componentId);

            lineChartComponent.getLines().should('have.length', 1);

            cy.log('Click button View');
            cy.intercept('PUT', api.REPORT_INFO).as('saveReport');
            cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
            switchModeReport.switchViewMode();

            cy.wait('@saveReport').then(() => {
                cy.log('Chart can be viewed normally');
                lineChartComponent.getLines().should('have.length', 1);

                lineChartComponent.clickCircleAtDate(dataInput.interactionDate);

                lineChartComponent.getActiveCircle().should('be.visible');

                switchModeReport.switchEditMode();

                rightMenu.deleteComponent(componentId);
            });
        });

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });

    });

    it('[LINE_19] - Line chart - Change alias name and type', () => {
        const {dataInput, dataExpected} = data.testCases.LINE_19;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add LINE chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TIME_SERIES_CHART.style_id);

        cy.log('Change name from Date to Alias');
        dimension.changeAliasName(0, dataInput.timeDimension.aliasLabel);
        dimension.changeDataType(0, dataInput.timeDimension.type, dataInput.timeDimension.subType);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('REQUEST', JSON.stringify({request, response}));

            cy.checkLoadedDataOnChartSuccess(componentId);

            const lineChartComponent = new LineChartComponent(componentId);

            lineChartComponent.getLines().should('have.length', 1);

            cy.log('Click button View');
            cy.intercept('PUT', api.REPORT_INFO).as('saveReport');
            cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
            switchModeReport.switchViewMode();

            cy.wait('@saveReport').then(() => {
                cy.log('Chart can be viewed normally');
                lineChartComponent.getLines().should('have.length', 1);

                switchModeReport.switchEditMode();

                rightMenu.deleteComponent(componentId);
            });
        });

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });

    });

    it('Final step', () => {
        rightMenu.deleteAllComponent();

        saveReportBtn.saveReport();
    });
});
