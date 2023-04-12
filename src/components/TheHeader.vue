<script>
import { store } from '../store.js'
export default {
    name: 'ThisHeader',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="containerHeader">
        <div class="contentHeader">
            <!--CONTENUTO HEADER DI JUMBOTRON INIZIO-->
            <div class="headerContent">
                <div class="logo">
                    <img src="../assets/dark-logo.png" alt="">
                </div>
                <div class="navlink">
                    <ul>
                        <li v-for=" element in store.link ">{{ element.nav }} <i class="fa-solid fa-chevron-down"></i></li>
                    </ul>
                </div>
                <div class="social">
                    <span><i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>

                </div>
            </div>
            <!--CONTENUTO HEADER DI JUMBOTRON FINE-->
            <!--CONTENUTO HEADER DI JUMBOTRON SECONDA PARTE INIZIO-->
            <div class="containerJumboBott">
                <div class="descriptionContainerBottom">
                    <p>I'M WINGAM</p>
                    <h1>Peace On Heart A Wonderful Wish But No Way</h1>
                    <p>Success isn't overnight. It's when everyday you get a little better than the day before. It all adds
                        up.</p>
                    <button>Get Started For Free <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="containerPhoto">
                    <img src="../assets/home-movation-hero-image.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.containerHeader {
    max-width: 100%;
    height: 600px;
    background-color: rgb(236, 233, 237);
    background-image: url(../assets/background-pattern-wavify.png);
}

.contentHeader {
    max-width: 1300px;
    margin: auto;
}

.headerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    .logo {
        img {
            width: 150px;
        }
    }

    .navlink {
        ul {
            display: flex;
            list-style: none;


            li {
                margin-left: 30px;


                i {
                    font-size: 10px;
                    cursor: pointer;
                }
            }

            li:hover {
                color: rgb(34, 173, 150);

                font-weight: bolder
            }

        }
    }

    .social {
        span {
            margin-left: 10px;
            font-size: 20px;
        }

        span:hover {
            color: rgb(34, 173, 150);
        }
    }
}

/*STILE JUMBOTROM BOTTOM*/
.containerJumboBott {
    display: flex;
    justify-content: center;


    .descriptionContainerBottom {
        width: 400px;

        p {
            margin-top: 70px;
            margin-bottom: 30px;
            line-height: 30px;

        }

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

        button:hover {
            background-color: rgb(63, 58, 100);
        }
    }

    .containerPhoto {
        width: 400px;
        margin-left: 300px;

        img {
            position: absolute;
            top: 113px;
            width: 400px;
        }
    }
}
</style>