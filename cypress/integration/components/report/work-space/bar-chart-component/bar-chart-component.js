import {ChartComponent} from 'Components/report/work-space';

const ELEMENTS = {
    COLUMN_BAR: '.recharts-layer.recharts-bar-rectangle',
    COLUMN_BARS_CONTAINER: '.recharts-layer.recharts-bar-rectangles',
    X_AXIS: '.recharts-xAxis.xAxis',
    AXIS_TICKS: '.recharts-cartesian-axis-ticks'
};

class BarChartComponent extends ChartComponent {
    constructor(props) {
        super(props);
    }

    getColumnBarList() {
        return this.getComponent().find(ELEMENTS.COLUMN_BARS_CONTAINER);
    }

    getXAxis() {
        return this.getComponent().find(ELEMENTS.X_AXIS);
    }

    getXAxisTickList() {
        return this.getXAxis().find(ELEMENTS.AXIS_TICKS);
    }

    getXAxisTickIndex(tick = '') {
        return this.getXAxisTickList().contains('g', tick).parent().invoke('index');
    }

}

export default BarChartComponent;
