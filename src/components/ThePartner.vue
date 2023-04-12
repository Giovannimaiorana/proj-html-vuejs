<script>
import { store } from '../store.js';
export default {
    name: 'Thepartner',
    data() {
        return {
            store
        }
    },
    methods: {
        getImg(name) {
            return new URL(`../assets/${name}`, import.meta.url).href;//
        }
    }
}
</script>

<template>
    <div class="containerPartner">
        <div v-for="(element, i ) in store.partner" :key="i">
            <img :src='getImg(element.logo)' alt="">
        </div>


    </div>
</template>

<style scoped lang="scss">
.containerPartner {
    width: 1300px;
    margin: auto;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        filter: opacity(30%);
        cursor: pointer;
    }
}
</style>