/// <reference types="Cypress" />
// Data
import {data} from './allcharts.data';

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
    DrillDown
} from 'Components/report/side-panel/data';
import {ConditionFormatting, TableHeader, TableFooter, Metrics} from 'Components/report/side-panel/style';
import {ChartComponent, RightMenu} from 'Cypress/integration/components/report/work-space';

// Constant
import {reportConfig, api, commonDataConfig, chartTypes} from 'Pages/report/report-design/workspace/constant';
import {SwitchModeReport} from 'Cypress/integration/components/page-header';

// Variables
const {global, testCases} = data;

// State
let state = {
    reportConfig: {},
    calenderComponentId: ''
};

describe('Test All Chart', () => {
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
    const chartComponent = new ChartComponent();
    let componentInfo = {};

    before(() => {
        cy.login();

        cy.visit('/1600007830/report/design/523609875/view');
        cy.wait(15000);
    });

    beforeEach(() => {
        // cy.login();
        cy.viewport(1920, 1080);
        cy.clearIndexedDB();
    });

    // it('Re-Condition', async () => {
    //
    // });

    it('ALL_02', () => {
        const {dataExpected} = data.testCases.ALL_CHART;

        cy.intercept(api.REPORT_INFO).as('saveReport');
        // switch mode to edit
        switchModeReport.switchEditMode();
        cy.wait(500);
        let masterDateRangeComponent = chartComponent.getComponentWithAttribute('data-component-type', chartTypes.MASTER_DATE_RANGE.key);

        masterDateRangeComponent.click();
        cy.wait(500);
        masterDateRange.changeMasterDateRange(global.masterDateRange);
        //
        let tableComponent = chartComponent.getComponentWithAttribute('data-component-type', chartTypes.TABLE.key);

        tableComponent.click();
        cy.wait(500);

        interactions.getApplyFilter().click();
        cy.wait(500);

        switchModeReport.switchViewMode();

        cy.wait('@saveReport').then((xhr) => {
            cy.wait(500);
            // click row 02 table.
            tableComponent = chartComponent.getComponentWithAttribute('data-component-type', chartTypes.TABLE.key);
            tableComponent.find('.table-body tr').eq(1).click({force: true});

            // get data performance and compare with data defined
            cy.intercept('POST', api.PERFORMANCE).as('getPerformance');
            cy.wait('@getPerformance');
            cy.get('@getPerformance.all').then((xhrs) => {
                for (let xhr of xhrs) {
                    const {request, response} = xhr;

                    const componentId = request.body.componentId || '';

                    let component = chartComponent.getComponent(componentId);

                    component
                        .invoke('attr', 'data-component-type')
                        .as('componentType');

                    cy.get('@componentType').then(componentType => {
                        console.log('componentType', componentType);
                        if (dataExpected.api[componentType]) {
                            cy.checkApiPerformanceRequest(dataExpected.api[componentType].request, request.body);
                            cy.checkApiPerformanceResponse(dataExpected.api[componentType].response, response.body);
                        }
                    });

                }
            });

            // cy.wait(10000);
            //
            // switchModeReport.switchEditMode();
            // tableComponent = chartComponent.getComponentWithAttribute('data-component-type', chartTypes.TABLE.key);
            // tableComponent.click();
            // cy.wait(500);
            //
            // interactions.getApplyFilter().click();
            // cy.wait(500);
            // saveReportBtn.saveReport();
        });
    });

    // it('Final step', () => {
    //     // rightMenu.deleteAllComponent();
    //     //
    //     // saveReportBtn.saveReport();
    // });

});
