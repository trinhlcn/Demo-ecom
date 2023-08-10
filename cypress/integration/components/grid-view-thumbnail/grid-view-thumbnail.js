/// <reference types="Cypress" />

const VIEW_THUMBNAIL = 'div.inner-content div.d-flex [class*=thumbnail-block]';
const BUTTON_VIEW_THUMBNAIL = '[class*=box-icon] i.icon-ants-grid-view-thumbnail';
const CHECKED_BOX_THUMBNAIL = '[class*=thumbnail-block] .checkbox-multi .icon-check';
const DETAIL_THUMBNAIL = '[class*=thumbnail-block-content] [class*=thumbnail-block-content-header]';
const TITLE_THUMBNAIL = 'div.heading-page [class*=block-title] [class*=box-title] [class*=title]';

export class GridViewThumbnail {
    constructor(props) {
         
    }
    
    getButtonThumbnail() {
        return cy.get(BUTTON_VIEW_THUMBNAIL);
    }

    getThumbnail(position = 0) {
        return cy.get(VIEW_THUMBNAIL).eq(position);
    }

    getThumbnails() {
        return cy.get(VIEW_THUMBNAIL);
    }

    getCompareLength(length,allLength) {
        if (length >= allLength) {
            return true;
        } else {
            return false;
        }
    }

    getThumbnailCheckedBox() {
        return cy.get(CHECKED_BOX_THUMBNAIL);
    }

    getDetailThumbnail() {
        return cy.get(DETAIL_THUMBNAIL);
    }

    getTitleThumbnail() {
        return cy.get(TITLE_THUMBNAIL);
    }
} 