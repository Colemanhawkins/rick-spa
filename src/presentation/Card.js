export const Card = ({id,name,gender,image}) => {
    let div = document.createElement('div');
    div.setAttribute('class','card');
    div.style.width = '18rem';

    document.addEventListener('click', (event) => {
        if(event.target.className === 'btn btn-primary'){
            localStorage.setItem('id', event.target.id)
        }
    })

    div.innerHTML = `     
        <img src=${image} class="card-img-top" alt=${name}>
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text"${gender}</p>
            <a href="#/${name}" id=${id} class="btn btn-primary">More info</a>
        </div>
    `
    return div
}