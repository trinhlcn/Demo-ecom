/// <reference types="Cypress" />

// Data
import {data} from './pie-chart.data';

// Components
import CreateReport from 'Components/report/create-report';
import SidePanelTabs from 'Components/report/side-panel/tabs';
import {AddChartDropdown, MasterDateRange, SaveReportButton} from 'Components/report/toolbar';
import {
    Dimension,
    Metric,
    Sort,
    Filter,
    DateRangeDimension,
    DefaultDateRange,
    Interactions,
    DrillDown,
    OptionalMetric
} from 'Components/report/side-panel/data';
import {PieChartStyle, DonutStyle, ColorByStyle, LabelStyle, LegendStyle} from 'Components/report/side-panel/style';
import {ChartComponent, RightMenu} from 'Cypress/integration/components/report/work-space';
import {SwitchModeReport} from 'Cypress/integration/components/page-header';
import {PieChartComponent} from 'Cypress/integration/components/report/work-space/chart-component/components';

// Constant
import {reportConfig, api} from 'Pages/report/report-design/workspace/constant';

// Variables
const {global, testCases} = data;

// State
let state = {
    reportConfig: {},
    calenderComponentId: ''
};

describe('Test Pie chart', () => {
    // Declare components
    const createReport = new CreateReport();

    // Toolbar
    const addChartDropdown = new AddChartDropdown();

    // Side panel
    const sidePanelTabs = new SidePanelTabs();

    // Workspace
    const rightMenu = new RightMenu();
    const saveReportBtn = new SaveReportButton();
    const switchModeReport = new SwitchModeReport();

    // Tab data
    const metric = new Metric();
    const dimension = new Dimension();
    const masterDateRange = new MasterDateRange();
    const dateRangeDimension = new DateRangeDimension();
    const drillDown = new DrillDown();
    const optionalMetric = new OptionalMetric();
    const filter = new Filter();
    const interactions = new Interactions();
    const sort = new Sort();
    const defaultDateRange = new DefaultDateRange();

    // Pie chart style
    const pieChartStyle = new PieChartStyle();
    const colorByStyle = new ColorByStyle();
    const donutStyle = new DonutStyle();
    const labelStyle = new LabelStyle();
    const legendStyle = new LegendStyle();

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

    it('[PIE_01] - Add chart "Pie chart" style', () => {
        const {dataExpected} = testCases.PIE_01;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIE_CHART.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check Tab data');
            cy.log('Date range dimension: Select the first available date field in the data source (According to the data test will be "Date")');
            dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

            cy.log('Dimension: Select the first available dimension field in the data source ( According to the data test will be "Member")');
            dimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dimension.label);

            cy.log('Metric: Select the first available metric field in the data source ( According to the data test will be "Units Sold", Aggregation: Sum)');
            metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
            metric.checkAggregation(0, dataExpected.data.metric.aggregation);

            cy.log('Sort: Descending (According to the data test will be "Units Sold")');
            sort.getSortItems().eq(0).should('contain', dataExpected.data.sort.label);
            sort.getAzBtn().should('contain', dataExpected.data.sort.az);

            cy.log('Default date range: auto (Last 7 days)');
            defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
            defaultDateRange.checkTypeDateRange(dataExpected.data.defaultDateRange.label);

            cy.log('Interaction: Uncheck');
            interactions.getApplyFilterCheckbox().should(dataExpected.data.interaction ? 'be.checked' : 'not.be.checked');

            cy.log('Check Tab style');
            sidePanelTabs.getStyleTab().click();

            cy.log('Pie chart: 10 slice');
            pieChartStyle.getSliceDropdown().should('contain', dataExpected.style.pieChart);

            cy.log('Color by : Slice order');
            colorByStyle.getColorByRadioCheckbox(dataExpected.style.colorBy).should('be.checked');

            cy.log('Donut: value = 0');
            donutStyle.getDonutSlider().should('have.value', dataExpected.style.donut);

            cy.log('Labels');
            cy.log('Slice label: Percentage');
            labelStyle.getSliceLabelDropdown().should('contain', dataExpected.style.labels.sliceLabel);
            cy.log('Decimal precision: Auto');
            labelStyle.getDecimalDropdown().should('contain', dataExpected.style.labels.decimalPrecision);

            cy.log('Legend');
            cy.log('Position: Right');
            legendStyle.getAlignmentDropdown().should('contain', dataExpected.style.legend.alignment);
            cy.log('Alignment: Middle');
            legendStyle.checkLegendPosition(dataExpected.style.legend.position);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[PIE_02] - Add chart "Donut chart" style', () => {
        const {dataExpected} = testCases.PIE_02;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        addChartDropdown.createChart(reportConfig.CHART_STYLES.DONUT_CHART.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check Tab data');
            cy.log('Date range dimension: Select the first available date field in the data source (According to the data test will be "Date")');
            dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

            cy.log('Dimension: Select the first available dimension field in the data source ( According to the data test will be "Member")');
            dimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dimension.label);

            cy.log('Metric: Select the first available metric field in the data source ( According to the data test will be "Units Sold", Aggregation: Sum)');
            metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
            metric.checkAggregation(0, dataExpected.data.metric.aggregation);

            cy.log('Sort: Descending (According to the data test will be "Units Sold")');
            sort.getSortItems().eq(0).should('contain', dataExpected.data.sort.label);
            sort.getAzBtn().should('contain', dataExpected.data.sort.az);

            cy.log('Default date range: auto (Last 7 days)');
            defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
            defaultDateRange.checkTypeDateRange(dataExpected.data.defaultDateRange.label);

            cy.log('Interaction: Uncheck');
            interactions.getApplyFilterCheckbox().should(dataExpected.data.interaction ? 'be.checked' : 'not.be.checked');

            cy.log('Check Tab style');
            sidePanelTabs.getStyleTab().click();

            cy.log('Pie chart: 10 slice');
            pieChartStyle.getSliceDropdown().should('contain', dataExpected.style.pieChart);

            cy.log('Color by : Slice order');
            colorByStyle.getColorByRadioCheckbox(dataExpected.style.colorBy).should('be.checked');

            cy.log('Donut: value = 0');
            donutStyle.getDonutSlider().should('have.value', dataExpected.style.donut);

            cy.log('Labels');
            cy.log('Slice label: Percentage');
            labelStyle.getSliceLabelDropdown().should('contain', dataExpected.style.labels.sliceLabel);
            cy.log('Decimal precision: Auto');
            labelStyle.getDecimalDropdown().should('contain', dataExpected.style.labels.decimalPrecision);

            cy.log('Legend');
            cy.log('Position: Right');
            legendStyle.getAlignmentDropdown().should('contain', dataExpected.style.legend.alignment);
            cy.log('Alignment: Middle');
            legendStyle.checkLegendPosition(dataExpected.style.legend.position);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[PIE_03] - Pie chart with drilldown feature', () => {
        const {dataInput, dataExpected} = testCases.PIE_03;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        cy.log('Add chart "Pie" style');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIE_CHART.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            const chartComponent = new ChartComponent(componentId);

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('ON Drilldown feature on Data tab');
            drillDown.switch();

            cy.log('Add "Product" dimension');
            dimension.addDimension(dataInput.dimension.label);

            cy.log('View report');
            switchModeReport.switchViewMode();

            chartComponent.getIconDrillDownDown().should('be.visible');
            chartComponent.getIconDrillDownUp().should('be.visible');

            cy.log('Click drill down');
            chartComponent.checkDrillDownUp(true);
        });

        cy.get('@getPerformance.last').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            const chartComponent = new ChartComponent(componentId);

            cy.log('Check api performance Drill down level 1 request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.drillDownlevel1.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.drillDownlevel1.response, response.body);

            chartComponent.getComponent().trigger('mouseover');
            chartComponent.getIconDrillDownDown().click();

            chartComponent.checkDrillDownUp(false);
            chartComponent.getIconUndo().should('be.visible');
        });

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
        cy.get('@getPerformance.last').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('Check api performance Drill down level 2 request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.drillDownlevel2.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.drillDownlevel2.response, response.body);

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[PIE_07] - Drag the dimension down to metric + Change Aggregation', () => {
        const {dataInput, dataExpected} = testCases.PIE_07;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');

        cy.log('Add chart "Pie chart" style');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIE_CHART.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);
        });

        cy.log('Drag "Date" field to "Member" dimension');
        dimension.changeDimension(dataInput.dimension.default.label, dataInput.dimension.new.label, true);

        cy.log('Drag "Member" down to "Units Sold" metric');
        metric.changeMetric(dataInput.metric.default.label, dataInput.metric.new.label, true);

        cy.log('Change Aggregation -> Count distinct');
        metric.changeAggregation(dataInput.metric.new.label, dataInput.metric.new.aggregation);

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
        cy.get('@getPerformance.last').then(xhr => {
            const {request = {}, response = {}} = xhr;
            const {componentId} = request.body;

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            switchModeReport.switchViewMode();

            cy.wait('@saveReport');

            switchModeReport.switchEditMode();
            rightMenu.deleteComponent(componentId);
        });
    });

    it('[PIE_11] - Pie chart with Optional metric', () => {
        const {dataInput, dataExpected} = testCases.PIE_11;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIE_CHART.style_id);

        cy.wait('@getPerformance');

        cy.log('On optional metric');
        optionalMetric.getOptionalMetricSwitch().should('be.visible').click();

        dataInput.optionalMetrics.map(_optionalMetric => {
            cy.log(`Add optional metric: ${_optionalMetric.label} (Type: ${_optionalMetric.dataType})`);

            optionalMetric.addOptionalMetric(_optionalMetric.label, _optionalMetric.isDrag);

            if (_optionalMetric.alias) {
                cy.log(`Alias "${_optionalMetric.label}" => "${_optionalMetric.alias}"`);
                optionalMetric.changeAliasOptionalMetric(_optionalMetric.alias, _optionalMetric.label);
            }
        });

        switchModeReport.switchViewMode();

        cy.get('@getPerformance.last').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            const pieChartComponent = new PieChartComponent(componentId);

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.get('@getPerformance.last').then(xhr => {
                const {request, response} = xhr;

                cy.log('Check api performance after step 8 request - response');
                cy.checkApiPerformanceRequest(dataExpected.api.afterStep8.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.afterStep8.response, response.body);
            });

            pieChartComponent.getIconOptionalMetric().should('be.visible').click();

            pieChartComponent.getOptionalMetricCheckbox(dataInput.metric.label).should('be.checked');

            dataInput.optionalMetrics.map(({alias, label}) => {
                pieChartComponent.getOptionalMetricCheckbox(alias || label).should('not.be.checked');
            });

            let currentOptionalMetricChecked = dataInput.metric.label;

            dataInput.optionalMetrics.map(({alias, label}, index) => {
                pieChartComponent.getOptionalMetricItem(alias || label).click();

                pieChartComponent.getOptionalMetricCheckbox(currentOptionalMetricChecked).should('not.be.checked');
                pieChartComponent.getOptionalMetricCheckbox(alias || label).should('be.checked');

                cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

                cy.get('@getPerformance.last').then(xhr => {
                    const {request, response} = xhr;

                    cy.log(`Check api performance after step ${9 + index} request - response`);
                    cy.checkApiPerformanceRequest(Object.values(dataExpected.api)[index + 1].request, request.body);
                    cy.checkApiPerformanceResponse(Object.values(dataExpected.api)[index + 1].response, response.body);
                });

                currentOptionalMetricChecked = alias || label;
            });

            pieChartComponent.getIconUndo().should('be.visible');

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[PIE_13] - Pie chart with Filter', () => {
        const {dataInput, dataExpected} = testCases.PIE_13;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIE_CHART.style_id);

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

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('Final step', () => {
        rightMenu.deleteAllComponent();

        saveReportBtn.saveReport();
    });
});
