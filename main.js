fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function (response){
    return response.json()
})
.then(function (data){
    showData(data)
})

function showData(jsonData){
    console.log(jsonData)

const template = document.querySelector("template").content;

const aCopy = template.cloneNode(true);

console.log(template)

aCopy.querySelector("h2").textContent = jsonData.name;




const showMe = document.querySelector("main");

showMe.appendChild(aCopy);

jsonData.forEach(showData);

}

/*var modal = document.getElementById("popUp");

var btn = document.getElementById("Btn");

var span = document.getElementsByClassName("close") [0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/


