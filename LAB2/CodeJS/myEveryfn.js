let numbers = [2, 4, 6, 8, 10];

function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}


let allEven = myEvery(numbers, function(number) {
    return number % 2 === 0;
});
console.log(allEven); // true