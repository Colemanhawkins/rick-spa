export const Search = () => {
    let input = document.createElement('input');
    input.id = 'search';
    input.placeholder = 'Press enter to search'
    input.style.display = 'none';

    return input
}