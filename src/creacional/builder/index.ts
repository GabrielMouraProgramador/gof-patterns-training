import { AbstractMeal } from "./abstract";
import { Box } from "./box";
import { Builder } from "./builder";


// COMPOSITE
// BOX EXEMPLO DE OBJETO COMPLEXO
// QUE DEPENDE DE OUTROS OBJETOS

export class Rice  extends AbstractMeal {}
export class Beans  extends AbstractMeal {}
export class Meat  extends AbstractMeal {}
export class Beverage  extends AbstractMeal {}
export class Dessert  extends AbstractMeal {}

const arroz = new Rice('Arroz', 25)
const feijao = new Beans('Feijao', 15)
const carne = new Meat('Carne', 50)


const box = new Box();
box.add(arroz,feijao,carne)


console.log(box)
console.log(box.getPrice())

// ---------------------------------------------------------
// BUILDER
const builderBox = new Builder()

builderBox.makeMeal().makeBeverage().makeDessert()
builderBox.addMeal(arroz,feijao)


console.log(builderBox.getMeal())
console.log(builderBox.getPrice())