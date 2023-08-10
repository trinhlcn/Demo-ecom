import {masterDateRange, reportConfig} from 'Pages/report/report-design/workspace/constant.js';
import {commonDataConfig, commonStyleConfig, tableStyleConfig} from 'Pages/report/report-design/workspace/constant.js';

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
        TABLE_01: {
            dataInput: {},
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Member'
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
                    showSummaryRow: true,
                    interaction: false
                },
                style: {
                    conditionFormatting: [],
                    showHeader: true,
                    showPagination: true,
                    metrics: {
                        label: tableStyleConfig.TABLE_COLUMN_OPTIONS.NUMBER.label,
                        decimalPrecision: 'Auto',
                        compactNumbers: false
                    }
                },
                api: {
                    request: {'componentId':'hmnbdn','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}]}
                    ,
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'14660'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11209'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11028'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9624'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9025.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'7383'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'4051'}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':7}}
                }
            }
        },
        TABLE_02: {
            dataInput: {},
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Member'
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
                    showSummaryRow: true,
                    interaction: false
                },
                style: {
                    conditionFormatting: [],
                    showHeader: true,
                    showPagination: true,
                    metrics: {
                        label: 'Bar',
                        backgroundColor: 'rgb(23, 0, 255)',
                        decimalPrecision: 'Auto',
                        compactNumbers: false
                    }
                },
                api: {
                    request: {'componentId':'0fm29n','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'14660'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11209'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11028'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9624'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9025.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'7383'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'4051'}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':7}}
                }
            }
        },
        TABLE_03: {
            dataInput: {},
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: {
                        label: 'Member'
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
                    showSummaryRow: true,
                    interaction: false
                },
                style: {
                    conditionFormatting: [],
                    showHeader: true,
                    showPagination: true,
                    metrics: {
                        label: 'Heat map',
                        backgroundColor: 'rgb(23, 0, 255)',
                        decimalPrecision: 'Auto',
                        compactNumbers: false
                    }
                },
                api: {
                    request: {'componentId':'eioh1f','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'14660'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11209'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11028'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9624'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9025.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'7383'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'4051'}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':7}}
                }
            }
        },
        TABLE_04: {
            dataInput: {},
            dataExpected: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    },
                    dimension: [
                        {
                            label: 'Member'
                        },
                        {
                            label: 'Product'
                        }
                    ],
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
                    showSummaryRow: true,
                    interaction: false
                },
                style: {
                    conditionFormatting: [],
                    showHeader: true,
                    showPagination: true,
                    metrics: {
                        label: tableStyleConfig.TABLE_COLUMN_OPTIONS.NUMBER.label,
                        decimalPrecision: 'Auto',
                        compactNumbers: false
                    }
                },
                api: {
                    request: {'componentId':'xwyaej','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'dc1b3e3112','label':'Product','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[]}
                    ,
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Montana'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'19805'}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Amarilla'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'5522'}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Carretera'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'5926'}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'VTT'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'7539'}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Velo'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'6480.5'}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Paseo'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'21708'}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':6}}
                }
            }
        },
        TABLE_05: {
            dataInput: {
                data: {
                    metric: [
                        {
                            label: 'Units Sold',
                            dataType: commonDataConfig.DATA_TYPE.NUMBER.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.SUM.label
                        },
                        {
                            label: 'Gross Sales',
                            dataType: commonDataConfig.DATA_TYPE.CURRENCY.label,
                            currency: reportConfig.CURRENCY.CURRENCY_VND,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.SUM.label
                        },
                        {
                            label: '%COGS',
                            dataType: commonDataConfig.DATA_TYPE.PERCENT.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.SUM.label
                        }
                    ]
                }
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId':'xozo5j','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'},{'name':'j3b8f0c90b','label':'Gross Sales','dataType':'CURRENCY','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum'},{'name':'m85f5509f9','label':'%COGS','dataType':'PERCENT','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'14660'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'1527345'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'4.38'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11209'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'3659587.5'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'10.12'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11028'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'620368'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'3.32'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9624'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'3368400'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'2.96'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9025.5'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'5249710'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'6.40'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'7383'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'334623'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'4.53'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'4051'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'99488'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'1.25'}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'14859521.5'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'32.96'}],'totalRecord':7}}
                }
            }
        },
        TABLE_06: {
            dataInput: {
                data: {
                    dimension: {
                        default: {
                            label: 'Member'
                        },
                        new: {
                            label: 'Date'
                        }
                    },
                    metric: {
                        default: {
                            label: 'Units Sold'
                        },
                        new: {
                            label: 'Member',
                            dataType: commonDataConfig.DATA_TYPE.NUMBER.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.COUNT.label
                        }
                    }
                }
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId':'vp02m5','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','az':'descending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211106'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':6}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211105'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':5}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211114'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':4}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211107'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':4}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211102'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':4}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211110'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':3}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211101'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':3}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211113'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':3}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211112'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':3}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211103'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':3}]],'summary':[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':48}],'totalRecord':14}}
                }
            }
        },
        TABLE_07: {
            dataInput: {
                data: {
                    removeDimension: {
                        label: 'Member'
                    },
                    dimension: {
                        label: 'Date'
                    },
                    changeMetric: {
                        label: 'Units Sold'
                    },
                    metric: {
                        label: 'Member',
                        aggregation: commonDataConfig.AGGREGATION_TYPE.COUNT_DISTINCT.label
                    }
                }
            },
            dataExpected: {
                data: {
                    dimension: {
                        label: 'Date'
                    },
                    metric: {
                        label: 'Member',
                        aggregation: commonDataConfig.AGGREGATION_TYPE.COUNT_DISTINCT.label
                    }
                },
                style: {},
                api: {
                    request: {'componentId':'qhhz8c','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','az':'descending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211104'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':3}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211105'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':3}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211103'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211106'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211107'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211108'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211109'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211101'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211102'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211113'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2}]],'summary':[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':7}],'totalRecord':14}}
                }
            }
        },
        TABLE_08: {
            dataInput: {
                data: {
                    metric: [
                        {
                            label: 'Units Sold',
                            aliasName: 'Sum',
                            dataType: commonDataConfig.DATA_TYPE.NUMBER.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.SUM.label
                        },
                        {
                            label: 'Units Sold',
                            aliasName: 'Count',
                            dataType: commonDataConfig.DATA_TYPE.NUMBER.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.COUNT.label
                        },
                        {
                            label: 'Units Sold',
                            aliasName: 'Count Distinct',
                            dataType: commonDataConfig.DATA_TYPE.NUMBER.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.COUNT_DISTINCT.label
                        },
                        {
                            label: 'Units Sold',
                            aliasName: 'Average',
                            dataType: commonDataConfig.DATA_TYPE.NUMBER.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.AVERAGE.label
                        },
                        {
                            label: 'Units Sold',
                            aliasName: 'Min',
                            dataType: commonDataConfig.DATA_TYPE.NUMBER.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.MIN.label
                        },
                        {
                            label: 'Units Sold',
                            aliasName: 'Max',
                            dataType: commonDataConfig.DATA_TYPE.NUMBER.label,
                            aggregation: commonDataConfig.AGGREGATION_TYPE.MAX.label
                        }
                    ]
                }
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId':'6ikesh','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'14660'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count','value':5},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':3},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average','value':'2932.0000000000000000'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min','value':'1884'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max','value':'3627'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11209'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count','value':7},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':5},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average','value':'1601.2857142857142857'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min','value':'809'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max','value':'2632'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11028'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count','value':6},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':3},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average','value':'1838.0000000000000000'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min','value':'700'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max','value':'2472'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9624'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count','value':4},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average','value':'2406.0000000000000000'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min','value':'1362'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max','value':'3450'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9025.5'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count','value':4},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':3},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average','value':'2256.3750000000000000'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min','value':'1190'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max','value':'3793.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'7383'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count','value':7},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':4},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average','value':'1054.7142857142857143'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min','value':'267'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max','value':'2501'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'4051'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count','value':2},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':2},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average','value':'2025.5000000000000000'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min','value':'1817'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max','value':'2234'}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count','value':35},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':22},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'average','value':'1913.7285714285714286'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'min','value':'267'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'max','value':'3793.5'}],'totalRecord':7}}
                }
            }
        },
        TABLE_09: {
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
                },
                style: {},
                api: {
                    viewOptionalMetric: {
                        request: {'componentId':'0k3dyz','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}]},
                        response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'14660'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11209'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11028'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9624'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9025.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'7383'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'4051'}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':7}}
                    },
                    afterStep10: {
                        request: {'componentId':'0k3dyz','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'},{'name':'j3b8f0c90b','label':'Gross Sales','dataType':'CURRENCY','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum'},{'name':'m85f5509f9','label':'%COGS','dataType':'PERCENT','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum'},{'name':'dc1b3e3112','label':'Product','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}]},
                        response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'14660'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'1527345'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'4.38'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':9}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11209'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'3659587.5'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'10.12'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':11}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'11028'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'620368'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'3.32'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':6}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9624'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'3368400'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'2.96'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':4}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'9025.5'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'5249710'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'6.40'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':8}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'7383'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'334623'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'4.53'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':7}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'4051'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'99488'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'1.25'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':3}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'14859521.5'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'32.96'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':48}],'totalRecord':7}}
                    }
                }
            }
        },
        TABLE_10: {
            dataInput: {
                data: {
                    dateRangeDimension: {
                        label: 'Date'
                    }
                }
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId':'3paajs','dataSourceId':523609449,'fromDate':'01/11/2021','toDate':'14/11/2021','limit':10,'page':1,'format':'table','filter':'[]','queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{},'sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}]},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'173820.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'168608.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'163767.0'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'155316.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'146129.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'145835.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Alex'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'120338.5'}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'120279.5'}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'1194095.5'}],'totalRecord':8}}
                }
            }
        }
    }
};
