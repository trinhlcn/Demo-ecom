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
        ALL_CHART: {
            dataInput: {
                data: {

                }
            },
            dataExpected: {
                data: {

                },
                style: {},
                api: {
                    SCORE_CARD: {
                        request: {
                            "componentId": "i301ji",
                            "dataSourceId": 523609449,
                            "dateRangeDimension": {
                                "name": "a31bbf949a",
                                "label": "Date",
                                "dataType": "DATE",
                                "semantics": {
                                    "conceptType": "DIMENSION",
                                    "semanticType": "YEAR_MONTH_DAY"
                                },
                                "aggregationType": "none"
                            },
                            "queryFields": [
                                {
                                    "name": "f58c1c070c",
                                    "label": "Units Sold",
                                    "dataType": "NUMBER",
                                    "semantics": {
                                        "conceptType": "METRIC",
                                        "semanticType": "NUMBER"
                                    },
                                    "aggregationType": "sum"
                                }
                            ],
                            "fromDate": "01/11/2021",
                            "toDate": "14/11/2021",
                            "limit": 100,
                            "page": 1,
                            "format": "scoreCard",
                            "filter": "[[{\"cbc8b23521\":{\"equals\":\"Betty\",\"semantics\":{\"conceptType\":\"DIMENSION\",\"semanticType\":\"STRING\"},\"dataType\":\"STRING\",\"aggregationType\":\"none\"}}]]"
                        },
                        response: {
                            "code": 200,
                            "message": "Success",
                            "data": {
                                "rows": [
                                    {
                                        "name": "f58c1c070c",
                                        "label": "Units Sold",
                                        "semantics": {
                                            "conceptType": "METRIC",
                                            "semanticType": "NUMBER"
                                        },
                                        "aggregationType": "sum",
                                        "value": "11209"
                                    }
                                ],
                                "summary": [],
                                "totalRecord": 0
                            }
                        }
                    },
                    LINE_CHART: {
                        request: {
                            "componentId": "kf7zt6",
                            "dataSourceId": 523609449,
                            "timeDimension": {
                                "name": "a31bbf949a",
                                "label": "Date",
                                "dataType": "DATE",
                                "semantics": {
                                    "conceptType": "DIMENSION",
                                    "semanticType": "YEAR_MONTH_DAY"
                                },
                                "aggregationType": "none"
                            },
                            "dateRangeDimension": {
                                "name": "a31bbf949a",
                                "label": "Date",
                                "dataType": "DATE",
                                "semantics": {
                                    "conceptType": "DIMENSION",
                                    "semanticType": "YEAR_MONTH_DAY"
                                },
                                "aggregationType": "none"
                            },
                            "queryFields": [
                                {
                                    "name": "cbc8b23521",
                                    "label": "Member",
                                    "dataType": "STRING",
                                    "semantics": {
                                        "conceptType": "DIMENSION",
                                        "semanticType": "STRING"
                                    },
                                    "aggregationType": "none"
                                },
                                {
                                    "name": "f58c1c070c",
                                    "label": "Units Sold",
                                    "dataType": "NUMBER",
                                    "semantics": {
                                        "conceptType": "METRIC",
                                        "semanticType": "NUMBER"
                                    },
                                    "aggregationType": "sum"
                                }
                            ],
                            "fromDate": "01/11/2021",
                            "toDate": "14/11/2021",
                            "limit": 100,
                            "page": 1,
                            "format": "lineChart",
                            "sort": [
                                {
                                    "name": "f58c1c070c",
                                    "label": "Units Sold",
                                    "dataType": "NUMBER",
                                    "semantics": {
                                        "conceptType": "METRIC",
                                        "semanticType": "NUMBER"
                                    },
                                    "aggregationType": "sum",
                                    "az": "descending"
                                }
                            ],
                            "filter": "[[{\"cbc8b23521\":{\"equals\":\"Betty\",\"semantics\":{\"conceptType\":\"DIMENSION\",\"semanticType\":\"STRING\"},\"dataType\":\"STRING\",\"aggregationType\":\"none\"}}]]"
                        },
                        response: {
                            "code": 200,
                            "message": "Success",
                            "data": {
                                "rows": [
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211101"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                809
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211102"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211103"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                2993
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211104"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211105"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211106"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211107"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                3488
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211108"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211109"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211110"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211111"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                1287
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211112"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211113"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                2632
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "name": "time",
                                            "timeDimension": true,
                                            "value": "20211114"
                                        },
                                        {
                                            "name": "cbc8b23521",
                                            "label": "Member",
                                            "dataType": "STRING",
                                            "semantics": {
                                                "conceptType": "DIMENSION",
                                                "semanticType": "STRING"
                                            },
                                            "aggregationType": "none",
                                            "value": [
                                                "Betty"
                                            ]
                                        },
                                        {
                                            "name": "f58c1c070c",
                                            "label": "Units Sold",
                                            "dataType": "NUMBER",
                                            "semantics": {
                                                "conceptType": "METRIC",
                                                "semanticType": "NUMBER"
                                            },
                                            "aggregationType": "sum",
                                            "value": [
                                                0
                                            ]
                                        }
                                    ]
                                ],
                                "summary": [],
                                "totalRecord": 1
                            }
                        }
                    }
                }
            }
        }

    }
};
