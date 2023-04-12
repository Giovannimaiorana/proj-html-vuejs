<script>
import { store } from '../store.js'
import ThisAboutMe from '../components/ThisAboutMe.vue'
import TheCourses from '../components/TheCourses.vue'
import TheBook from '../components/TheBook.vue'
import ThePartner from '../components/ThePartner.vue'
import ThisCarousel from '../components/ThisCarousel.vue'
export default {
    name: 'ThisMain',
    data() {
        return {
            store,
        }
    },
    components: {
        ThisAboutMe,
        TheCourses,
        TheBook,
        ThePartner,
        ThisCarousel,
    }
}
</script>

<template>
    <ThisAboutMe />
    <TheCourses />
    <TheBook />
    <ThePartner />
    <ThisCarousel />
</template>

<style scoped lang="scss"></style>