const ELEMENTS = {
    SECTION_LABEL: '.side-panel .section-label',
    SECTION_CONTAINER: '.section-container',
    LIST_ITEM: '.list-item'
};

class ConditionFormatting {
    constructor() {

    }

    getConditionalFormattingContainer() {
        return cy.get(ELEMENTS.SECTION_LABEL).contains('Conditional formatting').next(ELEMENTS.SECTION_CONTAINER);
    }

    getRuleRows() {
        return this.getConditionalFormattingContainer().find(ELEMENTS.LIST_ITEM);
    }

    /**
     * Method check rules of condition formatting
     * @param {array} rules
     */
    checkRules(rules = []) {
        switch (rules.length) {
            case 0:
                this.getRuleRows().should('not.exist');
                break;

            default:
                break;
        }
    }
}

export default ConditionFormatting;
