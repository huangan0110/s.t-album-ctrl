<template>
    <div class="header">
        <p>S.T Album</p>
        <i class="iconfont ctrlzhedie" @click="setCollapse" :class="{'icon-collapse':!showMenu}"></i>
        <div class="person">
            <i class="el-icon-menu gateoneIcon" @click="tshow"></i>
            <el-dropdown @command="adminInfo">
                <span class="el-dropdown-link">
                    admin
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="item" command="a">个人信息</el-dropdown-item>
                    <el-dropdown-item class="item" command="b">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div
            class="gateone"
            v-if="show"
            @mousedown="move"
            @mouseup="moveout"
            v-show="min"
            ref="gateone"
        >
            <i
                class="el-icon-minus"
                @click="minGateOne"
                style="font-size:20px;font-weight:bold;right:40px;top:5px;cursor:pointer;position:absolute;border-radius:50%;background-color:pink;"
            ></i>
            <i
                class="el-icon-close"
                @click="closeGateOne"
                style="font-size:20px;font-weight:bold;right:10px;top:5px;cursor:pointer;position:absolute;border-radius:50%;background-color:pink;"
            ></i>
            <iframe
                v-show="framShow"
                src="http://47.106.199.167:9800/"
                width="100%"
                height="94%"
                scrolling="no"
                style="border:none;margin-top:30px;"
            ></iframe>
        </div>
        <div class="mini-gate" v-show="!min" @click="maxGateOne">
            <i
                class="el-icon-set-up"
                style="position:absolute;top:6px;left:4px;font-size:18px;color:#fff;"
            ></i>
            <i class="el-icon-success" style="color:#6fce7f;position:absolute;top:9px;left:28px;"></i>
            <span style="position:absolute;top:-8px;left:46px;color:#fff">SSH</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            framShow: true,
            positionX: 0,
            positionY: 0,
            show: false,
            min: true,
            showMenu: true
        };
    },
    methods: {
        adminInfo(command) {
            if (command == "a") {
                this.$store.commit("setPath", "/admin_info");
                this.$store.commit("setTitle", "个人信息");
                this.$emit("open");
                this.$router.push('/admin_info')
            }
        },
        setCollapse() {
            this.showMenu = !this.showMenu;
            this.$store.commit("setCollapse");
        },
        tshow() {
            this.show = true;
            this.min = true;
        },
        closeGateOne() {
            this.show = false;
        },
        move(e) {
            this.framShow = false;
            var _this = this;
            onselectstart = "return false";
            onselect = "return false";
            let odiv = e.target; //获取目标元素

            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = e => {
                document.onselectstart = function() {
                    return false;
                }; //解决拖动会选中文字的问题
                document.ondragstart = function() {
                    return false;
                };
                //鼠标按下并移动的事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;
                let top = e.clientY - disY;

                //绑定元素位置到positionX和positionY上面
                this.positionX = top;
                this.positionY = left;

                //移动当前元素
                if (top < 0) {
                    top = 0;
                }
                if (left < 0) {
                    left = 0;
                }
                if (
                    top + _this.$refs.gateone.offsetHeight >
                    document.documentElement.clientHeight
                ) {
                    top =
                        document.documentElement.clientHeight -
                        _this.$refs.gateone.offsetHeight;
                }
                if (
                    left + _this.$refs.gateone.offsetWidth >
                    document.body.clientWidth
                ) {
                    left =
                        document.body.clientWidth -
                        _this.$refs.gateone.offsetWidth;
                }
                odiv.style.left = left + "px";
                odiv.style.top = top + "px";
            };
            document.onmouseup = e => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        moveout() {
            this.framShow = true;
        },
        minGateOne() {
            this.min = false;
        },
        maxGateOne() {
            this.min = true;
        }
    }
};
</script>

<style scoped>
#go_toolbar {
    right: 30px;
}
.mini-gate {
    height: 30px;
    width: 88px;
    border-radius: 2px;
    background-color: #373d41;
    position: fixed;
    right: 80px;
    bottom: 60px;
}
.gateone {
    /* height: 620px;
  width: 790px; */
    background-color: #eee;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    width: 800px;
    height: 500px;
    position: fixed;
    left: calc(50% - 400px);
    top: 100px;
    cursor: move;
    z-index: 999 !important;
}
.header {
    min-width: 1200px;
    position: relative;
    height: 45px;
    width: 100%;
    background-color: #000;
    line-height: 45px;
}
.header p {
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    margin-left: 20px;
}
.ctrlzhedie {
    position: absolute;
    left: 170px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 20px;
    transition: all 0.3s;
}
.icon-collapse {
    top: 0;
    transform: rotate(90deg);
    -ms-transform: rotate(90deg); /* Internet Explorer */
    -moz-transform: rotate(90deg); /* Firefox */
    -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
    -o-transform: rotate(90deg); /* Opera */
}
.el-dropdown-link {
    cursor: pointer;
    color: white;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.person {
    height: 42px;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-60%);
}
.person .gateoneIcon {
    color: #fff;
    font-size: 24px;
    position: absolute;
    top: 12px;
    right: 70px;
}
/* .person:hover {
    	
box-sizing: content-box;
    border-bottom: 3px solid #F56C6C;
} */
.item {
    font-size: 12px;
}
.item:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #000;
}
</style>
