export default class RecipeView{
    constructor(id){
        this.id= id;
    }
    async getRecipe(){
        try {
            let res= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`)
            .then(res=> {
                return res.json();
            });
            this.result= res;
        } catch (error) {
            console.log(error);
        }
    }
}