/* main.js */


// 1. On attend que la page HTML (le DOM) soit complètement chargée
// Avant de tenter de manipuler le DOM, on s'assure qu'il existe.
document.addEventListener('DOMContentLoaded', () => {
   
    // Message de vérification dans la console F12
    console.log('Le DOM est prêt. Lancement du fetch...');


    // 2. On lance la requête (asynchrone) pour lire le fichier data.json
    fetch('http://127.0.0.1:8000/api/status')
        .then(response => response.json()) // 3. On convertit la réponse en objet JSON
        .then(data => {
            // 4. Cette partie s'exécute quand les données sont arrivées
            console.log('Données reçues :', data);


            // 5. MISE À JOUR DU SERVEUR (SRV-01)
            // On "attrape" la cible HTML (Voir explications sur le DOM)
            // Note : 'statut-serveur-principal' doit correspondre à l'id du HTML
            const serveurElement = document.getElementById('statut-serveur-principal');
           
            // On met à jour son contenu avec la donnée du JSON
            // Note : data.srv01 correspond à la clé dans data.json
            serveurElement.textContent = data.srv01;
            
            // On change la couleur selon le statut
            if (data.srv01 === 'En Ligne') {
                serveurElement.style.color = 'green';
            } else {
                serveurElement.style.color = 'red';
            }
            


            // 6. MISE À JOUR DE LA CAMÉRA (CAM-01)
            // On "attrape" l'autre cible
            // Note : 'statut-camera-1' doit correspondre à l'id du HTML
            const cameraElement = document.getElementById('statut-camera-1');
           
            // On met à jour son contenu
            // Note : data.cam01 correspond à la clé dans data.json
            cameraElement.textContent = data.cam01;
            
            // On change la couleur selon le statuts
            if (data.cam01 === 'En Ligne') {
                cameraElement.style.color = 'green';
            } else {
                cameraElement.style.color = 'red';
            }

            // 7. MISE À JOUR DU PARE-FEU (FW-01)
            // On "attrape" l'élément du pare-feu
            const firewallElement = document.getElementById('statut-pare-feu');
           
            // On met à jour son contenu
            // Note : data.fw01 correspond à la clé dans data.json
            firewallElement.textContent = data.fw01;
            
            // On change la couleur selon le statut
            if (data.fw01 === 'En Ligne') {
                firewallElement.style.color = 'green';
            } else {
                firewallElement.style.color = 'red';
            }
        });


    // Ce message s'affichera AVANT "Données reçues"
    console.log('Fin du script principal (Le fetch est parti, mais pas encore revenu)');
});
