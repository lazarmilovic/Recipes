import { Dom } from '../dom.js';

export const appendLikedItem = (id, title, img ) =>{
    let item= `<div class="liked_items_item" id="item_${id}">
                <img src="${img}" alt="recipe picture">
                <h4>${title}</h4>
            </div>`;
    Dom.liked_items.append(item);
}
export const removeLikedItem = (id) => {
    $(`#item_${id}`).remove();
}
