import {masterDateRange, pieStyleConfig, reportConfig} from 'Pages/report/report-design/workspace/constant.js';
import {commonDataConfig, commonStyleConfig, tableStyleConfig} from 'Pages/report/report-design/workspace/constant.js';

export const data = {
    global: {
        reportId: 523610557,
        dataSourceId: 523609449,
        masterDateRange: {
            label: masterDateRange.CUSTOM.label,
            fromDate: '01/11/2021',
            toDate: '14/11/2021',
            position: {x: 600, y: 100}
        }
    },
    testCases: {
        PIE_01: {
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
                    interaction: false
                },
                style: {
                    pieChart: 10,
                    colorBy: pieStyleConfig.COLOR_BY_OPTIONS.SLICE_ORDER.label,
                    donut: '0',
                    labels: {
                        sliceLabel: pieStyleConfig.SLICE_LABEL_OPTIONS.PERCENTAGE.label,
                        decimalPrecision: commonStyleConfig.DECIMAL_PRECISION_COMPACT.AUTO.label
                    },
                    legend: {
                        position: commonStyleConfig.LEGEND_POSITIONS.RIGHT,
                        alignment: commonStyleConfig.LEGEND_ALIGNMENTS.MIDDLE.label
                    }
                },
                api: {
                    request: {'componentId':'fl6g5l','dataSourceId':523609449,'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}],'filter':'[]'},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['14660']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11209']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11028']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9624']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9025.5']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['7383']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['4051']}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':7}}
                }
            }
        },
        PIE_02: {
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
                    interaction: false
                },
                style: {
                    pieChart: 10,
                    colorBy: pieStyleConfig.COLOR_BY_OPTIONS.SLICE_ORDER.label,
                    donut: '50',
                    labels: {
                        sliceLabel: pieStyleConfig.SLICE_LABEL_OPTIONS.PERCENTAGE.label,
                        decimalPrecision: commonStyleConfig.DECIMAL_PRECISION_COMPACT.AUTO.label
                    },
                    legend: {
                        position: commonStyleConfig.LEGEND_POSITIONS.RIGHT,
                        alignment: commonStyleConfig.LEGEND_ALIGNMENTS.MIDDLE.label
                    }
                },
                api: {
                    request: {'componentId':'rdlerz','dataSourceId':523609449,'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}],'filter':'[]'},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['14660']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11209']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11028']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9624']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9025.5']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['7383']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['4051']}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':7}}
                }
            }
        },
        PIE_03: {
            dataInput: {
                dimension: {
                    label: 'Product'
                }
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    drillDownlevel1: {
                        request: {'componentId':'m44xpt','dataSourceId':523609449,'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}],'filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['14660']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11209']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11028']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9624']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9025.5']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['7383']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['4051']}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':7}}
                    },
                    drillDownlevel2: {
                        request: {'componentId':'m44xpt','dataSourceId':523609449,'queryFields':[{'name':'dc1b3e3112','label':'Product','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[],'filter':'[]'}
                        ,
                        response: {'code':200,'message':'Success','data':{'rows':[[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Montana'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['19805']}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Amarilla'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['5522']}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Carretera'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['5926']}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'VTT'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['7539']}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Velo'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['6480.5']}],[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Paseo'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['21708']}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':6}}
                    }
                }
            }
        },
        PIE_07: {
            dataInput: {
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
                        aggregation: commonDataConfig.AGGREGATION_TYPE.COUNT_DISTINCT.label
                    }
                }
            },
            dataExpected: {
                data: {},
                style: {},
                api: {
                    request: {'componentId':'nbtnog','dataSourceId':523609449,'queryFields':[{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','az':'descending'}],'filter':'[]'},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211104'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[3]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211105'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[3]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211103'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211106'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211107'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211108'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211109'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211101'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211102'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211113'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211114'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211111'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211112'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[2]}],[{'name':'a31bbf949a','label':'Date','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none','value':'20211110'},{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':[1]}]],'summary':[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count_distinct','value':7}],'totalRecord':14}}
                }
            }
        },
        PIE_11: {
            dataInput: {
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
                    afterStep8: {
                        request: {'componentId':'zhk5f2','dataSourceId':523609449,'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}],'filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['14660']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11209']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11028']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9624']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9025.5']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['7383']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['4051']}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':7}}
                    },
                    afterStep10: {
                        request: {'componentId':'zhk5f2','dataSourceId':523609449,'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'j3b8f0c90b','label':'Gross Sales','dataType':'CURRENCY','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'j3b8f0c90b','label':'Gross Sales','dataType':'CURRENCY','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','az':'descending'}],'filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':['5249710']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':['3659587.5']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':['3368400']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':['1527345']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':['620368']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':['334623']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':['99488']}]],'summary':[{'name':'j3b8f0c90b','label':'Gross Sales','semantics':{'conceptType':'METRIC','semanticType':'CURRENCY_VND'},'aggregationType':'sum','value':'14859521.5'}],'totalRecord':7}}
                    },
                    afterStep11: {
                        request: {'componentId':'zhk5f2','dataSourceId':523609449,'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'m85f5509f9','label':'%COGS','dataType':'PERCENT','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'m85f5509f9','label':'%COGS','dataType':'PERCENT','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','az':'descending'}],'filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':['10.12']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':['6.40']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':['4.53']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':['4.38']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':['3.32']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':['2.96']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':['1.25']}]],'summary':[{'name':'m85f5509f9','label':'%COGS','semantics':{'conceptType':'METRIC','semanticType':'PERCENT'},'aggregationType':'sum','value':'32.96'}],'totalRecord':7}}
                    },
                    afterStep12: {
                        request: {'componentId':'zhk5f2','dataSourceId':523609449,'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'dc1b3e3112','label':'Product','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','az':'descending'}],'filter':'[]'},
                        response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':[6]}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':[9]}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':[7]}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':[4]}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':[8]}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Caitlin'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':[3]}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':[11]}]],'summary':[{'name':'dc1b3e3112','label':'Product','semantics':{'conceptType':'DIMENSION','semanticType':'NUMBER'},'aggregationType':'count','value':48}],'totalRecord':7}}
                    }
                }
            }
        },
        PIE_13: {
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
                    request: {'componentId':'ovpcpx','dataSourceId':523609449,'queryFields':[{'name':'cbc8b23521','label':'Member','dataType':'STRING','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none'},{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum'}],'dateRangeDimension':{'name':'a31bbf949a','label':'Date','dataType':'DATE','semantics':{'conceptType':'DIMENSION','semanticType':'YEAR_MONTH_DAY'},'aggregationType':'none'},'fromDate':'01/11/2021','toDate':'14/11/2021','limit':32,'page':1,'format':'pieChart','sort':[{'name':'f58c1c070c','label':'Units Sold','dataType':'NUMBER','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','az':'descending'}],'filter':'[[{"a31bbf949a":{"after":"20210101","type":"include","semantics":{"conceptType":"DIMENSION","semanticType":"YEAR_MONTH_DAY"},"dataType":"DATE","aggregationType":"none"}},{"dc1b3e3112":{"contain":"Montana","type":"include","semantics":{"conceptType":"DIMENSION","semanticType":"STRING"},"dataType":"STRING","aggregationType":"none"}}],[{"f58c1c070c":{"less_than":"6000","type":"exclude","semantics":{"conceptType":"METRIC","semanticType":"NUMBER"},"dataType":"NUMBER","aggregationType":"sum"}}]]'},
                    response: {'code':200,'message':'Success','data':{'rows':[[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Samuel'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['14660']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Betty'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11209']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Smith'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['11028']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Henry'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9624']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Cisco'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['9025.5']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'John'},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':['7383']}],[{'name':'cbc8b23521','label':'Member','semantics':{'conceptType':'DIMENSION','semanticType':'STRING'},'aggregationType':'none','value':'Other','id':-1},{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':[4051]}]],'summary':[{'name':'f58c1c070c','label':'Units Sold','semantics':{'conceptType':'METRIC','semanticType':'NUMBER'},'aggregationType':'sum','value':'66980.5'}],'totalRecord':6}}
                }
            }
        }
    }
};
