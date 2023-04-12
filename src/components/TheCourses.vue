<script>
import { store } from '../store.js'
export default {
    name: 'TheCourses',
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
    <h1>Latest <span>Online Courses</span></h1>
    <div class="containerList">

        <div class="cardList" v-for="(element, i) in store.card" :key="i">
            <img :src='getImg(element.immagine)' alt="">
            <h2>{{ element.price }}</h2>
            <p>{{ element.text }}</p>
            <div>
                <span> <i class="fa-regular fa-file"></i> {{ element.lesson }}</span>
                <span><i class="fa-regular fa-user"></i> {{ element.student }}</span>
            </div>
        </div>


    </div>
    <div class="containerButton">
        <button>View all courses <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</template>

<style scoped lang="scss">
.containerList {
    width: 1300px;
    margin: auto;
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


}

h1 {
    text-align: center;
    font-weight: 400;
    font-size: 50px;
    margin-top: 80px;


    span {
        color: rgb(34, 173, 150);
    }
}

.cardList {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin-right: 30px;

    h2 {
        color: rgb(34, 173, 150);
        margin-top: 20px;
    }

    p {
        margin-top: 20px;
        margin-bottom: 20px;
        line-height: 25px;
        font-weight: bolder;
    }

    img {
        width: 350px;
    }

    span {
        margin-left: 10px;
        color: grey;
    }
}

.containerButton {
    text-align: center;
    margin-top: 30px;

    button {
        height: 40px;
        width: 250px;
        padding: 10px;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: rgb(34, 173, 150);
    }
}
</style>