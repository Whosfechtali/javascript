function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
var json_obj = JSON.parse(Get("https://aws.random.cat/meow"));

document.getElementById("cat").innerHTML = json_obj.file
document.getElementById("cat").href = json_obj.file
