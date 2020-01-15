<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>
<style>
#app {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #f1f1f1;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.el-button--mini,
.el-button--small {
    border-radius: 1px;
}
* {
    margin: 0;
    padding: 0;
}
</style>
