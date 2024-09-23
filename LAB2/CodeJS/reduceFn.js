function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

let numbers = [1, 2, 3, 4, 5];
let sum = myReduce(numbers, function(accumulator, number) {
    return accumulator + number;
}, 0);
console.log(sum); // 15