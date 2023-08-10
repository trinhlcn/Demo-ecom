// Constants
import {masterDateRange, commonDataConfig} from 'Pages/report/report-design/workspace/constant';

export const data = {
    global: {
        dataSourceId: 523609449,
        masterDateRange: {
            label: masterDateRange.CUSTOM.label,
            fromDate: '01/11/2021',
            toDate: '14/11/2021',
            position: {x: 600, y: 100}
        }
    },
    testCases: {
        BAR_03: {
            dataInput: {
                data: {
                    dimension: {
                        label: 'Product'
                    }
                },
                style: {}
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    afterStep3: {
                        request: {
                            'componentId': '4ecthi',
                            'dataSourceId': 523609449,
                            'dateRangeDimension': {
                                'name': 'a31bbf949a',
                                'label': 'Date',
                                'dataType': 'DATE',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'},
                                'aggregationType': 'none'
                            },
                            'queryFields': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none'
                            }, {
                                'name': 'f58c1c070c',
                                'label': 'Units Sold',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum'
                            }],
                            'fromDate': '01/11/2021',
                            'toDate': '14/11/2021',
                            'limit': 10,
                            'page': 1,
                            'format': 'barChart',
                            'filter': '[]',
                            'sort': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none',
                                'az': 'descending'
                            }]
                        },
                        response: {
                            'code': 200, 'message': 'Success', 'data': {
                                'rows': [{
                                    'segment': {'id': 'Smith', 'name': 'Smith'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11028']
                                    }]
                                }, {
                                    'segment': {'id': 'Samuel', 'name': 'Samuel'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['14660']
                                    }]
                                }, {
                                    'segment': {'id': 'John', 'name': 'John'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['7383']
                                    }]
                                }, {
                                    'segment': {'id': 'Henry', 'name': 'Henry'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['9624']
                                    }]
                                }, {
                                    'segment': {'id': 'Cisco', 'name': 'Cisco'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['9025.5']
                                    }]
                                }, {
                                    'segment': {'id': 'Caitlin', 'name': 'Caitlin'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['4051']
                                    }]
                                }, {
                                    'segment': {'id': 'Betty', 'name': 'Betty'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11209']
                                    }]
                                }], 'totalRecord': 7
                            }
                        }
                    },
                    afterStep6: {
                        request: {
                            'componentId': '4ecthi',
                            'dataSourceId': 523609449,
                            'dateRangeDimension': {
                                'name': 'a31bbf949a',
                                'label': 'Date',
                                'dataType': 'DATE',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'},
                                'aggregationType': 'none'
                            },
                            'queryFields': [{
                                'name': 'dc1b3e3112',
                                'label': 'Product',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none'
                            }, {
                                'name': 'f58c1c070c',
                                'label': 'Units Sold',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum'
                            }],
                            'fromDate': '01/11/2021',
                            'toDate': '14/11/2021',
                            'limit': 10,
                            'page': 1,
                            'format': 'barChart',
                            'filter': '[]',
                            'sort': []
                        },
                        response: {
                            'code': 200, 'message': 'Success', 'data': {
                                'rows': [{
                                    'segment': {'id': 'Montana', 'name': 'Montana'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['19805']
                                    }]
                                }, {
                                    'segment': {'id': 'Amarilla', 'name': 'Amarilla'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['5522']
                                    }]
                                }, {
                                    'segment': {'id': 'Carretera', 'name': 'Carretera'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['5926']
                                    }]
                                }, {
                                    'segment': {'id': 'VTT', 'name': 'VTT'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['7539']
                                    }]
                                }, {
                                    'segment': {'id': 'Velo', 'name': 'Velo'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['6480.5']
                                    }]
                                }, {
                                    'segment': {'id': 'Paseo', 'name': 'Paseo'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['21708']
                                    }]
                                }], 'totalRecord': 6
                            }
                        }
                    },
                    afterStep7: {
                        request: {
                            'componentId': '4ecthi',
                            'dataSourceId': 523609449,
                            'dateRangeDimension': {
                                'name': 'a31bbf949a',
                                'label': 'Date',
                                'dataType': 'DATE',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'},
                                'aggregationType': 'none'
                            },
                            'queryFields': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none'
                            }, {
                                'name': 'f58c1c070c',
                                'label': 'Units Sold',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum'
                            }],
                            'fromDate': '01/11/2021',
                            'toDate': '14/11/2021',
                            'limit': 10,
                            'page': 1,
                            'format': 'barChart',
                            'filter': '[]',
                            'sort': []
                        },
                        response: {
                            'code': 200, 'message': 'Success', 'data': {
                                'rows': [{
                                    'segment': {'id': 'Betty', 'name': 'Betty'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11209']
                                    }]
                                }, {
                                    'segment': {'id': 'Henry', 'name': 'Henry'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['9624']
                                    }]
                                }, {
                                    'segment': {'id': 'John', 'name': 'John'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['7383']
                                    }]
                                }, {
                                    'segment': {'id': 'Caitlin', 'name': 'Caitlin'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['4051']
                                    }]
                                }, {
                                    'segment': {'id': 'Cisco', 'name': 'Cisco'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['9025.5']
                                    }]
                                }, {
                                    'segment': {'id': 'Smith', 'name': 'Smith'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11028']
                                    }]
                                }, {
                                    'segment': {'id': 'Samuel', 'name': 'Samuel'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['14660']
                                    }]
                                }], 'totalRecord': 7
                            }
                        }
                    }
                }
            }
        },
        BAR_04: {
            dataInput: {
                data: {
                    metric: {
                        label: 'Units Sold'
                    },
                    optionalMetric: {
                        label: 'Units Stored'
                    }
                },
                style: {}
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    afterStep3: {
                        request: {
                            'componentId': 'ypoz00',
                            'dataSourceId': 523609449,
                            'dateRangeDimension': {
                                'name': 'a31bbf949a',
                                'label': 'Date',
                                'dataType': 'DATE',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'},
                                'aggregationType': 'none'
                            },
                            'queryFields': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none'
                            }, {
                                'name': 'f58c1c070c',
                                'label': 'Units Sold',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum'
                            }],
                            'fromDate': '01/11/2021',
                            'toDate': '14/11/2021',
                            'limit': 10,
                            'page': 1,
                            'format': 'barChart',
                            'filter': '[]',
                            'sort': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none',
                                'az': 'descending'
                            }]
                        },
                        response: {
                            'code': 200, 'message': 'Success', 'data': {
                                'rows': [{
                                    'segment': {'id': 'Smith', 'name': 'Smith'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11028']
                                    }]
                                }, {
                                    'segment': {'id': 'Samuel', 'name': 'Samuel'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['14660']
                                    }]
                                }, {
                                    'segment': {'id': 'John', 'name': 'John'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['7383']
                                    }]
                                }, {
                                    'segment': {'id': 'Henry', 'name': 'Henry'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['9624']
                                    }]
                                }, {
                                    'segment': {'id': 'Cisco', 'name': 'Cisco'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['9025.5']
                                    }]
                                }, {
                                    'segment': {'id': 'Caitlin', 'name': 'Caitlin'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['4051']
                                    }]
                                }, {
                                    'segment': {'id': 'Betty', 'name': 'Betty'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11209']
                                    }]
                                }], 'totalRecord': 7
                            }
                        }
                    },
                    afterStep7: {
                        request: {
                            'componentId': 'ypoz00',
                            'dataSourceId': 523609449,
                            'dateRangeDimension': {
                                'name': 'a31bbf949a',
                                'label': 'Date',
                                'dataType': 'DATE',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'},
                                'aggregationType': 'none'
                            },
                            'queryFields': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none'
                            }, {
                                'name': 'f58c1c070c',
                                'label': 'Units Sold',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum'
                            }, {
                                'name': 'ged464ed2d',
                                'label': 'Units Stored',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum'
                            }],
                            'fromDate': '01/11/2021',
                            'toDate': '14/11/2021',
                            'limit': 10,
                            'page': 1,
                            'format': 'barChart',
                            'filter': '[]',
                            'sort': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none',
                                'az': 'descending'
                            }, {
                                'name': 'f58c1c070c',
                                'label': 'Units Sold',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum',
                                'az': 'descending'
                            }]
                        },
                        response: {
                            'code': 200, 'message': 'Success', 'data': {
                                'rows': [{
                                    'segment': {'id': 'Smith', 'name': 'Smith'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11028']
                                    }, {
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['18892']
                                    }]
                                }, {
                                    'segment': {'id': 'Samuel', 'name': 'Samuel'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['14660']
                                    }, {
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['26790']
                                    }]
                                }, {
                                    'segment': {'id': 'John', 'name': 'John'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['7383']
                                    }, {
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11018']
                                    }]
                                }, {
                                    'segment': {'id': 'Henry', 'name': 'Henry'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['9624']
                                    }, {
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['12040']
                                    }]
                                }, {
                                    'segment': {'id': 'Cisco', 'name': 'Cisco'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['9025.5']
                                    }, {
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['17194']
                                    }]
                                }, {
                                    'segment': {'id': 'Caitlin', 'name': 'Caitlin'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['4051']
                                    }, {
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['12169']
                                    }]
                                }, {
                                    'segment': {'id': 'Betty', 'name': 'Betty'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'f58c1c070c',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11209']
                                    }, {
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['17421']
                                    }]
                                }], 'totalRecord': 7
                            }
                        }
                    },
                    afterStep8: {
                        request: {
                            'componentId': 'ypoz00',
                            'dataSourceId': 523609449,
                            'dateRangeDimension': {
                                'name': 'a31bbf949a',
                                'label': 'Date',
                                'dataType': 'DATE',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'},
                                'aggregationType': 'none'
                            },
                            'queryFields': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none'
                            }, {
                                'name': 'ged464ed2d',
                                'label': 'Units Stored',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum'
                            }],
                            'fromDate': '01/11/2021',
                            'toDate': '14/11/2021',
                            'limit': 10,
                            'page': 1,
                            'format': 'barChart',
                            'filter': '[]',
                            'sort': [{
                                'name': 'cbc8b23521',
                                'label': 'Member',
                                'dataType': 'STRING',
                                'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'},
                                'aggregationType': 'none',
                                'az': 'descending'
                            }, {
                                'name': 'ged464ed2d',
                                'label': 'Units Stored',
                                'dataType': 'NUMBER',
                                'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                'aggregationType': 'sum',
                                'az': 'descending'
                            }]
                        },
                        response: {
                            'code': 200, 'message': 'Success', 'data': {
                                'rows': [{
                                    'segment': {'id': 'Smith', 'name': 'Smith'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['18892']
                                    }]
                                }, {
                                    'segment': {'id': 'Samuel', 'name': 'Samuel'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['26790']
                                    }]
                                }, {
                                    'segment': {'id': 'John', 'name': 'John'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['11018']
                                    }]
                                }, {
                                    'segment': {'id': 'Henry', 'name': 'Henry'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['12040']
                                    }]
                                }, {
                                    'segment': {'id': 'Cisco', 'name': 'Cisco'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['17194']
                                    }]
                                }, {
                                    'segment': {'id': 'Caitlin', 'name': 'Caitlin'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['12169']
                                    }]
                                }, {
                                    'segment': {'id': 'Betty', 'name': 'Betty'},
                                    'dimension': [],
                                    'aggregations': [{
                                        'name': 'ged464ed2d',
                                        'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'},
                                        'aggregationType': 'sum',
                                        'value': ['17421']
                                    }]
                                }], 'totalRecord': 7
                            }
                        }
                    }
                }
            }
        },
        BAR_05: {
            dataInput: {
                data: {
                    filter: {
                        name: 'Bar chart filter',
                        rules: [
                            [
                                {
                                    type: 'include',
                                    field: {
                                        label: 'Date'
                                    },
                                    valueType: 'date',
                                    value: '06/11/2021',
                                    operator: {
                                        label: 'after'
                                    }
                                }
                            ],
                            [
                                {
                                    field: {
                                        label: 'Units Sold'
                                    },
                                    valueType: 'text',
                                    value: '6000'
                                }
                            ]
                        ]
                    }
                },
                style: {}
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId': '5p9shs', 'dataSourceId': 523609449, 'dateRangeDimension': {'name': 'a31bbf949a', 'label': 'Date', 'dataType': 'DATE', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'YEAR_MONTH_DAY'}, 'aggregationType': 'none'}, 'queryFields': [{'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none'}, {'name': 'f58c1c070c', 'label': 'Units Sold', 'dataType': 'NUMBER', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum'}], 'fromDate': '01/11/2021', 'toDate': '14/11/2021', 'limit': 10, 'page': 1, 'format': 'barChart', 'filter': '[[{"a31bbf949a":{"after":"20211106","type":"include","semantics":{"conceptType":"DIMENSION","semanticType":"YEAR_MONTH_DAY"},"dataType":"DATE","aggregationType":"none"}}],[{"f58c1c070c":{"greater_than_equals":"6000","type":"include","semantics":{"conceptType":"METRIC","semanticType":"NUMBER"},"dataType":"NUMBER","aggregationType":"sum"}}]]', 'sort': [{'name': 'cbc8b23521', 'label': 'Member', 'dataType': 'STRING', 'semantics': {'conceptType': 'DIMENSION', 'semanticType': 'STRING'}, 'aggregationType': 'none', 'az': 'descending'}]},
                    response: {'code': 200, 'message': 'Success', 'data': {'rows': [{'segment': {'id': 'Smith', 'name': 'Smith'}, 'dimension': [], 'aggregations': [{'name': 'f58c1c070c', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': ['7856']}]}, {'segment': {'id': 'Betty', 'name': 'Betty'}, 'dimension': [], 'aggregations': [{'name': 'f58c1c070c', 'semantics': {'conceptType': 'METRIC', 'semanticType': 'NUMBER'}, 'aggregationType': 'sum', 'value': ['7407']}]}], 'totalRecord': 2}}
                }
            }
        },
        BAR_07: {
            dataInput: {
                data: {
                    interactions: {
                        column: 'John'
                    }
                },
                style: {}
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId':'4ofsh1','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'barChart','filter':'[]','sort':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','az':'descending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[{'segment':{'id':'Smith','name':'Smith'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11028']}]},{'segment':{'id':'Samuel','name':'Samuel'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['14660']}]},{'segment':{'id':'John','name':'John'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['7383']}]},{'segment':{'id':'Henry','name':'Henry'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9624']}]},{'segment':{'id':'Cisco','name':'Cisco'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9025.5']}]},{'segment':{'id':'Caitlin','name':'Caitlin'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['4051']}]},{'segment':{'id':'Betty','name':'Betty'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11209']}]}],'totalRecord':7}}
                }
            }
        },
        BAR_16: {
            dataInput: {
                data: {
                    sort: {
                        label: 'Units Sold',
                        az: commonDataConfig.SORT_DIRECTION.ASCENDING.label
                    }
                },
                style: {}
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId':'cc2r3m','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'barChart','filter':'[]','sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'ascending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[{'segment':{'id':'Caitlin','name':'Caitlin'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['4051']}]},{'segment':{'id':'John','name':'John'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['7383']}]},{'segment':{'id':'Cisco','name':'Cisco'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9025.5']}]},{'segment':{'id':'Henry','name':'Henry'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9624']}]},{'segment':{'id':'Smith','name':'Smith'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11028']}]},{'segment':{'id':'Betty','name':'Betty'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11209']}]},{'segment':{'id':'Samuel','name':'Samuel'},'dimension':[],'aggregations':[{'name':'f58c1c070c','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['14660']}]}],'totalRecord':7}}
                }
            }
        }
    }
};
