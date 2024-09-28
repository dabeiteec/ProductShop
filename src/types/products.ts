
class Vegetables {
    constructor( 
        protected id:number,
        protected productName:string,
        protected price:number,
        protected description:string,
        protected imgPath:string,
        protected count:number
    ){
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.description = description;
        this.imgPath = imgPath;
        this.count = count;
    }
}
// export const potato extends Vegetables{
//      new Vegetables(1,"potato",12,"sfd","sdgf",12);
// }
// export class Tomato extends Vegetables{
//     tomato = new Vegetables(1,"tomatoe",13,"sfd","sdgf",12);
// }
// import { createStore } from 'redux';

// const store = createStore(reducer);

// export default store;