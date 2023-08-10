import {globalElements} from 'Cypress/constant';

class ColorBy {
    constructor(params) {
    
    }
  
    getColorBySection() {
        return cy.get(globalElements.SECTION_LABEL).contains(new RegExp('^Color by$', 'g')).parent(globalElements.SECTION);
    }

    getColorByOptions() {
        return this.getColorBySection().find(globalElements.RADIO_MULTI);
    }

    getColorByOption(identity = 0) {
        if (typeof identity === 'number') {
            return this.getColorByOptions().eq(identity);
        }

        return this.getColorByOptions().contains(identity).parent();
    }

    getColorByRadioCheckbox(identity = 0) {
        return this.getColorByOption(identity).find(globalElements.RADIO);
    }

}

export default ColorBy;