function ajouter(caractere) {
    const afficheur = document.getElementById('afficheur');
    afficheur.value += caractere;
}
function supprimer() {
    const afficheur = document.getElementById('afficheur');
    afficheur.value = afficheur.value.slice(0, -1);
}
function vider() {
    document.getElementById('afficheur').value = '';
}
function calculer() {
    const afficheur = document.getElementById('afficheur');
    try {
        afficheur.value = eval(afficheur.value);
    } catch (e) {
        afficheur.value = 'Erreur';
    }
}
