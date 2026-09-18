const buttons = document.querySelectorAll('.bouton');
const res = document.getElementById('res');

const choix = ['Pierre', 'Feuille', 'Ciseaux'];

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        const Joueur = button.textContent;
        const Site = choix[Math.floor(Math.random() * 3)]
        let resultat = ""
        if(Joueur == Site){
            resultat = "Egalite"
        } else if (
            (Joueur == "Pierre" && Site == "Ciseaux") ||
            (Joueur == "Feuille" && Site == "Pierre") ||
            (Joueur == "Ciseaux" && Site == "Feuille")) {
                resultat = "Victoire"
        } else {
            resultat = "Défaite"
        }

        res.innerHTML = resultat
    })
});