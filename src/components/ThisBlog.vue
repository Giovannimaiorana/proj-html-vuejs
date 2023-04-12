<script>
import { store } from '../store.js';
export default {
    name: 'ThisBlog',
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
    <div class="containerall">
        <div class="containerTitle">
            <h3>BLOG UPDATED</h3>
            <h1>Interesting <span>articles update </span> daily</h1>
        </div>
        <div class="cardList">
            <div class="card" v-for="(element, i) in store.blog" :key="i">
                <img :src='getImg(element.immagine)' alt="">
                <p><i class="fa-regular fa-calendar"></i> {{ element.date }}</p>
                <h4>{{ element.titolo }}</h4>
                <span>{{ element.descri }}</span>
            </div>

        </div>
        <h2>VIEW ALL POSTS</h2>

    </div>
</template>

<style scoped lang="scss">
.containerall {
    width: 1300px;
    margin: auto;

    h2 {
        text-align: center;
        color: rgb(34, 173, 150);
        font-weight: 400;
        margin-top: 40px;
        cursor: pointer;
        text-decoration: underline;
    }

}

.containerTitle {
    margin-top: 100px;

    h3 {
        color: grey;
        font-weight: 400;
        margin-bottom: 20px;
    }

    h1 {
        font-weight: 400;

        span {
            color: rgb(34, 173, 150);
        }
    }
}

.cardList {
    margin-top: 40px;
    display: flex;

    .card {
        width: 300px;
        margin-right: 25px;

        img {
            width: 300px;
            border-radius: 5px;
        }

        p {
            color: grey;
            margin-top: 10px;

        }

        h4 {
            font-size: 18px;
            line-height: 24px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        span {
            color: grey;
        }
    }
}
</style>