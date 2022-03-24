var todo = JSON.parse(localStorage.getItem("tod1"));
console.log(todo);

// var complete = [];
var complete = JSON.parse(localStorage.getItem("completed")) || [];


todo.forEach(el => {
    
    
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = el.itemname;
    var td2 = document.createElement("td");
    td2.innerHTML = el.quntity;
    var td3 = document.createElement("td");
    td3.innerHTML = el.priotity;
    var td4 = document.createElement("td");
    // var btn = document.createElement("button");
    // btn.innerText = "Mark as Completed";    
    // td4.append(btn);
    td4.innerText = "Complete";
    td4.style.color="Green";
    td4.addEventListener("click", function(){
            markcompl(el)
    });
    
    tr.append(td1,td2,td3,td4);
    document.querySelector("#body").append(tr);

});


function markcompl(el)
{
    console.log(el);
    complete.push(el);
    localStorage.setItem("completed", JSON.stringify(complete));
}