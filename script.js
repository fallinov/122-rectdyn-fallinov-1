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
const divRectangle = document.getElementById('rectangle');
console.log(form, txtHauteur, divRectangle);

// Créer une fonction qui sera appelée lors de l'envoi du formulaire
function miseAJourFormulaire(event) {
    // Annuler l'envoi du formulaire
    event.preventDefault();
    // Récupérer la valeur de la hauteur et la convertir en entier
    const hauteur = parseInt(txtHauteur.value);
    // Vérifier que la valeur est un nombre entier positif <= 500
    if(isNaN(hauteur) || hauteur < 1 || hauteur > 500) {
        alert('La valeur doit être un nombre entre 1 et 500 compris');
        return; // Sortir de la fonction si la valeur n'est pas valide
    }

    // Modifier la hauteur du rectangle
    divRectangle.style.height = hauteur + 'px';
}
// Ecouter l'événement submit (envoi) sur le formulaire
form.addEventListener('submit', miseAJourFormulaire);

