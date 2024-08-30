let a = [1, 2, 3, 4, 5];

function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}
let firstEvenNumber = myFind(a, function(number) {
    return number % 2 === 0;
});


console.log(firstEvenNumber); // 2
