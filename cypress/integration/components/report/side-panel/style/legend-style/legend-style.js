import {globalElements} from 'Cypress/constant';
import {commonStyleConfig} from 'Cypress/integration/pages/report/report-design/workspace/constant';

const ELEMENTS = {
    LEGEND_POSITION_ITEM: '.bg-item-align .item-align .icon-align-bar-chart'
};

class LegendStyle {
    constructor(params) {
    
    }

    getLegendSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(new RegExp('^Legend$', 'g')).parent();
    }

    getAlignmentDropdown() {
        return this.getLegendSection().contains('Alignment').parent().parent().find(globalElements.DROPDOWN_TOGGLE);
    }

    getLegendPosition(position = commonStyleConfig.LEGEND_POSITIONS.RIGHT) {
        return this.getLegendSection().find(`${ELEMENTS.LEGEND_POSITION_ITEM}${position && `.${position}`}`).parent();
    }

    checkLegendPosition(position = commonStyleConfig.LEGEND_POSITIONS.RIGHT) {
        this.getLegendPosition(position).should('have.class', 'active');
    }
}

export default LegendStyle;