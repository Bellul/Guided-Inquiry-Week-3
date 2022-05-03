
function cutPizzaSlices(slices) {
    return (people) => {
        let slicePerPerson = (slices / people);
        let rSlicePer = slicePerPerson.toFixed(2);
        return `Each person gets ${rSlicePer} slices of pizza`;
    }
}

var sharePizza = cutPizzaSlices(8)

console.log(sharePizza(2));
console.log(sharePizza(3));