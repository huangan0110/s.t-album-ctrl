<template>
    <div class="sys_log" >
        <div class="sys-header">
            <el-button type="primary" round icon="el-icon-search"></el-button>
            <el-button type="success" round icon="el-icon-search"></el-button>
        </div>
        <div class="content" id="log">
            <el-scrollbar id="scroll">
                <span v-for="(item, index) in logData" :key="index">
                    <span v-for="(row,index) in item.split(' ')" :key="index">
                        <span style="color:red;" v-if="index==0">{{row}}</span>
                        <span style="color:red;" v-else-if="index==1">{{row}}</span>
                        <span style="color:green;" v-else-if="index==3">{{row}}</span>
                        <span style="color:green;" v-else-if="index==5">{{row}}</span>
                        <span style="color:green;" v-else-if="index==8">{{row}}</span>
                        <span v-else>{{row}}</span>
                    </span>
                    <br />
                </span>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import { getLog } from "./../api/api";
export default {
    data() {
        return {
            logData: []
        };
    },
    mounted() {
        const loading = this.$loading({
            lock: true,
            target:'#log',
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });

        getLog().then(res => {
            loading.close();
            console.log(res.data[0].split(" "));
            this.logData = res.data;
        }).catch(err => {
            loading.close();
            this.logData = res.data;
            console.log(err);
        });
    }
};
</script>

<style scoped lang="scss">
.el-scrollbar__wrap {
    overflow-x: hidden;
}
.sys_log {
    top: 0px;
    min-width: 1200px;

    .sys-header {
        height: 40px;
        // background-color: #fff;
        >>> .el-button.is-round {
            padding: 8px;
            float: right;
            margin-right: 20px;
        }
    }
    .content {
        height: 540px;
        width: 100%;
        background-color: #333;
        color: #fff;
        #scroll {
            height: 100%;
            margin-top: 0;

            span {
                color: #fff;
                font-size: 14px;
            }
        }
    }
}
</style>
