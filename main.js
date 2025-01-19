window.onload = () => {
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

    const le_mot = document.getElementById('mot')
    const reponse_input = document.getElementById('reponse')
    const formulaire = document.querySelector('form')
    const score_label = document.querySelector('#score > span')
    let mot_actuel = ''
    let score = 0

    formulaire.onsubmit = e => {
        e.preventDefault()

        const reponse = reponse_input.value.toUpperCase()
        
        if (reponse === mot_actuel) {
            reponse_input.value = ''
            setup()
            le_mot.classList.remove('faux')
            score_label.innerText = ++score;
        }
        else {
            le_mot.classList.add('faux')
        }
    }

    setup()

    function setup() {
        mot_actuel = mots[Math.floor(Math.random() * mots.length)].toUpperCase()
        le_mot.innerText = mot_actuel
    }
}
