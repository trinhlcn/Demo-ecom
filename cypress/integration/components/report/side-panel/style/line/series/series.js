
import {globalElements} from 'Cypress/constant';

const ELEMENTS = {
    TYPE_OF_LINE: 'div.section-container > div:nth-child(1) > div.radio-multi.mr-20 > label > span.icon-radio',
    CUCUMLATIVE_CHECKBOX: 'div.section-container > div:nth-child(3) > div.checkbox-multi.mr-20 > label > span.icon-check',
    SHOW_POINTS_CHECKBOX: 'div.section-container > div:nth-child(3) > div:nth-child(2) > label > span.icon-check',
    SHOW_DATA_LABELS_CHECKBOX: 'div.section-container > div:nth-child(4) > div > label > span.icon-check',
    SECTION_CONTAINER_LABEL: 'div.section-container-label',
    TRENDLINE_BTN: '.dropdown-icon:nth-child(1) button[id^=random-popover-toggle-id]',
    REFERENCE_LINE_ADD_BTN: 'div[class*=btn-link-add-reference-line] button',
    GRID_AXIS_FONT_SIZE_TOGGLE: 'div.section-container > div:nth-child(2) > div:nth-child(1) > div.dropdown-icon > div > button',
    GRID_LABEL_FONT_SIZE_TOGGLE: 'div.section-container > div:nth-child(2) > div:nth-child(2) > div.dropdown-icon > div > button',
    NUMBER_OF_SERIES_INPUT: 'div.section-container input[type="number"]',
    NUMBER_OF_SERIES_OTHER_CHECKBOX: 'div.section-container .checkbox-multi span.icon-check'
};

class Series {
    constructor() {
  
    }

    getSeriesSection(seriesNum = 1) {
        return cy.get(globalElements.SECTION_LABEL).contains(new RegExp(`^Series #${seriesNum}$`)).parent();
    }

    getListSeriesSection() {
        return cy.get(globalElements.SECTION_LABEL);
    }

    getRadioBoxLine(seriesSection = null) {
        return (seriesSection || this.getSeriesSection()).find(ELEMENTS.TYPE_OF_LINE);
    }

    getCucumlativeCheckBox(seriesSection = null) {
        return (seriesSection || this.getSeriesSection()).find(ELEMENTS.CUCUMLATIVE_CHECKBOX);
    }

    getShowPointsCheckBox(seriesSection = null) {
        return (seriesSection || this.getSeriesSection()).find(ELEMENTS.SHOW_POINTS_CHECKBOX);
    }

    getShowDataLabelsCheckBox(seriesSection = null) {
        return (seriesSection || this.getSeriesSection()).find(ELEMENTS.SHOW_DATA_LABELS_CHECKBOX);
    }

    getTrendlineToggle(seriesSection = null) {
        return (seriesSection || this.getSeriesSection()).find(ELEMENTS.SECTION_CONTAINER_LABEL).contains(/^Trendline$/).parent().find(ELEMENTS.TRENDLINE_BTN);
    }

    getReferenceLineSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(/^Reference Lines$/).parent();
    }

    getReferenceLineAddBtn() {
        return this.getReferenceLineSection().find(ELEMENTS.REFERENCE_LINE_ADD_BTN);
    }

    getGridSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(/^Grid$/).parent();
    }

    getGridAxisFontSizeToggle() {
        return this.getGridSection().find(ELEMENTS.GRID_AXIS_FONT_SIZE_TOGGLE);
    }

    getGridLabelFontSizeToggle() {
        return this.getGridSection().find(ELEMENTS.GRID_LABEL_FONT_SIZE_TOGGLE);
    }

    getListNumberOfSeriesSection() {
        return cy.get(globalElements.SECTION_LABEL).contains(/^Number of Series #\d+$/).parent();
    }

    getNumberOfSeriesInput(numberOfSeriesSection = null) {
        return (numberOfSeriesSection || this.getNumberOfSeriesSection().eq(0)).find(ELEMENTS.NUMBER_OF_SERIES_INPUT);
    }

    getNumberOfSeriesOtherCheckbox(numberOfSeriesSection = null) {
        return (numberOfSeriesSection || this.getNumberOfSeriesSection().eq(0)).find(ELEMENTS.NUMBER_OF_SERIES_OTHER_CHECKBOX);
    }
}

export default Series;