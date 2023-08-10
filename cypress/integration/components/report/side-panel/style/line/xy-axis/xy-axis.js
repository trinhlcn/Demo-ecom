
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    AXIS_POSITION: '.section-container > .checkbox-multi > .bg-axis-label > .icon-axis-label',
    AXIS_PARAMS_INPUT: 'input[type="number"]'
};

const AXIS_LABEL = {
    LEFT_Y_AXIS: 'Left Y Axis',
    RIGHT_Y_AXIS: 'Right Y Axis',
    X_AXIS: 'X-Axis'
};

class XYAxis {
    constructor(axisLabel = AXIS_LABEL.LEFT_Y_AXIS) {
        this.axisLabel = axisLabel;
    }

    getAxisSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(new RegExp(`^${this.axisLabel}$`)).parent();
    }

    getAxisPositionItems(idx = 0) {
        return this.getAxisSection().find(ELEMENTS.AXIS_POSITION).eq(idx);
    }

    getAxisParamInputs() {
        return this.getAxisSection().find(ELEMENTS.AXIS_PARAMS_INPUT);
    }
}

export default XYAxis;