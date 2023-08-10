export const reportConfig = {
    COLOR: [
        '#ffcdd2',
        '#f8bbd0',
        '#e1bee7',
        '#c5cae9',
        '#bbdefb',
        '#b2ebf2',
        '#b2dfdb',
        '#dcedc8',
        '#f0f4c3',
        '#fff9c4',
        '#ffecb3',
        '#ffe0b2',
        '#ffccbc',
        '#d7ccc8',
        '#cfd8dc',
        '#ef9a9a',
        '#f48fb1',
        '#ce93d8',
        '#9fa8da',
        '#90caf9',
        '#80deea',
        '#80cbc4',
        '#c5e1a5',
        '#e6ee9c',
        '#fff59d',
        '#ffe082',
        '#ffcc80',
        '#ffab91',
        '#bcaaa4',
        '#b0bec5',
        '#ef5350',
        '#ec407a',
        '#ab47bc',
        '#5c6bc0',
        '#42a5f5',
        '#26c6da',
        '#26a69a',
        '#9ccc65',
        '#d4e157',
        '#ffee58',
        '#ffca28',
        '#ffa726',
        '#ff7043',
        '#8d6e63',
        '#78909c',
        '#d32f2f',
        '#c2185b',
        '#7b1fa2',
        '#303f9f',
        '#1976d2',
        '#0097a7',
        '#00796b',
        '#689f38',
        '#afb42b',
        '#fbc02d',
        '#ffa000',
        '#f57c00',
        '#e64a19',
        '#5d4037',
        '#455a64'
    ],
    COLOR_CHART: [
        '#4285f4',
        '#db4437',
        '#f4b400',
        '#0f9d58',
        '#ab47bc',
        '#00acc1',
        '#ff7043',
        '#9e9d24',
        '#5c6bc0',
        '#f06292',
        '#AB47BC',
        '#7E57C2',
        '#5C6BC0',
        '#42A5F5',
        '#29B6F6',
        '#26C6DA',
        '#26A69A',
        '#66BB6A',
        '#9CCC65',
        '#D4E157',
        '#FFEE58',
        '#FFCA28',
        '#FFA726',
        '#FF7043',
        '#8D6E63',
        '#F44336',
        '#E91E63',
        '#9C27B0',
        '#673AB7',
        '#3F51B5',
        '#2196F3',
        '#00BCD4',
        '#f44336',
        '#ff7043',
        '#ffc107',
        '#9e9d24',
        '#4caf50',
        '#00acc1',
        '#2196f3',
        '#5c6bc0',
        '#ab47bc',
        '#c2185b',
        '#e57373',
        '#ffab91',
        '#ffd54f',
        '#cddc39',
        '#81c784',
        '#4dd0e1',
        '#64b5f6',
        '#9fa8da',
        '#ce93d8',
        '#f06292',
        '#f4c7c3',
        '#ffccbc',
        '#ffecb3',
        '#f0f4c3',
        '#c8e6c9',
        '#b2ebf2',
        '#bbdefb',
        '#c5cae9',
        '#e1bee7',
        '#f8bbd0',
        '#cccccc',
        '#d9d9d9'
    ],
    DATA_TYPE_TEXT: 1,
    DATA_TYPE_NUMBER: 2,
    DATA_TYPE_PERCENT: 3,
    DATA_TYPE_CURRENCY: 4,
    DATA_TYPE_DATE: 5,
    DATA_TYPES: {
        1: {
            label: 'Text (ABC)',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'STRING'
            }
        },
        2: {
            label: 'Number (123)',
            semantics: {
                conceptType: 'METRIC',
                semanticType: 'NUMBER'
            }
        },
        3: {
            label: 'Percent (%)',
            semantics: {
                conceptType: 'METRIC',
                semanticType: 'PERCENT'
            }
        },
        4: {
            label: 'Currency (đ)',
            semantics: {
                conceptType: 'METRIC',
                semanticType: 'CURRENCY_VND'
            }
        },
        5: {
            label: 'Date',
            subDataTypes: [
                {
                    label: 'Year (YYYY)',
                    format: 'YYYY',
                    semantics: {
                        conceptType: 'DIMENSION',
                        semanticType: 'YEAR'
                    }
                },
                {
                    label: 'Year Quarter (YYYYQ)',
                    format: 'YYYYQ',
                    semantics: {
                        conceptType: 'DIMENSION',
                        semanticType: 'YEAR_QUARTER'
                    }
                },
                {
                    label: 'Year Month (YYYYMM)',
                    format: 'YYYYMM',
                    semantics: {
                        conceptType: 'DIMENSION',
                        semanticType: 'YEAR_MONTH'
                    }
                },
                {
                    label: 'ISO Year Week (YYYYww)',
                    format: 'YYYYww',
                    semantics: {
                        conceptType: 'DIMENSION',
                        semanticType: 'YEAR_WEEK'
                    }
                },
                {
                    label: 'Date (YYYYMMDD)',
                    format: 'YYYYMMDD',
                    semantics: {
                        conceptType: 'DIMENSION',
                        semanticType: 'YEAR_MONTH_DAY'
                    }
                },
                {
                    label: 'Date Hour (YYYYMMDDhh)',
                    format: 'YYYYMMDDHH',
                    semantics: {
                        conceptType: 'DIMENSION',
                        semanticType: 'YEAR_MONTH_DAY_HOUR'
                    }
                },
                {
                    label: 'Date Hour Minute (YYYYMMDDhhmm)',
                    format: 'YYYYMMDDHHmm',
                    semantics: {
                        conceptType: 'DIMENSION',
                        semanticType: 'YEAR_MONTH_DAY_MINUTE'
                    }
                },
                {
                    label: 'Date Hour Second (YYYYMMDDhhmmss)',
                    format: 'YYYYMMDDHHmmss',
                    semantics: {
                        conceptType: 'DIMENSION',
                        semanticType: 'YEAR_MONTH_DAY_SECOND'
                    }
                }
            ]
        },
        15: {
            label: 'Image',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'IMAGE'
            }
        },
        16: {
            label: 'Hyperlink',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'HYPERLINK'
            }

        }
    },
    DATA_TYPE_ARRAY: 6,
    DATA_TYPE_IMAGE : 15,
    DATA_TYPE_HYPERLINK : 16,
    DATA_TYPE_YEAR_MONTH : 7,
    DATA_TYPE_WEEK : 8,
    DATA_TYPE_YEAR: 9,
    DATA_TYPE_DATE_HOUR : 10,
    DATA_TYPE_HOUR : 11,
    DATA_TYPE_QUARTER: 12,
    DATA_TYPE_MONTH: 13,
    DATA_TYPE_DAY_OF_WEEK : 14,
    SEMANTIC_TYPE_COUNTRY: 'COUNTRY',
    SEMANTIC_TYPE_CITY: 'CITY',
    SEMANTIC_TYPE_CITY_CODE: 'CITY_CODE',
    SEMANTIC_TYPE_COUNTRY_CODE: 'COUNTRY_CODE',
    LINE_WEIGHT: [
        {key: 'none', label: 'None', value: 0},
        {key: '1', label: 1, value: 1},
        {key: '2', label: 2, value: 2},
        {key: '3', label: 3, value: 3},
        {key: '4', label: 4, value: 4},
        {key: '5', label: 5, value: 5}
    ],
    DECIMAL: [
        {
            name: 0,
            label: 0
        },
        {
            name: 1,
            label: 1
        },
        {
            name: 2,
            label: 2
        },
        {
            name: 3,
            label: 3
        }
    ],
    FONTS: [
        {
            name: 'arial',
            label: 'Arial'
        },
        {
            name: 'boogaloo',
            label: 'Boogaloo'
        },
        {
            name: 'bubblegumSans',
            label: 'Bubblegum Sans'
        },
        {
            name: 'calibri',
            label: 'Calibri'
        },
        {
            name: 'chewy',
            label: 'Chewy'
        },
        {
            name: 'comicSansMS',
            label: 'Comic Sans MS'
        },
        {
            name: 'comingSoon',
            label: 'Coming Soon'
        },
        {
            name: 'cormorantUnicase',
            label: 'Cormorant Unicase'
        },
        {
            name: 'corsiva',
            label: 'Corsiva'
        },
        {
            name: 'courierNew',
            label: 'Courier New'
        },
        {
            name: 'droid',
            label: 'Droid'
        },
        {
            name: 'droidSans',
            label: 'Droid Sans'
        },
        {
            name: 'eater',
            label: 'Eater'
        },
        {
            name: 'georgia',
            label: 'Georgia'
        },
        {
            name: 'greatVibes',
            label: 'Great Vibes'
        },
        {
            name: 'impact',
            label: 'Impact'
        },
        {
            name: 'indieFlower',
            label: 'Indie Flower'
        },
        {
            name: 'lato',
            label: 'Lato'
        },
        {
            name: 'lora',
            label: 'Lora'
        },
        {
            name: 'montserrat',
            label: 'Montserrat'
        },
        {
            name: 'oleoScript',
            label: 'Oleo Script'
        },
        {
            name: 'openSans',
            label: 'Open Sans'
        },
        {
            name: 'orbitron',
            label: 'Orbitron'
        },
        {
            name: 'oswald',
            label: 'Oswald'
        },
        {
            name: 'permanentMarker',
            label: 'Permanent Marker'
        },
        {
            name: 'quicksand',
            label: 'Quicksand'
        },
        {
            name: 'raleway',
            label: 'Raleway'
        },
        {
            name: 'reenieBeanie',
            label: 'Reenie Beanie'
        },
        {
            name: 'roboto',
            label: 'Roboto'
        },
        {
            name: 'robotoCondensed',
            label: 'Roboto Condensed'
        },
        {
            name: 'syncopate',
            label: 'Syncopate'
        },
        {
            name: 'tahoma',
            label: 'Tahoma'
        },
        {
            name: 'timesNewRoman',
            label: 'Times New Roman'
        },
        {
            name: 'trebuchet',
            label: 'Trebuchet'
        },
        {
            name: 'ubuntu',
            label: 'Ubuntu'
        },
        {
            name: 'ubuntuMono',
            label: 'Ubuntu Mono'
        },
        {
            name: 'verdana',
            label: 'Verdana'
        }
    ],
    FONT_SIZES: [
        {
            name: '8px',
            label: '8 px'
        },
        {
            name: '9px',
            label: '9 px'
        },
        {
            name: '10px',
            label: '10 px'
        },
        {
            name: '11px',
            label: '11 px'
        },
        {
            name: '12px',
            label: '12 px'
        },
        {
            name: '13px',
            label: '13 px'
        },
        {
            name: '14px',
            label: '14 px'
        },
        {
            name: '18px',
            label: '18 px'
        },
        {
            name: '24px',
            label: '24 px'
        },
        {
            name: '28px',
            label: '28 px'
        },
        {
            name: '30px',
            label: '30 px'
        },
        {
            name: '32px',
            label: '32 px'
        },
        {
            name: '36px',
            label: '36 px'
        },
        {
            name: '48px',
            label: '48 px'
        },
        {
            name: '60px',
            label: '60 px'
        },
        {
            name: '72px',
            label: '72 px'
        },
        {
            name: '96px',
            label: '96 px'
        }
    ],
    FONT_STYLES: [
        {
            name: 'regular',
            label: 'Regular',
            fontWeight: 'normal',
            fontStyle: 'normal'
        },
        {
            name: 'bold',
            label: 'Bold',
            fontWeight: 'bold',
            fontStyle: 'normal'
        },
        {
            name: 'italic',
            label: 'Italic',
            fontWeight: 'normal',
            fontStyle: 'italic'
        },
        {
            name: 'boldItalic',
            label: 'Bold Italic',
            fontWeight: 'bold',
            fontStyle: 'italic'
        }
    ],
    TEXT_DECORATION: [
        {
            name: 'none',
            label: 'None',
            textDecorationStyle: 'solid',
            textDecorationLine: 'none'
        },
        {
            name: 'solid',
            label: 'Solid',
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline'
        },
        {
            name: 'dashed',
            label: 'Dashed',
            textDecorationStyle: 'dashed',
            textDecorationLine: 'underline'
        },
        {
            name: 'dotted',
            label: 'Dotted',
            textDecorationStyle: 'dotted',
            textDecorationLine: 'underline'
        },
        {
            name: 'double',
            label: 'Double',
            textDecorationStyle: 'double',
            textDecorationLine: 'underline'
        }
    ],
    LINE_HEIGHT: [
        {
            name: 'normal',
            label: 'Auto'
        },
        {
            name: '8px',
            label: '8 px'
        },
        {
            name: '9px',
            label: '9 px'
        },
        {
            name: '10px',
            label: '10 px'
        },
        {
            name: '11px',
            label: '11 px'
        },
        {
            name: '12px',
            label: '12 px'
        },
        {
            name: '13px',
            label: '13 px'
        },
        {
            name: '14px',
            label: '14 px'
        },
        {
            name: '18px',
            label: '18 px'
        },
        {
            name: '24px',
            label: '24 px'
        },
        {
            name: '28px',
            label: '28 px'
        },
        {
            name: '30px',
            label: '30 px'
        },
        {
            name: '32px',
            label: '32 px'
        },
        {
            name: '36px',
            label: '36 px'
        },
        {
            name: '48px',
            label: '48 px'
        },
        {
            name: '60px',
            label: '60 px'
        },
        {
            name: '72px',
            label: '72 px'
        },
        {
            name: '96px',
            label: '96 px'
        }
    ],
    SIDE_PANEL: {
        TREND_LINE: [
            {
                name: 'none',
                label: 'None',
                value: 'none'
            },
            {
                name: 'linear',
                label: 'Linear',
                value: 'linear'
            },
            {
                name: 'exponential',
                label: 'Exponential',
                value: 'exponential'
            },
            {
                name: 'polynomial',
                label: 'Polynomial',
                value: 'polynomial'
            }
        ],
        MISSING_DATA: [
            {
                name: 'showNull',
                label: 'Show "null"',
                value: 'null'
            },
            {
                name: 'showZero',
                label: 'Show "0"',
                value: '0'
            },
            {
                name: 'showNoData',
                label: 'Show "No data"',
                value: 'No data'
            },
            {
                name: 'showBlank',
                label: 'Show " " (blank)',
                value: '\u00A0'
            }
        ],
        OPACITY: [
            {
                name: '0',
                label: '0%',
                value: 0
            },
            {
                name: '0.1',
                label: '10%',
                value: 10
            },
            {
                name: '0.2',
                label: '20%',
                value: 20
            },
            {
                name: '0.3',
                label: '30%',
                value: 30
            },
            {
                name: '0.4',
                label: '40%',
                value: 40
            },
            {
                name: '0.5',
                label: '50%',
                value: 50
            },
            {
                name: '0.6',
                label: '60%',
                value: 60
            },
            {
                name: '0.7',
                label: '70%',
                value: 70
            },
            {
                name: '0.8',
                label: '80%',
                value: 80
            },
            {
                name: '0.9',
                label: '90%',
                value: 90
            },
            {
                name: '1',
                label: '100%',
                value: 100
            }
        ],
        BORDER_RADIUS: [
            {
                name: '0px',
                label: '0',
                value: 0
            },
            {
                name: '1px',
                label: '1',
                value: 1
            },
            {
                name: '2px',
                label: '2',
                value: 2
            },
            {
                name: '3px',
                label: '3',
                value: 3
            },
            {
                name: '4px',
                label: '4',
                value: 4
            },
            {
                name: '5px',
                label: '5',
                value: 5
            },
            {
                name: '10px',
                label: '10',
                value: 10
            },
            {
                name: '15px',
                label: '15',
                value: 15
            },
            {
                name: '20px',
                label: '20',
                value: 20
            },
            {
                name: '25px',
                label: '25',
                value: 25
            },
            {
                name: '30px',
                label: '30',
                value: 30
            },
            {
                name: '40px',
                label: '40',
                value: 40
            },
            {
                name: '50px',
                label: '50',
                value: 50
            },
            {
                name: '60px',
                label: '60',
                value: 60
            },
            {
                name: '70px',
                label: '70',
                value: 70
            },
            {
                name: '80px',
                label: '80',
                value: 80
            },
            {
                name: '90px',
                label: '90',
                value: 90
            },
            {
                name: '100px',
                label: '100',
                value: 100
            }
        ],
        BORDER_WEIGHT: [
            {
                name: '0px',
                label: 'None',
                value: 0
            },
            {
                name: '1px',
                label: '1px',
                value: 1
            },
            {
                name: '2px',
                label: '2px',
                value: 2
            },
            {
                name: '3px',
                label: '3px',
                value: 3
            },
            {
                name: '4px',
                label: '4px',
                value: 4
            },
            {
                name: '5px',
                label: '5px',
                value: 5
            }
        ],
        BORDER_STYLE: [
            {
                name: 'solid',
                label: 'Solid'
            },
            {
                name: 'dashed',
                label: 'Dashed'
            },
            {
                name: 'dotted',
                label: 'Dotted'
            },
            {
                name: 'double',
                label: 'Double'
            }
        ],
        PADDING_TOP: [
            {
                name: '0px',
                label: '0 px',
                value: 0
            },
            {
                name: '4px',
                label: '4 px',
                value: 4
            },
            {
                name: '5px',
                label: '5 px',
                value: 5
            },
            {
                name: '8px',
                label: '8 px',
                value: 8
            },
            {
                name: '9px',
                label: '9 px',
                value: 9
            },
            {
                name: '10px',
                label: '10 px',
                value: 10
            },
            {
                name: '11px',
                label: '11 px',
                value: 11
            },
            {
                name: '12px',
                label: '12 px',
                value: 12
            },
            {
                name: '13px',
                label: '13 px',
                value: 13
            },
            {
                name: '14px',
                label: '14 px',
                value: 14
            },
            {
                name: '18px',
                label: '18 px',
                value: 18
            },
            {
                name: '24px',
                label: '24 px',
                value: 24
            },
            {
                name: '28px',
                label: '28 px',
                value: 28
            },
            {
                name: '30px',
                label: '30 px',
                value: 30
            },
            {
                name: '32px',
                label: '32 px',
                value: 32
            },
            {
                name: '36px',
                label: '36 px',
                value: 36
            },
            {
                name: '48px',
                label: '48 px',
                value: 48
            },
            {
                name: '60px',
                label: '60 px',
                value: 60
            },
            {
                name: '72px',
                label: '72 px',
                value: 72
            },
            {
                name: '96px',
                label: '96 px',
                value: 96
            }
        ],
        PADDING_LEFT: [
            {
                name: '0px',
                label: '0 px',
                value: 0
            },
            {
                name: '4px',
                label: '4 px',
                value: 4
            },
            {
                name: '5px',
                label: '5 px',
                value: 5
            },
            {
                name: '8px',
                label: '8 px',
                value: 8
            },
            {
                name: '9px',
                label: '9 px',
                value: 9
            },
            {
                name: '10px',
                label: '10 px',
                value: 10
            },
            {
                name: '11px',
                label: '11 px',
                value: 11
            },
            {
                name: '12px',
                label: '12 px',
                value: 12
            },
            {
                name: '13px',
                label: '13 px',
                value: 13
            },
            {
                name: '14px',
                label: '14 px',
                value: 14
            },
            {
                name: '18px',
                label: '18 px',
                value: 18
            },
            {
                name: '24px',
                label: '24 px',
                value: 24
            },
            {
                name: '28px',
                label: '28 px',
                value: 28
            },
            {
                name: '30px',
                label: '30 px',
                value: 30
            },
            {
                name: '32px',
                label: '32 px',
                value: 32
            },
            {
                name: '36px',
                label: '36 px',
                value: 36
            },
            {
                name: '48px',
                label: '48 px',
                value: 48
            },
            {
                name: '60px',
                label: '60 px',
                value: 60
            },
            {
                name: '72px',
                label: '72 px',
                value: 72
            },
            {
                name: '96px',
                label: '96 px',
                value: 96
            }
        ],
        PADDING_RIGHT: [
            {
                name: '0px',
                label: '0 px',
                value: 0
            },
            {
                name: '4px',
                label: '4 px',
                value: 4
            },
            {
                name: '5px',
                label: '5 px',
                value: 5
            },
            {
                name: '8px',
                label: '8 px',
                value: 8
            },
            {
                name: '9px',
                label: '9 px',
                value: 9
            },
            {
                name: '10px',
                label: '10 px',
                value: 10
            },
            {
                name: '11px',
                label: '11 px',
                value: 11
            },
            {
                name: '12px',
                label: '12 px',
                value: 12
            },
            {
                name: '13px',
                label: '13 px',
                value: 13
            },
            {
                name: '14px',
                label: '14 px',
                value: 14
            },
            {
                name: '18px',
                label: '18 px',
                value: 18
            },
            {
                name: '24px',
                label: '24 px',
                value: 24
            },
            {
                name: '28px',
                label: '28 px',
                value: 28
            },
            {
                name: '30px',
                label: '30 px',
                value: 30
            },
            {
                name: '32px',
                label: '32 px',
                value: 32
            },
            {
                name: '36px',
                label: '36 px',
                value: 36
            },
            {
                name: '48px',
                label: '48 px',
                value: 48
            },
            {
                name: '60px',
                label: '60 px',
                value: 60
            },
            {
                name: '72px',
                label: '72 px',
                value: 72
            },
            {
                name: '96px',
                label: '96 px',
                value: 96
            }
        ],
        TRANSITION_EFFECT: [{
            name: 'none',
            label: 'None'
        },{
            name: 'fade',
            label: 'Fade'
        }]
    },
    CURRENCY: {
        CURRENCY_AED: 'dh',
        CURRENCY_ALL: 'Lek',
        CURRENCY_ARS: '$',
        CURRENCY_AUD: '$',
        CURRENCY_BDT: '৳',
        CURRENCY_BGN: 'lev',
        CURRENCY_BOB: 'Bs',
        CURRENCY_BRL: 'R$',
        CURRENCY_CAD: '$',
        CURRENCY_CDF: 'FrCD',
        CURRENCY_CHF: 'CHF',
        CURRENCY_CLP: '$',
        CURRENCY_CNY: '¥',
        CURRENCY_COP: '$',
        CURRENCY_CRC: '₡',
        CURRENCY_CZK: 'Kč',
        CURRENCY_DKK: 'kr.',
        CURRENCY_DOP: 'RD$',
        CURRENCY_EGP: '£',
        CURRENCY_ETB: 'Birr',
        CURRENCY_EUR: '€',
        CURRENCY_GBP: '£',
        CURRENCY_HKD: '$',
        CURRENCY_HRK: 'kn',
        CURRENCY_HUF: 'Ft',
        CURRENCY_IDR: 'Rp',
        CURRENCY_ILS: '₪',
        CURRENCY_INR: '₹',
        CURRENCY_IRR: 'Rial',
        CURRENCY_ISK: 'kr',
        CURRENCY_JMD: '$',
        CURRENCY_JPY: '¥',
        CURRENCY_KRW: '₩',
        CURRENCY_LKR: 'Rs',
        CURRENCY_LTL: 'Lt',
        CURRENCY_MNT: '₮',
        CURRENCY_MVR: 'Rf',
        CURRENCY_MXN: '$',
        CURRENCY_MYR: 'RM',
        CURRENCY_NOK: 'kr',
        CURRENCY_NZD: '$',
        CURRENCY_PAB: 'B/.',
        CURRENCY_PEN: 'S/.',
        CURRENCY_PHP: '₱',
        CURRENCY_PKR: 'Rs',
        CURRENCY_PLN: 'zł',
        CURRENCY_RON: 'RON',
        CURRENCY_RSD: 'din',
        CURRENCY_RUB: '₽',
        CURRENCY_SAR: 'Rial',
        CURRENCY_SEK: 'kr',
        CURRENCY_SGD: '$',
        CURRENCY_THB: '฿',
        CURRENCY_TRY: '₺',
        CURRENCY_TWD: 'NT$',
        CURRENCY_TZS: 'TSh',
        CURRENCY_UAH: 'грн.',
        CURRENCY_USD: '$',
        CURRENCY_UYU: '$U',
        CURRENCY_VEF: 'Bs',
        CURRENCY_VND: '₫',
        CURRENCY_YER: 'Yer',
        CURRENCY_ZAR: 'R'
    },
    DATE_FORMAT: {
        YEAR: {
            label: 'Year (YYYY)',
            format: 'YYYY',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'YEAR'
            }
        },
        YEAR_QUARTER: {
            label: 'Year Quarter (YYYYQ)',
            format: 'YYYYQ',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'YEAR_QUARTER'
            }
        },
        YEAR_MONTH: {
            label: 'Year Month (YYYYMM)',
            format: 'YYYYMM',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'YEAR_MONTH'
            }
        },
        ISO_YEAR_WEEK: {
            label: 'ISO Year Week (YYYYww)',
            format: 'YYYYww',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'YEAR_WEEK'
            }
        },
        DATE: {
            label: 'Date (YYYYMMDD)',
            format: 'YYYYMMDD',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'YEAR_MONTH_DAY'
            }
        },
        DATE_HOUR: {
            label: 'Date Hour (YYYYMMDDhh)',
            format: 'YYYYMMDDHH',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'YEAR_MONTH_DAY_HOUR'
            }
        },
        DATE_HOUR_MINUTE: {
            label: 'Date Hour Minute (YYYYMMDDhhmm)',
            format: 'YYYYMMDDHHmm',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'YEAR_MONTH_DAY_MINUTE'
            }
        },
        DATE_HOUR_SECOND: {
            label: 'Date Hour Second (YYYYMMDDhhmmss)',
            format: 'YYYYMMDDHHmmss',
            semantics: {
                conceptType: 'DIMENSION',
                semanticType: 'YEAR_MONTH_DAY_SECOND'
            }
        }
    },
    MAX_PIVOT_CHART_PER_PAGE: 3,
    MAX_CHART_TICK_LINE: 100,
    MAKE_REPORT_LEVEL: 1,
    MAKE_PAGE_LEVEL: 2,
    TYPE_SAVE_REPORT_STATUS_SAVING: 1,
    TYPE_SAVE_REPORT_STATUS_SUCCESS: 2,
    TYPE_SAVE_REPORT_STATUS_ERROR: 3,
    TYPE_SCHEMA_INIT: 1,
    TYPE_SCHEMA_INIT_SUCCESS: 2,
    DECIMAL_PRECISION_NO_COMPACT: [
        {
            name: 'auto',
            label: 'Auto',
            value: 'auto'
        },
        {
            name: '0',
            label: '0',
            value: 0
        },
        {
            name: '1',
            label: '1',
            value: 1
        },
        {
            name: '2',
            label: '2',
            value: 2
        },
        {
            name: '3',
            label: '3',
            value: 3
        },
        {
            name: '4',
            label: '4',
            value: 4
        },
        {
            name: '5',
            label: '5',
            value: 5
        },
        {
            name: '6',
            label: '6',
            value: 6
        },
        {
            name: '7',
            label: '7',
            value: 7
        },
        {
            name: '8',
            label: '8',
            value: 8
        }
    ],
    DECIMAL_PRECISION_COMPACT: [
        {
            name: 'auto',
            label: 'Auto',
            value: 'auto'
        },
        {
            name: '0',
            label: '0',
            value: 0
        },
        {
            name: '1',
            label: '1',
            value: 1
        },
        {
            name: '2',
            label: '2',
            value: 2
        },
        {
            name: '3',
            label: '3',
            value: 3
        }
    ],
    DESKTOP: {
        TABLE: {
            width: 400,
            height: 300
        },
        SCORE_CARD: {
            height: 100,
            width: 100
        },
        PIVOT_CHART: {
            width: 942,
            height: 322
        },
        PIE_CHART: {
            width: 400,
            height: 320
        },
        GEO_MAP: {
            width: 400,
            height: 300
        },
        LINE_CHART: {
            width: 400,
            height: 300
        },
        BULLET_CHART: {
            width: 400,
            height: 300
        },
        BAR_CHART: {
            width: 600,
            height: 300
        },
        AREA_CHART: {
            width: 400,
            height: 300
        },
        TREE_MAP: {
            width: 400,
            height: 300
        },
        SCATTER_CHART: {
            width: 400,
            height: 300
        },
        TEXT: {
            width: 200,
            height: 50
        },
        IMAGE: {
            width: 340,
            height: 220
        },
        SLIDE_GROUP: {
            width: 600,
            height: 650
        },
        TAB_GROUP: {
            width: 650,
            height: 600
        },
        LINE: {
            width: 50,
            height: 50
        },
        URL_EMBED: {
            width: 400,
            height: 300
        },
        SUNBURST_CHART: {
            width: 400,
            height: 300
        },
        HEAT_MAP: {
            width: 400,
            height: 300
        },
        key: 'desktop'
    },
    MOBILE: {
        TABLE: {
            width: 340,
            height: 300
        },
        SCORE_CARD: {
            height: 100,
            width: 100
        },
        PIVOT_CHART: {
            width: 340,
            height: 300
        },
        PIE_CHART: {
            width: 340,
            height: 300
        },
        GEO_MAP: {
            width: 340,
            height: 300
        },
        LINE_CHART: {
            width: 340,
            height: 300
        },
        BULLET_CHART: {
            width: 340,
            height: 300
        },
        BAR_CHART: {
            width: 340,
            height: 300
        },
        AREA_CHART: {
            width: 340,
            height: 300
        },
        TREE_MAP: {
            width: 340,
            height: 300
        },
        SCATTER_CHART: {
            width: 340,
            height: 300
        },
        TEXT: {
            width: 200,
            height: 50
        },
        IMAGE: {
            width: 340,
            height: 220
        },
        RECTANGLE: {
            width: 340,
            height: 220
        },
        CIRCLE: {
            width: 340,
            height: 300
        },
        SLIDE_GROUP: {
            width: 340,
            height: 360
        },
        TAB_GROUP: {
            width: 340,
            height: 320
        },
        LINE: {
            width: 50,
            height: 50
        },
        URL_EMBED: {
            width: 340,
            height: 300
        },
        SUNBURST_CHART: {
            width: 340,
            height: 300
        },
        HEAT_MAP: {
            width: 340,
            height: 300
        },
        key: 'mobile'
    },
    MINIMUM_CHART_MARGIN: 10,
    MAXIMUM_COLUMN_BLEND_DATA: 10,
    MAXIMUM_ADD_KEY_BLEND_DATA: 10,
    MAXIMUM_BLEND_COMPONENT: 16,
    DEFAULT_AXIS_PADDING: 65,
    DEFAULT_LEGEND_HEIGHT: 30,
    DEFAULT_LEGEND_WIDTH: 100,
    CHART_HEADER_TYPE_DO_NOT_SHOW: 1,
    CHART_HEADER_TYPE_ALWAYS_SHOW: 2,
    CHART_HEADER_TYPE_SHOW_ON_HOVER: 3,
    TYPE_DOWNLOAD_REPORT_ALL_PAGE: 1,
    TYPE_DOWNLOAD_REPORT_SPECIFIC_PAGE: 2,
    DATA_SOURCE_STATUS_ACCESS_DENIED: 3,
    DATA_SOURCE_STATUS_CONFIG_ERROR: 4,
    DATA_SOURCE_STATUS_REMOVED: 2,
    DATA_SOURCE_STATUS_CONNECTED: 1,
    UPDATE_REPORT_ADD_COMPONENT: 1,
    UPDATE_REPORT_UPDATE_COMPONENT: 2,
    UPDATE_REPORT_DELETE_COMPONENT: 3,
    PDF_EXPORT_STAGE_CALL_JOB_SUCCESS: 1,
    PDF_EXPORT_STAGE_REACH_QUEUE: 2,
    PDF_EXPORT_STAGE_EXPORTING: 3,
    PDF_EXPORT_STAGE_RENDER_SUCCESS: 4,
    PDF_EXPORT_CODE_SUCCESS: 200,
    MAXIMUM_NUMBER_OF_ROWS_EXPORT: 100000,
    RESTORE_VERSION_HISTORY: 1,
    REPORT_HISTORY_CURRENT_VERSION: 2,
    SCROLLBAR_THICKNESS: 8,
    FILTER_CONTROL_TYPE: {
        DROPDOWN_LIST: 'DROPDOWN_LIST',
        FIXED_SIZE_LIST: 'FIXED_SIZE_LIST',
        INPUT_BOX: 'INPUT_BOX',
        ADVANCED_FILTER: 'ADVANCED_FILTER'
    },
    STYLE_CONTROL_DROPDOWN_LIST: 'DROPDOWN_LIST',
    STYLE_CONTROL_FIXED_SIZE: 'FIXED',
    SEARCH_TYPE_OPERATOR_LIST: {
        STRING: [
            {name: 'contain', label: 'Contains'},
            {name: 'is', label: 'Is'},
            {name: 'start_with', label: 'Start with'},
            {name: 'in', label: 'In'},
            {name: 'is_null', label: 'Is null'}
        ],
        NUMBER: [
            {label: '>=', name: 'greater_than_equals'},
            {label: '=', name: 'equals'},
            {label: '>', name: 'greater_than'},
            {label: '<', name: 'less_than'},
            {label: '<=', name: 'less_than_equals'},
            {label: 'is null', name: 'is_null'}
        ],
        DATE: [
            {name: 'after', label: 'After'},
            {name: 'on', label: 'On'},
            {name: 'before', label: 'Before'},
            {name: 'is_null', label: 'Is null'}
        ]
    },
    LABEL_POSITION: [
        {
            name: 'top',
            label: 'Top'
        },
        {
            name: 'left',
            label: 'Left'
        },
        {
            name: 'hidden',
            label: 'Hidden'
        }
    ],
    MAXIMUM_OPTIONAL_METRIC: 10,
    MINIMUM_OPTIONAL_METRIC:0,
    LINE_OPTIONS: [
        {
            id: 0,
            name: 'STRAIGHT_LINE',
            label: 'Line',
            icon: 'icon-ants-straight-line'
        },
        {
            id: 1,
            name: 'ARROW',
            label: 'Arrow',
            icon: 'icon-ants-arrow-line'
        },
        {
            id: 2,
            name: 'ELBOW_CONNECTOR',
            label: 'Elbow connector',
            icon: 'icon-ants-elbow-connector'
        },
        {
            id: 3,
            name: 'CURVED_CONNECTOR',
            label: 'Curved connector',
            icon: 'icon-ants-curved-connector'
        }
    ],
    CARTESIAN : {
        I: 1,
        II: 2,
        III: 3,
        IV: 4
    },
    EXPORT_DATA_TYPE_EXEL: 'excel',
    EXPORT_DATA_TYPE_GOOGLE_SHEETS: 'googleSheet',
    COPY_SQL: 'copySQL',
    FIELD_DIMENSION_TYPE: 'DIMENSION',
    FIELD_DATA_SOURCE_TYPE: 'DATA_SOURCE',
    FIELD_METRIC_TYPE: 'METRIC',
    FIELD_SORT_TYPE: 'SORT',
    FIELD_FILTER_TYPE: 'FILTER',
    FIELD_DATE_RANGE_DIMENSION_TYPE: 'DATE_RANGE_DIMENSION',
    FIELD_OPTIONAL_METRIC_TYPE: 'OPTIONAL_METRIC',
    CHECKBOX: 'CHECKBOX',
    FONT_COLOR: 'FONT_COLOR',
    SELECT_SINGLE: 'SELECT_SINGLE',
    FILL_COLOR: 'FILL_COLOR',
    OPACITY: 'OPACITY',
    BORDER_COLOR: 'BORDER_COLOR',
    BORDER_RADIUS: 'BORDER_RADIUS',
    BORDER_WEIGHT: 'LINE_WEIGHT',
    LINE_STYLE: 'LINE_STYLE',
    FONT_FAMILY: 'FONT_FAMILY',
    FONT_SIZE: 'FONT_SIZE',
    CUSTOM_STYLE_SET: 'CUSTOM_STYLE_SET',
    LEGEND: 'LEGEND',
    CHART_STYLES: {
        // Table Styles
        TABLE_BAR: {
            style_id: 'sidebar-table-bar-tooltip',
            style_name: 'Table with Bars',
            icon: 'multicolor-icon-table-bar'
        },
        TABLE_HEATMAP: {
            style_id: 'sidebar-table-heatmap-tooltip',
            style_name: 'Table with Heatmap',
            icon: 'multicolor-icon-table-heatmap'
        },
        TABLE_NUMBER: {
            style_id: 'sidebar-table-number-tooltip',
            style_name: 'Table',
            icon: 'multicolor-icon-table-number'
        },

        // Scorecard
        SCORECARD: {
            style_id: 'sidebar-scorecard-tooltip',
            style_name: 'Scorecard',
            icon: 'multicolor-icon-scorecard'
        },
        SCORECARD_WITH_COMPACT_NUMBER: {
            style_id: 'sidebar-scorecard-compact-number-tooltip',
            style_name: 'Scorecard with compact number',
            icon: 'multicolor-icon-compact-number-scorecard'
        },

        // Line chart Styles
        TIME_SERIES_CHART: {
            style_id: 'sidebar-time-series-chart-tooltip',
            style_name: 'Time series chart',
            icon: 'multicolor-icon-time-series-chart'
        },
        SPARKLINE_CHART: {
            style_id: 'sidebar-sparkline-chart-tooltip',
            style_name: 'Sparkline chart',
            icon: 'multicolor-icon-sparkline-chart'
        },
        SMOOTHED_TIME_SERIES_CHART: {
            style_id: 'sidebar-smoothed-time-series-chart-tooltip',
            style_name: 'Smoothed time series chart',
            icon: 'multicolor-icon-smoothed-time-series-chart'
        },
        COMBO_CHART: {
            style_id: 'sidebar-combo-chart-tooltip',
            style_name: 'Combo chart',
            icon: 'multicolor-icon-combo-chart'
        },
        STACKED_COMBO_CHART: {
            style_id: 'sidebar-stacked-combo-chart-tooltip',
            style_name: 'Stacked Combo chart',
            icon: 'multicolor-icon-stacked-combo-chart'
        },
        LINE_CHART: {
            style_id: 'sidebar-line-chart-tooltip',
            style_name: 'Line chart',
            icon: 'multicolor-icon-line-chart'
        },
        SMOOTHED_LINE_CHART: {
            style_id: 'sidebar-smoothed-line-chart-tooltip',
            style_name: 'Smoothed line chart',
            icon: 'multicolor-icon-smoothed-line-chart'
        },

        // Bar chart Styles
        COLUMN_CHART: {
            style_id: 'sidebar-column-chart-tooltip',
            style_name: 'Column chart',
            icon: 'multicolor-icon-column-chart'
        },
        STACKED_COLUMN_CHART: {
            style_id: 'sidebar-stacked-column-chart-tooltip',
            style_name: 'Stacked column chart',
            icon: 'multicolor-icon-stacked-column-chart'
        },
        HUNDRED_PERCENT_STACKED_COLUMN_CHART: {
            style_id: 'sidebar-hundred-percent-stacked-column-chart-tooltip',
            style_name: '100% stacked column chart',
            icon: 'multicolor-icon-hundred-percent-stacked-column-chart'
        },
        BAR_CHART: {
            style_id: 'sidebar-default-bar-chart-tooltip',
            style_name: 'Bar chart',
            icon: 'multicolor-icon-bar-chart'
        },
        STACKED_BAR_CHART: {
            style_id: 'sidebar-stacked-bar-chart-tooltip',
            style_name: 'Stacked bar chart',
            icon: 'multicolor-icon-stacked-bar-chart'
        },
        HUNDRED_PERCENT_STACKED_BAR_CHART: {
            style_id: 'sidebar-hundred-percent-stacked-nar-chart-tooltip',
            style_name: '100% stacked bar chart',
            icon: 'multicolor-icon-hundred-percent-stacked-bar-chart'
        },

        // Pie chart Styles
        PIE_CHART: {
            style_id: 'sidebar-pie-chart-tooltip',
            style_name: 'Pie chart',
            icon: 'multicolor-icon-pie-chart'
        },
        DONUT_CHART: {
            style_id: 'sidebar-donut-chart-tooltip',
            style_name: 'Donut chart',
            icon: 'multicolor-icon-donut-chart'
        },

        // Geomap
        GEOMAP: {
            style_id: 'sidebar-geomap-tooltip',
            style_name: 'Geo map',
            icon: 'multicolor-icon-geomap'
        },

        // Area chart
        AREA_CHART: {
            style_id: 'sidebar-default-area-tooltip',
            style_name: 'Area chart',
            icon: 'multicolor-icon-area-chart'
        },
        STACKED_AREA_CHART: {
            style_id: 'sidebar-stacked-area-tooltip',
            style_name: 'Stacked area chart',
            icon: 'multicolor-icon-stacked-area-chart'
        },
        HUNDRED_PERCENT_STACKED_AREA_CHART: {
            style_id: 'sidebar-hundred-percent-stacked-area-tooltip',
            style_name: '100% stacked area chart',
            icon: 'multicolor-icon-hundred-percent-stacked-area-chart'
        },

        // Scatter chart
        SCATTER_CHART: {
            style_id: 'sidebar-default-scatter-chart-tooltip',
            style_name: 'Scatter',
            icon: 'multicolor-icon-scatter-chart'
        },
        BUBBLE_CHART: {
            style_id: 'sidebar-bubble-chart-tooltip',
            style_name: 'Bubble chart',
            icon: 'multicolor-icon-bubble-chart'
        },

        // Pivot table
        PIVOT_TABLE: {
            style_id: 'sidebar-default-pivot-table-tooltip',
            style_name: 'Pivot table',
            icon: 'multicolor-icon-pivot-table'
        },
        PIVOT_TABLE_WITH_BAR: {
            style_id: 'sidebar-pivot-table-with-bars-tooltip',
            style_name: 'Pivot table with bars',
            icon: 'multicolor-icon-pivot-table-with-bar'
        },
        PIVOT_TABLE_WITH_HEATMAP: {
            style_id: 'sidebar-pivot-table-with-heatmap-tooltip',
            style_name: 'Pivot table with heatmap',
            icon: 'multicolor-icon-pivot-table-with-heatmap'
        },

        // Bullet chart
        BULLET_CHART: {
            style_id: 'sidebar-default-bullet-tooltip',
            style_name: 'Bullet chart',
            icon: 'multicolor-icon-bullet-chart'
        },

        // Treemap
        TREEMAP: {
            style_id: 'sidebar-treemap-tooltip',
            style_name: 'Tree map',
            icon: 'multicolor-icon-treemap'
        },

        // Sunburst chart
        SUNBURST_CHART: {
            style_id: 'sidebar-sunburst-chart-with-missing-data-tooltip',
            style_name: 'Sunburst with missing data',
            icon: 'multicolor-icon-sunburst-chart'
        },
        SUNBURST_CHART_WITH_MISSING_DATA: {
            style_id: 'sidebar-default-sunburst-chart-tooltip',
            style_name: 'Sunburst',
            icon: 'multicolor-icon-missing-data-sunburst-chart'
        },

        // Heatmap
        HEATMAP: {
            style_id: 'sidebar-default-heatmap-chart-tooltip',
            style_name: 'Heatmap',
            icon: 'multicolor-icon-heatmap'
        }
    }
};

export const masterDateRange = {
    CUSTOM: {label: 'Custom', key: 'custom'},
    TODAY:  {label: 'Today', key: 'today'},
    YESTERDAY: {label: 'Yesterday', key: 'yesterday'},
    SUN_TODAY: {label: 'This week (Sun - Today)', key: 'sun_today'},
    MON_TODAY: {label: 'This week (Mon - Today)', key: 'mon_today'},
    LAST_7_DAY: {label: 'Last 7 days', key: 'last_7_day'},
    LAST_WEEK_SUN_SAT: {label: 'Last week (Sun - Sat)', key: 'last_week_sun_sat'},
    LAST_WEEK_MON_SUN: {label: 'Last week (Mon - Sun)', key: 'last_week_mon_sun'},
    LAST_BUSINESS_WEEK: {label: 'Last business week (Mon - Fri)', key: 'last_business_week'},
    LAST_14_DAY: {label: 'Last 14 days', key: 'last_14_day'},
    THIS_MONTH: {label: 'This month', key: 'this_month'},
    LAST_30_DAY: {label: 'Last 30 days', key: 'last_30_day'},
    LAST_MONTH: {label: 'Last month', key: 'last_month'}

};

export const chartTypes = {
    TABLE: {
        label: 'Table',
        key: 'TABLE'
    },
    SCORE_CARD: {
        label: 'Scorecard',
        key: 'SCORE_CARD'
    },
    LINE_CHART: {
        label: 'Line chart',
        key: 'LINE_CHART'
    },
    BAR_CHART: {
        label: 'Bar chart',
        key: 'BAR_CHART'
    },
    PIE_CHART: {
        label: 'Pie chart',
        key: 'PIE_CHART'
    },
    GEO_MAP: {
        label: 'Geo map',
        key: 'GEO_MAP'
    },
    AREA_CHART: {
        label: 'Area chart',
        key: 'AREA_CHART'
    },
    SCATTER_CHART: {
        label: 'Scatter chart',
        key: 'SCATTER_CHART'
    },
    PIVOT_CHART: {
        label: 'Pivot Table',
        key: 'PIVOT_CHART'
    },
    BULLET_CHART: {
        label: 'Bullet chart',
        key: 'BULLET_CHART'
    },
    TREE_MAP: {
        label: 'Tree map',
        key: 'TREE_MAP'
    },
    SUNBURST_CHART: {
        label: 'Sunburst chart',
        key: 'SUNBURST_CHART'
    },
    HEAT_MAP: {
        label: 'Heat map',
        key: 'HEAT_MAP'
    },
    MASTER_DATE_RANGE: {
        label: 'Master Date Range',
        key: 'MASTER_DATE_RANGE'
    }
};

export const api = {
    REPORT_INFO: '/api/report/index/**',
    PERFORMANCE: '/api/v2/report/performance**',
    LOGGING: 'https://sandbox-adx.ants.vn/logging/**',
    PACKAGE_USER: '**/package/api/client/user-package/**'
};

export const commonDataConfig = {
    AGGREGATION_TYPE: {
        NONE: {
            label: 'None'
        },
        COUNT: {
            label: 'Count'
        },
        COUNT_DISTINCT: {
            label: 'Count Distinct'
        },
        SUM: {
            label: 'Sum'
        },
        AVERAGE: {
            label: 'Average'
        },
        MIN: {
            label: 'Min'
        },
        MAX: {
            label: 'Max'
        },
        AUTO: {
            label: 'Auto'
        }
    },
    DATA_TYPE: {
        CURRENCY: {
            label: 'Currency'
        },
        NUMBER: {
            label: 'Number'
        },
        PERCENT: {
            label: 'Percent'
        },
        DATE: {
            label: 'Date'
        }
    },
    DEFAULT_DATE_RANGE: {
        AUTO: {
            label: 'Auto'
        },
        CUSTOM: {
            label: 'Custom',

            TODAY: {
                label: 'Today'
            },
            YESTERDAY: {
                label: 'Yesterday'
            },
            SUN_TODAY: {
                label: 'This week (Sun - Today)'
            },
            MON_TODAY: {
                label: 'This week (Mon - Today)'
            },
            LAST_7_DAY: {
                label: 'Last 7 days'
            },
            LAST_WEEK_SUN_SAT: {
                label: 'Last week (Sun - Sat)'
            },
            LAST_WEEK_MON_SUN: {
                label: 'Last week (Mon - Sun)'
            },
            LAST_BUSINESS_WEEK: {
                label: 'Last business week (Mon - Fri)'
            },
            LAST_14_DAY: {
                label: 'Last 14 days'
            },
            THIS_MONTH: {
                label: 'This month'
            },
            LAST_30_DAY: {
                label: 'Last 30 days'
            },
            LAST_MONTH: {
                label: 'Last month'
            }
        }
    },
    SORT_DIRECTION: {
        ASCENDING: {
            label: 'Ascending'
        },
        DESCENDING: {
            label: 'Descending'
        }
    }
};

export const commonStyleConfig = {
    DECIMAL_PRECISION_COMPACT: {
        AUTO: {
            label: 'Auto'
        },
        0: {
            label: '0'
        },
        1: {
            label: '1'
        },
        2: {
            label: '2'
        },
        3: {
            label: '3'
        }
    },
    DECIMAL_PRECISION_NO_COMPACT: {
        AUTO: {
            label: 'Auto'
        },
        0: {
            label: '0'
        },
        1: {
            label: '1'
        },
        2: {
            label: '2'
        },
        3: {
            label: '3'
        },
        4: {
            label: '4'
        },
        5: {
            label: '5'
        },
        6: {
            label: '6'
        },
        7: {
            label: '7'
        },
        8: {
            label: '8'
        }
    },
    LEGEND_ALIGNMENTS: {
        TOP: {label: 'Top'},
        MIDDLE: {label: 'Middle'},
        BOTTOM: {label: 'Bottom'}
    },
    LEGEND_POSITIONS: {
        RIGHT: 'right',
        LEFT: 'left',
        BOTTOM: 'bottom',
        TOP: 'top',
        CENTER: ''
    }
};

export const pieStyleConfig = {
    COLOR_BY_OPTIONS: {
        SINGLE_COLOR: {label: 'Single color'},
        SLICE_ORDER: {label: 'Slice order'},
        DIMENSION_VALUES: {label: 'Dimension color'}
    },
    SLICE_LABEL_OPTIONS: {
        NONE: {
            label: 'None'
        },
        PERCENTAGE: {
            label: 'Percentage'
        },
        LABEL: {
            label: 'Label'
        },
        VALUE: {
            label: 'Value'
        }
    }
};

export const tableStyleConfig = {
    TABLE_COLUMN_OPTIONS: {
        NUMBER: {
            label: 'Number'
        },
        HEATMAP: {
            label: 'Heat map'
        },
        BAR: {
            label: 'Bar'
        }
    }
};
