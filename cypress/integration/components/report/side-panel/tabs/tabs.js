const ELEMENTS = {
    SIDE_PANEL_TABS: '.side-panel .nav.nav-tabs',
    NAV_ITEM: '.nav-item'
};

class Tabs {
    constructor() {

    }

    getSidePanelTabs() {
        return cy.get(ELEMENTS.SIDE_PANEL_TABS);
    }

    getDataTab() {
        return this.getSidePanelTabs().find(ELEMENTS.NAV_ITEM).contains('Data');
    }

    getStyleTab() {
        return this.getSidePanelTabs().find(ELEMENTS.NAV_ITEM).contains('Style');
    }
}

export default Tabs;