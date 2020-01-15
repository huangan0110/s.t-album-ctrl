<template id="link">
    <iframe
        @load="loaded"
        src="http://47.106.199.167:9411/zipkin/"
        width="97%"
        height="95%"
        frameborder="0"
        scrolling="auto"
        style="position:absolute;top: 0;left: 0;margin-right:200px;z-index:0;background-color:#fff"
    ></iframe>
</template>

<script>
export default {
    name:'link',
    // mounted() {
    //   var doc = document.getElementById("link");
    //   console.log(id)
    //   const loading = this.$loading({
    //     target:doc,
    //     text: "Loading",
    //     spinner: "el-icon-loading",
    //     background: "rgba(0, 0, 0, 0.7)"
    //   });
    //   setTimeout(() => {
    //     loading.close();
    //   }, 2000);
    // },
    methods: {
        loaded() {
            console.log("yes");
        }
    }
};
</script>

<style lang="scss" scoped></style>
