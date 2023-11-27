const productImage =document.querySelector(".product-image")
const cartButton = document.getElementById("button")
const productTag = document.querySelector(".tag")
const changeRed = document.querySelector(".red")
const changeBlack = document.querySelector(".black")
const changeGray = document.querySelector(".gray")




//black color
changeBlack.addEventListener("click", () => {
    productImage.style.backgroundImage = 'url("../../public/img/blackcar.jpg")';
    cartButton.style.backgroundColor = "black";
    productTag.style.backgroundColor = "black";
})

//gray color
changeGray.addEventListener("click", () => {
    productImage.style.backgroundImage = 'url("../../public/img/graycar.jpg")';
    cartButton.style.backgroundColor = "gray";
    productTag.style.backgroundColor = "gray";
})

//red color
changeRed.addEventListener("click", () => {
    productImage.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
    cartButton.style.backgroundColor = "red";
    productTag.style.backgroundColor = "red";
    
})

