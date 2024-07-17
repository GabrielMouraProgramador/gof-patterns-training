import { MyClassSingleton } from "./classic";
import { MyDatabaseModule } from "./module";

console.log('Consumindo')
console.log()
console.log()


// CLASSIC
console.log('CLASSIC')
const example =  MyClassSingleton.getInstance()
console.log(example.showsData())


//MODULE
console.log('MODULE')
MyDatabaseModule.showID()