window.onload = function() {
    oBtn1 = document.getElementById('btn_first');
    oBtn2 = document.getElementById('btn_second');
    oBtn3 = document.getElementById('btn_third');
    oBtn4 = document.getElementById('btn_fourth');
    oShow1 = document.getElementById('show_first');
    oShow2 = document.getElementById('show_second');
    oShow3 = document.getElementById('show_third');
    oShow4 = document.getElementById('show_fourth');
    oshow = document.getElementById('select_show');
    oshows = oshow.children;
    oUl = document.getElementById('ull');
    oBtns = oUl.getElementsByTagName("li");
    oIcon1s = oUl.getElementsByTagName("span");
    oIcon2s = oUl.getElementsByTagName("i");
    for (var i = 0; i < oBtns.length; i++) {
        (function(index) {
            // oBtns[i].index=i;
            oBtns[i].onmouseover = function() {
                for (var i = 0; i < oBtns.length; i++) {
                    oIcon1s[i].style.display = 'block';
                    oBtns[i].style.backgroundColor = '';
                    oBtns[i].style.color = '';
                    oIcon2s[i].style.display = 'none';
                    oshows[i].style.display = 'none';
                }
                this.style.backgroundColor = '#DDD';
                this.style.color = 'black';
                oIcon1s[index].style.display = 'none';
                oIcon2s[index].style.display = 'block';
                oshows[index].style.display = 'block';
            }
            oBtns[i].onmouseout = function() {
                for (var i = 0; i < oBtns.length; i++) {
                    oBtns[i].style.backgroundColor = '';
                    oBtns[i].style.color = '';
                    oshows[i].style.display = 'none';
                }
                oshows[index].style.display = 'block';
                this.style.backgroundColor = '#DDD';
                this.style.color = 'black';
                oIcon1s[index].style.display = 'none';
                oIcon2s[index].style.display = 'block';
            }
        })(i);
    }

    //  oBtn1.onclick=function(){
    //     oBtn1.style.backgroundColor='#ddd';
    //     oShow2.style.display="none";
    //     oShow3.style.display="none";
    //     oShow4.style.display="none";
    //     oShow1.style.display="block";
    //     oBtn2.style.backgroundColor='white';
    //     oBtn3.style.backgroundColor='white';
    //     oBtn4.style.backgroundColor='white';

    // }
    // oBtn2.onclick=function(){
    //     oBtn2.style.backgroundColor='#ddd';
    //     oShow1.style.display="none";
    //     oShow3.style.display="none";
    //     oShow4.style.display="none";
    //     oShow2.style.display="block";
    //     oBtn1.style.backgroundColor='white';
    //     oBtn3.style.backgroundColor='white';
    //     oBtn4.style.backgroundColor='white';
    //     oShow1.style.display="none";
    //     oShow3.style.display="none";
    //     oShow4.style.display="none";
    // }
    //  oBtn3.onclick=function(){
    //     oBtn3.style.backgroundColor='#ddd';
    //     oShow3.style.display="block";
    //     oBtn1.style.backgroundColor='white';
    //     oBtn2.style.backgroundColor='white';
    //     oBtn4.style.backgroundColor='white';
    //     oShow1.style.display="none";
    //     oShow2.style.display="none";
    //     oShow4.style.display="none";
    // }
    //  oBtn4.onclick=function(){
    //     oBtn4.style.backgroundColor='#ddd';
    //     oShow4.style.display="block";
    //     oBtn1.style.backgroundColor='white';
    //     oBtn2.style.backgroundColor='white';
    //     oBtn3.style.backgroundColor='white';
    //     oShow1.style.display="none";
    //     oShow2.style.display="none";
    //     oShow3.style.display="none";
    // }
}

function initChart(id) {
    //上层的左侧
    var myChart1 = echarts.init(document.getElementById("top_left"), 'roma');
    option1 = {
        title: {
            text: '游客旅游时间',
            x: 'left',
            y: '0px',
            textStyle: {
                fontSize: '20',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}%"
        },
        legend: {
            orient: 'vertical',
            x: '80%',
            y: '8%',
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            },
            data: ['第一季度', '第二季度', '第三季度', '第四季度']
        },
        series: [{
            name: '旅游时间',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['45%', '53.5%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left'
                },
                emphasis: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        fontSize: '30',
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
                value: 32.86,
                name: '第一季度'
            }, {
                value: 26.20,
                name: '第二季度'
            }, {
                value: 31.09,
                name: '第三季度'
            }, {
                value: 10.05,
                name: '第四季度'
            }]
        }]
    };
    myChart1.setOption(option1);

    //上层的右侧
    var myChart2 = echarts.init(document.getElementById("top_right"), 'roma');
    option2 = {
        title: {
            text: '游客滞留时长',
            x: 'left',
            y: '0px',
            textStyle: {
                fontSize: '20',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}%"
        },
        legend: {
            orient: 'vertical',
            x: '80%',
            y: '8%',
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            },
            data: ['1天', '2-3天', '4-5天', '5天以上']
        },
        series: [{
            name: '滞留时长',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['45%', '53.5%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left'
                },
                emphasis: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        fontSize: '30',
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
                value: 23,
                name: '1天'
            }, {
                value: 34,
                name: '2-3天'
            }, {
                value: 28,
                name: '4-5天'
            }, {
                value: 15,
                name: '5天以上'
            }]
        }]
    };
    myChart2.setOption(option2);

    //中间层左侧
    var myChart3 = echarts.init(document.getElementById("show_first"), 'roma');
    option3 = {
        title: {
            text: '人生阶段展示图',
            x: 'center',
            textStyle: {
                fontSize: '20',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            },
            data: ['初中', '高中', '大学', '备婚', '已婚', '有小孩']
        },
        series: [{
            name: '人生阶段',
            type: 'pie',
            radius: '55%',
            center: ['50%', '55%'],
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                value: 3.95,
                name: '初中'
            }, {
                value: 11.75,
                name: '高中'
            }, {
                value: 12.99,
                name: '备婚'
            }, {
                value: 6.95,
                name: '备孕'
            }, {
                value: 29.21,
                name: '孕期'
            }, {
                value: 17.57,
                name: '家有0-6小孩'
            }, {
                value: 8.63,
                name: '家有初中生'
            }, {
                value: 8.94,
                name: '家有高中生'
            }],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    myChart3.setOption(option3);

    //中间的右侧
    var myChart4 = echarts.init(document.getElementById("show_second"), 'roma');
    option4 = {
        title: {
            text: '行业分布',
            x: '28%',
            textStyle: {
                fontSize: '20',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            },
            data: ['其他职业', '企事业管理人员', '专业/文教科技人员', '服务销售人员', '学生', '工人', '离退休工人', '公务员', '农民', '军人']
        },
        series: [{
            name: '行业',
            type: 'pie',
            radius: '55%',
            center: ['40%', '55%'],
            data: [{
                value: 19.89,
                name: '其他职业'
            }, {
                value: 16.17,
                name: '企事业管理人员'
            }, {
                value: 13.92,
                name: '专业/文教科技人员'
            }, {
                value: 13.11,
                name: '服务销售人员'
            }, {
                value: 9.82,
                name: '离退休工人'
            }, {
                value: 8.04,
                name: '工人'
            }, {
                value: 7.51,
                name: '学生'
            }, {
                value: 6.76,
                name: '公务员'
            }, {
                value: 3.91,
                name: '农民'
            }, {
                value: 0.88,
                name: '军人'
            }],
            label: {
                normal: {
                    show: true,
                    position: 'left'
                },
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
    myChart4.setOption(option4);

    //下层的左侧
    var myChart5 = echarts.init(document.getElementById("show_third"), 'roma');
    option5 = {
        title: {
            text: '旅游方式',
            x: 'center',
            textStyle: {
                fontSize: '20',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}%"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                fontFamily: 'Microsoft Yahei',
                color: '#333'
            },
            data: ['散客', '团队']
        },
        series: [{
            name: '旅游方式',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'right'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
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
                value: 82.24,
                name: '散客'
            }, {
                value: 15.76,
                name: '团队'
            }]
        }]
    };
    myChart5.setOption(option5);

    //下层的右侧
    var myChart6 = echarts.init(document.getElementById("show_fourth"), 'roma');
    option6 = {
        title: {
            text: '出行方式',
            x: 'center',
            textStyle: {
                fontSize: '20',
                fontWeight: 'normal',
                fontFamily: '微软雅黑'
            }
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: ['比例']
        },
        // grid: {
        //     left: '2%',
        //     right: '2%',
        //     top: '0%',
        //     containLabel: true
        // },
        radar: {
            name: {
                textStyle: {
                    color: '#333',
                    fontSize: '16'
                }
            },
            polar: {
                x: '20',
                y: '20'
            },
            center: ['50%', '55%'],
            shape: 'circle',
            indicator: [{
                name: '火车',
                max: 60
            }, {
                name: '客车',
                max: 60
            }, {
                name: '自驾',
                max: 60
            }, {
                name: '电动车',
                max: 60
            }, {
                name: '公交车',
                max: 60
            }, {
                name: '出租车',
                max: 60
            }]
        },
        series: [{
            name: '所占比例',
            type: 'radar',
            areaStyle: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            center: ['50%', '60%'],
            avoidLabelOverlap: true,
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'center'
            //     }
            // },
            data: [{
                value: [53, 21.2, 11.2, 4.6, 5.43, 4.57]
            }],
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0)'
                }
            }
        }]
    };
    myChart6.setOption(option6);
}