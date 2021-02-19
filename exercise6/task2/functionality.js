var today = new Date();
var graduate = new Date("2023-5-31")
var calculate = (graduate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
var with_no_decimal = calculate.toFixed(0)
document.getElementById("graduation-counter").innerHTML = with_no_decimal
