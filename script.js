
const buttonSidebar = document.getElementById("buttonSidebar")

let aberto = false

buttonSidebar.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar")

    if (!aberto) {
        addSidebar()
        aberto = true
    } else {
        sidebar.innerHTML = ""
        sidebar.style = ""
        aberto = false
    }
})

function addSidebar(){
    const sidebar = document.getElementById("sidebar")
    sidebar.innerHTML = ''
    
    const barra = criarAside()
    


    sidebar.appendChild(barra.aside)
    
    return{sidebar}
}

/* gerando botões dentro das sidebar */

function compras(){
    const menuOptions = document.getElementById("menuOptions")
    const links = gerarLinksCompras()


    menuOptions.innerHTML = ""

    menuOptions.appendChild(links.minhasCompras)
    menuOptions.appendChild(links.meuCarrinho)
    menuOptions.appendChild(links.todosProdutos)

}
function login(){
    const menuOptions = document.getElementById("menuOptions")
    const links = gerarLinksLogin()

    menuOptions.innerHTML = ""

    menuOptions.appendChild(links.entrar)
    menuOptions.appendChild(links.junteSe)
    menuOptions.appendChild(links.ajuda)
}

/*Criando parte a parte da sidebar */

function criarAside(){
    const aside = document.createElement("aside")
    aside.classList.add("sidebar")
    aside.id = "menu"

    const nav = criarNav()
    const options = gerarOptions()

    aside.appendChild(nav.divNav)
    aside.appendChild(options.divOptions)

    return{aside}

}

function criarNav(){
    const divNav = document.createElement("div")
    divNav.classList.add("navegacao")


    const imgs = gerarImagensMenu()
    
    divNav.appendChild(imgs.imgLogin)
    divNav.appendChild(imgs.imgCompras)

    return {divNav}

}

function gerarOptions(){
    const divOptions = document.createElement("div")
    divOptions.classList.add("options")
    divOptions.id = "menuOptions"

    const links = gerarLinksLogin()
    divOptions.appendChild(links.entrar)
    divOptions.appendChild(links.junteSe)
    divOptions.appendChild(links.ajuda)

    return {divOptions}
}

function gerarImagensMenu() {
    const imgLogin = document.createElement("img")
    imgLogin.src = "img/icons/iconLogin.png"
    imgLogin.classList.add("buttonlogin")
    imgLogin.id ='buttonLogin'

    const imgCompras = document.createElement("img")
    imgCompras.src = "img/icons/compras.png"
    imgCompras.classList.add("buttonlogin")
    imgCompras.id ='buttonCompras'

    imgCompras.addEventListener("click", compras)
    imgLogin.addEventListener("click", login)

    return {imgCompras, imgLogin}
    
}

/* links para colocar nos botôes */

function gerarLinksCompras(){
    const minhasCompras = document.createElement("a")
    const meuCarrinho = document.createElement("a")
    const todosProdutos = document.createElement("a")

    minhasCompras.textContent = "Minhas compras"
    meuCarrinho.textContent = "Meu carrinho"
    todosProdutos.textContent = "Todos produtos"

    minhasCompras.classList.add("optionMenu")
    meuCarrinho.classList.add("optionMenu")
    todosProdutos.classList.add("optionMenu")

    return{minhasCompras, meuCarrinho, todosProdutos }
}

function gerarLinksLogin(){
    const entrar = document.createElement("a")
    const junteSe = document.createElement("a")
    const ajuda = document.createElement("a")

    entrar.textContent = "Entrar"
    junteSe.textContent = "Junte-se a nós"
    ajuda.textContent = "Ajuda"

    entrar.classList.add("optionMenu")
    junteSe.classList.add("optionMenu")
    ajuda.classList.add("optionMenu")

    entrar.href = '/sidebar/login.html'
    junteSe.href = '/sidebar/join.html'
    ajuda.href = '/sidebar/help.html'

    return{entrar, junteSe, ajuda }
}