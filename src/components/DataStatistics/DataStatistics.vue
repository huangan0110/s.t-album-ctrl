<template>
  <div class="data_account">
    <div class="card">
      <div class="click_volume" >
        <div class="header">
          <span>最近一周新增用户数量</span>
        </div>
        
        <div id="test1" class="click_echarts"></div>
      </div>
      <div class="click_volume" >
        <div class="header">
          <span>最近一周新增用户数量</span>
        </div>
        <div id="test2" class="click_echarts"></div>
      </div>
      <div class="click_volume" >
        <div class="header">
          <span>最近一周磁盘使用量 (MB)</span>
        </div>
        <div id="test3" class="click_echarts"></div>
      </div>
      <div class="click_volume" >
        <div class="header">
          <span>最近一周访问来源</span>
        </div>
        <div id="test4" class="click_echarts"></div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      yData:[820, 932, 901, 934, 1290, 1330, 1320],
    }
  },
  mounted(){
    var xData = [];
    for(var i=-6;i<1;i++){
      xData.push(this.getDay(i));
    }
    this.drawLine('test1','line','点击量',this.yData,xData)
    this.drawLine('test2','bar','新增用户数量',this.yData,xData)
    this.drawLine('test3','line','磁盘使用量',this.yData,xData)
    this.drawCircle('test4')
  },
  methods: {
    getDay(day){
      var today = new Date();
      var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
      today.setTime(targetday_milliseconds); //注意，这行是关键代码
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tMonth+"."+tDate;
    },
    doHandleMonth(month){
      var m = month;
      if(month.toString().length == 1){
      m = "0" + month;
    }
      return m;
    },
    drawLine(domID, etype, tip, yData,xData){
       // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(domID))
            // 绘制图表
        myChart.setOption({
            title: { text: this.title },
            tooltip: {},
            xAxis: {
                data: xData
            },
            grid: {
              left:'5%',
              right: '5%',
              top: '10%',
              bottom: '6%',
		          containLabel: true
            },
            yAxis: {},
            series: [{
                barWidth:20,
                name: tip,
                type: etype,
                data: yData
            }]
        });
    },
    drawCircle(domID){
      let myChart = this.$echarts.init(document.getElementById(domID))
      myChart.setOption({
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          top: 40,
          orient: 'vertical',
          left:20,
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
            }
        ]
      })
    }
  }
}
</script>

<style scoped lang="scss">
.data_account {
  position: relative; 
  height: 100%;
  min-width: 1200px;
  overflow: hidden;
  .card {
      .click_volume {
      float: left;
      position: relative;
      width: 49%;
      height: 290px;
      background-color: #fff;
      margin-right: 12px;
      margin-top: 10px;
      .click_echarts {
        position: absolute;
        width: 100%;
        height: 240px;
        margin-top: 40px;
        background-color: #fff;
      }
      .header {
        margin: 0;
        position: absolute;
        width: 100%;
        height: 40px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid #f6f6f6;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        z-index: 9;
        span {
          position: absolute;
          padding-top: 10px;
          padding-left: 20px;
        }
      }
    }
  }
  
}
</style>