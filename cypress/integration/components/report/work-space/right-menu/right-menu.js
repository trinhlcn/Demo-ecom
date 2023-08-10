import {ChartComponent} from 'Components/report/work-space';

const ELEMENTS = {
    MENU_RIGHT_MOUSE: '.menu-right-mouse',
    DELETE_MENU_ITEM: '.menu-item[title=Delete]'
};

class RightMenu {
    constructor(params) {
        this.chartComponent = new ChartComponent();
    }

    getMenuRightMouse() {
        return cy.get(ELEMENTS.MENU_RIGHT_MOUSE);
    }

    getDeleteMenuItem() {
        return this.getMenuRightMouse().find(ELEMENTS.DELETE_MENU_ITEM);
    }

    deleteComponent(componentId = '') {
        this.chartComponent.getComponent(componentId).rightclick({force: true});

        this.getDeleteMenuItem().click();
    }

    deleteAllComponent() {
        // this.chartComponent.hasChildComponent().then(hasChildComponent => {
        //     if (hasChildComponent) {
        //         this.chartComponent.getAllComponentId((componentIds = []) => {
        //             componentIds.forEach(componentId => {
        //                 this.deleteComponent(componentId);
        //             });
        //         });
        //     }
        // });

        this.chartComponent.getAllComponentId((componentIds = []) => {
            componentIds.forEach(componentId => {
                this.deleteComponent(componentId);
            });
        });
    }
}

export default RightMenu;
