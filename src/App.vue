<template>
  <Header></Header>
  <div class="app">

    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header }
}
</script>

<style >
* {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
}

.app {
  padding: 15px;
  background: rgb(239, 221, 221);
}
</style>