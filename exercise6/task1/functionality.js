function fibonacci(limit){
var f1=0;
var f2=1;
var i,f3;
var text = "The First 20 fibonacci numbers are :"
for(i=2; i<limit; i++)
{
	 f3=f1+f2;
	f1=f2;
	 f2=f3;
  document.write("",f3,", ");
}
return text;
}
document.getElementById("fibo").innerHTML = fibonacci(22);
