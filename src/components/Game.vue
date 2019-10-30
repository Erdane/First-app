<template v-for="card in cards">
  <v-app>
     <form name="chronoForm">
      <input type="text" name="chronotime" id="chronotime" value="0:00:00:00"/>
      <input type="button" name="startstop" value="start!" @click="chronoStart()"  />
      <input type="button" name="reset" value="reset!" @click="chronoReset()" />
    </form>
  <v-card
    class="mx-auto"
    max-width="auto"
  >
        <v-overlay
          :absolute="absolute"
          :value="overlay"
        >
          <!-- <v-btn
            color="success"
            @click="overlay = false"
          >
            Hide Overlay
          </v-btn> -->
          <div> <font size="3000"> {{decompte}} </font> </div>
        </v-overlay>
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
             {{CodeJeu}}
          <div slot="front">
              <v-img :src= card.src
                  class="white--text"
                  height="200px"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
           aspect-ratio="1.7" contain></v-img>
        </div>
        <div slot="back">
          <v-img :src= card.srcback
                class="white--text"
                  height="200px"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          aspect-ratio="1.7"></v-img>
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
// eslint-disable-next-line no-unused-vars
// import func from '../../vue-temp/vue-editor-bridge'

export default {
  name: 'App',
  components: {
    'vue-flip': VueFlip
  },
  data: () => ({
    startTime: 0,
    start: 0,
    end: 0,
    diff: 0,
    timerID: 0,
    absolute: true,
    overlay: true,
    decompte: 5,
    cards: [
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos5.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos1.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos3.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos5.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos4.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos6.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos2.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos4.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos3.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos1.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos2.jpg'), flex: 2 },
      { title: 'img', src: require('@/assets/907-4-ducale-dos-bleu.png'), srcback: require('@/imgback/dos6.jpg'), flex: 2 }
    ]
  }),
  methods: {
    overlayStart () {
      console.log('overlay 1 : ' + this.overlay)
      setTimeout(() => {
        this.overlay = false
        console.log('overlay 2 : ' + this.overlay)
        this.chronoStart()
      }, 5000)
      setInterval(() => {
        this.decompte--
      }, 1000)
    },
    chrono () {
      this.end = new Date()
      this.diff = this.end - this.start
      this.diff = new Date(this.diff)
      var msec = this.diff.getMilliseconds()
      var sec = this.diff.getSeconds()
      var min = this.diff.getMinutes()
      var hr = this.diff.getHours() - 1
      if (min < 10) {
        min = '0' + min
      }
      if (sec < 10) {
        sec = '0' + sec
      }
      if (msec < 10) {
        msec = '00' + msec
      } else if (msec < 100) {
        msec = '0' + msec
      }
      document.getElementById('chronotime').value = hr + ':' + min + ':' + sec + ':' + msec
      this.timerID = setTimeout(this.chrono(), 10000)
    },
    chronoStart () {
      document.chronoForm.startstop.value = 'stop!'
      document.chronoForm.startstop.onclick = this.chronoStop
      document.chronoForm.reset.onclick = this.chronoReset
      this.start = new Date()
      this.chrono()
    },
    chronoContinue () {
      document.chronoForm.startstop.value = 'stop!'
      document.chronoForm.startstop.onclick = this.chronoStop
      document.chronoForm.reset.onclick = this.chronoReset
      this.start = new Date() - this.diff
      this.start = new Date(this.start)
      this.chrono()
    },
    chronoReset () {
      document.getElementById('chronotime').value = '0:00:00:000'
      this.start = new Date()
    },
    chronoStopReset () {
      document.getElementById('chronotime').value = '0:00:00:000'
      document.chronoForm.startstop.onclick = this.chronoStart
    },
    chronoStop () {
      document.chronoForm.startstop.value = 'start!'
      document.chronoForm.startstop.onclick = this.chronoContinue
      document.chronoForm.reset.onclick = this.chronoStopReset
      clearTimeout(this.timerID)
    },

    codeJeu () {
      var step = 1
      var p1, p2
      var timer = null

      document.addEventListener('click', function (e) {
        switch (step) {
          case 1 : // premier click
            if (e.target.name === 'cards') {
              e.target.card.src = e.target.card.srcback
              p1 = e.target.card.srcback
              step = 2
            } break
          case 2 : // deuxieme click
            if (e.target.name === 'cards') {
              e.target.card.src = e.target.card.srcback
              p2 = e.target.card.srcback
              step = 3
            }
            timer = setTimeout(check, 1700)
            break
          case 3 : // comparaison
            clearTimeout(timer)
            check()
            break
        }
      })

      function check () {
        if (p2 === p1) {
          p1.replaceWith(document.createElement('span'))
          p2.replaceWith(document.createElement('span'))
        } else {
          p1 = p2 = '@/assets/907-4-ducale-dos-bleu.png'
        }
        step = 1
      }
    }
  },
  mounted () {
    // this.chronoStart()
    this.overlayStart()
  },

  melange () {
    var a = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
      .map(p => [p, Math.random()])
      .sort((a, b) => a[1] - b[1])
      .map(p => p[0])
    console.log(a)

    var pics = document.getElementsByTagName('img')
    for (let i = 0; i < pics.length; i++) {
      pics[i].srcback = '@/imgback/dos' + a[i] + '.png'
    }
  }
}
</script>
