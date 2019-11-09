<template>
  <div class="sys">
      <div class="ram_card">
          <div class="header">
              <span>磁盘使用</span>
          </div>
          <div class="card" id="disk"></div>
      </div>
      <div class="disk_card">
          <div class="header">
               <span>内存使用</span>
          </div>
          <div class="card" id="ram"></div>
      </div>
      <div class="cpu_card">
          <div class="header">
               <span>CPU</span> 
          </div>
          <div class="content" id="cpu"></div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            use:123,
            free:1231,
            cpuData:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,]
        }
    },
    created() {},
    mounted() {
        this.drawCircle('disk');
        this.drawCircle('ram');
        // this.drawLine('cpu');
        
    },
    methods: {
        add(){
            this.cpuData.shift();
            var data = this.cpuData.push(Math.random()*10);
            let myChart = this.$echarts.init(document.getElementById('cpu'));
            myChart.setOption({
            series: [{
                data: this.data
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
                data: ['已使用','未使用']
                },
                series : [
                    {
                        name: '使用情况',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:this.use, name:'已使用'},
                            {value:this.free, name:'未使用'},
                        ],
                    }
                ]
            })
        },
        drawLine(){
            let myChart = this.$echarts.init(document.getElementById('cpu'));
            function randomData() {
                now = new Date(+now + oneDay);
                console.log(now)
                value =  Math.random() * 10;
                return {
                    name: now.toString(),
                    value: [
                        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                        value
                    ]
                }
            }

            var data = [];
            var now = +new Date(1997, 9, 3);
            var oneDay = 24 * 3600 * 1000;
            var value = Math.random() * 10;
            for (var i = 0; i < 50; i++) {
                data.push(randomData());
            }

            let option = {
                title: {
                    // text: '动态数据 + 时间坐标轴'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        params = params[0];
                        var date = new Date(params.name);
                        return date.getDate() ;
                    },
                    axisPointer: {
                        animation: false
                    }
                },
                xAxis: {
                    type: 'time',
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                },
                series: [{
                    name: '模拟数据',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data
                }]
            };
            myChart.setOption(option),
            setInterval(function () {

                // for (var i = 0; i < 5; i++) {
                    data.shift();
                    data.push(randomData());
                

                myChart.setOption({
                    series: [{
                        type:'line',
                        data: data
                    }]
                });
            }, 1000);
        }
        //     drawLine(){
        //     let myChart = this.$echarts.init(document.getElementById('cpu'));
        //     let testData = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,]
        
        //     let Option = {
        //         title:{
        //             subtext: '% 利用率',
        //         },
        //         xAxis: {
        //             type: 'category',
        //             boundaryGap: false,
        //         },
        //         yAxis: {
        //             boundaryGap: [0, '100%'],
        //         },
        //         grid: {
        //             left:'2%',
        //             right: '2%',
        //             top: '13%',
        //             bottom: '6%',
        //             containLabel: true
        //         },
        //         series: [{
        //             name:'test',
        //             data:[1,2,3,5,6,23,44,5,4,4,1,33,33,44,11,2,33,4],
        //             type: 'line',
        //             showSymbol: false,
        //             hoverAnimation: false,
        //             // areaStyle: {},
        //             itemStyle:{
        //                 color:'rgb(179, 216, 255)',
                        
        //             },
        //             lineStyle:{width:1,color:'#409EFF'}
        //         }]
        //     };
        //     myChart.setOption(Option);
        //     setInterval(function () {

               
                   
        //             testData.push(Math.random()*10);
        //              testData.shift();
                

        //         myChart.setOption({
        //             series: [{
        //                 name:Math.random(),
        //                 type:'line',
        //                 data: testData
        //             }]
        //         });
        //     }, 1000);
        // }
    },
 
}
</script>

<style lang="scss">
.sys {
    position: relative;
    min-width: 1200px;
    .ram_card {
        position: relative;
        float: left;
        width: calc(49% + 12px);
        height: 290px;
        background-color: #fff;
    }
    .disk_card {
        position: relative;
        float: right;
        width: 49%;
        height: 290px;
        background-color: #fff;
    }

    
    .cpu_card {
        margin-top: 12px;
        position: relative;
        float: left;
        width: 100%;
        height: 320px;
        background-color: #fff;

        .content {
            margin-top: 41px;
            width: 100%;
            height: 280px;
        }
    }
    .card {
        margin-top: 41px;
        width: 100%;
        height: 249px;
        background-color: #fff;
    }
    .header {
        position: absolute;
        top: 0;
        width: 100%;
        height: 40px;
        font-size: 14px;
        z-index: 9;
        color: #333;
        background-color: #fff;
        border-bottom: 1px solid #f6f6f6;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        span {
            position: absolute;
            top: 10px;
            left: 10px;
        }
    }
}
</style>