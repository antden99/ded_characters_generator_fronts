<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {

  name: 'App',

  components: {
    AppHeader: AppHeader,
    AppFooter,


  },

  data() {
    return {


    }
  },





}
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView>
  </RouterView>
  <AppFooter></AppFooter>

</template>

<style scoped></style>
