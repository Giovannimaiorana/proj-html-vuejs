<script>
import { store } from '../store';

export default {
    name: 'ThisCarousel',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="containerContent">
        <div class="counterPhoto">
            <i class="fa-solid fa-caret-up"></i>
            <span>1/4</span>
            <i class="fa-solid fa-caret-down"></i>

        </div>
        <div class="containerText">
            <div class="text">
                <h3>REAL STORIES</h3>
                <p>I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the
                    syllabus.Great study portal for people like me.</p>
                <img src="../assets/testimonial-avata-02.jpg" alt="">
                <span>Mina Hollance</span>
                <span class="travel">/Freelancer</span>
            </div>
        </div>
        <div class="containerImg">
            <img src="../assets/home-movation-testimonial-image.jpg" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
.containerContent {
    display: flex;
    margin-top: 100px;
    position: relative;
}

.containerText {
    width: 50%;
    background-color: rgb(236, 233, 237);
    background-image: url(../assets/background-pattern-wavify.png);
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            color: rgb(34, 173, 150);
            margin-bottom: 40px;
            text-align: center;
        }

        p {
            line-height: 30px;
        }

        img {
            width: 80px;
            border-radius: 50%;
            margin-top: 40px;
        }

        span {
            margin-top: 30px;
            font-weight: bolder;
        }

        .travel {
            color: grey;
            font-size: 13px;
        }
    }

}

.containerImg {
    width: 50%;

    img {
        width: 100%;
    }
}

.counterPhoto {
    background-color: white;
    width: 100px;
    height: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    left: 47%;
    top: 50%;
    cursor: pointer;

    i {
        color: lightgrey;
    }
}
</style>