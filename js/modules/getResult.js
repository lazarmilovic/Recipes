export let getResult = async function (query){

   let result= await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
   .then(res=> {
       return res.json()} );
   
   return result;
     
 }