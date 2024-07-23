import { Beans, Beverage, Dessert, Meat, Rice } from ".";
import { Box } from "./box";
import { MealBuilderInterface, MealComposite } from "./interfaces";

export class Builder implements MealBuilderInterface{
    private meal: Box = new Box();

    reset(): this{
        this.meal = new Box();
        return this
    }
    makeMeal(): this {

        const arroz = new Rice('Arroz', 25)
        const feijao = new Beans('Feijao', 15)
        const carne = new Meat('Carne', 50)
        
        this.meal.add(arroz,feijao,carne)

        return this
    }
    makeBeverage(): this {
        const bebida = new Beverage('Bebida', 30)
        
        this.meal.add(bebida)

        return this
    }
    makeDessert(): this {

        const sobremesa = new Dessert('Sobremesa', 150)
        
        this.meal.add(sobremesa)

        return this
    }

    getMeal():Box {
        return this.meal
    }

    getPrice():number {
        return this.meal.getPrice()
    }
    addMeal(...newMeal:MealComposite[]):void {
        newMeal.forEach( item => this.meal.add(item))
    }

}