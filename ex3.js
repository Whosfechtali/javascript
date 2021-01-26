///////////TASK1////////
function pseudo(a, b) {
    if(a > b){
    console.log(+ b + " is less than " + a + "")
        
    }else if(b > a){
        console.log(+ b + " is greater than " + a +"")
    }else if ( a === b){
        console.log(+ a + "is equal to " + b +"")
    }
}
var number1 = Math.floor((Math.random() * 10));
var number2 = Math.floor((Math.random() * 10));
pseudo(number1, number2)

///////////TASK2////////
function task2(min, max){
for (i = min; i <= max; i++) {
  if(i % 2 == 0) {
    console.log(""+i+"");
    }
}
for (i = min; i <= max; i++) {
if(i % 2 !== 0) {
    console.log(""+i+"");
    }
}
}

task2(3,7)
///////////TASK3////////
function task2(min, max){
    var array = [];
for (i = min; i <= max; i++) {
  if(i % 2 == 0) {
    array.push(""+i+"");
    }
}
for (i = min; i <= max; i++) {
if(i % 2 !== 0) {
    array.push(""+i+"");
    }
}
return array
    
}
task2(3,7)

///////////TASK4////////

const task4 = (testString) => {
   for(let i = 0; i < Math.floor(testString.length/2); i++){
   if(testString.charAt(i)!==testString.charAt(testString.length-i-1))
      return false;
   }
   return true;
}
task4("eye");  
