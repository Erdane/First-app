# Memory

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Start node serveur
```
node serveur.js
```
or
```
nodemon serveur.js
```

## Game

### Connexion
Pour commencer à jouer, il faut tout d'abord se connecter :
![Login](/public/Login.png)

Si c'est la première connexion, vous devez vous inscrire.
Entrez alors votre pseudo et votre mot de passe dans les champs de texte.

### Aide
Sur cette page vous trouverez une aide afin de connaitre les objectifs du jeu.
![Help](/public/Help.png)

(AFFICHER DES MESSAGES SI LUTILISATEUR EST DEJA CONNECTER OU PAS DANS LA BASE)

### Jeu
Lors de la connexion, vous serez alors redirigé vers le jeu.
![Game](/public/Game.png)

Notez lors du lancement du jeu, l'alerte de connection qui affiche avec quel nom d'utilisateur vous êtes connecté.

![Alerte connexion](/public/AlertConnection.png)

Une fois connecté, le jeu se lance automatiquement.
Un overlay vous indiquera le temps restant avant le début de la partie

[!Overlay](public/Overlay.png)

Lorsque ce décompte arrive à terme, le chronomètre du jeu se met en marche.

[!Chronometre](public/Chronometre.png)

(PARLER DU JEU)

### Déconnexion
A tout moment vous pouvez vous déconnecter du jeu, à partir du bouton déconnexion

![Deconnexion](/public/BoutonDeconnexion.jpg)

Lors de la déconnexion, vous serez alors redirigé vers la page de login

![Retour page login](/public/Retour_page_login.png)

:warning: **Attention : si vous vous déconnecter votre jeu ne sera pas sauvegardé !**
