<script>
import { store } from '../store.js';
export default {
    name: 'ThisAboutMe',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="containerMain">
        <!-- CONTAINER PER STATISTICHE INIZIO -->
        <div class="containerStats">
            <div class="stats" v-for="(element, i) in store.stats" :key="i">
                <h2>{{ element.number }}</h2>
                <p>{{ element.text }}</p>
            </div>
        </div>
        <!-- CONTAINER PER STATISTICHE FINE -->
        <!-- CONTAINER PER ABOUT ME INIZIO -->
        <div class="aboutContainer">
            <div class="containerTitle">
                <p>ABOUT ME</p>
                <h1>How to Be an Alpha Male: The 15 Habits of True Alphass</h1>
            </div>
            <div class="containerText">
                <h4> Want to learn how to be <span>an alpha male</span>? How to be more masculine? How to be the man you've
                    always wanted to be? </h4>
                <p class="text">Your goal us to show the consistency of business, core values, and customer care.
                    Punctuality, responsability, individuality, accuracy, enthusiasm- you have to clearly explain how these
                    qualities are applicable to yout work. And the importnat thing is you do love what you do.
                </p>
            </div>

        </div>
        <!-- CONTAINER PER ABOUT ME FINE -->
        <!-- CONTAINER YOUTUBE INIZIO-->
        <div class="containerAll">
            <div class="containerImg">
                <img src="../assets/icon-youtube-play.png" alt="">
            </div>
            <div class="descriptionContainer">
                <h1>"Every Morning you have two choices; continue to sleep with your dreams, or wake up and chase them."
                </h1>
                <img src="../assets/home-movation-shape-01.png" alt="">
                <p>Kaixa Stark</p>
                <span>WINGMAN</span>
            </div>
        </div>
        <!-- CONTAINER YOUTUBE FINE-->
    </div>
</template>

<style scoped lang="scss">
.containerMain {
    max-width: 1300px;
    margin: auto;
    margin-top: 80px;
    display: flex;
    flex-direction: column;


    .containerStats {
        text-align: center;
        line-height: 30px;
        display: flex;
        justify-content: center;

        .stats {
            margin-left: 100px;
        }

        h2 {
            color: rgb(34, 173, 150);
        }
    }

    /*STILE BLOCCO DUE ABOUT ME  */
    .aboutContainer {
        margin-top: 80px;
        width: 1300px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            color: rgb(34, 173, 150);
            margin-bottom: 30px;
        }

        h1 {
            font-weight: 400;
        }

        .containerTitle {
            width: 300px;
            line-height: 40px
        }

        .containerText {
            width: 600px;
            line-height: 30px;

            span {
                color: rgb(34, 173, 150);
            }

            .text {
                color: grey;
                line-height: 20px;
                margin-top: 30px;
            }
        }


    }

    .containerAll {
        display: flex;

        .containerImg {
            width: 600px;
            height: 400px;
            margin-top: 80px;
            border-radius: 5px;
            background-image: url(../assets/home-movation-video-poster-670x450.jpg);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .containerImg:hover img {
            width: 150px;
            cursor: pointer;
        }

        .containerImg:hover img {
            width: 150px;
            cursor: pointer;
        }





        .descriptionContainer {
            width: 400px;
            height: 400px;
            margin-top: 80px;
            margin-left: 40px;
            line-height: 50px;

            h1 {
                font-weight: 400;
                text-align: center;
                margin-left: 40px;
            }

            img {
                margin-left: 50px;
                margin-top: 50px;
            }

            p {
                margin-left: 50px;
                color: black;
                font-weight: bolder;
                font-size: 20px;
            }

            span {
                margin-left: 50px;
                color: grey;
                font-size: 15px;
            }
        }
    }



}
</style>