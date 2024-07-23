
import { MealComposite } from "./interfaces";

export class Box  implements MealComposite {
    private readonly children: MealComposite[] = [];
    getPrice(): number {
        return  this.children.reduce((sum,meal) => {
            return sum + meal.getPrice()
        },0);
    }
    add(...meal:MealComposite[]):void{
        meal.forEach( item => this.children.push(item))
    }
}


