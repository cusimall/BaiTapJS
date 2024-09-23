// filter function
function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = myFilter(numbers, function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]