/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

// ces lignes (cors) sont importantes pour les sessions dans la version de développement
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))
const path = require('path')
app.use(express.static(path.join(__dirname, '/dist')))

// axios.defaults.withCredentials = true,
app.use(session({
  secret: 'lossantos', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())



var users = [{
  username: 'admin',
  password: 'changethispassword'
}]

app.get('/api/test', (req, res) => {
  console.log('ce console.log est appelé au bon moment')
  res.json([
    {
      title: 'truc',
      content: 'machin'
    }, {
      title: 'truc2',
      content: 'machin2'
    }
  ])
})
app.post('/api/signup', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)

  users.push({
    username: req.body.username,
    password: req.body.password
  })

  res.status(200)
  res.json({
    message: 'Nouvel utilisateur',
    lengthUsers: users.length
  })
  console.log('Users after sign up : ', users)
  return users
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
    if (!user) {
      // gérez le cas où on n'a pas trouvé d'utilisateur correspondant
      res.status(401)
      res.json({
        message: 'error'
      })
    } else {
      // connect the user
      req.session.userId = 1000 // connect the user, and change the id
      res.json({
        message: ('Connected as ' + req.body.login)
      })
    }
  } else {
    res.status(401)
    res.json({
      message: ('You are already connected as ' + req.body.login)
    })
  }
  console.log('Users after login : ', users)
})

app.get('/api/logout', (req, res) => {
  if (!req.session.userId) {
    res.status(401)
    res.json({
      message: 'You are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'You are now disconnected'
    })
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
