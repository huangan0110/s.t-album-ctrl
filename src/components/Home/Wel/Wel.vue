<template>
    <div class="wel">
        <div class="wel_card">
            <div class="content">
                欢迎管理员
                <span style="color:#F56C6C;">admin</span>
                !&nbsp;&nbsp;当前时间
                <span style="color:#E6A23C">{{time}}</span>
            </div>
        </div>
        <div class="data_card">
            <span class="data_span">数据统计</span>
            <hr style="border:1px solid #f6f6f6; margin-top:10px;" />
            <div class="content">
                <div class="info_card">
                    <h3>浏览数</h3>
                    <p>1230</p>
                </div>
                <div class="info_card">
                    <h3>照片数</h3>
                    <p>{{imageNum}}</p>
                </div>
                <div class="info_card">
                    <h3>用户数</h3>
                    <p>{{userNum}}</p>
                </div>
            </div>
        </div>
        <div style="position:relative">
            <div class="sys_info">
                <h3>系统信息</h3>
                <hr style="border:1px solid #f6f6f6; margin-top:10px;" />
                <div class="sys_table">
                    <table border="1">
                        <tr>
                            <th>系统版本</th>
                            <td>v1.0.0</td>
                        </tr>
                        <tr>
                            <th>服务器地址</th>
                            <td>www.stalbum.com</td>
                        </tr>
                        <tr>
                            <th>操作系统</th>
                            <td>CENTOS 6.5</td>
                        </tr>
                        <tr>
                            <th>运行环境</th>
                            <td>Apache/2.4.23 (Win32) OpenSSL/1.0.2j mod_fcgid/2.3.9</td>
                        </tr>
                        <tr>
                            <th>PHP版本</th>
                            <td>5.6.27</td>
                        </tr>
                        <tr>
                            <th>MYSQL版本</th>
                            <td>5.5.53</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="monitor">
                <h3>实时监控</h3>
                <hr style="border:1px solid #f6f6f6; margin-top:10px;" />
                <div class="cpubar">
                    <el-progress :percentage="cpuused" :color="customColors"></el-progress>
                    <span>CPU占用率</span>
                </div>
                <div class="memorybar">
                    <el-progress :percentage="mused" :color="customColors"></el-progress>
                    <span>内存占用率</span>
                </div>
                <div class="diskbar">
                    <el-progress :percentage="dused" :color="customColors"></el-progress>
                    <span>磁盘占用率</span>
                </div>
            </div>
        </div>
        <div class="team">
            <h3>技术栈</h3>
            <hr style="border:1px solid #f6f6f6; margin-top:10px;" />
            <div class="zmd1">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="item in skill1" :key="item.index">
                        <h3>{{ item.skill }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="zmd2">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="item in skill2" :key="item.index">
                        <h3>{{ item.skill }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAllData} from "../../api/api";

    export default {
    data() {
        return {
            imageNum:"",
            userNum:"",
            cpuused: 5,
            mused:80,
            dused:64,
            s1:null,
            s2:null,
            s3:null,
            t1:null,
            time:"",
            customColors: [
                { color: "#f56c6c", percentage: 100 },
                { color: "#e6a23c", percentage: 40 },
                { color: "#5cb87a", percentage: 60 },
                { color: "#1989fa", percentage: 80 },
                { color: "#6f7ad3", percentage: 20 }
            ],
            skill1: [
                {
                    index: 1,
                    skill: "Vue"
                },
                {
                    index: 2,
                    skill: "Elment UI"
                },
                {
                    index: 3,
                    skill: "Vuex"
                },
                {
                    index: 4,
                    skill: "Axios"
                }
            ],
            skill2: [
                {
                    index: 1,
                    skill: "Spring Boot"
                },
                {
                    index: 2,
                    skill: "MyBatis"
                },
                {
                    index: 3,
                    skill: "Redis"
                },
                {
                    index: 4,
                    skill: "MySQL"
                }
            ]
        };
    },
    mounted() {


        this.s1 = setInterval(()=>{
            this.cpuused = Math.floor(Math.random()*(4 - 10) +10);
        },1000)
        this.s2 =setInterval(()=>{
            this.mused = Math.floor(Math.random()*(80 - 81) +81);
            console.log(this.mused)
        },1000)
        this.s3 = setInterval(()=>{
            this.dused = Math.floor(Math.random()*(64 - 65) +65);
        },1000)
        this.t1 = setInterval(()=>{
            this.time = this.getDtae();
        },1000)
        getAllData().then(res=>{
            if(res.data.success) {
                this.imageNum = res.data.object.imageNum;
                this.userNum = res.data.object.userNum;
            }
        })
    },
    beforeDestroy() {
        window.clearInterval(this.s1)
        window.clearInterval(this.s2)
        window.clearInterval(this.s3)
        window.clearInterval(this.t1)
    },
    methods:{
        getDtae() {
            var now = new Date(); //获取系统日期，即Sat Jul 29 08:24:48 UTC+0800 2006
            var yy=now.getFullYear();; //截取年，即2006
            var mm = now.getMonth()+1; //截取月，即07
            var dd = now.getDate(); //截取日，即29
            var cal = yy+"."+ mm +"."+dd;
            //取时间
            var hh = now.getHours(); //截取小时，即8
            var mm = now.getMinutes(); //截取分钟，即34
            var ss = now.getTime() % 60000;
            //获取时间，因为系统中时间是以毫秒计算的， 所以秒要通过余60000得到。
            ss = (ss - (ss % 1000)) / 1000; //然后，将得到的毫秒数再处理成秒
            var clock = hh+':'; //将得到的各个部分连接成一个日期时间
            if (mm < 10) clock += '0'; //字符串
            clock += mm+':';
            if (ss < 10) clock += '0';
            clock += ss;
            return clock;
        }
    }
};
</script>

<style scoped lang="scss">
.wel {
    /* margin:10px 10px 0 10px; */
}
.wel_card {
    background-color: #fff;
    height: 50px;
    position: relative;
    padding: 15px 30px 5px 30px;
}
.wel_card .content {
    height: 40px;
    left: 20px;
    top: 5px;
    background-color: #f2f2f2;
    border-left: 4px solid #009688;
    line-height: 40px;
    font-size: 16px;
    padding-left: 20px;
}
.data_card {
    margin-top: 10px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px 15px 10px 20px;
}
.data_card .data_span {
    color: #333;
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.data_card .info_card {
    display: inline-block;
    width: 200px;
    height: 80px;
    background-color: #f8f8f8;
    margin-right: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 10px;
    transition: background-color 0.5s linear;
}
.data_card .info_card:hover {
    background-color: #ccc;
}
.info_card h3 {
    font-size: 14px;
    font-weight: 400;
    color: #999;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.info_card p {
    font-weight: 300;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #009688;
    font-size: 27px;
    margin-top: 10px;
}
.sys_info {
    background-color: #fff;
    margin-top: 10px;
    padding: 20px;
    position: relative;
    width: 800px;
}
.monitor {
    width: 390px;
    height: 262px;
    position: absolute;
    background-color: #fff;
    right: 0;
    top: 0;
    padding: 20px;
    .cpubar {
        position: relative;
        margin-top: 20px;
        span {
            position: absolute;
            top: 6px;
            right: 0;
            font-size: 14px;
            color: #666;
        }
    }
    .memorybar {
        position: relative;
        margin-top: 90px;
        span {
            position: absolute;
            top: 6px;
            right: 0;
            font-size: 14px;
            color: #666;
        }
    }
    .diskbar {
        position: relative;
        margin-top: 160px;
        span {
            position: absolute;
            top: 6px;
            right: 0;
            font-size: 14px;
            color: #666;
        }
    }
}

.monitor >>> .el-progress__text {
    position: absolute;
    left: 0;
    margin-left: 0;
    font-size: 26px !important;
    font-weight: 500px;
}
.monitor >>> .el-progress-bar,
.el-progress-bar__inner::after,
.el-progress-bar__innerText,
.el-spinner {
    position: absolute;
    top: 32px;
    padding-right: 0;
}

.sys_info h3,
.team h3 {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.sys_table table {
    color: #666;
    margin-top: 15px;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}
.sys_info table tr:hover {
    background-color: #eee;
}
.sys_info table tr {
    transition: background-color 0.2s linear;
}
.sys_info table th {
    height: 35px;
    width: 100px;
    border: 1px solid #e6e6e6;
    text-align: left;
    font-weight: 400;
    word-break: break-all;
    display: table-cell;
    vertical-align: inherit;
    padding-left: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #666;
    font-size: 14px;
}
.sys_info table td {
    border: 1px solid #e6e6e6;
    padding-left: 14px;
    font-size: 14px;
}
.team {
    position: relative;
    margin-top: 10px;
    background-color: #fff;
    padding: 10px 15px 10px 20px;
    height: 400px;
}
.team .zmd1,
.team .zmd2 {
    width: 47%;
    position: absolute;
    top: 60px;
}
.team .zmd1 {
    left: 20px;
}
.team .zmd2 {
    right: 20px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 28px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
