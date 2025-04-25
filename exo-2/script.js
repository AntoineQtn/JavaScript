// you can write js here
console.log('exo-2');

const dayWeek = "On est en semaine"
const dayWeekend = "c'est le week-end"

const myDate = new Date();
console.log(myDate);

let day = myDate.getDay();
console.log(day);

const hour = myDate.getHours();
console.log(hour);

const isTesting = true;

if(isTesting){
    
}

if (day != 6 && day != 0) {
    console.log(dayWeek)
}
if (day == 5 && hour > 17) {
    console.log(dayWeekend)
}
if (day == 1 && hour < 9) {
    console.log(dayWeekend)
}
else { console.log(dayWeekend) }
