<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-clock-simple/dist/vue-flip.min.js"></script>
<script type="text/javascript">
  Vue.use(VueFlip);
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="auto"
  >
    <v-system-bar color="indigo darken-2"></v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

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

            <!-- <div slot="front">
                 <v-hover v-slot:default="{ hover }">
             <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              >
            <v-img
              :class="{ 'show-btns': hover }"
              color="transparent"
              :src="card.src"
              class="white--text"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="card.title"
              ></v-card-title>
            </v-img>

            <v-card-actions>
              <div class="flex-grow-1"></div>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          </v-hover>
           </div>
           <div slot="back">
             <v-card>
                    <v-img src='https://cdn.vuetifyjs.com/images/cards/house.jpg'
                      class="white--text"
                      height="200px"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    ></v-img>
              </v-card>
           </div> -->

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

</template>

<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }
/* .v-card:not(.on-hover) {
  opacity: 0.6;
 }
  */
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
import HelloWorld from './components/HelloWorld'
import VueFlip from 'vue-flip'

export default {
  name: 'App',
  components: {
    HelloWorld,
    'vue-flip': VueFlip
  },
  data: () => ({
    // VIDE INITIALEMENT
    cards: [
      { title: 'Pre-fab homes', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 2 },
      { title: 'Favorite road trips', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  flex: 2 },
      { title: 'Best airlines', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/nfl_league.jpg'), flex: 2},
      { title: 'Pre-fab homes', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 2 },
      { title: 'Favorite road trips', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  flex: 2 },
      { title: 'Best airlines', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/nfl_league.jpg'), flex: 2},
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/logo.png'), flex: 2},
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/logo.png'), flex: 2},
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/logo.svg'), flex: 2},
      { title: 'NFL', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/assets/logo.svg'), flex: 2}
    ]
  })
}
</script>
