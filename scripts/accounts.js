document.addEventListener("DOMContentLoaded", () => {
    loadAccounts();
});

function loadAccounts() {
    fetch("https://api.jsonbin.io/v3/b/67bb56a4ad19ca34f80f69f0/latest", {
        headers: { "X-Master-Key": "$2a$10$2SQuMlcb08504.lkYUFZrOVwEhnLOy9TOw/SLJvegIuyG0gntU6Ni" }
    })
    .then(response => response.json())
    .then(data => {
        const users = data.record; // Les utilisateurs sont stockés sous "record"
        const accountList = document.getElementById("account-list");
        accountList.innerHTML = "";

        users.forEach(user => {
            const div = document.createElement("div");
            div.innerText = `${user.username} - ${user.rank}`;
            accountList.appendChild(div);
        });
    })
    .catch(error => console.error("Erreur de chargement des comptes:", error));
}

function addUser() {
    const username = document.getElementById("new-username").value;
    const rank = document.getElementById("user-rank").value;

    if (!username) {
        alert("Veuillez entrer un nom d'utilisateur.");
        return;
    }

    console.log("Nouvel utilisateur ajouté:", { username, rank });

    // Mise à jour de l'affichage localement (mais ne modifie pas JSONBin)
    const accountList = document.getElementById("account-list");
    const div = document.createElement("div");
    div.innerText = `${username} - ${rank}`;
    accountList.appendChild(div);
}
