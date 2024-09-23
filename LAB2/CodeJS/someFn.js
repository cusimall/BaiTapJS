function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = mySome(numbers, function(number) {
    return number % 2 === 0;
});
console.log(hasEvenNumber); // true