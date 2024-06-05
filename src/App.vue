<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    components: {
        AppHeader: AppHeader,

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
    <router-view v-slot="{ Component }">
        <transition mode="out-in" name="slide">
            <component :is="Component" />
        </transition>
    </router-view>
    <!-- <RouterView></RouterView> -->
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
