/**
 * @author      Jean Némarre <jean.nemarre@divtec.ch>
 * @version     0.1
 * @since       2016-09-23
 *
 * http://usejsdoc.org/
 */

'use strict'; // Demande un interprétation stricte du code

// Récupérér les éléments HTML
const form = document.getElementById('formRect');
const txtHauteur = document.getElementById('hauteur');
const txtLargeur = document.getElementById('largeur');
const divRectangle = document.getElementById('rectangle');
const selectFond = document.getElementById('fond');
const chkGras = document.getElementById('gras');
const chkSouligne = document.getElementById('souligne');
const txtArea = document.getElementById('txt');
console.log(txtArea);

// Créer une fonction qui sera appelée lors de l'envoi du formulaire
function miseAJourFormulaire(event) {
    // Annuler l'envoi du formulaire
    event.preventDefault();
    // Récupérer la valeur de la hauteur et la convertir en entier
    const hauteur = parseInt(txtHauteur.value);
    const largeur = parseInt(txtLargeur.value);
    // Vérifier que la valeur est un nombre entier positif <= 500
    if(
        isNaN(hauteur) || isNaN(largeur) ||
        hauteur < 1 || hauteur > 500 ||
        largeur < 1 || largeur > 500
    ) {
        alert('La valeur doit être un nombre entre 1 et 500 compris');
        return; // Sortir de la fonction si la valeur n'est pas valide
    }

    // Modifier la hauteur et largeur du rectangle
    divRectangle.style.height = hauteur + 'px';
    divRectangle.style.width = largeur + 'px';

    // Couleur de fond
    divRectangle.style.backgroundColor = selectFond.value;

    // Couleur du texte
    const couleurTexte = document.querySelector('[name="color"]:checked').value;
    divRectangle.style.color = couleurTexte;

    // Mettre le texte en gras
    if (chkGras.checked) {
        divRectangle.style.fontWeight = 'bold';
    } else {
        divRectangle.style.fontWeight = 'normal';
    }
    // Mettre le texte en souligné avec une ternaire
    // Si le test chkSouligne.checked est vrai, on met 'underline' sinon 'none'
    divRectangle.style.textDecoration = chkSouligne.checked ? 'underline' : 'none';

    // Changer le contenu texte du rectangle
    divRectangle.innerHTML = txtArea.value;
}
// Ecouter l'événement submit (envoi) sur le formulaire
form.addEventListener('submit', miseAJourFormulaire);

