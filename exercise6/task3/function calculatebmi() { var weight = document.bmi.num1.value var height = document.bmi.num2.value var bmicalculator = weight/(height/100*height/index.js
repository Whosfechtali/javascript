function calculatebmi() {
var weight = document.bmi.num1.value
var height = document.bmi.num2.value
var bmicalculator = weight/(height/100*height/100)
var bmi = bmicalculator.toFixed(0);
document.getElementById("aada").style.display =  "block";
document.getElementById("displaybmi").innerHTML = bmi
}
