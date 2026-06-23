window.onload = () => {
    alert("Welcome to Amazon Clone by Sarthak!");
};


function showMessage() {
    alert("Happy Shopping!");
}


let cartCount = 0;

const cartCounter = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCounter.innerText = cartCount;

        alert("Item added to cart!");
    });
});
