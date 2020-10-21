
export default class Search{
    constructor(query){
        this.query= query;
    }

    async getResult(){
        let res= await fetch(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`)
   .then(res=> {
       return res.json()} );
        this.result= res;
   
 }
    }

  