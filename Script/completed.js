var todo = JSON.parse(localStorage.getItem("completed"));
console.log(todo);



todo.forEach(el => {
    
    
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = el.itemname;
    var td2 = document.createElement("td");
    td2.innerHTML = el.quntity;
    var td3 = document.createElement("td");
    td3.innerHTML = el.priotity;
    
    tr.append(td1,td2,td3);
    document.querySelector("#body").append(tr);

});

