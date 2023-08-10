import {
    masterDateRange,
    lineColumnOptions,
    commonDataConfig,
    reportConfig
} from 'Pages/report/report-design/workspace/constant.js';

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
        SCORE_01: {
            dataInput: {},
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
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
                    conditionFormatting: [],
                    primaryMetric: {
                        decimalPrecision: '2',
                        compactNumbers: false
                    },
                    label: {
                        color: 'rgb(102, 102, 102)',
                        size: '28 px',
                        font: 'Roboto',
                        hideMetric: false
                    },
                    padding: {
                        lineHeight: 'Auto',
                        left: '24 px',
                        right: '24 px',
                        top: '8 px',
                    }
                },
                api: {
                    request: {'componentId':'bp3af2','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[]'},
                    response: {'code':200,'message':'Success','data':{'rows':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'summary':[],'totalRecord':0}}
                }
            }
        },
        SCORE_02: {
            dataInput: {},
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    metric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
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
                    conditionFormatting: [],
                    primaryMetric: {
                        decimalPrecision: 'Auto',
                        compactNumbers: true
                    },
                    label: {
                        color: 'rgb(102, 102, 102)',
                        size: '28 px',
                        font: 'Roboto',
                        hideMetric: false
                    },
                    padding: {
                        lineHeight: 'Auto',
                        left: '24 px',
                        right: '24 px',
                        top: '8 px',
                    }
                },
                api: {
                    request: {'componentId':'bp3af2','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[]'},
                    response: {'code':200,'message':'Success','data':{'rows':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'summary':[],'totalRecord':0}}
                }
            }
        },
        SCORE_03: {
            dataInput: {},
            dataExpected: {
                data: {
                    currentMetric: {
                        label: 'Units Sold',
                        aggregation: 'Sum'
                    },
                    metricChange: {
                        label: 'Member',
                        aggregationChange: 'Count Distinct',
                    }
                },
                api: {
                    request: {'componentId':'7ss9mx','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[]'},
                    response: {'code':200,'message':'Success','data':{'rows':[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':7}],'summary':[],'totalRecord':0}}
                }
            }
        },
        SCORE_12: {
            dataInput: {
                data: {
                    optionalMetrics: [
                        {
                            label: 'Gross Sales',
                            dataType: commonDataConfig.DATA_TYPE.CURRENCY.label,
                            currency: reportConfig.CURRENCY.CURRENCY_VND,
                            alias: 'GS'
                        },
                        {
                            label: '%COGS',
                            dataType: commonDataConfig.DATA_TYPE.PERCENT.label,
                            currency: reportConfig.CURRENCY.CURRENCY_VND
                        },
                        {
                            label: 'Product'
                        }
                    ]
                }
            },
            dataExpected: {
                data: {
                    metric: {
                        label: 'Units Sold'
                    },
                    optionalMetrics: [
                        {
                            label: 'Gross Sales',
                            dataType: commonDataConfig.DATA_TYPE.CURRENCY.label,
                            currency: reportConfig.CURRENCY.CURRENCY_VND,
                            alias: 'GS',
                            apiData: 'afterStep10'
                        },
                        {
                            label: '%COGS',
                            dataType: commonDataConfig.DATA_TYPE.PERCENT.label,
                            currency: reportConfig.CURRENCY.CURRENCY_VND,
                            apiData: 'afterStep12'
                        },
                        {
                            label: 'Product',
                            apiData: 'afterStep10'
                        }
                    ]
                },
                style: {},
                api: {
                    0: {
                        request: {'componentId':'18tiai','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'summary':[],'totalRecord':0}}
                    },
                    1: {
                        request: {'componentId':'18tiai','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'j3b8f0c90b','label':'Gross Sales','dataType':'CURRENCY','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'14859521.5'}],'summary':[],'totalRecord':0}}
                    },
                    2: {
                        request: {'componentId':'18tiai','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'m85f5509f9','label':'%COGS','dataType':'PERCENT','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'32.96'}],'summary':[],'totalRecord':0}}
                    },
                    3: {
                        request: {'componentId':'18tiai','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'dc1b3e3112','label':'Product','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':48}],'summary':[],'totalRecord':0}}
                    }
                }
            }
        },
        SCORE_13: {
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
                            value: '01/01/2021',
                            operator: {
                                label: 'after'
                            }
                        },
                            {
                                type: 'include',
                                field: {
                                    label: 'Product'
                                },
                                valueType: 'text',
                                value: 'Montana'
                            }],
                        [{
                            type: 'exclude',
                            field: {
                                label: 'Units Sold'
                            },
                            valueType: 'text',
                            value: '6000',
                            operator: {
                                label: '<'
                            }
                        }]
                    ]
                },
                metric: {
                    label: 'Units Sold'
                },
                optionalMetrics: [
                    {
                        label: 'Gross Sales',
                        alias: 'GS',
                        dataType: commonDataConfig.DATA_TYPE.CURRENCY.label,
                        currency: reportConfig.CURRENCY.CURRENCY_VND,
                        isDrag: false
                    },
                    {
                        label: '%COGS',
                        dataType: commonDataConfig.DATA_TYPE.PERCENT.label,
                        aggregation: commonDataConfig.AGGREGATION_TYPE.SUM.label,
                        isDrag: false
                    },
                    {
                        label: 'Product',
                        isDrag: true
                    }
                ]
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId':'nhbmll','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[[{"a31bbf949a":{"after":"20210101","type":"include","semantics":{"conceptType":"DIMENSION","semanticType":"YEAR_MONTH_DAY"},"dataType":"DATE","aggregationType":"none"}},{"dc1b3e3112":{"contain":"Montana","type":"include","semantics":{"conceptType":"DIMENSION","semanticType":"STRING"},"dataType":"STRING","aggregationType":"none"}}],[{"f58c1c070c":{"less_than":"6000","type":"exclude","semantics":{"conceptType":"METRIC","semanticType":"NUMBER"},"dataType":"NUMBER","aggregationType":"sum"}}]]'},
                    response: {'code':200,'message':'Success','data':{'rows':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'summary':[],'totalRecord':0}}
                }
            }
        },
        SCORE_15: {
            dataInput: {
                compareOption: 'Previous period'
            },
            dataExpected: {
                comparisonMetric: {
                    positive: 'rgb(56, 142, 60)',
                    negative: 'rgb(244, 33, 38)',
                },
                api: {
                    request: {'componentId':'4tqwx7','dataSourceId':523609449,'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'queryFields':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'fromDate':'01/11/2021','toDate':'14/11/2021','limit':100,'page':1,'format':'scoreCard','filter':'[]','fromRange':'18/10/2021','toRange':'31/10/2021'},
                    response: {'code':200,'message':'Success','data':{'rows':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'34115.0'}],'summary':[],'totalRecord':0}}
                }
            }
        },
    }
};