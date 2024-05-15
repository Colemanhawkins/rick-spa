import { Router } from "./router/Router.js"
import { Header } from "./presentation/Header.js"
import { Main } from "./presentation/Main.js"
import { Search } from "./presentation/Search.js"

export const App  = () => {
    let divRott = document.querySelector('#root')   
    divRott.innerHTML = '<h3 id=title> Rick Spa </h3>'
    divRott.append(Header())
    divRott.append(Main());
    divRott.append(Search())
    
    Router()
}