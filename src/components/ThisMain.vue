<script>
import { store } from '../store.js'
import ThisAboutMe from '../components/ThisAboutMe.vue'
import TheCourses from '../components/TheCourses.vue'
import TheBook from '../components/TheBook.vue'
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
    }
}
</script>

<template>
    <ThisAboutMe />
    <TheCourses />
    <TheBook />
</template>

<style scoped lang="scss"></style>