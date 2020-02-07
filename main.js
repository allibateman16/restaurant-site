fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function (response){
    return response.json()
})
.then(function (data){
    showData(data)
})

function showData(jsonData){
    console.log(jsonData)


    jsonData.forEach(showSingleDish)
}

function showSingleDish(dish){
    console.log(dish)

const template = document.querySelector("#dishTemplate").content;

const aCopy = template.cloneNode(true);

aCopy.querySelector("h2").textContent = dish.name;
aCopy.querySelector("p.price span").textContent = dish.price;
aCopy.querySelector("p.short").textContent = dish.shortdescription;
aCopy.querySelector("img").src = "https://kea-alt-del.dk/t5/site/imgs/" + "small/" + dish.image + "-sm.jpg"





const showMe = document.querySelector("main");

showMe.appendChild(aCopy);

}
