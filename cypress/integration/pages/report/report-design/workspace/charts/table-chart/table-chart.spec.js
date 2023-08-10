/// <reference types="Cypress" />
// Data
import {data} from './table-chart.data';

// Components
import CreateReport from 'Components/report/create-report';
import SidePanelTabs from 'Components/report/side-panel/tabs';
import {AddChartDropdown, MasterDateRange, SaveReportButton} from 'Components/report/toolbar';
import {
    Dimension,
    Metric,
    Sort,
    DateRangeDimension,
    DefaultDateRange,
    SummaryRow,
    Interactions,
    DrillDown,
    OptionalMetric
} from 'Components/report/side-panel/data';
import {ConditionFormatting, TableHeader, TableFooter, Metrics} from 'Components/report/side-panel/style';
import {ChartComponent, RightMenu, TableComponent} from 'Cypress/integration/components/report/work-space';

// Constant
import {reportConfig, api, commonDataConfig} from 'Pages/report/report-design/workspace/constant';
import {SwitchModeReport} from 'Cypress/integration/components/page-header';

// Variables
const {global, testCases} = data;

// State
let state = {
    reportConfig: {},
    calenderComponentId: ''
};

describe('Test Table chart', () => {
    // Declare components
    const createReport = new CreateReport();
    const addChartDropdown = new AddChartDropdown();
    const metric = new Metric();
    const dimension = new Dimension();
    const masterDateRange = new MasterDateRange();
    const dateRangeDimension = new DateRangeDimension();
    const sort = new Sort();
    const defaultDateRange = new DefaultDateRange();
    const summaryRow = new SummaryRow();
    const interactions = new Interactions();
    const sidePanelTabs = new SidePanelTabs();
    const conditionFormatting = new ConditionFormatting();
    const tableHeader = new TableHeader();
    const tableFooter = new TableFooter();
    const metrics = new Metrics();
    const rightMenu = new RightMenu();
    const saveReportBtn = new SaveReportButton();
    const switchModeReport = new SwitchModeReport();
    const drillDown = new DrillDown();
    const optionalMetric = new OptionalMetric();

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

    it('[TABLE_O1] - Add chart "Table" style', () => {
        const {dataExpected} = testCases.TABLE_01;

        // Add Table chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TABLE_NUMBER.style_id);

        cy.wait('@getPerformance');

        cy.get('@getPerformance').then(xhr => {
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

            cy.log('Show summary row: Checked');
            summaryRow.getShowSummaryRowCheckBox().should(dataExpected.data.showSummaryRow ? 'be.checked' : 'not.be.checked');

            cy.log('Interaction: Uncheck');
            interactions.getApplyFilterCheckbox().should(dataExpected.data.interaction ? 'be.checked' : 'not.be.checked');

            cy.log('Check Tab style');
            sidePanelTabs.getStyleTab().click();

            cy.log('Condition formatting: None');
            conditionFormatting.checkRules(dataExpected.style.conditionFormatting);

            cy.log('Show header: Checked');
            tableHeader.getShowHeaderCheckbox().should(dataExpected.style.showHeader ? 'have.class' : 'not.have.class', 'active');

            cy.log('Show pagination: Checked');
            tableFooter.getShowPaginationCheckbox().should(dataExpected.style.showPagination ? 'have.class' : 'not.have.class', 'active');

            cy.log('Metrics: Number , Decimal precision: auto, Compact numbers: Uncheck');
            metrics.checkMetricChartType(dataExpected.style.metrics.label, 0);
            metrics.getDecimalPrecision(0).should('contain', dataExpected.style.metrics.decimalPrecision);
            metrics.getCompactNumberCheckbox(0).should(dataExpected.style.metrics.compactNumbers ? 'be.checked' : 'not.be.checked');

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[TABLE_O2] - Add chart "Table with bars" style', () => {
        const {dataExpected} = testCases.TABLE_02;

        // Add Table chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TABLE_BAR.style_id);

        cy.wait('@getPerformance');

        cy.get('@getPerformance').then((xhr) => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('PERFORMANCE DATA: ', JSON.stringify({request, response}));

            const {body: requestBody} = request;
            const {body: responseBody} = response;

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

            cy.log('Show summary row: Checked');
            summaryRow.getShowSummaryRowCheckBox().should(dataExpected.data.showSummaryRow ? 'be.checked' : 'not.be.checked');

            cy.log('Interaction: Uncheck');
            interactions.getApplyFilterCheckbox().should(dataExpected.data.interaction ? 'be.checked' : 'not.be.checked');

            cy.log('Check Tab style');
            sidePanelTabs.getStyleTab().click();

            cy.log('Show header: Checked');
            tableHeader.getShowHeaderCheckbox().should(dataExpected.style.showHeader ? 'have.class' : 'not.have.class', 'active');

            cy.log('Show pagination: Checked');
            tableFooter.getShowPaginationCheckbox().should(dataExpected.style.showPagination ? 'have.class' : 'not.have.class', 'active');

            cy.log('Metrics: Bar , Column color: 1700FF, Decimal precision: auto, Show number: Uncheck, Compact numbers: Uncheck');
            metrics.checkMetricChartType(dataExpected.style.metrics.label, 0);
            metrics.checkMetricChartColor(dataExpected.style.metrics.backgroundColor, 0);
            metrics.getDecimalPrecision(0).should('contain', dataExpected.style.metrics.decimalPrecision);
            metrics.getCompactNumberCheckbox(0).should(dataExpected.style.metrics.compactNumbers ? 'be.checked' : 'not.be.checked');

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, requestBody);
            cy.checkApiPerformanceResponse(dataExpected.api.response, responseBody);

            cy.log('Delete chart component');
            rightMenu.deleteComponent(componentId);
        });
    });

    it('[TABLE_O3] - Add chart "Table with heatmap" style', () => {
    });

    it('[TABLE_O4] - Table chart with drillDown feature', () => {
        const {dataExpected} = data.testCases.TABLE_04;

        let componentId;

        // Add Table chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TABLE_NUMBER.style_id);

        cy.wait('@getPerformance');

        cy.get('@getPerformance').then(xhr => {
            const {request, response} = xhr;

            componentId = request.body.componentId || '';

            const chartComponent = new ChartComponent(componentId);

            cy.log('Check Tab data');
            cy.log('Date range dimension: Select the first available date field in the data source (According to the data test will be "Date")');
            dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

            cy.log('Dimension: Select the first available dimension field in the data source ( According to the data test will be "Member")');
            dimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dimension[0].label);

            cy.log('Metric: Select the first available metric field in the data source ( According to the data test will be "Units Sold", Aggregation: Sum)');
            metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
            metric.checkAggregation(0, dataExpected.data.metric.aggregation);

            cy.log('Sort: Descending (According to the data test will be "Units Sold")');
            sort.getSortItems().eq(0).should('contain', dataExpected.data.sort.label);
            sort.getAzBtn().should('contain', dataExpected.data.sort.az);

            cy.log('Show summary row: Checked');
            defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
            defaultDateRange.getAutoCheckBox().should('be.checked');

            cy.log('Enable drilldow');
            drillDown.switch();

            cy.log('Check drilldow enable');
            drillDown.getDrillDownSwitch().should('be.checked');

            cy.log('check dimension default');
            drillDown.getDrillDownDropdown(0).should('contain', dataExpected.data.dimension[0].label);

            cy.log('Add dimension to drillDown');
            dimension.addDimension(dataExpected.data.dimension[1].label);

            cy.log('icon must be visible');
            chartComponent.getIconDrillDownUp().should('be.visible');
            chartComponent.getIconDrillDownDown().should('be.visible');

            // switch mode view (not save report)
            switchModeReport.switchViewMode();

            cy.wait('@saveReport');

            cy.log('Wait for chart completely loaded');
            cy.checkLoadedDataOnChartSuccess(componentId);

            // hover chart
            cy.log('hover chart');
            chartComponent.getComponent().trigger('mouseover');
            chartComponent.getIconDrillDownDown().click();
        });

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            componentId = request.body.componentId || '';

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            switchModeReport.switchEditMode();
            rightMenu.deleteComponent(componentId);
        });
    });

    it('[TABLE_05] - Multi-Type of metric', () => {
        const {dataInput, dataExpected} = data.testCases.TABLE_05;

        // Add Table chart
        cy.log('Add Table');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TABLE_NUMBER.style_id);

        // Update 1st Metric datatype
        cy.log('Update 1st Metric datatype');
        metric.changeDataType(0, dataInput.data.metric[0].dataType);

        // Add 2nd Metric
        cy.log('Add 2nd Metric');
        metric.addMetric(dataInput.data.metric[1].label);
        metric.changeDataType(1, dataInput.data.metric[1].dataType, dataInput.data.metric[1].currency);

        // Add 3rd Metric
        cy.log('Add 2nd Metric');
        metric.addMetric(dataInput.data.metric[2].label);
        metric.changeDataType(2, dataInput.data.metric[2].dataType);

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('Wait for chart completely loaded');
            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[TABLE_06] - Drag the dimension down to metric', () => {
        const {dataInput, dataExpected} = data.testCases.TABLE_06;

        // Add Table chart
        cy.log('Add Table');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TABLE_NUMBER.style_id);

        // Remove default Dimension
        cy.log('Remove default Dimension');
        dimension.removeDimension(dataInput.data.dimension.default.label);

        // Drag Dimension to create it
        cy.log('Drag a Dimension from Schema panel to add new Dimension');
        dimension.addDimension(dataInput.data.dimension.new.label, true);

        // Drag Metric to replace the default Metric
        cy.log('Drag a Metric to replace a default one');
        metric.changeMetric(dataInput.data.metric.default.label, dataInput.data.metric.new.label, true);

        // Change the Metric aggregation
        cy.log('Change the Metric aggregation');
        metric.changeAggregation(0, dataInput.data.metric.new.aggregation);

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('Wait for chart completely loaded');
            cy.checkLoadedDataOnChartSuccess(request.body.componentId);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[TABLE_07] - Drag the dimension down to metric + Change Aggregation', () => {
        const {dataInput, dataExpected} = testCases.TABLE_07;

        // Add Table chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TABLE_NUMBER.style_id);

        cy.log('Remove "Member" dimension');
        dimension.removeDimension(0);

        cy.log('Change "Member" dimension to "Date" field');
        dimension.addDimension(dataInput.data.dimension.label, true);

        cy.log('Drag "Member" down to "Units Solds" metric');
        metric.changeMetric(dataInput.data.changeMetric.label, dataInput.data.metric.label, true);

        cy.log('Change Aggregation -> Count distinct');
        metric.changeAggregation(dataInput.data.metric.label, dataInput.data.metric.aggregation);

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('Successfully loaded data on the chart');
            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Dimension: Select the first available dimension field in the data source ( According to the data test will be "Member")');
            dimension.getDimensionItems().eq(0).scrollIntoView().should('contain', dataExpected.data.dimension.label);

            cy.log('Metric: Select metric Units Sold and change type to Number');
            metric.getMetricItems().eq(0).scrollIntoView().should('contain', dataExpected.data.metric.label);
            metric.checkAggregation(0, dataExpected.data.metric.aggregation);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            cy.log('Switch mode view');
            switchModeReport.switchViewMode();

            cy.wait('@saveReport');

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[TABLE_08] - Add multi-metric with different Aggregation + Alias name', () => {
        const {dataInput, dataExpected} = data.testCases.TABLE_08;

        // Add Table chart
        cy.log('Add Table');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TABLE_NUMBER.style_id);

        // Update 1st Metric datatype
        cy.log('Update 1st Metric datatype');
        metric.changeAliasName(0, dataInput.data.metric[0].aliasName);

        // Add 2nd to end Metrics
        for (let i = 1; i < dataInput.data.metric.length; i++) {
            cy.log(`Add ${i + 1}${i.toString().endsWith('2') ? 'nd' : i.toString().endsWith('3') ? 'rd' : 'th'} Metric`);
            metric.addMetric(dataInput.data.metric[i].label);
            metric.changeAliasName(i, dataInput.data.metric[i].aliasName);
            metric.changeAggregation(i, dataInput.data.metric[i].aggregation);
        }

        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.log('Wait for chart completely loaded');
            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[TABLE_09] - Table chart with Optional metric feature', () => {
        const {dataInput, dataExpected} = testCases.TABLE_09;
        let componentId = '';

        // Add Table chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.TABLE_NUMBER.style_id);

        cy.log('On optional metric');
        optionalMetric.getOptionalMetricSwitch().click();

        cy.log('Add metric: Gross Sales (Type: Currency)');
        optionalMetric.addOptionalMetric(dataInput.data.optionalMetrics[0].label);

        cy.log('Add metric: %COGS (Type: Percent)');
        optionalMetric.addOptionalMetric(dataInput.data.optionalMetrics[1].label);

        cy.log('Drag "Product" dimension down to optional metric');
        optionalMetric.addOptionalMetric(dataInput.data.optionalMetrics[2].label, true);

        cy.log('Alias "Gross Sales" => "GS"');
        optionalMetric.changeAliasOptionalMetric(dataInput.data.optionalMetrics[0].alias, dataInput.data.optionalMetrics[0].label);

        cy.wait('@getPerformance');
        cy.get('@getPerformance').then(xhr => {
            const {request, response} = xhr;

            componentId = request.body.componentId;

            const tableComponent = new TableComponent(componentId);

            tableComponent.checkIconOptionalMetric(true);

            cy.log('View report');
            switchModeReport.switchViewMode();

            cy.wait('@saveReport');

            cy.log('Wait for chart completely loaded');
            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api View Optional metric (Default)');
            cy.checkApiPerformanceRequest(dataExpected.api.viewOptionalMetric.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.viewOptionalMetric.response, response.body);

            tableComponent.getComponent().trigger('mouseover');
            tableComponent.checkIconOptionalMetric(false);

            cy.log('Click on optional metric icon');
            tableComponent.getIconOptionalMetric().click();

            cy.log('"Units Sold" checkbox: Checked (default)');
            tableComponent.getOptionalMetricCheckbox(dataExpected.data.metric.label).should('be.checked');

            cy.log('GS, %COGS and Product checkbox: Uncheck');
            dataExpected.data.optionalMetrics.map(({alias, label}) => {
                tableComponent.getOptionalMetricCheckbox(alias || label).should('not.be.checked');
            });

            cy.log('Check GS, %COGS, Product checkbox');
            dataExpected.data.optionalMetrics.map(({alias, label}) => {
                tableComponent.getOptionalMetricItem(alias || label).click();
            });

            cy.log('GS, %COGS and Product checkbox: Check');
            dataExpected.data.optionalMetrics.map(({alias, label}) => {
                tableComponent.getOptionalMetricCheckbox(alias || label).should('be.checked');
            });

            cy.log('After doing Step 10, the chart will be added with metric columns: GS, %COGS, Product checkbox +  show "Revert" icon');
            dataExpected.data.optionalMetrics.map(({alias, label}) => {
                tableComponent.getTableHeader().contains(alias || label);
            });
            tableComponent.getIconUndo().should('be.visible');

            cy.waitForNetworkIdle(api.PERFORMANCE, 2000);

            cy.get('@getPerformance.last').then((xhr) => {
                const {request, response} = xhr;

                cy.log('Check api View Optional metric (Default)');
                cy.checkApiPerformanceRequest(dataExpected.api.afterStep10.request, request.body);
                cy.checkApiPerformanceResponse(dataExpected.api.afterStep10.response, response.body);
            });

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });
    });

    it('Final step', () => {
        rightMenu.deleteAllComponent();

        saveReportBtn.saveReport();
    });

});
