<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
}
*{
  margin: 0;
  padding: 0;
}
</style>
