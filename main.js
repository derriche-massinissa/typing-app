// Créer un dictionnaire de mots
const mots = [
    'voiture',
    'ordinateur',
    'fleur',
    'livre',
    'code',
    'cours',
    'programme',
    'maison',
    'web',
]

// Trouver et sauvegarder des elements avec leur ID
const mot_element = document.getElementById('mot')
const reponse_element = document.getElementById('reponse')

// Trouver et sauvegarder des elements avec 'querySelector'
// L'usage de querySelector peut etre trouvé ici: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// Cette fonction permet de trouver un element comme dans un fichier CSS
const formulaire_element = document.querySelector('form')
const score_element = document.querySelector('#score > span') // Trouver l'element 'span' à l'interieur de l'element avec l'ID 'score'

// Créer une variable pour le mot à taper
let mot_actuel = ''
// Créer une variable pour le score de l'utilisateur
let score = 0

// Ajouter un écouteur d'événement à l'élément formulaire
formulaire_element.addEventListener('submit', submit)
// Initialiser l'application
setup()

// Cette fonction est appelé quand l'utilisateur soumet le formulaire (appuyé sur 'entré' ou sur le bouton)
function submit(e) {
    // Par défault, le formulaire recharge la page
    // Cette commande empeche la page d'étre rechargé
    e.preventDefault()
    
    // Lire la reponse de l'utilisateur et la rendre en majuscule
    const reponse = reponse_element.value.toUpperCase()
    
    // Si la reponse est correcte...
    if (reponse === mot_actuel) {
        // Vider le champ
        reponse_element.value = ''
        // Choisir un nouveau mot
        setup()
        // Retirer la couleur rouge
        mot_element.classList.remove('faux')
        // Ajouter un point à l'utilisateur
        score++;
        // Afficher le nouveau score
        score_element.innerText = score;
    }
    // Sinon...
    else {
        // Colorer le mot en rouge
        mot_element.classList.add('faux')
    }
}

// Cette fonction choisit un nouveau mot et l'affiche dans la page
function setup() {
    // Generer un nombre aléatoire entre 0 et 1
    const aleatoire = Math.random()
    // Prendre la taille du dictionnaire
    const taille = mots.length
    // Calculer l'index
    const index = Math.floor(aleatoire * taille)
    
    // Tirer le mot à l'index aléatoire
    mot_actuel = mots[index].toUpperCase()
    // Afficher le nouveau mot
    mot_element.innerText = mot_actuel
}
