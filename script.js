
var myArray = [];

function range (start, end, step) {
    if (start < end) {
        for (var i = start; i <= end; i += step) {
            myArray.push(i);
        }
    } else if (start > end) {
        for (i = start; i >= end; i += step) {
            myArray.push(i);
        }
    }
    return myArray;
}

function sum (array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(range(20,10,-6));
console.log(sum(myArray));
