const ELEMENTS = {
    ADD_CHART_BTN: 'button.btn.btn-default.dropdown-toggle',
    ADD_CHART_DROPDOWN: 'div.dropdown-menu.show',
    ANTS_WORKSPACE: '#ants-workspace'
};

class AddChartDropdown {
    constructor() {

    }

    getAddChartBtn() {
        return cy.get(ELEMENTS.ADD_CHART_BTN).contains('Add a chart');
    }

    getAddChartDropdown() {
        return cy.get(ELEMENTS.ADD_CHART_DROPDOWN).should('contain', 'Table');
    }

    getChartItem(chartStyleId = 'sidebar-table-number-tooltip') {
        return cy.get(`button#${chartStyleId}`).should('be.visible');
    }

    /**
     * Method to create new chart
     * @param {string} chartStyleId StyleId of chart you want to create
     */
    createChart(chartStyleId = 'sidebar-table-number-tooltip') {
        this.getAddChartBtn().click();

        this.getAddChartDropdown();

        this.getChartItem(chartStyleId).eq(0).click({force: true});

        cy.get(ELEMENTS.ANTS_WORKSPACE).click(50, 100);

    }
}

export default AddChartDropdown;
