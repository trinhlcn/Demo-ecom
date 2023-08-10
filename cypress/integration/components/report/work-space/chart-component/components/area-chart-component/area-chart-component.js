import {ChartComponent} from 'Components/report/work-space';

const ELEMENTS = {
    VERTICAL_LINE: 'div.recharts-wrapper g.recharts-cartesian-grid g.recharts-cartesian-grid-vertical line',
    CIRCLE: 'circle'
};

class AreaChartComponent extends ChartComponent {
    constructor(props) {
        super(props);
    }

    getVerticalLine(idx = 0) {
        return this.getComponent().find(ELEMENTS.VERTICAL_LINE).eq(idx);
    }

    getCirclePoint(lineIdx = 0, pointIdx = 0) {
        this.getVerticalLine(lineIdx).trigger('mouseover', 'top', {force: true});

        return this.getComponent().find(ELEMENTS.CIRCLE).eq(pointIdx);
    }
}

export default AreaChartComponent;