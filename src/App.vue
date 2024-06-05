<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {

  name: 'App',

  components:{
    AppHeader:AppHeader,

  },
  
  data() {
    return {
      base_api: 'http://127.0.0.1:8000',
      nome_api: '/api/characters',
      characters: [],

    }
  },

  methods: {
    callApi() {
      axios
        .get(this.base_api + this.nome_api)
        .then(response => {
          this.characters = response.data.characters
          console.log(this.characters)
        })
        .catch(err => {
          console.error(err)
        })
    }
  },

  mounted() {
    this.callApi()
  },

}
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
