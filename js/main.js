import Search from './modules/Search.js';
import Recipe from './modules/Recipe.js';
import { Dom } from './modules/dom.js';
import { getInputValue, appendItems, appendLoader } from './modules/views/SearchView.js';
import { getResult } from './modules/getResult.js';
import { appendSingleRecipe } from './modules/views/RecipeView.js';
import Like from './modules/Like.js';
import { appendLikedItem, removeLikedItem } from './modules/views/LikeView.js';


$(document).ready(function(){
 
    //an object which will contain searches, likes and everything relevant for the user
    const state ={};


    let clearInput = () => Dom.input.val('');

    let clearSearchResult= () => Dom.searchResult.empty();

    let clearFullRecipeField = () => Dom.fullRecipe.empty();

    
        Dom.liked.mouseover(function(){
            Dom.clickToSee.css('visibility', 'visible');
        });

        Dom.liked.mouseleave(function(){
            Dom.clickToSee.css('visibility', 'hidden');
            
        }); 

        Dom.liked.click(function(){
            Dom.liked_items.toggle();
        })
    
0
    let searchForQuery = () =>{
        $(Dom.btn_search).click( async function(e){
            e.preventDefault();
            if(Dom.input.val() != ''){
                
                // adding a new object to state object
                state.search = new Search(Dom.input.val());

                // clearing input field and previous search results
                clearInput();
                clearSearchResult();
                clearFullRecipeField();

                //append loader while waiting for the results
                appendLoader();

                //search the recipes
                await state.search.getResult();

                //clearing previous search results and/or loader
                clearSearchResult();

                //appending the result
                appendItems(state.search.result.recipes);
                Dom.fullRecipe.css('overflow-y', 'scroll');
                
                //setting up a click event for all appended items
                const appendedItems= $('.search_result_div');
                appendedItems.each(function(){
                    $(this).click( async function () {
                        clearFullRecipeField();

                        //adding a new Recipe object 
                        state.single_recipe = new Recipe(this.id);

                        //waiting for AJAX to return result
                        await state.single_recipe.getRecipe();

                        //appending full recipe
                        appendSingleRecipe(state.single_recipe.result.recipe); 

                        //getting the id, img and the title of the recipe since it will be used frequently
                        let id= state.single_recipe.result.recipe.recipe_id;
                        let title= state.single_recipe.result.recipe.title;
                        let img= state.single_recipe.result.recipe.image_url;

                        //if user preaviously liked this recipe before clicking some other recipe, the picture of a default heart will change and it will indicate that the recipe is already liked. 
                        let likedPic = $('.liked_pic');
                        let likeText= $('#like_me');

                        //since appendSingleRecipe will append default image, checking if the recipe is already liked and if it is- changing the picture to 
                        if(state.like){
                            if(state.like.isLiked(id)){
                                likedPic.attr('src','img/liked.png');
                            }
                        }
                        
                        //setting up an event listener for each like img
                        $('#pic_'+id).click(function(){

                                if(!state.like){
                                    //if there are no liked items, one object will be created from the Like class
                                    state.like = new Like();
                                    //show liked items button since this is the first liked item
                                    Dom.liked.show();
                                } 
                                // if this recipe is NOT already liked, it will add it to liked items, if it is- it will remove it
                                if(!state.like.isLiked(id)){
                                    state.like.addLike(state.single_recipe.result.recipe);
                                    console.log(state.single_recipe.result.recipe);
                                    this.src='img/liked.png'; 
                                    likeText.text('Liked!');
                                   

                                    //adding liked recipe to the "liked items"
                                    appendLikedItem(id,title, img);
                                    

                                } else {
                                    state.like.removeLike(id);
                                    this.src='img/like.png';
                                    likeText.text('Like me!');
                                    removeLikedItem(id);
                                    
                                }

                                //setting up an event listener for each liked item so when clicked, the function will show the full recipe in the fullRecipe div.
                                let eachLikedItems= $(`#item_${id}`);
                                eachLikedItems.click(()=>{

                                    //getting the index of the clicked item
                                    const likedItem= state.like.getLikedItem(id);

                                   //clearing fileds and appending it to the fullRecipe div
                                    clearFullRecipeField();
                                   appendSingleRecipe(state.like.likes[likedItem].obj); 
                                });
                                
                                
                                //checking the number of likes after each click and showing/hidding liked items div accordignly
                                let number_of_likes= state.like.numberofLikes();
                                    if(number_of_likes != 0){
                                        Dom.liked.show();
                                        
                                    } else {
                                        Dom.liked.hide();
                                    }
                            
                        })

                    })
                    
                }) 
                
            } else {
                alert('please enter the key word for a search!');
            }
            
        });
    }
        

searchForQuery();

})
