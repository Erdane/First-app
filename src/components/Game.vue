 <!--<template>-->
<template v-for="card in cards">
  <v-app>
  <v-card
    class="mx-auto"
    max-width="auto"
  >
       <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <template v-for="card in cards">
        <v-col
          :key="card.title"
          :cols="card.flex"
        >
           <vue-flip :active-click="true" width="200px" height="200px" class="simple-test" align="center" justify="center">
          <div slot="front">
              <v-img :src= card.src
                  class="white--text"
                  height="200px"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          ></v-img>
        </div>
        <div slot="back">
          <v-img :src= card.srcback
                class="white--text"
                  height="200px"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          ></v-img>
          </div>
      </vue-flip>
        </v-col>
        </template>
      </v-row>
    </v-container>
  </v-card>
</v-app>
</template>

<script>
import VueFlip from 'vue-flip'

export default {
  name: 'App',
  components: {
    'vue-flip': VueFlip
  },
  data: () => ({
    // VIDE INITIALEMENT<<
    cards: [
      { title: 'Pre-fab homes', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 2 },
      { title: 'Favorite road trips', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 2 },
      { title: 'Best airlines', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/nfl_league.jpg'), flex: 2 },
      { title: 'Pre-fab homes', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 2 },
      { title: 'Favorite road trips', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 2 },
      { title: 'Best airlines', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/nfl_league.jpg'), flex: 2 },
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/logo.png'), flex: 2 },
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/logo.png'), flex: 2 },
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/logo.svg'), flex: 2 },
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/logo.svg'), flex: 2 }
    ]
  })
}
</script>
