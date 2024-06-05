<script>
import axios from 'axios';

export default {

  name: 'AppCharacters',


  data() {
    return {
      base_api: 'http://127.0.0.1:8000',
      name_api: '/api/characters',
      characters: [],

    }
  },
  methods: {
    callApi() {
      axios
        .get(this.base_api + this.name_api)
        .then(response => {
          console.log(response);
          this.characters = response.data.characters
          console.log(this.characters)
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  mounted() {
    console.log(this.characters);
    this.callApi()
  },



}
</script>

<template>
  <div class="container">
    <div class="row row-cols-3">
      <div class="col" v-for="character in characters">
        <div class="card" style="width:18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">{{ character.description }}</p>
            {{ character.attack }}
            {{ character.defense }}
            {{ character.speed }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
