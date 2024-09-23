function myReduceRight(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = array.length - 1; i >= 0; i--) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

let numbers = [1, 2, 3, 4, 5];
let subtracted = myReduceRight(numbers, function(accumulator, number) {
    return accumulator - number;
}, 0);
console.log(subtracted); // -15