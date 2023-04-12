<script>
import ThisHeader from './components/TheHeader.vue'
import ThisMain from './components/ThisMain.vue'
import { store } from './store.js'
export default {
  components: {
    ThisHeader,
    ThisMain,
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
