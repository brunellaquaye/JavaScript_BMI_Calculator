//Write a function that takes height (in meters) and weight (in kilograms) as input and returns the BMI value.
function BMI(height,weight){
    height = Number(height);
    weight = Number(weight)
    return (height**2)/weight
}
const sample = BMI(170,30);
console.log(`Your BMI is ${sample}`);