function initRelationChart() {
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
        // title: {
        //     show:false,
        //     text: '红河州景区搜索排名',
        //     x: 'center',
        //     y: 'top',
        //     textStyle: {
        //         fontSize:20,
        //         fontWeight: 'bold',
        //         fontFamily:'微软雅黑'
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        // legend: {
        //     show:false,
        //     x: 'left',
        //     selected: {
        //         '朋友': true,
        //         '景区': true
        //     },
        //     data: ['景区']
        // },
        isShowScrollBar: false,
        series: [{
            type: 'kforce',
            categories: [{
                name: '景区',
                itemStyle: {
                    normal: {
                        color: '#ff7f50'
                    }
                }
            }, {
                name: '景区及搜索次数',
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
                    name: '搜索排名',
                    value: 10,
                    shapeType: 'rectangle',
                    onclick: function(params) {
                        // alert(params.target.style.text);
                        params.target.style.text = "搜索排名";
                    },
                    itemStyle: {
                        normal: {
                            width: 80,
                            height: 80,
                            radius: 50,
                            color:'#c00009'
                        }
                    }
                }, {
                    category: 1,
                    name: '燕子洞：日均搜索量668',
                    value: 3,
                    shapeType: 'ellipse',
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color:'#8cc63e'
                        }
                    }
                }, {
                    category: 1,
                    name: '弥勒湖泉生态景区：日均搜索量132',
                    value: 3,
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color:'#89263d'
                        }
                    }
                }, {
                    category: 1,
                    name: '阿庐古洞：日均搜索量326',
                    value: 3,
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color:'#c5ae81'
                        }
                    }
                }, {
                    category: 1,
                    name: '建水文庙：日均搜索量190',
                    value: 3,
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color:'#c9c9c9'
                        }
                    }
                }, {
                    category: 1,
                    name: '哈尼梯田：日均搜索量148',
                    value: 3,
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color:'#a4d8c2'
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
    var option40 = {
        // title: {
        //     show:false,
        //     text: '红河州景区收入排名',
        //     x: 'center',
        //     y: 'top',
        //     textStyle: {
        //         fontSize:20,
        //         fontWeight: 'bold',
        //         fontFamily:'微软雅黑'
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        // legend: {
        //     x: 'left',
        //     selected: {
        //         '朋友': true,
        //         '收入': true
        //     },
        //     data: ['收入']
        // },
        isShowScrollBar: false,
        series: [{
            type: 'kforce',
            categories: [{
                name: '收入',
                itemStyle: {
                    normal: {
                        color: '#ff7f50'
                    }
                }
            }, {
                name: '景区及收入',
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
                    name: '收入排名',
                    nameTextStyle:{
                        color:'#fff'
                    },
                    value: 10,
                    shapeType: 'rectangle',
                    onclick: function(params) {
                        alert(params.target.style.text);
                        params.target.style.text = "收入排名";
                    },
                    itemStyle: {
                        normal: {
                            width: 80,
                            height: 80,
                            radius: 50,
                            color:'#c00009'
                        }
                    }
                }, {
                    category: 1,
                    name: '弥勒湖泉生态景区：89533.95万元',
                    value: 3,
                    shapeType: 'ellipse',
                    itemStyle: {
                        normal: {
                            a: 20,
                            b: 20,
                            color:'#8cc63e'
                        }
                    }
                }, {
                    category: 1,
                    name: '金平蝴蝶谷：28764.98万元',
                    value: 3,
                    itemStyle: {
                        normal: {
                            color:'#89263d'
                        }
                    }
                }, {
                    category: 1,
                    name: '泸西阿庐古洞：16989.92万元',
                    value: 3,
                    itemStyle: {
                        normal: {
                            color:'#c5ae81'
                        }
                    }
                }, {
                    category: 1,
                    name: '元阳哈尼梯田：11027.51万元',
                    value: 3,
                    itemStyle: {
                        normal: {
                            color:'#c9c9c9'
                        }
                    }
                }, {
                    category: 1,
                    name: '建水朱家花园：6212.09万元',
                    value: 3,
                    itemStyle: {
                        normal: {
                            color:'#a4d8c2'
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
            var myChart1 = ec.init(document.getElementById('relationship2'));
            myChart1.setOption(option40);
        }
    )

}


function initChart(id) {


    var myChart1 = echarts.init(document.getElementById('oneChart'),'roma');

    // 指定图表的配置项和数据
    var option1 = {
        title: {
            show: false,
            text: '游客收入在GDP中的占比',
            // textAlign:'center'
            left: 150,
            padding: 3,
            top: 0
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                },
                magicType: {
                    show: false,
                    type: ['line', 'bar']
                },
                restore: {
                    show: false
                },
                saveAsImage: {
                    show: false
                }
            }
        },
        // grid: {
        //     left: '3%',
        //     right: '4%',
        //     top: '0%',
        //     containLabel: true
        // },
        legend: {
            show: true,
            data: ['占总收入的百分比', '占总收入的变化趋势'],
            orient: 'vertical',
            x: 'right',
            y: 'top',
            textStyle: {
                fontSize: 14
            }
        },
        xAxis: [{
            type: 'category',
            data: ['2013年', '2014年', '2015年'],
            min: 0,
            max: 15,
            interval: 5,
            axisLabel: {
                show: true,
                interval: 'auto',
                inside: false,
                rotate: 0,
                margin: 8,
                formatter: null,
                textStyle: {
                    // color: ,
                    // fontStyle: 'normal',
                    // fontWeight: normal,
                    // fontFamily: 'sans-serif',
                    fontSize: 12,
                },
            },
        }],
        yAxis: [{
            type: 'value',
            name: '旅游收入（亿）',
            min: 0,
            max: 200,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            },
            axisLabel: {
                show: true,
                interval: 'auto',
                inside: false,
                rotate: 0,
                margin: 8,
                formatter: null,
                textStyle: {
                    color: '',
                    // fontStyle: 'normal',
                    // fontWeight: normal,
                    // fontFamily: 'sans-serif',
                    fontSize: 12
                }
            },
            nameTextStyle: {
                // color: ...,
                // fontStyle: 'normal',
                // fontWeight: normal,
                // fontFamily: 'sans-serif',
                fontSize: 14
            }
        }, {
            type: 'value',
            name: '百分比增长趋势',
            min: 0,
            max: 20,
            interval: 5,
            axisLabel: {
                formatter: '{value}% '
            },
            nameTextStyle: {
                // color: ...,
                // fontStyle: 'normal',
                // fontWeight: normal,
                // fontFamily: 'sans-serif',
                fontSize: 14
            }
        }],
        grid: {
            left: '13%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        series: [{
                name: '旅游收入（亿）',
                type: 'bar',
                barWidth: 30,
                data: [137, 157.57, 191.63],
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: ''
                    }
                }
            },

            {
                name: '占总收入百分比',
                type: 'line',
                yAxisIndex: 1,
                data: [13.5, 14.1, 15.7]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);

    var myChart2 = echarts.init(document.getElementById('twoChart'),'roma');

    // 指定图表的配置项和数据
    var option2 = {
        title: {
            show: false,
            text: '消费数据占比图',
            left: 160,
            subtext: '',
            itemGap: 50,
        },
        tooltip: {},
        legend: {
            data: ['红河州', '蒙白市'],
            orient: 'vertical',
            x: 'right',
            y: 'top',
            textStyle: {
                fontSize: 14,
                color:'#666'
            }

        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '',
                    fontSize: 16
                }
            },
            indicator: [{
                name: '购',
                max: 20

            }, {
                name: '娱',
                max: 20
            }, {
                name: '游',
                max: 20
            }, {
                name: '行',
                max: 20
            }, {
                name: '住',
                max: 20
            }, {
                name: '吃',
                max: 20
            }, ]
        },
        series: [{
            name: '消费数据',
            type: 'radar',

            // areaStyle: {normal: {}},
            data: [{
                value: [16, 16, 16, 20, 18, 14],
                name: '红河州'
            }, {
                value: [14, 21, 14, 15, 20, 16],
                name: '蒙白市'
            }]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);

}

function showChart() {
    var myChart7 = echarts.init(document.getElementById('fiveChart'),'roma');

    // 指定图表的配置项和数据
    var option7 = {
        title: {
            show: false,
            text: '旅游资源占比/收入',
            left: 200
        },
        tooltip: {

            trigger: 'axis'
        },
        legend: {
            show: false,
            data: ['百分比']
        },
        toolbox: {
            show: false,
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['酒店', '旅行社', '美食', '租车', '其他']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '百分比',
            type: 'line',
            stack: '总量',
            areaStyle: {
                normal: {}
            },
            data: [28, 34.7, 22, 10.3, 5]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart7.setOption(option7);

    var myChart8 = echarts.init(document.getElementById('sixChart'),'roma');

    // 指定图表的配置项和数据
    var option8 = {
        title: {
            show: false,
            text: '客源地分布（万人比例）',
            left: 150
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical', 
            x: 'right',
            y: 'center',
            data: ['省内', '省外', '四川', '重庆', '广西', '广东', '贵州', '浙江', '北京', '湖南', '河北', '河南'],
            textStyle: {
                fontSize: 14
            }
        },
        grid: {
            left: '0%',
            right: '15%',
            bottom: '3%',
            containLabel: true
        },
        series: [{
            name: '访客来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 6616,
                    name: '省内',
                    selected: true
                }, {
                    value: 3384,
                    name: '省外'
                }

            ]
        }, {
            name: '访客来源',
            type: 'pie',
            radius: ['66.16%', '55%'],

            data: [{
                    value: 6616,
                    name: '省内'
                }, {
                    value: 470,
                    name: '四川'
                }, {
                    value: 284,
                    name: '重庆'
                }, {
                    value: 210,
                    name: '广西'
                }, {
                    value: 195,
                    name: '广东'
                }, {
                    value: 192,
                    name: '贵州'
                }, {
                    value: 189,
                    name: '浙江'
                }, {
                    value: 170,
                    name: '北京'
                }, {
                    value: 170,
                    name: '湖南'
                }, {
                    value: 133,
                    name: '河北'
                }, {
                    value: 133,
                    name: '河南'
                }


            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart8.setOption(option8);

    var myChart9 = echarts.init(document.getElementById('fiveChart2'),'roma');

    // 指定图表的配置项和数据
    var option9 = {
        title: {
            show: false,
            text: '游客性别比例（万人比例）',

            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            data: ['男性游客', '女性游客'],

            x: 'right',
            y: 'top',
            textStyle: {
                fontSize: 14
            }
        },
        series: [{
            name: '游客性别比例',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                    value: 5504,
                    name: '男性游客'
                }, {
                    value: 4496,
                    name: '女性游客'
                },

            ],
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
    myChart9.setOption(option9);

    var myChart10 = echarts.init(document.getElementById('sixChart2'),'roma');

    // 指定图表的配置项和数据
    var option10 = {
        title: {
            show: false,
            text: '游客年龄分布（万人比例）',

            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            data: ['15-24岁', '25-44岁', '45-64岁', '65岁及以上'],
            x: 'right',
            y: 'top',
            textStyle: {
                fontSize: 14
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                    value: 1633,
                    name: '15-24岁'
                }, {
                    value: 5623,
                    name: '25-44岁'
                }, {
                    value: 2497,
                    name: '45-64岁'
                }, {
                    value: 213,
                    name: '65岁及以上'
                }

            ],
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
    myChart10.setOption(option10);
}


function showChart1() {

    var myChart6 = echarts.init(document.getElementById('threeChart4'),'roma');

    // 指定图表的配置项和数据
    var option6 = {
        title: {
            show: false,
            text: '红河州接待完成率',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: false,
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: {
            show: false,
            data: ['接待人次', '同比增长率'],
            x: '450',
            y: 'top',
            orient: 'vertical'
        },
        xAxis: [{
            type: 'category',
            data: ['国内外旅游者', '海外旅游者', '国内旅游者', '过夜游客', '一日游客']
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
                barWidth: 30,
                data: [2587.14, 23.15, 2563.99, 1334.64, 1229.35]
            },

            {
                name: '同比增长率',
                type: 'line',
                yAxisIndex: 1,
                data: [21.23, 5.04, 21.45, 28.03, 15.03]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart6.setOption(option6);



}

function initLineChart() {
    var youkeChart = echarts.init(document.getElementById('youke_line_chart'),'roma');
    var option = {
        title: {
            show: false,
            text: '游客出行时间（万）',
            left: '150'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['高峰', '少数'],
            orient: 'vertical',
            x: 'right',
            y: 'top',
            textStyle: {
                fontSize: 14
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            name: '时间',
            type: 'category',
            boundaryGap: false,
            data: ['0', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '高峰',
            type: 'line',
            stack: '总量',
            areaStyle: {
                normal: {}
            },
            data: [0, 0, 0, 9, 10.3, 10.6, 10, 0, 10, 12.5, 12.1, 11, 10, ]
        }, {
            name: '少数',
            type: 'line',
            stack: '总量',
            areaStyle: {
                normal: {}
            },
            data: [1, 3, 5, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, ]
        }]
    };


    youkeChart.setOption(option);
}