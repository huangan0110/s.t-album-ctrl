<template>
    <div class="wel">
        <div class="wel_card">
            <div class="content">
                欢迎管理员
                <span style="color:#F56C6C;">admin</span>
                !&nbsp;&nbsp;当前时间
                <span style="color:#E6A23C">2019-10-10 14:06</span>
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
                    <p>523</p>
                </div>
                <div class="info_card">
                    <h3>照片数</h3>
                    <p>523</p>
                </div>
                <div class="info_card">
                    <h3>照片数</h3>
                    <p>523</p>
                </div>
                <div class="info_card">
                    <h3>照片数</h3>
                    <p>523</p>
                </div>
                <div class="info_card">
                    <h3>照片数</h3>
                    <p>523</p>
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
                    <el-progress :percentage="used" :color="customColors"></el-progress>
                    <span>CPU占用率</span>
                </div>
                <div class="memorybar">
                    <el-progress :percentage="used" :color="customColors"></el-progress>
                    <span>内存占用率</span>
                </div>
                <div class="diskbar">
                    <el-progress :percentage="used" :color="customColors"></el-progress>
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
export default {
    data() {
        return {
            used: 100,
            customColors: [
                { color: "#f56c6c", percentage: 20 },
                { color: "#e6a23c", percentage: 40 },
                { color: "#5cb87a", percentage: 60 },
                { color: "#1989fa", percentage: 80 },
                { color: "#6f7ad3", percentage: 100 }
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
        // setInterval(()=>{
        //   this.used = Math.floor(Math.random()*(1 - 100) + 100);
        // },1000)
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
    width: 172px;
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
