# Recipes
Fetching the recipes data from a third-party API based on entered query. 

![alt text](https://github.com/lazarmilovic/Recipes/blob/main/Preview.png?raw=true);


When user enters a query and clicks Search button, the AJAX call will be triggered which will return the recipes that contain the query. Each recipe will be rendered on the left side of the screen with a "click" event attached to it. The event will trigger another AJAX call which will pass the recipe's ID to the API and get the full recipe which will be rendered on the right side of the screen. 
Each full recipe has a default picture of a heart with "Like me" text under it. Once the user clicks the picture, it will trigger the "like" of the recipe which will change the picture to a fully-red heart and text "Liked!" under it. It will also add/remove the recipe to/from the "liked recipes container" which is not visible at the start. 
The const state is the one that will contain all the queries and results and also the likes of the recipes and after each "liking" and "un-liking" of the recipe, the state object will be changed. After clicking on a "like" button, if the "liked recipes container" is not empty, another picture ("liked items") will be shown and with a hover over it, the text "Click to see liked items" will be displayed. 
By clicking the picture "liked items" the user will toggle the div with liked recipes. Each liked recipe has an event listener attached to it and the click on it will triiger a function which will display the details for that particular recipe. 
