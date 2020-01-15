<template>
    <div class="level">
        <div class="header">
            <span>等级特权</span>
            <el-button type="info" size="mini" class="edit" @click="editLevel">修改</el-button>
        </div>
        <div class="table_header">
            <span>等级</span>
            <span>所需积分</span>
            <span>特权</span>
        </div>
        <div class="table" v-for="(item,index) in levelData" :key="index">
            <span>Lv.{{item.level}}</span>
            <span>{{item.point}}</span>
            <span>{{item.photoNum}}张相片免费容量 · 相册上限{{item.albumNum}}</span>
        </div>
        <EditLevel ref="editLevel" :LData="levelData"></EditLevel>
    </div>
</template>

<script>
import EditLevel from './EditLevel'
export default {
    components:{
        EditLevel
    },
    data() {
        return {
            levelData:[
                {
                    level:1,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
                {
                    level:2,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
                {
                    level:3,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
                {
                    level:4,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
                {
                    level:5,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
                {
                    level:6,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
                {
                    level:7,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
                {
                    level:8,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
                {
                    level:9,
                    point:200,
                    albumNum:2,
                    photoNum:20
                },
            ]
        };
    },
    methods:{
        editLevel(){
            this.$refs.editLevel.open(this.levelData);
        }
    }
};
</script>

<style scoped lang="scss">
.level {
    top: 20px;
    margin-right: 150px;
    margin-left: 150px;
    min-width: 600px;
    .header {
        height: 40px;
        position: relative;
        line-height: 40px;
        span {
            font-size: 22px;
            color: #333;
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
        .edit {
            margin-top: 10px;
            float: right;
        }
    }
    .table_header {
        position: relative;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        span {
            font-size: 13px;
            color: #666;
        }
        span:nth-child(1) {
            position: absolute;
            left: 5px;
        }
        span:nth-child(2) {
            position: absolute;
            left: 60px;
        }
        span:nth-child(3) {
            position: absolute;
            left: 145px;
        }
    }
    .table {
        color: #666;
        font-size: 13px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        span:first-child {
            font-size: 18px;
            color: #e03a24;
            font-family: fantasy;
        }
        span:nth-child(1) {
            position: absolute;
            left: 25px;
        }
        span:nth-child(2) {
            position: absolute;
            left: 80px;
        }
        span:nth-child(3) {
            position: absolute;
            left: 165px;
        }
    }
}
</style>