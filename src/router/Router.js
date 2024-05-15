import api from '../helpers/urls.js'
import { ajax } from '../helpers/ajax.js'
import { ContainerCards } from '../presentation/ContainerCards.js';
import { NotFound } from '../presentation/NotFound.js';
import { Card } from '../presentation/Card.js';

export const Router = () => {
    let {hash} = location;
    console.log(hash)
    if(hash === '' || hash === '#/'){
            ajax({
                url: api.AllCharactersUrl,
                cb: (data) => {
                    document.querySelector('#section').append(ContainerCards(data))
                }
            })
    }
    else if(hash === '#/search'){
       let inputSearch = document.querySelector('#search');
       inputSearch.style.display = 'block';

       inputSearch.addEventListener('change', (event) => {
           let inputValue = event.target.value;
           ajax({
               url: api.SearchCharacterByNameUrl + inputValue,
               cb: (data) => {
                   const notfound = document
                   .querySelector('#notfound')
                   if(data &&
                      data.error && 
                      data.error.length > 0 &&
                      !notfound
                    ){
                    document
                    .querySelector('#section')
                    .append(NotFound())
                   }
                   else if (data &&
                    !data.error) {
                        document
                        .querySelector('#section')
                        .append(ContainerCards(data))
                        if(notfound){
                            notfound.parentNode.removeChild(notfound)
                            }
                   }
               }
           })
       })
    }else {
        ajax({
            url: api.SearchCharacterByIdUrl + localStorage.getItem('id'),
            cb:  (data) => {
                document.querySelector('#section').append(Card(data))
            }
        })

    }
}