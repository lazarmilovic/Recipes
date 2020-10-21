export default class Like{
    constructor(){
        this.likes= [];
    }

    addLike (obj){
        const like= {obj};
        this.likes.push(like);

        return like;
    }

    removeLike(id){
        const index= this.likes.findIndex(el=>el.id=== id);
        this.likes.splice(index,1);
    }
    //this method will return if passed id is in the likes array- if it is it will return true, if not will return false
    isLiked(id){
        return this.likes.findIndex(el=>el.obj.recipe_id===id) != -1;
    }

    getLikedItem(id){
        const el= this.likes.findIndex(el=>el.obj.recipe_id===id);
        return el;
    }

    numberofLikes(){
        return this.likes.length;
    }
}