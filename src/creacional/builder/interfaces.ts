
// Meal
export interface MealComposite{
    getPrice(): number
}

// Builder
export interface MealBuilderInterface{
    makeMeal():this;
    makeBeverage():this;
    makeDessert():this;
}