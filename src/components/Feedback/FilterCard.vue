<template>
    <div class="filter-card">
        <div class="left clearfix">
            <div class="headershaixuan clearfix">
                <span>筛选:</span> &nbsp;&nbsp;&nbsp;( 共
                <span>123</span> 条反馈 )
            </div>
            <div class="shaixuan clearfix">
                <span style="font-size:14px;font-weight:bold;">时间段:</span>&nbsp;&nbsp;&nbsp;
                <el-date-picker
                    v-model="value2"
                    type="daterange"
                    align="left"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions"
                    size="mini"
                ></el-date-picker>
                <div class="shaixuan-type">
                    <span style="font-size:14px;font-weight:bold;">反馈类型:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <el-badge :value="200" :max="99" class="item">
                        <el-button size="mini" type="danger" @click="test(1)">程序BUG</el-button>
                    </el-badge>
                    <el-badge :value="100" :max="10" class="item">
                        <el-button size="mini" type="success">内容意见</el-button>
                    </el-badge>
                    <el-badge :value="100" :max="10" class="item">
                        <el-button size="mini" type="warning">其它</el-button>
                    </el-badge>
                    <el-badge :value="100" :max="10" class="item">
                        <el-button size="mini" type="primary">功能建议</el-button>
                    </el-badge>
                </div>
            </div>
            <div class="agree">
                <div class="agree-header">
                    <span>已采纳</span>
                    <el-button size="mini" type="primary" @click="moreAgree">更多</el-button>
                </div>
                <div class="agree-more">
                    <el-collapse accordion v-for="(item, index) in agreeMore" :key="index">
                        <el-collapse-item>
                            <div></div>
                            <template slot="title">
                                {{ item.title }}
                                <span
                                    style="position:absolute;right:40px;color:#26b7b2"
                                >
                                    {{
                                    item.type
                                    }}
                                </span>
                            </template>
                            <div>{{ item.content }}</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <el-drawer
            title="已采纳反馈"
            :visible.sync="showAgreedrawer"
            append-to-body
            destroy-on-close
            :modal="false"
            size="30%"
            :show-close="false"
            @opened="showLoading"
        >
            <el-button
                type="primary"
                circle
                icon="el-icon-search"
                id="export-btn"
                size="mini"
                @click="test"
            ></el-button>
            <div class="all-back" id="back">
                <el-scrollbar id="scroll">
                    <div class="back" v-for="(item,index) in agreeMore" :key="index">
                        <h4>
                            <span style="color:#ffd04b;">标题:</span>
                            {{item.title}}
                            <span
                                style="color:#ffd04b;"
                            >（{{item.type}}）</span>
                        </h4>
                        <h4>
                            <span style="color:#ffd04b;">内容:</span>
                            {{item.content}}
                        </h4>
                    </div>
                </el-scrollbar>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAgreedrawer: false,
            agreeMore: [
                {
                    title: "标题11",
                    content: "内容内容内容内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "标题222",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "标题333",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "标题4",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "标题5",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "6",
                    content: "内容内容内容内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "7",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "8",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "9",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "10",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "11",
                    content: "内容内容内容内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "12",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "13",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "14",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "15",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "16",
                    content: "内容内容内容内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "1111117",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "18",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "19",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                },
                {
                    title: "20",
                    content: "内容内容内容内容内容内容内容",
                    type: "程序BUG"
                }
            ],
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
            value2: ""
        };
    },
    methods: {
        test(n) {
            this.$parent.num(n);
        },
        moreAgree() {
            this.showAgreedrawer = true;
        },
        showLoading() {
            const loading = this.$loading({
                lock: true,
                text: "Loading",
                target: "#back",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            });
            setTimeout(() => {
                loading.close();
            }, 2000);
        }
    }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 0 !important;
}
::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
}
>>> .el-drawer__open .el-drawer.rtl {
    background-color: rgb(70, 68, 66);
    color: #fff;
    #export-btn {
        position: absolute;
        top: 14px;
        right: 40px;
    }
    .all-back {
        position: relative;
        height: 600px;
        overflow: hidden;
        #scroll {
            height: 100%;
        }
    }
    .back {
        position: relative;
        margin: 0 auto;
        width: 88%;
        padding: 10px;
        background-color: rgb(44, 44, 44);
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

        h4 {
            font-weight: 300;
            font-size: 13px;
        }
    }
}
>>> .el-range-editor--mini.el-input__inner {
    width: 200px;
}

>>> .el-date-editor .el-range-input {
    -webkit-width: 36%;
    -moz-width: 36%;
    z-index: 8;
}
>>> .el-date-editor .el-range__close-icon {
    margin-right: -8px;
}
>>> .el-popover .el-popper {
    background-color: #eee;
}
>>> .el-popover {
    border: 1px solid #ddd;
}
>>> .el-range-editor--mini.el-input__inner {
    border-radius: 1px;
}
>>> .el-collapse-item__arrow {
    color: #26b7b2;
}
>>> .el-drawer__header {
    color: #fff;
}
>>> .el-scrollbar__wrap {
    overflow-x: hidden;
}
.filter-card {
    margin-left: 10px;
    .left {
        width: 360px;
        float: left;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        position: relative;
        .headershaixuan {
            width: 330px;
            height: 20px;
            border-bottom: 1px solid #eee;
            padding: 10px 15px 10px 10px;
            font-size: 14px;
            font-weight: 500;
            position: relative;
            span:first-child {
                font-weight: bold;
            }
            span:last-child {
                color: #409eff;
            }
        }
        .shaixuan {
            padding: 10px;
            h3 {
                margin-bottom: 10px;
            }
            .shaixuan-type {
                margin-top: 15px;
                .item {
                    margin-top: 10px;
                    margin-right: 40px;
                    margin-bottom: 10px;
                }
                .el-button--mini,
                .el-button--mini.is-round {
                    padding: 5px 4px;
                }
                .el-badge__content {
                    border: none;
                    padding: 0 2px;
                }
            }
        }
        .agree {
            .agree-header {
                position: relative;
                margin-top: 10px;
                span {
                    font-weight: bold;
                    font-size: 14px;
                    margin-left: 10px;
                }
            }
            .el-button {
                padding: 4px 5px 4px 1px;
                float: right;
                margin-right: 20px;
                span {
                    font-weight: 500;
                    font-size: 12px;
                    margin-left: 4px;
                }
            }
            .agree-more {
                padding: 5px;
                position: relative;
                margin-top: 10px;

                .el-collapse-item__content {
                    padding-bottom: 5px;
                    padding-left: 6px;
                }
            }
        }
        .el-collapse-item__header {
            padding: 0 6px;
            height: 38px;
        }
    }
}
</style>
