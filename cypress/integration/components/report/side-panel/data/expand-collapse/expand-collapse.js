// Constants
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    EXPAND_COLLAPSE_SECTION: '.side-panel .section ',
    EXPAND_COLLAPSE_SWITCH: 'span.custom-switch input[type="checkbox"]',
    EXPAND_COLLAPSE_TOGGLE: '.dropdown-line button.btn-default',
    EXPAND_COLLAPSE_OPTION: '.dropdown-line .dropdown-menu button.dropdown-item'
};

class ExpandCollapse {
    constructor() {
    }

    getExpandCollapseSection() {
        return cy.get(ELEMENTS.EXPAND_COLLAPSE_SECTION).find(globalElements.SECTION_LABEL).contains(/^Expand - Collapse$/).parent();
    }

    getExpandCollapseSwitch() {
        return this.getExpandCollapseSection().find(ELEMENTS.EXPAND_COLLAPSE_SWITCH);
    }

    getExpandCollapseToggle() {
        return this.getExpandCollapseSection().next().find(ELEMENTS.EXPAND_COLLAPSE_TOGGLE);
    }

    selectExpandCollapseSwitchOption(optionName = '') {
        return optionName ? this.getExpandCollapseSection().next().find(ELEMENTS.EXPAND_COLLAPSE_OPTION).contains(optionName).click() :
            this.getExpandCollapseSection().next().find(ELEMENTS.EXPAND_COLLAPSE_OPTION).eq(0).click();
    }
}

export default ExpandCollapse;