// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
console.log(joeInfo.bathrooms = 1);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
console.log(joeInfo.garage = 1);


var team = { //Création d'un objet "team" qui contient les propriétés "players" et "games"
    players: [{ //Création d'un tableau "players" qui contient un objet avec les propriétés "firstName", "lastName" et "age"
        firstName: 'Pablo', //
        lastName: 'Sanchez',
        age: 11,
    }],
    games: [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27,
    }],
    addPlayer(firstName, lastName, age) { //Méthode pour ajouter un joueur à l'équipe avec ses informations
        this.players.push({ //Ajout d'un joueur au tableau "players", "this" faisant référence à l'objet "team"
            firstName: firstName,
            lastName: lastName,
            age: age,
        });
    },
    addGame(opponent, teamPoints, opponentPoints) {
        this.games.push({
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        });
    },
    getPoints() { //Méthode pour calculer le nombre total de points marqués par l'équipe
        let totalPoints = 0; //Initialisation de la variable "totalPoints" à 0
        for (let i = 0; i < this.games.length; i++) { //Boucle pour parcourir le tableau "games"
            totalPoints += this.games[i].teamPoints; //Ajout des points marqués par l'équipe au total
        }
        return totalPoints; //Retourne le nombre total de points marqués par l'équipe
    },
    getAverageOpponentPoints() {
        let totalOpponentPoints = 0;
        for (let i = 0; i < this.games.length; i++) {
            totalOpponentPoints += this.games[i].opponentPoints;
        }
        return totalOpponentPoints / this.games.length;
    },
    getEldestPlayer() {
        let oldestPlayer = this.players[0];
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].age > oldestPlayer.age) {
                oldestPlayer = this.players[i];
            }
        }
        return oldestPlayer;
    },
    sortAlphabetically() {
        this.players.sort((a, b) => { //Méthode pour trier les joueurs par ordre alphabétique en utilisant la méthode sort() et la fonction de comparaison CompareFn(a, b) 
            if (a.firstName < b.firstName) { //Premier élément de comparaison : si le prénom du joueur a est inférieur à celui du joueur b, on retourne -1
                return -1;
            }
            else if (a.firstName > b.firstName) { //Deuxième élément de comparaison : si le prénom du joueur a est supérieur à celui du joueur b, on retourne 1
                return 1;
            }
            return 0; //Troisième élément de comparaison : si les prénoms sont égaux, on retourne 0
        });
        return this.players;
    },
}//Fin de l'objet "team"

team.addPlayer('Jean', 'Michel', 85); // Appelle la méthode addPlayer de l'objet team pour ajouter un joueur
team.addPlayer('Pierre', 'Michel', 47);
team.addPlayer('Gustave', 'Michel', 36);
team.addPlayer('Arthur', 'Michel', 25);
team.addPlayer('Jeanine', 'Michel', 78);
team.addPlayer('Colombe', 'Michel', 98);
team.addPlayer('Durite', 'Michel', 12);
console.log(team.players);

team.addGame('Lakers', 30, 20); // Appelle la méthode addGame de l'objet team pour ajouter un match
team.addGame('Qakers', 27, 12);
team.addGame('Flakers', 68, 68);
team.addGame('Trakers', 91, 88);
team.addGame('Leaders', 36, 55);
team.addGame('Toulouse', 75, 31);
team.addGame('Bordeaux', 28, 48);


console.log(team.getPoints());
console.log(team.getAverageOpponentPoints());
console.log(team.getEldestPlayer());
console.log(team.sortAlphabetically());