<template>
  <div id="app">
    <div id="nav">
      <home></home>
    </div>
    <router-view />
  </div>
</template>
<script>
import home from "@/components/HomeComponent";
export default {
  components: {
    home,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
