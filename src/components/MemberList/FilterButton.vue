<template>
    <div class="filter">
        <el-popover placement="right" trigger="manual" v-model="visible">
            <div class="time-filter">
                <span style="margin-left:5px;">注册时间</span>
                <el-date-picker
                    v-model="value2"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions"
                    size="mini"
                    class="input-class"
                ></el-date-picker>
            </div>
            <div class="level-filter">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>等级</span>
                <template>
                    <el-select v-model="level" placeholder="等级" size="mini">
                        <el-option
                            v-for="item in levelOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </template>
            </div>
            <div class="status-filter">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>状态</span>
                <template>
                    <el-select v-model="status" placeholder="状态" size="mini">
                        <el-option
                            v-for="item in statusOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </template>
            </div>
            <div class="submit-btn">
                <el-button type="success" size="mini">重置</el-button>
                <el-button type="primary" size="mini">提交</el-button>
            </div>
            <el-button
                slot="reference"
                type="primary"
                size="mini"
                id="shaixuan-bth"
                icon="el-icon-s-operation"
                @click="visible = !visible"
            >筛选</el-button>
        </el-popover>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            pickerOptions: {
                shortcuts: [
                    {
                        text: "最近一周",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    }
                ]
            },
            value1: "",
            value2: "",
            genderOptions: [
                {
                    value: "1",
                    label: "男"
                },
                {
                    value: "2",
                    label: "女"
                }
            ],
            gender: "",
            levelOptions: [
                {
                    value: "1",
                    label: "1"
                },
                {
                    value: "2",
                    label: "2"
                },
                {
                    value: "3",
                    label: "3"
                },
                {
                    value: "4",
                    label: "4"
                },
                {
                    value: "5",
                    label: "5"
                },
                {
                    value: "6",
                    label: "6"
                },
                {
                    value: "7",
                    label: "7"
                },
                {
                    value: "8",
                    label: "8"
                },
                {
                    value: "9",
                    label: "9"
                }
            ],
            level: "",
            statusOptions: [
                {
                    value: "1",
                    label: "有效"
                },
                {
                    value: "2",
                    label: "无效"
                }
            ],
            status: ""
        };
    }
};
</script>

<style lang="scss" scoped>
.filter {
    display: inline-block;
}
>>>.el-range-editor--mini.el-input__inner {
    width: 200px;
}
>>>.el-date-editor .el-range-input {
    width: 54%;
}
>>>.el-popover .el-popper {
    background-color: #eee;
}
>>>.el-popover {
    border: 1px solid #ddd;
}
.time-filter,
.level-filter,
.status-filter {
    margin-bottom: 5px;
}
.submit-btn {
    float: right;
    >>>.el-button--mini,
    >>>.el-button--small {
        padding: 5px 7px;
        border-radius: 1px;
    }
}
</style>
