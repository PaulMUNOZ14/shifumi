const buttons = document.querySelectorAll('.bouton');
const res = document.getElementById('res');

const choix = ['Pierre', 'Feuille', 'Ciseaux'];

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        const Joueur = button.textContent;
        const Robot = choix[Math.floor(Math.random() * 3)]
        let resultat = ""
        if(Joueur == Robot){
            resultat = "Egalite"
        } else if (
            (Joueur == "Pierre" && Robot == "Ciseaux") ||
            (Joueur == "Feuille" && Robot == "Pierre") ||
            (Joueur == "Ciseaux" && Robot == "Feuille")) {
                resultat = "Victoire"
        } else {
            resultat = "Défaite"
        }

        res.innerHTML = `Vous avez joué : ${Joueur}<br>Le robot a joué : ${Robot}<br>C'est une <strong>${resultat}</strong>`;
    })
});