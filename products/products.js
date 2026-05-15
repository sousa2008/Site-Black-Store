let buttonCart = document.querySelector("#buttonCart")
let body = document.querySelector("body")

buttonCart.addEventListener("click", () =>{
    body.classList.toggle("mostrarCarrinho")  //variar a classe do body
})