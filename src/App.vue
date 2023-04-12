<script>
import ThisHeader from './components/TheHeader.vue'
import ThisMain from './components/ThisMain.vue'
import ThisFooter from './components/ThisFooter.vue'
import { store } from './store.js'
export default {
  components: {
    ThisHeader,
    ThisMain,
    ThisFooter,

  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <header>
    <ThisHeader />
  </header>
  <main>
    <ThisMain />
  </main>
  <footer>
    <ThisFooter />
  </footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;
}
</style>
