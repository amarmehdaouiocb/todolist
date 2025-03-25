document.getElementById('btnAjouter').addEventListener('click', ajouterTache);

function ajouterTache() {
    const inputTache = document.getElementById('inputTache');
    const tache = inputTache.value.trim();

    if (tache) {
        const listeTaches = document.getElementById('listeTaches');
        const nouvelElement = document.createElement('li');
        nouvelElement.textContent = tache;
        listeTaches.appendChild(nouvelElement);

        inputTache.value = ''; // Réinitialiser le champ d'entrée
        inputTache.focus(); // Mettre le focus sur le champ d'entrée
    } else {
        alert('Veuillez entrer une tâche !');
    }
}
