/// <reference types="Cypress" />
// Data
import {data} from './pivot-chart.data';

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
    Filter,
    ExpandCollapse,
    GrandTotal,
    SortRowColumn
} from 'Components/report/side-panel/data';
import {ConditionFormatting, TableColor, Column, BackgroundBorder, TableFooter, Metrics} from 'Components/report/side-panel/style';
import {TableHeader, TableLabels} from 'Components/report/side-panel/style/pivot';
import {RightMenu, ChartComponent} from 'Cypress/integration/components/report/work-space';
import {LineChartComponent} from 'Cypress/integration/components/report/work-space/chart-component/components';
import {SwitchModeReport} from 'Components/page-header';

// Constant
import {reportConfig, api, commonDataConfig} from 'Pages/report/report-design/workspace/constant';

// Variables
const {global, testCases} = data;

// State
let state = {
    reportConfig: {}
};

describe('Test Pivot chart', () => {
    // Declare components
    const createReport = new CreateReport();
    const sidePanelTabs = new SidePanelTabs();
    const addChartDropdown = new AddChartDropdown();
    const metric = new Metric();
    const rowDimension = new Dimension('Row dimension');
    const columnDimension = new Dimension('Column dimension');
    const masterDateRange = new MasterDateRange();
    const dateRangeDimension = new DateRangeDimension();
    const defaultDateRange = new DefaultDateRange();
    const interactions = new Interactions();
    const saveReportBtn = new SaveReportButton();
    const optionalMetric = new OptionalMetric();
    const compare = new Compare();
    const column = new Column();
    const tableHeader = new TableHeader();
    const tableLabels = new TableLabels();
    const rightMenu = new RightMenu();
    const expandCollapse = new ExpandCollapse();
    const grandTotal = new GrandTotal();
    const switchModeReport = new SwitchModeReport();
    const sortRowColumn = new SortRowColumn();
    const conditionFormatting = new ConditionFormatting();
    const tableColor = new TableColor();
    const backgroundBorder = new BackgroundBorder();
    const filter = new Filter();

    before(() => {
        cy.login();

        cy.getUserCookie(user => {
            cy.visit(`/${user.user_id}/report/design/${global.reportId}/edit`);
        });
    });

    beforeEach(() => {
        cy.login();

        cy.viewport(1400, 990);
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

    it('[PIVOT_01] - Add chart "Pivot" style', () => {
        const {dataExpected} = data.testCases.PIVOT_01;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIVOT_TABLE.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check Tab data');
            cy.log('Date range dimension: Select the first available date field in the data source (According to the data test will be "Date")');
            dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

            cy.log('Row Dimension: Select the first available dimension field in the data source ( According to the data test will be "Member")');
            rowDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.rowDimension.label);

            cy.log('Column Dimension: Select the second available dimension field in the data source ( According to the data test will be "Product")');
            columnDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.columnDimension.label);

            cy.log('Metric : Select the first available metric field in the data source ( According to the data test will be "Units Sold", Aggregation: Sum)');
            metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
            metric.checkAggregation(0, dataExpected.data.metric.aggregation);

            cy.log('Expand - Collapse: OFF');
            expandCollapse.getExpandCollapseSwitch().should(dataExpected.data.expandCollapse ? 'be.checked' : 'not.be.checked');

            cy.log('Total: tick 2 checkbox Show grand total');
            grandTotal.getCheckboxType('Rows').should(dataExpected.data.grandTotalRows ? 'be.checked' : 'not.be.checked');
            grandTotal.getCheckboxType('Columns').should(dataExpected.data.grandTotalColumns ? 'be.checked' : 'not.be.checked');

            cy.log('Sort Row: According to the data test will be "Units Sold" - Descending, Number of Rows: Auto');
            cy.log('Sort Column: According to the data test will be "Units Sold" - Descending, Number of Column: Auto');
            sortRowColumn.getSortSections().each(section => {
                sortRowColumn.getSortFieldToggle(cy.wrap(section)).should('contain', dataExpected.data.sort.label);
                sortRowColumn.getSortAZToggle(cy.wrap(section)).should('contain', dataExpected.data.sort.az);
                sortRowColumn.getNumberOfInput(cy.wrap(section)).should('have.value', dataExpected.data.sort.numberOf);
            });

            cy.log('Default date range: auto (Last 7 days)');
            defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
            defaultDateRange.getAutoCheckBox().should('be.checked');

            cy.log('Interaction: Uncheck');
            interactions.getApplyFilterCheckbox().should(dataExpected.data.interaction ? 'be.checked' : 'not.be.checked');

            cy.log('Check Tab style');
            sidePanelTabs.getStyleTab().click();

            cy.log('Conditional Formatting: Nothing is added');
            conditionFormatting.checkRules(dataExpected.style.conditionFormatting);

            cy.log('Table Header');
            tableHeader.getFontColorButton().should('have.css', 'background-color', dataExpected.style.tableHeader.fontColor);
            tableHeader.getFontSizeButton().should('contain', dataExpected.style.tableHeader.fontSize);
            tableHeader.getFontButton().should('contain', dataExpected.style.tableHeader.font);

            cy.log();
            tableColor.getHeaderBackgroundColor().should('have.css', 'background-color', dataExpected.style.tableColor.headerBGColor);
            tableColor.getCellBorderColor().should('have.css', 'background-color', dataExpected.style.tableColor.cellBorderColor);
            tableColor.getOddRowColor().should('have.css', 'background-color', dataExpected.style.tableColor.oddRowColor);
            tableColor.getEvenColor().should('have.css', 'background-color', dataExpected.style.tableColor.evenRowColor);
            tableColor.getHighlightColor().should('have.css', 'background-color', dataExpected.style.tableColor.highlightColor);

            cy.log('Table Labels');
            tableLabels.getFontColorButton().should('have.css', 'background-color', dataExpected.style.tableLabels.fontColor);
            tableLabels.getFontSizeButton().should('contain', dataExpected.style.tableLabels.fontSize);
            tableLabels.getFontButton().should('contain', dataExpected.style.tableLabels.font);

            cy.log('Column');
            column.getAllColumnSections().each(($el) => {
                column.getTypeToggle($el).should('contain', dataExpected.style.column.type);
                column.getCompactNumberCheckbox($el).should(dataExpected.style.column.compactNumber ? 'be.checked' : 'not.be.checked');
                column.getDecimalPrecisionToggle($el).should('contain', dataExpected.style.column.decimalPrecision);
            });

            cy.log('Background border');
            backgroundBorder.getBackgroundColor().should('have.css', 'background-color', dataExpected.style.backgroundBorder.backgroundColor);
            backgroundBorder.getBorderColor().should('have.css', 'background-color', dataExpected.style.backgroundBorder.borderColor);
            backgroundBorder.getBorderWeightToggle().should('contain', dataExpected.style.backgroundBorder.borderWeight);
            backgroundBorder.getBorderStyleToggle().should('contain', dataExpected.style.backgroundBorder.borderStyle);
            backgroundBorder.getBorderShadowCheckbox().should(dataExpected.style.backgroundBorder.borderShadow ? 'be.checked' : 'not.be.checked');
            backgroundBorder.getCompactViewCheckbox().should(dataExpected.style.backgroundBorder.compactView ? 'be.checked' : 'not.be.checked');

            rightMenu.deleteComponent(componentId);
        });

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });
    });

    it('[PIVOT_02] - Add chart "Pivot Table with bars" style', () => {
        const {dataExpected} = data.testCases.PIVOT_02;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIVOT_TABLE_WITH_BAR.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Column');
            column.getAllColumnSections().each(($el) => {
                column.getTypeToggle($el).should('contain', dataExpected.style.column.type);
                column.getColor($el).should('have.css', 'background-color', dataExpected.style.column.color);
                column.getShowNumberCheckbox($el).should(dataExpected.style.column.showNumber ? 'be.checked' : 'not.be.checked');
                column.getCompactNumberCheckbox($el).should(dataExpected.style.column.compactNumber ? 'be.checked' : 'not.be.checked');
                column.getDecimalPrecisionToggle($el).should('contain', dataExpected.style.column.decimalPrecision);
            });

            rightMenu.deleteComponent(componentId);
        });

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });
    });

    it('[PIVOT_03] - Add chart "Pivot Table with heatmap" style', () => {
        const {dataExpected} = data.testCases.PIVOT_03;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIVOT_TABLE_WITH_HEATMAP.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Column');
            column.getAllColumnSections().each(($el) => {
                column.getTypeToggle($el).should('contain', dataExpected.style.column.type);
                column.getColor($el).should('have.css', 'background-color', dataExpected.style.column.color);
                column.getCompactNumberCheckbox($el).should(dataExpected.style.column.compactNumber ? 'be.checked' : 'not.be.checked');
                column.getDecimalPrecisionToggle($el).should('contain', dataExpected.style.column.decimalPrecision);
            });

            rightMenu.deleteComponent(componentId);
        });

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });
    });

    it('[PIVOT_06] - Drag the dimension down to metric and Change aggregation', () => {
        const {dataInput, dataExpected} = data.testCases.PIVOT_06;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');

        // Add chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIVOT_TABLE.style_id);
        rowDimension.changeDimension(dataInput.rowDimension.from.label, dataInput.rowDimension.to.label, true);
        metric.changeMetric(dataInput.metric.from.label, dataInput.metric.to.label, true);
        cy.intercept(api.PERFORMANCE).as('getPerformance');
        metric.changeAggregation(0, commonDataConfig.AGGREGATION_TYPE.COUNT_DISTINCT.label);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Click button View');
            switchModeReport.switchViewMode();

            cy.wait('@saveReport');

            cy.checkLoadedDataOnChartSuccess(componentId);
            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });

        // Check API data
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });
    });

    it('[PIVOT_12] - Drag the dimension down to metric and Change aggregation', () => {
        const {dataInput, dataExpected} = data.testCases.PIVOT_12;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');

        // Add chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIVOT_TABLE.style_id);

        cy.log(`Total
            - Rows: Uncheck Show grand total
            - Columns: Uncheck Show grand total`);
        grandTotal.getCheckboxType('Rows').click({force: true});
        grandTotal.getCheckboxType('Columns').click({force: true});

        cy.log(`"Sort row#1
        - Units Sold
        - Ascending
        - Number of rows#1: 3"`);
        sortRowColumn.getSortSection('Sort row #1').each(($el) => {
            sortRowColumn.getSortFieldToggle(cy.wrap($el)).click();
            sortRowColumn.getSortFieldOption(dataInput.sortRow.field.label, cy.wrap($el)).click();
            sortRowColumn.getSortAZToggle(cy.wrap($el)).click();
            sortRowColumn.getSortAZOption(dataInput.sortRow.az.label, cy.wrap($el)).click();
            sortRowColumn.getNumberOfInput(cy.wrap($el)).type(dataInput.sortRow.numberOfRow);
        });

        cy.log(`"Sort column#1
        - Product
        - Descending
        - Number of rows#1: 4"`);
        sortRowColumn.getSortSection('Sort column #1').each(($el) => {
            sortRowColumn.getSortFieldToggle(cy.wrap($el)).click();
            sortRowColumn.getSortFieldOption(dataInput.sortColumn.field.label, cy.wrap($el)).click();
            sortRowColumn.getSortAZToggle(cy.wrap($el)).click();
            sortRowColumn.getSortAZOption(dataInput.sortColumn.az.label, cy.wrap($el)).click();
            sortRowColumn.getNumberOfInput(cy.wrap($el)).type(dataInput.sortColumn.numberOfRow);
        });

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Click button View');
            cy.wait(2000);
            switchModeReport.switchViewMode();

            cy.wait('@saveReport').then(() => {

                cy.checkLoadedDataOnChartSuccess(componentId);
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

    it('[PIVOT_14] - Pivot table chart with Filter', () => {
        const {dataInput, dataExpected} = data.testCases.PIVOT_14;

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');

        // Add chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.PIVOT_TABLE.style_id);

        cy.log('Name for the filter: "General Filter"');
        filter.getNewFilterButton().click();
        filter.applyOrInitFilter(dataInput.filter.name, dataInput.filter.rules);
        cy.intercept(api.PERFORMANCE).as('getPerformance');
        filter.getFilterPanelBackBtn().click();

        // Check API data
        cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;

            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            cy.log('Click button View');
            cy.waitForNetworkIdle(api.PERFORMANCE, 2000);
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
