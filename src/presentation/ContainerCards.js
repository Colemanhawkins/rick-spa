import { Card } from "./Card.js";

export const ContainerCards = ({results}) => {
    let div = document.createElement('div');
    results.map( character => {
        div.append(Card(character))
    })
    return div
}