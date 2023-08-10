import {masterDateRange, lineColumnOptions} from 'Pages/report/report-design/workspace/constant.js';
import {commonDataConfig} from 'Cypress/integration/pages/report/report-design/workspace/constant';

export const data = {
    global: {
        dataSourceId: 523609449,
        masterDateRange: {
            label: masterDateRange.CUSTOM.label,
            fromDate: '01/11/2021',
            toDate: '14/11/2021'
        }
    },
    testCases: {
        LINE_01: {
            dataInput: {},
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Date'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
                    },
                    sort: {
                        label: 'Units Sold',
                        az: 'Descending'
                    },
                    defaultDateRange: {
                        label: 'Auto'
                    },
                    compare: {
                        label: 'None'
                    },
                    showSummaryRow: true,
                    interaction: false,
                    drillDown: false,
                    optionalMetric: false
                },
                style: {
                    series: {
                        cucumlative: false,
                        showPoints: false,
                        showDataLabels: false,
                        trendLine: {
                            label: 'None'
                        }
                    },
                    grid: {
                        axisFontSize: 11,
                        labelFontSize: 11
                    }
                },
                api: {
                    request: {'componentId': 'zknhim', 'dataSourceId': 523609449, 'timeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'dateRangeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'queryFields': [{'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}], 'fromDate': '01/11/2021', 'toDate': '14/11/2021', 'limit': 100, 'page': 1, 'format': 'lineChart', 'sort': [], 'filter': '[]'},
                    response: {'code': 200, 'message': 'Success', 'data': {'rows': [[{'name': 'time', 'timeDimension': true, 'value': '20211101'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4860]}], [{'name': 'time', 'timeDimension': true, 'value': '20211102'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [3812]}], [{'name': 'time', 'timeDimension': true, 'value': '20211103'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4355]}], [{'name': 'time', 'timeDimension': true, 'value': '20211104'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7112]}], [{'name': 'time', 'timeDimension': true, 'value': '20211105'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211106'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [12036]}], [{'name': 'time', 'timeDimension': true, 'value': '20211107'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [8172]}], [{'name': 'time', 'timeDimension': true, 'value': '20211108'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [1159]}], [{'name': 'time', 'timeDimension': true, 'value': '20211109'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211110'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [3112]}], [{'name': 'time', 'timeDimension': true, 'value': '20211111'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [1987]}], [{'name': 'time', 'timeDimension': true, 'value': '20211112'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7284]}], [{'name': 'time', 'timeDimension': true, 'value': '20211113'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6425.5]}], [{'name': 'time', 'timeDimension': true, 'value': '20211114'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6666]}]], 'summary': [], 'totalRecord': 0}}
                }
            }
        },
        LINE_02: {
            dataInput: {
                breakdownDimension: {
                    label: 'Member'
                },
                metric: {
                    label: 'Units Stored'
                }
            },
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Date'
                    },
                    breakdownDimension: {
                        label: 'Member'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
                    },
                    secondMetric: {
                        label: 'Units Stored'
                    },
                    sort: {
                        label: 'Units Sold',
                        az: 'Descending'
                    },
                    defaultDateRange: {
                        label: 'Auto'
                    },
                    compare: {
                        label: 'None'
                    },
                    showSummaryRow: true,
                    interaction: false,
                    drillDown: false,
                    optionalMetric: false
                },
                style: {
                    series: {
                        cucumlative: false,
                        showPoints: false,
                        showDataLabels: false,
                        trendLine: {
                            label: 'None'
                        }
                    },
                    grid: {
                        axisFontSize: 11,
                        labelFontSize: 11
                    },
                    numberOfSeries: {
                        label: [16, 16],
                        showOther: [false, false]
                    }
                },
                api: {
                    request: {'componentId': 'eumdeq', 'dataSourceId': 523609449, 'timeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'dateRangeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'queryFields': [{'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}], 'fromDate': '01/11/2021', 'toDate': '14/11/2021', 'limit': 100, 'page': 1, 'format': 'lineChart', 'sort': [{'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'az': 'descending'}], 'filter': '[]'},
                    response: {'code': 200, 'message': 'Success', 'data': {'rows': [[{'name': 'time', 'timeDimension': true, 'value': '20211101'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 4051, 0, 809, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 8041, 0, 2009, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211102'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 700, 0, 0, 0, 3112]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 3108, 0, 0, 0, 5306]}], [{'name': 'time', 'timeDimension': true, 'value': '20211103'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 1362, 0, 0, 0, 2993, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 2007, 0, 0, 0, 2879, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211104'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 3450, 2472, 0, 1190, 0, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 4013, 4735, 0, 2066, 0, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211105'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 0, 0, 0, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6972, 0, 0, 0, 472, 480, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211106'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [10015, 0, 0, 0, 2021, 0, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [10888, 0, 0, 0, 8236, 0, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211107'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 4684, 0, 0, 3488, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 3206, 0, 0, 3180, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211108'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 0, 0, 0, 1159]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 0, 0, 3505, 406]}], [{'name': 'time', 'timeDimension': true, 'value': '20211109'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 0, 0, 0, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 4128, 0, 2009, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211110'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 0, 0, 0, 3112]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 0, 0, 0, 5306]}], [{'name': 'time', 'timeDimension': true, 'value': '20211111'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 700, 0, 0, 1287, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 3108, 0, 0, 2879, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211112'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 4812, 2472, 0, 0, 0, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 6020, 4735, 0, 0, 0, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211113'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 0, 3793.5, 2632, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0, 0, 0, 0, 2302, 480, 0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211114'}, {'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'value': ['Samuel', 'Henry', 'Smith', 'Caitlin', 'Cisco', 'Betty', 'John']}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4645, 0, 0, 0, 2021, 0, 0]}, {'name': 'ged464ed2d', 'label': 'Units Stored', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [8930, 0, 0, 0, 4118, 0, 0]}]], 'summary': [], 'totalRecord': 7}}
                }
            }
        },
        LINE_03: {
            dataInput: {
                breakdownDimension: {
                    label: 'Member'
                },
                metric: {
                    label: 'Units Stored'
                },
                optionalMetric: {
                    label: 'Units Stored'
                }
            },
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Date'
                    },
                    breakdownDimension: {
                        label: 'Member'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
                    },
                    optionalMetric: {
                        label: 'Units Stored'
                    },
                    sort: {
                        label: 'Units Sold',
                        az: 'Descending'
                    },
                    defaultDateRange: {
                        label: 'Auto'
                    },
                    compare: {
                        label: 'None'
                    },
                    showSummaryRow: true,
                    interaction: false,
                    drillDown: false
                },
                style: {
                    series: {
                        cucumlative: false,
                        showPoints: false,
                        showDataLabels: false,
                        trendLine: {
                            label: 'None'
                        }
                    },
                    grid: {
                        axisFontSize: 11,
                        labelFontSize: 11
                    },
                    numberOfSeries: {
                        label: [16, 16],
                        showOther: [false, false]
                    }
                },
                view: {
                    optionalMetric: {
                        label: 'Units Stored'
                    }
                },
                api: {
                    request: {'componentId': 'whw89i', 'dataSourceId': 523609449, 'timeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'dateRangeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'queryFields': [{'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}], 'fromDate': '01/11/2021', 'toDate': '14/11/2021', 'limit': 100, 'page': 1, 'format': 'lineChart', 'sort': [], 'filter': '[]'},
                    response: {'code': 200, 'message': 'Success', 'data': {'rows': [[{'name': 'time', 'timeDimension': true, 'value': '20211101'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4860]}], [{'name': 'time', 'timeDimension': true, 'value': '20211102'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [3812]}], [{'name': 'time', 'timeDimension': true, 'value': '20211103'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4355]}], [{'name': 'time', 'timeDimension': true, 'value': '20211104'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7112]}], [{'name': 'time', 'timeDimension': true, 'value': '20211105'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211106'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [12036]}], [{'name': 'time', 'timeDimension': true, 'value': '20211107'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [8172]}], [{'name': 'time', 'timeDimension': true, 'value': '20211108'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [1159]}], [{'name': 'time', 'timeDimension': true, 'value': '20211109'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211110'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [3112]}], [{'name': 'time', 'timeDimension': true, 'value': '20211111'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [1987]}], [{'name': 'time', 'timeDimension': true, 'value': '20211112'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7284]}], [{'name': 'time', 'timeDimension': true, 'value': '20211113'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6425.5]}], [{'name': 'time', 'timeDimension': true, 'value': '20211114'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6666]}]], 'summary': [], 'totalRecord': 0}}
                }
            }
        },
        LINE_04: {
            dataInput: {
                compare: {
                    label: 'Previous period'
                },
                breakdownDimension: {
                    label: 'Member'
                },
                metric: {
                    label: 'Units Stored'
                },
                optionalMetric: {
                    label: 'Units Stored'
                }
            },
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Date'
                    },
                    breakdownDimension: {
                        label: 'Member'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
                    },
                    optionalMetric: {
                        label: 'Units Stored'
                    },
                    sort: {
                        label: 'Units Sold',
                        az: 'Descending'
                    },
                    defaultDateRange: {
                        label: 'Auto'
                    },
                    compare: {
                        label: 'Previous period'
                    },
                    showSummaryRow: true,
                    interaction: false,
                    drillDown: false
                },
                api: {
                    request: {'componentId': '5l2u8u', 'dataSourceId': 523609449, 'timeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'dateRangeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'queryFields': [{'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}], 'fromDate': '01/11/2021', 'toDate': '14/11/2021', 'limit': 100, 'page': 1, 'format': 'lineChart', 'sort': [], 'filter': '[]'},
                    response: {'code': 200, 'message': 'Success', 'data': {'rows': [[{'name': 'time', 'timeDimension': true, 'value': '20211101'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4860]}], [{'name': 'time', 'timeDimension': true, 'value': '20211102'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [3812]}], [{'name': 'time', 'timeDimension': true, 'value': '20211103'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4355]}], [{'name': 'time', 'timeDimension': true, 'value': '20211104'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7112]}], [{'name': 'time', 'timeDimension': true, 'value': '20211105'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211106'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [12036]}], [{'name': 'time', 'timeDimension': true, 'value': '20211107'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [8172]}], [{'name': 'time', 'timeDimension': true, 'value': '20211108'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [1159]}], [{'name': 'time', 'timeDimension': true, 'value': '20211109'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211110'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [3112]}], [{'name': 'time', 'timeDimension': true, 'value': '20211111'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [1987]}], [{'name': 'time', 'timeDimension': true, 'value': '20211112'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7284]}], [{'name': 'time', 'timeDimension': true, 'value': '20211113'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6425.5]}], [{'name': 'time', 'timeDimension': true, 'value': '20211114'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6666]}]], 'summary': [], 'totalRecord': 0}}
                }
            }
        },
        LINE_07: {
            dataInput: {
                filter: {
                    name: 'General Filter',
                    rules: [
                        [{
                            type: 'include',
                            field: {
                                label: 'Date'
                            },
                            valueType: 'date',
                            value: '08/11/2021',
                            operator: {
                                label: 'after'
                            }
                        }
                        ],
                        [{
                            field: {
                                label: 'Units Sold'
                            },
                            valueType: 'text',
                            value: '6000'
                        }]
                    ]
                }
            },
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Date'
                    },
                    breakdownDimension: {
                        label: 'Member'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
                    },
                    optionalMetric: {
                        label: 'Units Stored'
                    },
                    sort: {
                        label: 'Units Sold',
                        az: 'Descending'
                    },
                    defaultDateRange: {
                        label: 'Auto'
                    },
                    compare: {
                        label: 'Previous period'
                    },
                    showSummaryRow: true,
                    interaction: false,
                    drillDown: false
                },
                api: {
                    request: {'componentId': 'ayengk', 'dataSourceId': 523609449, 'timeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'dateRangeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'queryFields': [{'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}], 'fromDate': '01/11/2021', 'toDate': '14/11/2021', 'limit': 100, 'page': 1, 'format': 'lineChart', 'sort': [], 'filter': '[[{"a31bbf949a":{"after":"20211108","type":"include","semantics":{"conceptType":"DIMENSION","semanticType":"YEAR_MONTH_DAY"},"dataType":"DATE","aggregationType":"none"}}],[{"f58c1c070c":{"greater_than_equals":"6000","type":"include","semantics":{"conceptType":"METRIC","semanticType":"NUMBER"},"dataType":"NUMBER","aggregationType":"sum"}}]]'},
                    response: {'code': 200, 'message': 'Success', 'data': {'rows': [[{'name': 'time', 'timeDimension': true, 'value': '20211101'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211102'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211103'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211104'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211105'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211106'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211107'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211108'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211109'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211110'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211111'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211112'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7284]}], [{'name': 'time', 'timeDimension': true, 'value': '20211113'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6425.5]}], [{'name': 'time', 'timeDimension': true, 'value': '20211114'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6666]}]], 'summary': [], 'totalRecord': 0}}
                }
            }
        },
        LINE_08: {
            dataInput: {
                interactionDate: '06/11/2021'
            },
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Date'
                    },
                    breakdownDimension: {
                        label: 'Member'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
                    },
                    optionalMetric: {
                        label: 'Units Stored'
                    },
                    sort: {
                        label: 'Units Sold',
                        az: 'Descending'
                    },
                    defaultDateRange: {
                        label: 'Auto'
                    },
                    compare: {
                        label: 'Previous period'
                    },
                    showSummaryRow: true,
                    interaction: false,
                    drillDown: false
                },
                api: {
                    request: {'componentId': 'k58ezg', 'dataSourceId': 523609449, 'timeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'dateRangeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'queryFields': [{'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}], 'fromDate': '01/11/2021', 'toDate': '14/11/2021', 'limit': 100, 'page': 1, 'format': 'lineChart', 'sort': [], 'filter': '[]'},
                    response: {'code': 200, 'message': 'Success', 'data': {'rows': [[{'name': 'time', 'timeDimension': true, 'value': '20211101'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4860]}], [{'name': 'time', 'timeDimension': true, 'value': '20211102'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [3812]}], [{'name': 'time', 'timeDimension': true, 'value': '20211103'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [4355]}], [{'name': 'time', 'timeDimension': true, 'value': '20211104'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7112]}], [{'name': 'time', 'timeDimension': true, 'value': '20211105'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211106'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [12036]}], [{'name': 'time', 'timeDimension': true, 'value': '20211107'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [8172]}], [{'name': 'time', 'timeDimension': true, 'value': '20211108'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [1159]}], [{'name': 'time', 'timeDimension': true, 'value': '20211109'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [0]}], [{'name': 'time', 'timeDimension': true, 'value': '20211110'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [3112]}], [{'name': 'time', 'timeDimension': true, 'value': '20211111'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [1987]}], [{'name': 'time', 'timeDimension': true, 'value': '20211112'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [7284]}], [{'name': 'time', 'timeDimension': true, 'value': '20211113'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6425.5]}], [{'name': 'time', 'timeDimension': true, 'value': '20211114'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [6666]}]], 'summary': [], 'totalRecord': 0}}
                }
            }
        },
        LINE_19: {
            dataInput: {
                timeDimension: {
                    aliasLabel: 'Alias',
                    type: commonDataConfig.DATA_TYPE.DATE.label,
                    subType: 'ISO Year Week'
                }
            },
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Date'
                    },
                    breakdownDimension: {
                        label: 'Member'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
                    },
                    optionalMetric: {
                        label: 'Units Stored'
                    },
                    sort: {
                        label: 'Units Sold',
                        az: 'Descending'
                    },
                    defaultDateRange: {
                        label: 'Auto'
                    },
                    compare: {
                        label: 'Previous period'
                    },
                    showSummaryRow: true,
                    interaction: false,
                    drillDown: false
                },
                api: {
                    request: {'componentId': 'qlde7g', 'dataSourceId': 523609449, 'timeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_WEEK'}, 'aggregationType': 'none'}, 'dateRangeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'queryFields': [{'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}], 'fromDate': '01/11/2021', 'toDate': '14/11/2021', 'limit': 100, 'page': 1, 'format': 'lineChart', 'sort': [], 'filter': '[]'},
                    response: {'code': 200, 'message': 'Success', 'data': {'rows': [[{'name': 'time', 'timeDimension': true, 'value': '202144'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [40347]}], [{'name': 'time', 'timeDimension': true, 'value': '202145'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': [26633.5]}]], 'summary': [], 'totalRecord': 0}}
                }
            }
        }
    }
};