function initRalation() {
    require.config({
        packages: [{
            name: 'echarts',
            location: './echarts/src',
            main: 'echarts'
        }, {
            name: 'zrender',
            location: './zrender/src',
            main: 'zrender'
        }]
    });
    var option = {
        title: {
            text: '',

            x: 'center',
            y: 'top'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        // legend: {
        //  x: 'right',
        //  selected:{'朋友':true,'公司':true},
        //  data:['公司'],
        //  textStyle: {
        //      fontSize: '14',
        //      fontWeight: 'normal',
        //      fontFamily:'Microsoft Yahei',
        //      color:'#333'
        //  }
        // },
        isShowScrollBar: false,
        series: [{
            type: 'kforce',
            categories: [{
                name: '公司',

                itemStyle: {
                    normal: {
                        color: '#ff7f50'

                    }
                }
            }, {
                name: '公司及收入',
                itemStyle: {
                    normal: {
                        color: '#ff7f50'
                    }
                }
            }],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#000000'
                        }
                    },
                    nodeStyle: {
                        brushType: 'both',
                        strokeColor: 'rgba(255,215,0,0.4)',
                        lineWidth: 2
                    }
                },
                emphasis: {
                    linkStyle: {
                        strokeColor: '#5182AB'
                    }
                }
            },
            minRadius: 15,
            maxRadius: 20,
            density: 0.8,
            attractiveness: 0.8,
            nodes: [{
                    category: 0,
                    name: '旅行社榜单',
                    value: 10,
                    shapeType: 'rectangle',
                    onclick: function(params) {
                        //                          alert(params.target.style.text);
                        params.target.style.text = "公司收入";

                    },
                    itemStyle: {
                        normal: {

                            width: 60,
                            height: 60,
                            radius: 32,
                            color: '#c00009'
                        }
                    }
                }, {
                    category: 1,
                    name: '红河康辉旅行社有限公司：1765万',
                    value: 3,
                    shapeType: 'ellipse',
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color: '#8cc63e'
                        }
                    }
                }, {
                    category: 1,
                    name: '弥勒风情旅行社有限责任公司：1532万',
                    value: 3,
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color: '#89263d'
                        }
                    }
                }, {
                    category: 1,
                    name: '红河州风光旅行社有限责任公司：1300万',
                    value: 3,
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color: '#c5ae81'
                        }
                    }
                }, {
                    category: 1,
                    name: '红河锡都旅行社：1187万',
                    value: 3,
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color: '#c9c9c9'
                        }
                    }
                }, {
                    category: 1,
                    name: '红河阳光旅行社有限公司：1025万',
                    value: 3,
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color: '#a4d8c2'
                        }
                    }
                },

            ],
            links: [{
                    source: 1,
                    target: 0,
                    weight: 1,
                    onclick: function(params) {
                        alert(params.target.style.text);
                    },
                }, {
                    source: 2,
                    target: 0,
                    weight: 3
                }, {
                    source: 3,
                    target: 0,
                    weight: 3
                }, {
                    source: 4,
                    target: 0,
                    weight: 3
                }, {
                    source: 5,
                    target: 0,
                    weight: 3
                }, {
                    source: 6,
                    target: 0,
                    weight: 3
                }, {
                    source: 7,
                    target: 0,
                    weight: 3
                }, {
                    source: 8,
                    target: 0,
                    weight: 3
                }, {
                    source: 9,
                    target: 0,
                    weight: 3
                }, {
                    source: 10,
                    target: 0,
                    weight: 3
                }

            ]
        }]
    };
    require(
        [
            'echarts',
            'echarts/chart/kforce',
        ],
        function(ec) {
            var myChart = ec.init(document.getElementById('relationship1'));
            myChart.setOption(option);
        }
    )
}

function initChart(id) {
    initPieChart();
    initRalation();
    var myChart11 = echarts.init(document.getElementById('oneoneChart'), 'roma');

    // 指定图表的配置项和数据
    var option11 = {

        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['一产总值', '二产总值', '三产总值'],
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }

        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '一产总值',
                type: 'bar',
                barWidth: 35,
                stack: '总产值',
                data: [101.9, 101.9, 101.9, 104, 107, 120, 101, 102, 234, 101.9, 101.8, 101.9],
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft Yahei',
                    color: '#333'
                }
            }, {
                name: '二产总值',
                type: 'bar',
                stack: '总产值',
                data: [101.9, 101.9, 203, 150.4, 129.3, 104, 106, 143, 106, 162.7, 103.9, 124.3],
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft Yahei',
                    color: '#333'
                }
            }, {
                name: '三产总值',
                type: 'bar',
                stack: '总产值',
                data: [220, 238, 106, 126, 129.3, 104, 214.9, 132.7, 103.1, 263.4, 187.4, 210.5],
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft Yahei',
                    color: '#333'
                }
            },



        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart11.setOption(option11);

    var myChart31 = echarts.init(document.getElementById('onethreeChart1'), 'roma');

    // 指定图表的配置项和数据
    var option31 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            data: ['接待人次', '同比增长率'],
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        },
        xAxis: [{
            type: 'category',
            data: ['接待人次', '海外旅游者', '国内旅游者', '过夜游客', '一日游客'],
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        }],
        yAxis: [{
            type: 'value',
            name: '接待人次',
            min: 0,
            max: 3000,
            interval: 500,
            axisLabel: {
                formatter: '{value}万 '
            }
        }, {
            type: 'value',
            name: '同比增长率',
            min: 0,
            max: 30,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }],
        series: [{
                name: '接待人次',
                type: 'bar',
                barWidth: 35,
                data: [2587.14, 23.15, 2563.99, 1334.64, 1229.35],
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft Yahei',
                    color: '#333'
                }
            },

            {
                name: '同比增长率',
                type: 'line',
                yAxisIndex: 1,
                data: [21.23, 5.04, 21.45, 28.03, 15.03],
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft Yahei',
                    color: '#333'
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart31.setOption(option31);

    var myChart32 = echarts.init(document.getElementById('onethreeChart2'), 'roma');

    // 指定图表的配置项和数据
    var option32 = {
        title: {
            text: '',

            x: 'center',
            y: 'top'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data: ['100元以内', '100-300元', '300-500元', '500-1000元'],
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        },
        series: [{
            name: '人均消费',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [{
                    value: 24,
                    name: '100元以内'
                }, {
                    value: 43,
                    name: '100-300元'
                }, {
                    value: 20,
                    name: '300-500元'
                }, {
                    value: 13,
                    name: '500-1000元'
                }

            ],

            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart32.setOption(option32);

    var myChart33 = echarts.init(document.getElementById('onethreeChart3'), 'roma');

    // 指定图表的配置项和数据
    var option33 = {
        title: {
            text: '',

            x: 'center',
            y: 'top'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data: ['酒店', '旅行社', '美食', '租车', '其他'],
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        },
        series: [{
            name: '旅游资源比例',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [{
                value: 28,
                name: '酒店'
            }, {
                value: 34.7,
                name: '旅行社'
            }, {
                value: 22,
                name: '美食'
            }, {
                value: 10.3,
                name: '租车'
            }, {
                value: 5,
                name: '其他'
            }],
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart33.setOption(option33);


    var myChart34 = echarts.init(document.getElementById('onethreeChart4'), 'roma');

    // 指定图表的配置项和数据
    var option34 = {
        title: {
            text: '人物关系：乔布斯',
            subtext: '数据来自人立方',
            x: 'right',
            y: 'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        toolbox: {
            show: true,
            feature: {
                restore: {
                    show: true
                },
                magicType: {
                    show: true,
                    type: ['force', 'chord']
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: {
            x: 'left',
            data: ['家人', '朋友']
        },
        series: [{
            type: 'force',
            name: "人物关系",
            ribbonType: false,
            categories: [{
                name: '人物'
            }],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    },
                    nodeStyle: {
                        brushType: 'both',
                        borderColor: 'rgba(255,215,0,0.4)',
                        borderWidth: 1
                    },
                    linkStyle: {
                        type: 'curve'
                    }
                },
                emphasis: {
                    label: {
                        show: false
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    nodeStyle: {
                        //r: 30
                    },
                    linkStyle: {}
                }
            },
            useWorker: false,
            minRadius: 25,
            maxRadius: 35,
            gravity: 1.1,
            scaling: 1.1,
            roam: 'move',
            nodes: [{
                category: 0,
                name: '乔布斯',
                value: 10,
                label: '乔布斯\n（主要）'
            }],
            links: [

            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart34.setOption(option34);
}

function initPieChart() {
    var chartId = "13Chart";
    for (var i = 0; i < 18; i++) {
        var myChart = echarts.init(document.getElementById(chartId + i));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                show:true,
                orient: 'vertical',
                x: 'right',
                data: ['收入增长', '景区'],
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft Yahei',
                    color: '#333'
                }
            },

            series: [{
                name: '收入',
                type: 'pie',
                radius: ['50%', '36%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: [{
                        value: 75,
                        name: '收入增长',
                        itemStyle: {
                            normal: {
                                color: '#000'
                            }
                        }
                    }, {
                        value: 25,
                        name: '景区',
                        itemStyle: {
                            normal: {
                                color: '#e5e5e5'
                            }
                        }
                    }

                ]
            }]
        };

        if(i==0||i==1||i==2) {
            option.series[0].data[0].itemStyle.normal.color = '#a4d8c2';
        } else if(i==3||i==4||i==5) {
            option.series[0].data[0].itemStyle.normal.color = '#c9c9c9';
        } else if(i==6||i==7||i==8) {
            option.series[0].data[0].itemStyle.normal.color = '#c5ae81';
        } else if(i==11||i==9||i==10) {
            option.series[0].data[0].itemStyle.normal.color = '#8cc63e';
        } else if(i==14||i==12||i==13) {
            option.series[0].data[0].itemStyle.normal.color = '#c00009';
        } else if(i==15||i==16||i==17) {
            option.series[0].data[0].itemStyle.normal.color = '#89263d';
        }

        myChart.setOption(option);
    }
}