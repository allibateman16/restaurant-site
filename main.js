const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true); console.log(aCopy)

aCopy.querySelector("h2").textContent = "Russian Ringbread"

aCopy.querySelector(".price").textContent = "29";

aCopy.querySelector(".short").textContent = "Russisk ringbrød af Karapatisk mel";

aCopy.querySelector(".popUpText").textContent = "Russisk ringbrød efter en klassisk opskrift fra Karapatien. Dejen blandes koldhæver 30 dage, inde brødet bages over bål. Meget sprødt, godt med Karapatisk bjerggedsmør."

<<<<<<< HEAD
whosYourDaddy.appendChild(aCopy);

=======
const showMe = document.querySelector("main");

showMe.appendChild(aCopy);

var modal = document.getElementById("popUp");

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
}
}
>>>>>>> button-edition
