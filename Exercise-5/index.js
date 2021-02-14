function zabi(){
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + 	today.getSeconds();
document.querySelector("#current-time").innerHTML = time;
if(today.getSeconds()%2 == 0)
document.firstElementChild.lastElementChild.style.backgroundColor = "#deb887"; 
  else
   document.firstElementChild.lastElementChild.style.backgroundColor = "#5f9ea0";
setTimeout(zabi,1000);
}
zabi();
