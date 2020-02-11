fetch("https://kea-alt-del.dk/t5/api/categories")
.then(function (response){
      return response.json()
      })
.then(createCategories)

function createCategories(data) {
    console.log(data)
    data.forEach(function(oneCat){
        //create links
        const a = document.createElement("a");
        a.setAttribute("href", `#${oneCat}`);
        a.textContent = oneCat
        document.querySelector("nav").appendChild(a);

       //create sections
        const section = document.createElement("section");
        section.id=oneCat;
        const h1 = document.createElement("h1");
        h1.textContent=oneCat;
       section.appendChild(h1);
        document.querySelector("main").appendChild(section);
    })
    getDishes();
}







function getDishes() {
fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function (response){
    return response.json()
})
.then(function (data){
    showData(data)
})
    }

function showData(jsonData){
    console.log(jsonData)

    jsonData.forEach(showSingleDish)
}

function showSingleDish(dish){
    console.log(dish)

//grab the template
const template = document.querySelector("#dishTemplate").content;
//make a copy
const aCopy = template.cloneNode(true);
//change the content
aCopy.querySelector("h2").textContent = dish.name;
aCopy.querySelector("p.price span").textContent = dish.price;
aCopy.querySelector("p.short").textContent = dish.shortdescription;
aCopy.querySelector("img").src = "https://kea-alt-del.dk/t5/site/imgs/" + "small/" + dish.image + "-sm.jpg"
//append somewhere
const showMe = document.querySelector("main");


if (dish.discount) {
    aCopy.querySelector(".priceDiscount span").textContent = dish.price = Math.round(dish.price - dish.price * dish.discount / 100);
}

else{
    aCopy.querySelector(".priceDiscount").remove()
    aCopy.querySelector(".fullPrice span").textContent = dish.price
}
//create an id out of data
console.log(`#${dish.category}`)
document.querySelector(`#${dish.category}`).appendChild(aCopy)

/*if (dish.soldout) {
    aCopy.querySelector(".allGone").textContent = "We are all out!";
}*/


showMe.appendChild(aCopy);
}


