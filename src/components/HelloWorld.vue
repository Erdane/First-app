<template >
<v-container >
    <v-toolbar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logout" >Deconnexion
        <v-icon>mdi-cancel</v-icon>
      </v-btn>
     </v-toolbar>
    <template v-if="isconnected">
      <v-alert
    type="success"
      v-model="snackbar"
      v-if="text"
      transition="scale-transition"
      border="left"
    dismissible>
      {{ text }}
    </v-alert>
      <Game/>
    </template>
    <template v-else>
      <v-content>
      <v-layout text-center wrap>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              <v-text-field v-model="identifiant" label="Identifiant" :rules="rules.required"></v-text-field>
            </v-col>

            <v-col cols="12" md="10">
              <v-text-field v-model="password" label="Password"
              :append-icon="show1 ? 'show' : 'hidden'"
              :rules="[rules.required, rules.emailMatch]"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              @keypress.enter="login"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col cols="12" md="10">
          <v-btn rounded color="deep-purple accent-4" @click="login" dark>Connexion</v-btn>
            <v-btn rounded @click="signup">Inscription</v-btn>
          </v-col>
        </v-container>
      </v-form>
      <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        Memory
      </p>
      <div class="text--primary">
        Objectif :
      </div>
      <p> Trouve toutes les paires</p>

      <div class="text--primary">
        Comment faire ?
      </div>
      <p> Clique sur deux cartes de ton choix</p>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
    </v-layout>
    </v-content>
    <v-alert
    type="success"
      v-model="snackbar"
      v-if="text"
      transition="scale-transition"
      border="left"
    dismissible>
      {{ text }}
    </v-alert>
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
    err: false,
    isconnected: false,
    show1: false,
    identifiant: '',
    password: '',
    todos: [],
    reponse: '',
    url: '', // http://localhost:4000

    snackbar: true,
    text: '',
    rules: {
      required: value => !!value || 'Required.',
      emailMatch: () => ('The email and password you entered don\'t match')
    }
  }),
  methods: {
    async login () {
      // connecter l'utilisateur
      const response = await this.axios.post(this.url + '/api/login', {
        login: this.identifiant,
        password: this.password
      })
      if (response.status === 200) {
        this.isconnected = true
        // Permet de vider le champs de texte après connexion
        this.password = ''
        this.identifiant = ''
      } else {
        this.err = true
      }
      this.text = response.data.message
      setTimeout(() => {
        this.text = ''
      }, 2500)
    },

    async signup () {
      // connecter l'utilisateur
      const newuser = await this.axios.post(this.url + '/api/signup', {
        username: this.identifiant,
        password: this.password
      })
      this.text = newuser.data.message
      setTimeout(() => {
        this.text = ''
      }, 2500)
    },

    async logout () {
      const logout = await this.axios.get(this.url + '/api/logout')
      this.isconnected = false
      this.text = logout.data.message
      setTimeout(() => {
        this.text = ''
      }, 3000)
    },
    addElement () {
      this.todos.push({
        id: this.todos.length,
        identifiant: this.identifiant,
        password: this.password
      })
      console.log('ajouté !')
    }
  }
}
</script>
