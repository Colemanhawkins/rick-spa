export const Header = () => {
    let nav = document.createElement("nav")
    nav.setAttribute('class','nav')
    nav.innerHTML = `
    <a href='#/'> Home </a>
    <a href='#/search'> Search </a>
    `

    return nav
}