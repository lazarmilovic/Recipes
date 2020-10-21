import { Dom } from '../dom.js';

let appendIngredients = function(el){
    return `<li>${el}</li>`;
}

export let appendSingleRecipe= result =>{
    let recipe= ` <div class="full_recipe_image">
                    <img src="${result.image_url}" alt="full recipe image">
                    <div id="full_recipe_external_details">
                        <h5 class="full_recipe_external_details_publisher">Publisher: ${result.publisher}</h5>
                        <a href="${result.source_url}" target="blank">More info</a>
                    </div>
                </div>
                <div class="full_recipe_details">
                    <div class="full_recipe_details_info">
                        <h4>${result.title}</h4>
                        <div class="like_me">
                            <img src="img/like.png" alt="like picture- red heart" class="liked_pic" id="pic_${result.recipe_id}">
                            <p id="like_me">Like me!</p>
                        </div>
                    </div>
                    <ul id="ingredients">
                    ${result.ingredients.map(el => appendIngredients(el)
                        
                    ).join('') }
                    </ul>
                </div>`;
    Dom.fullRecipe.append(recipe);
}