

export const ajax = ({url, cb}) => {

    fetch(url)
    .then( res => res.json())
    .then( data => cb(data))
    .catch( err => console.log(err))
}