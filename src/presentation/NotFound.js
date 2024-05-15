export const NotFound = () => {
    let div = document.createElement('div');
    div.innerHTML = '<h2>Character not Found</h2>'
    div.setAttribute('id', 'notfound')
    return div
}