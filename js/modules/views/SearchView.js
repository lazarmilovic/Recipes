import { Dom } from '../dom.js';

export let getInputValue = ()=> Dom.input.val();

let getItems = (result) => {
    let item= `<div class="search_result_div" id="${result.recipe_id}">
                <img src="${result.image_url}" alt="picture">
                <div class="search_result_div_text">
                    <h6>${result.title}</h6>
                </div>
                </div>`;
    Dom.searchResult.append(item);
}

export let appendItems = (recipes) => recipes.forEach(getItems);

export let appendLoader = () => {
    let item= `<div class="search_result_loader">
                    <img src="img/loading_arrow.png" alt="loading arrow">
                </div>`;
    Dom.searchResult.append(item);
}