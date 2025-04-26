// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
console.log(secretMessage);

// 1 - méthode enlevant le dernier élément du tableau
secretMessage.pop();
 

// 2 - méthode ajoutant les mots "to" et "program" comme des éléments distincts à la fin du tableau
secretMessage.push("to","program");
console.log(secretMessage)


//3 - change le mot "easily" par "right" en accédant au bon index du tableau
secretMessage.splice(6, 1, "right");

//4 - méthode qui supprime le premier élément du tableau
secretMessage.splice(0,0,);
console.log(secretMessage);

//5 - méthode ajoutant la chaîne "Programing" en début de tableau
secretMessage.splice(0,1,"Programing");
console.log(secretMessage);

//6 -méthode remplaçant les cinq mots "get" "right" "the" "first" "time" par le mot "know"
secretMessage.splice(5,5, "know");
console.log(secretMessage);

//7 - utilisation de la méthode join pour afficher le message secret dans la console.
console.log(secretMessage.join());