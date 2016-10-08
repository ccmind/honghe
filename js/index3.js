window.onload=function(){
    oColor=document.getElementById('ditu_show');
    oHides=oColor.getElementsByTagName("div");
    oBtn=document.getElementById('show_three');
    oBtns=oBtn.getElementsByTagName("span");
    for(var i=0; i<oBtns.length; i++){
        (function(index){
            oBtns[i].onmouseover=function(){
                for(var i=0; i<oBtns.length; i++){
                    oBtns[i].className='nodid';
                    oHides[i].style.display='none';
                }
                this.className='active';
                oHides[index+1].style.display='block';  
            }
            oBtns[i].onmouseout=function(){
                for(var i=0; i<oBtns.length; i++){
                    oBtns[i].className='nodid';
                    oHides[i].style.display='none';
                }
                oHides[i].style.display='none';
                 oHides[0].style.display='block';  
            }
        })(i);
    }   
}
function initChart(id){
//上层的左侧
	var myChart4=echarts.init(document.getElementById("middle_ditu"),'roma');
	option4 = {
    title: {
        text: '一周游客人数预测',
        x:'center',
        y:'0%',
        textStyle:{
            fontSize:'22',
            fontWeight:'normal',
             fontFamily: 'Microsoft Yahei',
            color: '#333'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis:  {
        type: 'category',
        boundaryGap: true,
         textStyle:{
            fontSize:'14',
             fontFamily: 'Microsoft Yahei',
            color: '#333'
        },
        data: ['星期一','星期二','星期三','星期四','星期五','星期六', '星期日']
    },
    yAxis: {
        type: 'value',
         max: 15,
            min: 0,
        axisLabel: {
            formatter: '{value} W'
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: '#41AFB5'
        }, {
            gt: 6,
            lte: 8,
            color: '#EA7B8C'
        }, {
            gt: 8,
            lte: 12,
            color: '#g41AFB5'
        }]
    },
    series: [
        {
            name:'人数',
            type:'bar',
            barWidth:'30',
            // smooth: false,
            // radius: ['50%', '60%'],
             textStyle:{
            fontSize:'14',
           fontFamily: 'Microsoft Yahei',
                color: '#333'
        },
            data: [4,5.7,6.5,6,8.3,12,9.8],
            markArea: {
                data: [ [{
                    name: '高峰期',
                    xAxis: '星期五'
                }, {
                    xAxis: '星期日'
                }], [{
                    name: '低峰期',
                    xAxis: '星期一'
                }, {
                    xAxis: '星期二'
                }] ]
            }
        }
    ]
};

 myChart4.setOption(option4); 
}