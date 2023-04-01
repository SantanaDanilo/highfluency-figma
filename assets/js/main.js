const menuHamburguer = document.querySelector(".cabecalho__menu");
const menuDiv = document.querySelector(".menu");

if(menuHamburguer.classList.contains("desgiro") || menuDiv.classList.contains("inativo")) {
    menuHamburguer.addEventListener("click", () => {
        menuHamburguer.classList.toggle("rotacao");
        menuDiv.classList.toggle("ativo");
    })
}
