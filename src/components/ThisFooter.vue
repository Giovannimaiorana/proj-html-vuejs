<script>
export default {
    name: 'ThisFooter',
}
</script>

<template>
    <div class=" containerFooter">
        <div class="containerAddress">
            <h2>Address</h2>
            <ul>
                <li> 382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                <li>+1 (305) 547-9909(9am-5pm EST,Monday -Friday)</li>
                <li>support@maxcoach.com</li>
                <li> <span><i class="fa-brands fa-twitter"></i></span> <span><i
                            class="fa-brands fa-facebook-f"></i></span><span> <i
                            class="fa-brands fa-instagram"></i></span><span> <i class="fa-brands fa-linkedin-in"></i></span>

                </li>
            </ul>
        </div>
        <div class="containerGeneral">
            <div class="expolore">
                <h2>Explore</h2>
                <ul>
                    <li>Start here </li>
                    <li>Blog</li>
                    <li>About us</li>
                    <li>Success story</li>
                    <li>Courses</li>
                    <li>Contact us </li>
                </ul>

            </div>

            <div>
                <h2>Explore</h2>
                <ul>
                    <li>Membership </li>
                    <li>Purchase guide </li>
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                </ul>
            </div>

        </div>

    </div>
    <h5>2020 Mxcoach. All Rights Reserved</h5>
</template>

<style scoped lang="scss">
.containerFooter {
    max-width: 100%;
    height: 400px;
    background-color: rgb(23, 22, 33);
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

h2 {
    color: white;
    font-weight: 400;
}

ul {
    list-style: none;

    li {
        color: grey;
        margin-top: 10px;

        span {
            margin-right: 15px;
            font-size: 25px;
        }
    }
}

li:hover {
    color: rgb(54, 173, 150);
}

.containerGeneral {
    display: flex;


    .expolore {
        margin-right: 40px;
    }
}
</style>