// Constants
const ELEMENTS = {
    DONUT_SLIDER: '.section .section-container input.slider-input'
};

class Donut {
    constructor(params) {
    
    }

    getDonutSlider() {
        return cy.get(ELEMENTS.DONUT_SLIDER);
    }

}

export default Donut;