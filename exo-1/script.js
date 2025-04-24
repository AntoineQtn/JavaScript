console.log('hello from file');
//création d'une variable let nommée 'kelvins' stockant la valeur 294
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
//affichage dans la console du contenu de la variable 'kelvins'
console.log( kelvins );
//création d'une variable let nommée 'celsius' stockant un calcul appelant la variable 'kelvins' précédemment créée
let celsius = kelvins - 273;
// affichage dans la console du résultat du contenu de la variable 'kelvins' 
console.log(celsius);
//création d'une variable let nommée 'Farenheits' stockant un calcul appelant la variable 'celsius' précédemment créée
let Fahrenheits = celsius * (9/5) + 32;
console.log(Fahrenheits);
//affichage dans la console du résultat de la méthode '.floor' qui arrondi les décimaux à l'entier le plus proche appliquée à notre variable 'Fareinheits'
console.log(Math.floor(Fahrenheits))