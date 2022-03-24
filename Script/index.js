document.querySelector("#form").addEventListener("submit", onto);

// var tolist = JSON.parse(localStorage.getItem("tod1"));

//   var tolist = JSON.parse(localStorage.getItem("tod1") || null)

 if(localStorage.getItem("tod1")==null)
 {
    tolist = [];
 }
 else{
    tolist = JSON.parse(localStorage.getItem("tod1"));
 }




// var tolist = [];

function onto()
{
event.preventDefault();

var name = document.querySelector("#name").value;
var qunt = document.querySelector("#qty").value;
var pri = document.querySelector("#priority").value;

   var todoobj = {
       itemname : name,
       quntity : qunt,
       priotity : pri 
   }

   tolist.push(todoobj)
   console.log(tolist);

   localStorage.setItem("tod1",JSON.stringify(tolist));
}