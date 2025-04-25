isTesting=true;
if (isTesting) {
    jourChoisi = Number(prompt("Qu'elle jour de la semaine (0-6)"));
    console.log(jourChoisi);
    heureChoisie = Number(prompt("Qu'elle heure (0-23)"));
    console.log(heureChoisie);
}

// you can write js here
//console.log('exo-2');

const messageWeekend = "C'est le weekend";
const messageWeek = "C'est la semaine";
let jourActuel = new Date();
let nbreJourActuel = jourActuel.getDay();
//console.log(nbreJourActuel);
let heure = jourActuel.getHours();
//console.log(heure);
let jourChoisi = Number(window.prompt("Veuillez saisir un nombre entre 0 et 6.", ""));
let heureChoisie = Number(window.prompt("Veuillez saisir un nombre.", ""));
isTesting = true;

/*function isWeekend(jourChoisi, heureChoisie) {*/
    if (jourChoisi == 1 && heureChoisie>9 || jourChoisi == 2 || jourChoisi == 3 || jourChoisi == 4 || jourChoisi == 5 && heureChoisie<18) {
        console.log(messageWeek);
    }
    else { console.log(messageWeekend); }



function choixDate1(jourChoisi, nbreJourActuel) {
    if (jourChoisi == nbreJourActuel) {

        if (nbreJourActuel == 1 || nbreJourActuel == 2 || nbreJourActuel == 3 || nbreJourActuel == 4 || nbreJourActuel == 5) {
            console.log(messageWeek);
        }
        else { console.log(messageWeekend); }
    } console.log(choixDate1());
}

function choixDate2(jourChoisi, nbreJourActuel) {
    if (jourChoisi != nbreJourActuel) {
        if (jourChoisi == 1 || jourChoisi == 2 || jourChoisi == 3 || jourChoisi == 4 || jourChoisi == 5) {
            console.log(messageWeek);
        }
        else { console.log(messageWeekend); }
    }
}

/*function choixHeure(heure,heureChoisie){
    if(heureChoisie==heure){
        if(jou)
    }
}*/

/*var hour = myDate.getHours();
console.log(hour);

const isTesting = true;

var day1 = prompt();
console.log();



/*function dayWritten(day1) {

if (day1 != 6 && day1 != 0) {
    console.log(day1);
    console.log(dayWeek)
}
else if (day1 == 5 && hour > 17 && day1 == 1 && hour < 9) {
    console.log(day1);
    console.log(dayWeekend)
}
else { console.log(dayWeekend) }
}


function dayB(myDate) {

if (myDate != 6 && day != 0) {
    console.log(dayWeek);
    console.log(day);
}
else if (myDate == 5 && hour > 17 && day == 1 && hour < 9) {
    console.log(dayWeekend)
}
else { console.log(dayWeek) }
}*/

