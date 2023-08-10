/// <reference types="Cypress" />
// Data
import {data} from './score-card.data';

// Components
import CreateReport from 'Components/report/create-report';
import SidePanelTabs from 'Components/report/side-panel/tabs';
import {AddChartDropdown, MasterDateRange, SaveReportButton} from 'Components/report/toolbar';

import {
    Metric,
    DateRangeDimension,
    DefaultDateRange,
    OptionalMetric, Filter, Compare
} from 'Components/report/side-panel/data';

import {Metrics, Font} from 'Components/report/side-panel/style';
import {Padding, PrimaryMetric, ComparisonMetric} from 'Components/report/side-panel/style/scorecard';
import {ChartComponent, RightMenu, TableComponent} from 'Cypress/integration/components/report/work-space';

// Constant
import {reportConfig, api, commonDataConfig} from 'Pages/report/report-design/workspace/constant';
import {SwitchModeReport} from 'Cypress/integration/components/page-header';

// Variables
const {global, testCases} = data;

describe('Test Score card', () => {
    // Declare components
    const createReport = new CreateReport();
    const addChartDropdown = new AddChartDropdown();
    const metric = new Metric();
    const masterDateRange = new MasterDateRange();
    const dateRangeDimension = new DateRangeDimension();
    const defaultDateRange = new DefaultDateRange();
    const sidePanelTabs = new SidePanelTabs();
    const primaryMetric = new PrimaryMetric();
    const rightMenu = new RightMenu();
    const saveReportBtn = new SaveReportButton();
    const font = new Font('Labels');
    const padding = new Padding;
    const comparisonMetric = new ComparisonMetric;
    const optionalMetric = new OptionalMetric();
    const switchModeReport = new SwitchModeReport();
    const filter = new Filter();
    const compare = new Compare();

    before(() => {
        cy.login();

        cy.visit('/1600007830/report/design/523609522/edit');
    });

    beforeEach(() => {
        cy.login();

        cy.viewport(1920, 1080);
    });

    it('Re-Condition', () => {
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

    it('[SCORE_O1] - Add chart "ScoreCard" style', () => {
        const {dataExpected} = testCases.SCORE_01;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add Table chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.SCORECARD.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check Tab data');
            cy.log('Date range dimension: Select the first available date field in the data source (According to the data test will be "Date")');
            dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

            cy.log('Metric: Select the first available metric field in the data source ( According to the data test will be "Units Sold", Aggregation: Sum)');
            metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
            metric.checkAggregation(0, dataExpected.data.metric.aggregation);

            cy.log('Default date range: auto (Last 7 days)');
            defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
            defaultDateRange.checkTypeDateRange(dataExpected.data.defaultDateRange.label);

            cy.log('Check Tab style');
            sidePanelTabs.getStyleTab().click();

            cy.log('Decimal precision: auto, Compact numbers: Uncheck');
            primaryMetric.getShowCompactNumbers().should(dataExpected.style.primaryMetric.compactNumbers ? 'have.class' : 'not.have.class', 'active');
            primaryMetric.getValueDecimalPrecision().should('contain', dataExpected.style.primaryMetric.decimalPrecision);

            cy.log('Label: color, size: font');

            font.checkFontColor(dataExpected.style.label.color);
            font.checkFontSize(dataExpected.style.label.size);
            font.checkFontFamily(dataExpected.style.label.font);

            primaryMetric.getShowHideMetric().should(dataExpected.style.label.hideMetric ? 'have.class' : 'not.have.class', 'active');

            cy.log('Padding: left, right, top');
            padding.getValueLineHeight().should('contain', dataExpected.style.padding.lineHeight);
            padding.getValueLeft().should('contain', dataExpected.style.padding.left);
            padding.getValueRight().should('contain', dataExpected.style.padding.right);
            padding.getValueTop().should('contain', dataExpected.style.padding.top);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[SCORE_O2] - Add chart "ScoreCard with compact number" style', () => {
        const {dataExpected} = testCases.SCORE_02;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add Table chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.SCORECARD_WITH_COMPACT_NUMBER.style_id);

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check Tab data');
            cy.log('Date range dimension: Select the first available date field in the data source (According to the data test will be "Date")');
            dateRangeDimension.getDimensionItems().eq(0).should('contain', dataExpected.data.dateRangeDimension.label);

            cy.log('Metric: Select the first available metric field in the data source ( According to the data test will be "Units Sold", Aggregation: Sum)');
            metric.getMetricItems().eq(0).should('contain', dataExpected.data.metric.label);
            metric.checkAggregation(0, dataExpected.data.metric.aggregation);

            cy.log('Default date range: auto (Last 7 days)');
            defaultDateRange.getDefaultDateRangeSection().scrollIntoView();
            defaultDateRange.checkTypeDateRange(dataExpected.data.defaultDateRange.label);

            cy.log('Check Tab style');
            sidePanelTabs.getStyleTab().click();

            cy.log('Decimal precision: auto, Compact numbers: Uncheck');
            primaryMetric.getShowCompactNumbers().should(dataExpected.style.primaryMetric.compactNumbers ? 'have.class' : 'not.have.class', 'active');
            primaryMetric.getValueDecimalPrecision().should('contain', dataExpected.style.primaryMetric.decimalPrecision);

            cy.log('Label: color, size: font');

            font.checkFontColor(dataExpected.style.label.color);
            font.checkFontSize(dataExpected.style.label.size);
            font.checkFontFamily(dataExpected.style.label.font);

            primaryMetric.getShowHideMetric().should(dataExpected.style.label.hideMetric ? 'have.class' : 'not.have.class', 'active');

            cy.log('Padding: left, right, top');
            padding.getValueLineHeight().should('contain', dataExpected.style.padding.lineHeight);
            padding.getValueLeft().should('contain', dataExpected.style.padding.left);
            padding.getValueRight().should('contain', dataExpected.style.padding.right);
            padding.getValueTop().should('contain', dataExpected.style.padding.top);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[SCORE_O6] - Drag dimension down to a metric - Count Distinct', () => {
        const {dataExpected} = testCases.SCORE_03;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        // Add chart
        cy.log('Add Chart');
        addChartDropdown.createChart(reportConfig.CHART_STYLES.SCORECARD.style_id);
        cy.wait('@getPerformance');
        cy.log('Drag "Member"dimension down to "Units Solds" metric');
        metric.changeMetric(dataExpected.data.currentMetric.label, dataExpected.data.metricChange.label, true);
        cy.wait('@getPerformance');
        cy.log('Change aggregation: Count -> Count distinct');
        metric.changeAggregation(0, dataExpected.data.metricChange.aggregationChange);

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        cy.wait('@getPerformance').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);
        });

        cy.get('@getPerformance.last').then((xhr) => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);

            cy.log('Delete chart component');
            rightMenu.deleteComponent(componentId);
        });
    });

    it('[SCORE_12] - Scorecard with Optional metric', () => {
        const {dataInput, dataExpected} = testCases.SCORE_12;
        let componentId = '';

        cy.intercept(api.PERFORMANCE).as('getPerformance');
        cy.intercept(api.REPORT_INFO).as('saveReport');

        // Add Table chart
        addChartDropdown.createChart(reportConfig.CHART_STYLES.SCORECARD.style_id);

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

        cy.wait('@getPerformance').then((xhr) => {
            const {request, response} = xhr;

            componentId = request.body.componentId;

            const chartComponent = new ChartComponent(componentId);

            const tableComponent = new TableComponent(componentId);

            tableComponent.checkIconOptionalMetric(true);

            cy.log('View report');
            switchModeReport.switchViewMode();

            cy.wait('@saveReport');

            // cy.log('Check api View Optional metric (Default)');
            // cy.get('@getPerformance.last').then((xhr) => {
            //     const {request, response} = xhr;
            //
            //     cy.checkApiPerformanceRequest(dataExpected.api.afterStep8.request, request.body);
            //     cy.checkApiPerformanceResponse(dataExpected.api.afterStep8.response, response.body);
            // });

            tableComponent.getComponent().trigger('mouseover');
            tableComponent.checkIconOptionalMetric(false);

            cy.log('Click on optional metric icon');
            tableComponent.getIconOptionalMetric().click();

            cy.log('"Units Sold" checkbox: Checked (default)');
            tableComponent.getOptionalMetricRadio(dataExpected.data.metric.label).should('be.checked');

            cy.log('GS, %COGS and Product checkbox: Uncheck');
            dataExpected.data.optionalMetrics.map(({alias, label}) => {
                tableComponent.getOptionalMetricRadio(alias || label).should('not.be.checked');
            });

            cy.log('Check GS, %COGS, Product checkbox');
            dataExpected.data.optionalMetrics.map(({alias, label, apiData}) => {
                tableComponent.getOptionalMetricItem(alias || label).click();
                cy.wait('@getPerformance').then((xhr) => {
                    const {request, response} = xhr;

                    chartComponent.getComponent().find('span[class^=ants-scorecard-name]').should('contain',alias || label);
                });
            });

            cy.get('@getPerformance.all').then((arrXhr) => {
                for (let i = 0; i < arrXhr.length; i ++) {
                    const {request, response} = arrXhr[i];

                    cy.checkApiPerformanceRequest(dataExpected.api[+i].request, request.body);
                    cy.checkApiPerformanceResponse(dataExpected.api[+i].response, response.body);
                }
            });

            switchModeReport.switchEditMode();

            rightMenu.deleteComponent(componentId);
        });
    });

    it('[SCORE_13] - Scorecard with Filter', () => {
        const {dataInput, dataExpected} = testCases.SCORE_13;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        addChartDropdown.createChart(reportConfig.CHART_STYLES.SCORECARD.style_id);

        cy.wait('@getPerformance');

        cy.log('Click button Add a filter');
        filter.getNewFilterButton().click();
        filter.getFilterPanelAddBtn().click();

        cy.log('Input name for the filter');
        filter.getFilterDrawerNameInput().type(dataInput.filter.name + Math.floor(Math.random() * 100000));
        filter.initFilterRules(dataInput.filter.rules);
        filter.saveFilter();
        filter.getFilterPanelBackBtn().click();

        cy.waitForExpectedRequest('@getPerformance', dataExpected.api.request);
        cy.get('@getPerformance.last').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            cy.log('Check api performance request - response');
            cy.checkApiPerformanceRequest(dataExpected.api.request, request.body);
            cy.checkApiPerformanceResponse(dataExpected.api.response, response.body);
        });
    });

    it('[SCORE_15] - Scorecard with Compare feature-Previous period', () => {
        const {dataInput, dataExpected} = testCases.SCORE_15;

        cy.intercept(api.PERFORMANCE).as('getPerformance');

        addChartDropdown.createChart(reportConfig.CHART_STYLES.SCORECARD.style_id);

        cy.wait('@getPerformance');

        cy.log('Change compare: None -> Previous period');
        compare.selectCompareOption(dataInput.compareOption);

        cy.waitForExpectedRequest('@getPerformance', dataExpected.api.request);

        cy.log('Check Tab style');
        sidePanelTabs.getStyleTab().click();

        cy.get('@getPerformance.last').then(xhr => {
            const {request, response} = xhr;
            const {componentId} = request.body;

            cy.checkLoadedDataOnChartSuccess(componentId);

            comparisonMetric.checkComparisonMetricColor(dataExpected.comparisonMetric.positive, 0);
            comparisonMetric.checkComparisonMetricColor(dataExpected.comparisonMetric.negative, 1);

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
