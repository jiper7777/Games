<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  data() {
    return {
      title: ""
    };
  },
  components: {
    appStartPage: HomePage
  }
};

</script>

<style lang="scss">
</style>
