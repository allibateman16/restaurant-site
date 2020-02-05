const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true); console.log(aCopy)

aCopy.querySelector("h2").textContent = "Russian Ringbread"

aCopy.querySelector(".price").textContent = "29";

aCopy.querySelector(".short").textContent = "Russisk ringbrød af Karapatisk mel";

const whosYourDaddy = document.querySelector("main");

whosYourDaddy.appendChild(aCopy);

