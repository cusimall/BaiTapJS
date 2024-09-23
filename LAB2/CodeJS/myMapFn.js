// myMap Function

function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let squares = myMap(numbers, function(number) {
    return number * number;
});
console.log(squares); // [1, 4, 9, 16, 25]