<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Game</span>
        <span class="font-weight-light justify-center">MEMORY</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
import HelloWorld from './components/HelloWorld'
import Game from './components/Game'
import VueFlip from 'vue-flip'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Game,
    'vue-flip': VueFlip
  },
  data: () => ({
    // VIDE INITIALEMENT
  })
}
</script>
