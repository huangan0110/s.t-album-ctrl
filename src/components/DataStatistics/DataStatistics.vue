<template>
    <div class="data_account clearfix">
        <div class="card clearfix">
            <div class="click_volume clearfix">
                <div class="header">
                    <span class="iconfont ctrlicon" id="icon" style="font-weight:600"></span>
                    <span id="number">访问量</span>
                    <div class="check">
                        <el-radio-group v-model="viewsCheck" size="mini" @change="switchYM()">
                            <el-radio-button label="1">周</el-radio-button>
                            <el-radio-button label="2">月</el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div id="test1" class="click_echarts"></div>
            </div>
            <div class="click_volume">
                <div class="header">
                    <span class="iconfont ctrluser-plus" id="icon"></span>
                    <span id="number">新增用户量</span>
                    <div class="check">
                        <el-radio-group v-model="userCheck" size="mini" @change="switchUser()">
                            <el-radio-button label="1">周</el-radio-button>
                            <el-radio-button label="2">月</el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div id="test2" class="click_echarts"></div>
            </div>
            <div class="click_volume">
                <div class="header">
                    <span class="iconfont ctrlxiazai3" id="icon"></span>
                    <span id="number">下载量</span>
                    <div class="check">
                        <el-radio-group v-model="downloadCheck" size="mini">
                            <el-radio-button label="1">周</el-radio-button>
                            <el-radio-button label="2">月</el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div id="test3" class="click_echarts"></div>
            </div>
            <div class="click_volume">
                <div class="header">
                    <span class="iconfont ctrldengji1" id="icon"></span>
                    <span id="number">会员等级分布</span>
                </div>
                <div id="test4" class="click_echarts"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getViews,getUserNum,getVipDistribution} from '../api/api'
export default {
    data() {
        return {
            yData: [820, 932, 901, 934, 1290, 1330, 1320],
            viewsCheck: 1,
            userCheck:1,
            downloadCheck:1,
            viewsData:[],
            vipData:[
                { value: 0, name: "Lv.1" },
                { value: 0, name: "Lv.2" },
                { value: 0, name: "Lv.3" },
                { value: 0, name: "Lv.4" },
                { value: 0, name: "Lv.5" },
                { value: 0, name: "Lv.6" },
                { value: 0, name: "Lv.7" },
                { value: 0, name: "Lv.8" },
                { value: 0, name: "Lv.9" }
            ]
        };
    },
    created() {

    },
    mounted() {
        var xData = [];
        for (var i = -6; i < 1; i++) {
            xData.push(this.getDay(i));
        }

        let viewsDataNumber = [];
        let viewsDataDay = [];
        getViews("1","2").then(res => {
            for(let i=1; i<res.data.object.length; i++) {
                viewsDataNumber.push(res.data.object[i].number);
                viewsDataDay.push(res.data.object[i].time.slice(5,11))
            }
            this.drawLine("test1", "line", "访问量", viewsDataNumber,viewsDataDay );
        })


        let usersDataNumber = [];
        let usersDataDay = [];
        getUserNum("1","2").then(res => {
            for(let i=1; i<res.data.object.length; i++) {
                usersDataNumber.push(res.data.object[i].number);
                usersDataDay.push(res.data.object[i].time.slice(5,11))
            }
            this.drawLine("test2", "line", "新增用户量", usersDataNumber,usersDataDay );
        })

        getVipDistribution().then(res=> {
            for(let i=0; i<res.data.object.length; i++) {
                switch (res.data.object[i].title) {
                    case "Vip1":this.vipData[0].value = res.data.object[i].number;break;
                    case "Vip2":this.vipData[1].value = res.data.object[i].number;break;
                    case "Vip3":this.vipData[2].value = res.data.object[i].number;break;
                    case "Vip4":this.vipData[3].value = res.data.object[i].number;break;
                    case "Vip5":this.vipData[4].value = res.data.object[i].number;break;
                    case "Vip6":this.vipData[5].value = res.data.object[i].number;break;
                    case "Vip7":this.vipData[6].value = res.data.object[i].number;break;
                    case "Vip8":this.vipData[7].value = res.data.object[i].number;break;
                    case "Vip9":this.vipData[8].value = res.data.object[i].number;break;
                }
            }
            console.log(this.vipData);
            debugger;
            this.drawCircle("test4");
        })


        this.drawLine("test3", "line", "下载量", this.yData, xData);
    },
    methods: {
        switchYM() {
            let type = "1";
            let month = "2";
            if(this.viewsCheck == 1) {
                type = "1";
                month = "2";
            }else{
                type = "2";
                month = "7";
            }
            let usersDataNumber = [];
            let usersDataDay = [];
            getViews(type,month).then(res => {
                for(let i=1; i<res.data.object.length; i++) {
                    usersDataNumber.push(res.data.object[i].number);
                    usersDataDay.push(res.data.object[i].time)
                }
                this.drawLine("test1", "line", "访问量", usersDataNumber,usersDataDay );
            })
        },
        switchUser() {
            let type = "1";
            let month = "2";
            if(this.usersCheck == 1) {
                type = "1";
                month = "2";
            }else{
                type = "2";
                month = "7";
            }
            let viewsDataNumber = [];
            let viewsDataDay = [];
            getUserNum(type,month).then(res => {
                for(let i=1; i<res.data.object.length; i++) {
                    viewsDataNumber.push(res.data.object[i].number);
                    viewsDataDay.push(res.data.object[i].time)
                }
                this.drawLine("test2", "line", "访问量", viewsDataNumber,viewsDataDay );
            })
        },
        getDay(day) {
            var today = new Date();
            var targetday_milliseconds =
                today.getTime() + 1000 * 60 * 60 * 24 * day;
            today.setTime(targetday_milliseconds); //注意，这行是关键代码
            var tMonth = today.getMonth();
            var tDate = today.getDate();
            tMonth = this.doHandleMonth(tMonth + 1);
            tDate = this.doHandleMonth(tDate);
            return tMonth + "." + tDate;
        },
        doHandleMonth(month) {
            var m = month;
            if (month.toString().length == 1) {
                m = "0" + month;
            }
            return m;
        },
        drawLine(domID, etype, tip, yData, xData) {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById(domID));
            // 绘制图表
            myChart.setOption({
                title: { text: this.title },
                tooltip: {
                    trigger: "axis"
                },
                xAxis: {
                    data: xData
                },
                grid: {
                    left: "5%",
                    right: "5%",
                    top: "10%",
                    bottom: "6%",
                    containLabel: true
                },
                yAxis: {},
                series: [
                    {
                        barWidth: 20,
                        name: tip,
                        type: etype,
                        data: yData
                    }
                ]
            });
        },
        drawCircle(domID) {
            let myChart = this.$echarts.init(document.getElementById(domID));
            myChart.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    top: 40,
                    orient: "vertical",
                    left: 100,
                    data: [
                        "Lv.1",
                        "Lv.2",
                        "Lv.3",
                        "Lv.4",
                        "Lv.5",
                        "Lv.6",
                        "Lv.7",
                        "Lv.8",
                        "Lv.9"
                    ]
                },
                series: [
                    {
                        name: "用户数量",
                        type: "pie",
                        radius: "55%",
                        center: ["60%", "50%"],
                        data: this.vipData
                    }
                ]
            });
        }
    }
};
</script>

<style scoped lang="scss">
.data_account {
    position: relative;
    height: 100%;
    min-width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    .card {
        .click_volume {
            float: left;
            position: relative;
            width: 49%;
            height: 320px;
            background-color: #fff;
            margin-right: 12px;
            margin-top: 10px;
            .click_echarts {
                position: absolute;
                width: 100%;
                height: 280px;
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
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                z-index: 5;
                border-bottom: 1px solid #f6f6f6;
                #icon {
                    position: absolute;
                    padding-top: 10px;
                    padding-left: 20px;
                    color: #f56c6c;
                }
                #number {
                    position: absolute;
                    padding-top: 10px;
                    padding-left: 40px;
                }
                .check {
                    position: absolute;
                    right: 10px;
                    top: 7px;
                }
            }
        }
    }
}
.clearfix:before,
.clearfix:after {
    content: "";
    /* 触发BFC, 防止外边距合并 */
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {
    /* *代表    ie 6 7 能识别的符号  带*的属性，只有IE67执行   zoom代表ie67清除浮动的方法 */
    *zoom: 1;
}
</style>
