<script>
import { store } from '../store.js'
export default {
    name: 'TheBook',
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
    <div class="containerBook">
        <div class="containerText">
            <p>BOOK STORE ONLINE</p>
            <h1>Be Alpha With <span> Wingman's Book</span></h1>
            <ul>
                <li v-for="element in store.book"><i class="fa-solid fa-check"></i> {{ element.check }}</li>
            </ul>
            <button>Get Free Ebook</button>
        </div>
        <div class="containerImg">
            <div class="card" v-for="(element, i ) in store.booktitle" :key="i">
                <img :src='getImg(element.immagine)' alt="">
                <h3>{{ element.titolo }}</h3>
                <h2>{{ element.price }}</h2>
                <div class="containerHover">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <span><i class="fa-solid fa-cart-shopping"></i></span>
                    <span><i class="fa-regular fa-heart"></i></span>
                    <span><i class="fa-solid fa-signal"></i></span>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.containerBook {
    width: 1300px;
    margin: auto;
    margin-top: 70px;
    display: flex;
    align-items: center;

    .containerText {
        width: 300px;

        h1 {
            font-weight: 400;
            margin-top: 20px;
            margin-bottom: 20px;

            span {
                color: rgb(34, 173, 150);
            }
        }

        ul {
            list-style: none;

            li {
                color: grey;
                line-height: 30px;

                i {
                    color: rgb(34, 173, 150);
                }
            }
        }

        button {
            height: 40px;
            width: 200px;
            padding: 10px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: rgb(34, 173, 150);
            margin-top: 20px;
        }

        button:hover {
            background-color: rgb(63, 58, 100);
        }
    }


}

.containerImg {
    display: flex;
    width: 700px;
    height: 400px;
    position: relative;

    h3 {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    h2 {
        color: rgb(34, 173, 150);
        text-align: center;
    }

    .card {
        margin-left: 50px;
        margin-right: 50px;
    }

    .containerHover {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        display: none;




        span {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            background-color: white;
            width: 40px;
            height: 40px;

            border-radius: 50%;
            cursor: pointer;

        }
    }


}

.containerImg:hover .containerHover {
    display: flex;

    span {
        color: rgb(34, 173, 150);
    }
}
</style>