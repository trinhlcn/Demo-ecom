import moment from 'moment';

const ELEMENTS = {
    FILTER_SECTION: '.side-panel .section',
    FILTER_EDIT_SECTION: '.section-edit',
    FILTER_NEW_SECTION: '.section-new',
    FILTER_NEW_BTN: 'button.btn-green',
    FILTER_PANEL_SECTION: '#ants-report-side-panel .panel-container',
    FILTER_PANEL_FILTER_OPTION_WRAPPER: '.body .scrollbar-dynamic',
    FILTER_PANEL_FILTER_OPTION: '.select',
    FILTER_PANEL_FILTER_OPTION_PATH: '.body .scrollbar-dynamic .select',
    FILTER_PANEL_FILTER_OPTION_ICON: '.section-edit .box-icon',
    FILTER_PANEL_ADD_BTN: '.body .submit .btn-green',
    FILTER_PANEL_BACK_BTN: '.header >span.btn-back >.icon-back-filter',
    FILTER_DRAWER_BODY: 'div[class^="drawer"] div[class^="content-wrapper"] div[class^="content"] div[class^="modal-create-new-field"] div[class^="ants-container"]',
    FILTER_DRAWER_BODY_MAIN_CONTENT: 'div[class^="body"] >div[class^="main-content"]',
    FILTER_DRAWER_BODY_FOOTER_SAVE_BTN: 'div[class^="footer"] >button.btn-green',
    FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_ADD_AND_BTN: 'div[class^="ants-label"] >span',
    FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_AND: 'div[class^="ants-rules-block"] div[class^="ants-block-and"]',
    FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_OR: 'div[class^="ants-block-or"]:not([class*="ants-block-or-extra"])',
    FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_OR_ADD_BTN: 'div[class^="ants-block-or-extra"] div[class^="ants-button-title"]',
    FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_OR_DEL_BTN: 'div[class^="ants-block-or-extra"] .icon-ants-remove-circle',
    FILTER_RULE_FIELD_BTN: 'div[class^="ants-filter-field-name"] >button.dropdown-toggle',
    FILTER_RULE_OPRATOR_BTN: 'div[class^="ants-filter-operator"] >button.dropdown-toggle',
    FILTER_RULE_TYPE_BTN: 'div[class^="ants-filter-extra-condition"] >button.dropdown-toggle',
    FILTER_RULE_FIELD_OPTION: 'div div[class^="ants-dropdown-menu-field-main"] .popover.show >.popover-inner >.popover-body .body .section >ul.list-dragdrop-handle li',
    FILTER_RULE_OPERATOR_OPTION: 'div[class^="ants-filter-operator"] .dropdown-menu.show button.dropdown-item',
    FILTER_RULE_TYPE_OPTION: 'div[class^="ants-filter-extra-condition"] .dropdown-menu button.dropdown-item',
    FILTER_RULE_DATE_VALUE_BTN: 'div[class^="ants-filter-value"] button[class^="ants-btn-date-picker"]',
    FILTER_RULE_TEXT_VALUE_INPUT: 'div[class^="ants-filter-value"] div[class*="ants-filter-value-input"] input',
    FILTER_RULE_DATE_VALUE_DATE_PICKER: 'div[class^="ants-popper-date-picker"]',
    FILTER_RULE_DATE_VALUE_WRAPPER: 'div[class^="ants-list-option"] >.DayPicker .DayPicker-wrapper',
    FILTER_RULE_DATE_VALUE_APPLY_BTN: 'button[role="btn-apply"]',
    FILTER_RULE_DATE_VALUE_NEXT: '.DayPicker-NavBar >span[aria-label="Next Month"]',
    FILTER_RULE_DATE_VALUE_PREV: '.DayPicker-NavBar >span[aria-label="Previous Month"]',
    FILTER_RULE_DATE_VALUE: '.DayPicker-Months .DayPicker-Body .DayPicker-Week .DayPicker-Day',
    FILTER_DRAWER_SAVE_BTN: 'div[class^="footer"] >button.btn-green',
    FILTER_NAME_INPUT: 'div[class^="create-new-filter-name"] div[class^="input-filter-name"] >label >input[type="text"]'
};

class Filter {
    constructor() {

    }

    getFilterSection() {
        return cy.get(ELEMENTS.FILTER_SECTION).contains(/^Filter$/).parent();
    }

    getEditSections() {
        return this.getFilterSection().find(ELEMENTS.FILTER_EDIT_SECTION);
    }

    getNewFilterButton() {
        return this.getFilterSection().find(ELEMENTS.FILTER_NEW_SECTION).find(ELEMENTS.FILTER_NEW_BTN);
    }

    getFilterPanelSection() {
        return cy.get(ELEMENTS.FILTER_PANEL_SECTION).contains(/^Filter picker$/).parent().parent();
    }

    applyOrInitFilter(filterName, rules = [[]]) {

        this.getFilterPanelSection().find(ELEMENTS.FILTER_PANEL_FILTER_OPTION_WRAPPER)
            .then(($wrapper) => {
                if ($wrapper.find(`${ELEMENTS.FILTER_PANEL_FILTER_OPTION} .section-name:contains('${filterName}')`).length) {

                    this.getFilterPanelSection().find(ELEMENTS.FILTER_PANEL_FILTER_OPTION_PATH).contains(filterName).click();
                } else {
                    this.getFilterPanelAddBtn().click();
                    this.getFilterDrawerNameInput().type(filterName);
                    this.initFilterRules(rules);
                    this.saveFilter();
                }
            });
    }

    getFilterPanelAddBtn() {
        return this.getFilterPanelSection().find(ELEMENTS.FILTER_PANEL_ADD_BTN);
    }

    getFilterPanelBackBtn() {
        return this.getFilterPanelSection().find(ELEMENTS.FILTER_PANEL_BACK_BTN);
    }

    getFilterDrawerBody() {
        return cy.get(ELEMENTS.FILTER_DRAWER_BODY);
    }

    getFilterDrawerSaveBtn() {
        return this.getFilterDrawerBody().find(ELEMENTS.FILTER_DRAWER_SAVE_BTN);
    }

    getFilterDrawerBodyMainContent() {
        return this.getFilterDrawerBody().find(ELEMENTS.FILTER_DRAWER_BODY_MAIN_CONTENT);
    }

    getFilterDrawerBlockAnd(index = 0) {
        return this.getFilterDrawerBodyMainContent().find(ELEMENTS.FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_AND).eq(index);
    }

    addBlockAnd() {
        return this.getFilterDrawerBodyMainContent().find(ELEMENTS.FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_AND).last().next().find(ELEMENTS.FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_ADD_AND_BTN).click();
    }

    getFilterDrawerBlockOr(idxAnd = 0, idxOr = 0, isLast = false) {
        return isLast ? this.getFilterDrawerBlockAnd(idxAnd).find(ELEMENTS.FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_OR).last() :
            this.getFilterDrawerBlockAnd(idxAnd).find(ELEMENTS.FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_OR).eq(idxOr);
    }

    addBlockOr(idxAnd = 0) {
        return this.getFilterDrawerBlockOr(idxAnd, 0, true).find(ELEMENTS.FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_OR_ADD_BTN).click();
    }

    removeBlockOr(idxAnd = 0, idxOr = 0) {
        return this.getFilterDrawerBlockOr(idxAnd, idxOr).find(ELEMENTS.FILTER_DRAWER_BODY_MAIN_CONTENT_RULE_BLOCK_OR_DEL_BTN).click();
    }

    getFilterDrawerNameInput() {
        return this.getFilterDrawerBodyMainContent().find(ELEMENTS.FILTER_NAME_INPUT);
    }

    selectFilterType(type = 'include', idxAnd = 0, idxOr = 0) {
        this.getFilterDrawerBlockOr(idxAnd, idxOr).find(ELEMENTS.FILTER_RULE_TYPE_BTN).click();

        this.getFilterDrawerBlockOr(idxAnd, idxOr).find(ELEMENTS.FILTER_RULE_TYPE_OPTION).contains(type).click();
    }

    selectFilterField(fieldName = '', idxAnd = 0, idxOr = 0) {
        this.getFilterDrawerBlockOr(idxAnd, idxOr).find(ELEMENTS.FILTER_RULE_FIELD_BTN).click();

        if (fieldName) {
            cy.get(ELEMENTS.FILTER_RULE_FIELD_OPTION).contains(fieldName).click();
        } else {
            cy.get(ELEMENTS.FILTER_RULE_FIELD_OPTION).eq(0).click();
        }
    }

    selectFilterOperator(operatorName = '', idxAnd = 0, idxOr = 0) {
        this.getFilterDrawerBlockOr(idxAnd, idxOr).find(ELEMENTS.FILTER_RULE_OPRATOR_BTN).click();

        this.getFilterDrawerBlockOr(idxAnd, idxOr).find(ELEMENTS.FILTER_RULE_OPERATOR_OPTION).contains(operatorName).click();
    }

    getDateValueWrapper() {
        return cy.get(ELEMENTS.FILTER_RULE_DATE_VALUE_DATE_PICKER).last().find(ELEMENTS.FILTER_RULE_DATE_VALUE_WRAPPER);
    }

    getDateValueApplyBtn() {
        return this.getDateValueWrapper().parent().parent().next('div[class^="ants-popper-footer"]').find(ELEMENTS.FILTER_RULE_DATE_VALUE_APPLY_BTN);
    }

    getDateValuePrevBtn() {
        return this.getDateValueWrapper().find(ELEMENTS.FILTER_RULE_DATE_VALUE_PREV);
    }

    getDateValueNextBtn() {
        return this.getDateValueWrapper().find(ELEMENTS.FILTER_RULE_DATE_VALUE_NEXT);
    }

    async selectDateValue(date, idxAnd = 0, idxOr = 0, format = 'DD/MM/YYYY') {
        const dateSelect = moment(date, format);
        const dateSelectFormat = dateSelect.format('ddd MMM DD YYYY');
        const today = moment();

        this.getFilterDrawerBlockOr(idxAnd, idxOr).find(ELEMENTS.FILTER_RULE_DATE_VALUE_BTN).click();

        let checking = true;
        let maxChecking = 100;
        let checkCounting = 0;

        while (checking && checkCounting++ < maxChecking) {
            await new Cypress.Promise((resolve) => {
                this.getDateValueWrapper().find(ELEMENTS.FILTER_RULE_DATE_VALUE).each(($el) => {

                    if ($el.attr('aria-label') === dateSelectFormat) {
                        cy.wrap($el).click();
                        this.getDateValueApplyBtn().click();
                        checking = false;
                        return false;
                    }
                }).then(() => {
                    return resolve(checking);
                });
            });
            if (checking) {
                if (dateSelect.isBefore(today)) {
                    this.getDateValuePrevBtn().click();
                } else {
                    this.getDateValueNextBtn().click();
                }
            }
        }
    }

    inputFilterTextValue(value, idxAnd = 0, idxOr = 0) {
        this.getFilterDrawerBlockOr(idxAnd, idxOr).find(ELEMENTS.FILTER_RULE_TEXT_VALUE_INPUT).type(value);
    }

    initFilterRules(arrFilter = [[]]) {
        arrFilter.forEach((andRule, andIdx) => {
            andRule.forEach((rule, orIdx) => {
                if (rule.type && ['include', 'exclude'].includes(rule.type)) {
                    this.selectFilterType(rule.type, andIdx, orIdx);
                }

                this.selectFilterField(rule.field.label, andIdx, orIdx);
                if (rule.operator) {
                    this.selectFilterOperator(rule.operator.label, andIdx, orIdx);
                }

                switch (rule.valueType) {
                    case 'date':
                        this.selectDateValue(rule.value, andIdx, orIdx);
                        break;
                    default:
                        this.inputFilterTextValue(rule.value, andIdx, orIdx);
                        break;
                }

                if (orIdx < andRule.length - 1) {
                    this.addBlockOr();
                }
            });

            if (andIdx < arrFilter.length - 1) {
                this.addBlockAnd();
            }
        });
    }

    saveFilter() {
        return this.getFilterDrawerBody().find(ELEMENTS.FILTER_DRAWER_BODY_FOOTER_SAVE_BTN).click();
    }
}

export default Filter;