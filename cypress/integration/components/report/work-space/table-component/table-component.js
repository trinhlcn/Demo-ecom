import {ChartComponent} from 'Components/report/work-space';

const ELEMENTS = {
    TABLE_COMPONENT: '.table-responsive',
    TABLE_HEADER: '.table-header'
};

class TableComponent extends ChartComponent {
    constructor(props) {
        super(props);
    }

    getTableComponent() {
        return this.getComponent().find(ELEMENTS.TABLE_COMPONENT);
    }

    getTableHeader() {
        return this.getTableComponent().find(ELEMENTS.TABLE_HEADER);
    }

}

export default TableComponent;