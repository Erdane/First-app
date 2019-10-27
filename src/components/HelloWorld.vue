<template >
<v-container >
    <!-- <v-system-bar color="indigo darken-2"></v-system-bar> -->

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <div class="flex-grow-1"></div> -->
      <v-btn text @click="logout" >Deconnexion
        <v-icon>mdi-cancel</v-icon>
      </v-btn>
     </v-toolbar>
    <template v-if="isconnected">
    <v-content>
      <Game/>
      <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
    </v-content>
    </template>
    <template v-else>
      <v-content>
      <v-layout text-center wrap>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              <v-text-field v-model="identifiant" label="Identifiant" required></v-text-field>
            </v-col>

            <v-col cols="12" md="10">
              <v-text-field v-model="password" label="Password"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              @keypress.enter="login"
              required></v-text-field>
            </v-col>
          </v-row>
          <v-col cols="12" md="10">
          <v-btn rounded color="deep-purple accent-4" @click="login" dark>Connexion</v-btn>
            <v-btn rounded @click="signup">Inscription</v-btn>
          </v-col>
        </v-container>
      </v-form>
      <v-card class="mx-auto" max-width="400" tile>
        <v-list-item v-for="(item, index) in todos" v-bind:key="item.id">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.identifiant }}
              {{ item.password }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.password }}
              <v-btn @click="rmElement(index)">Remove</v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-layout>
    </v-content>
    </template>
</v-container>

</template>

<script>
import Game from './Game'

export default {
  components: {
    Game
  },

  data: () => ({
    valid: false,
    isconnected: false,
    show1: false,
    identifiant: '',
    password: '',
    todos: [],
    reponse: '',
    url: 'http://localhost:4000',
    snackbar: true,
    text: ''
  }),
  methods: {
    async login () {
      // connecter l'utilisateur

      console.log('Valid :', this.valid)

      const response = await this.axios.post(this.url + '/api/login', {
        login: this.identifiant,
        password: this.password
      })
      console.log('reponse status :', response.status)
      if (response.status === 200) {
        this.isconnected = true
        console.log('valid if: ', this.valid)
        // Permet de vider le champs de texte après connexion
        this.password = ''
        this.identifiant = ''
        this.text = response.data.message
      }
      //console.log('response is:', response)
    },

    async signup () {
      // connecter l'utilisateur
      const newuser = await this.axios.post(this.url + '/api/signup', {
        username: this.identifiant,
        password: this.password
      })
      console.log('New user is:', newuser)
    },

    async logout () {
      const logout = await this.axios.get(this.url + '/api/logout')
      this.isconnected = false
      console.log(logout)
    },
    addElement () {
      this.todos.push({
        id: this.todos.length,
        identifiant: this.identifiant,
        password: this.password
      })
      console.log('ajouté !')
    },
    rmElement (index) {
      console.log('index', index)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<!-------------------------------------------------------------------------------------------------------------->
<!--<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>

  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required>
          </v-text-field>
        </v-col>
      </v-row>

    </v-container>
  </v-form>
</template>

  <script>
// export default {
  // this.axios.post('https://localhost:4000/votreAPI', {
  //   sivousavezdeschamps: 'rentrez les ici'
  // })
  // .then((response) => {
  //   console.log('response', response)
  // })
  // data: () => ({
    /* ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }), */

    /* cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', srcback: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', srcback: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', srcback: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { title: 'NFL', src: 'src/assets/nfl.jpg', srcback: 'src/assets/nfl_league.jpg', flex: 6 }
    ] */
//     valid: false,
//     name: '',
//     description: '',
//     todos: [],
//     url: '' // 'http://localhost:4000'
//   }),
//   methods: {
//     async login () {
//       // connecter l'utilisateur
//       const response = await this.axios.post(this.url + '/api/login', {
//         login: 'admin',
//         password: 'changethispassword'
//       })
//       console.log('response is:', response)
//     },
//     logout () {
//     },
//     addElement () {
//       this.todos.push({
//         id: this.todos.length,
//         name: this.name,
//         description: this.description
//       })
//       console.log('ajouté !')
//     },
//     rmElement (index) {
//       console.log('index', index)
//       this.todos.splice(index, 1)
//     }
//   }
// }

// </script>
// eslint-disable-next-line vue/no-parsing-error
-->
