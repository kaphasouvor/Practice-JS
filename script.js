const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:
function myLoop() {
    for (var i = 0; i < numbers.length; i++) {
        var res = String.fromCharCode(numbers[i]);
        console.log('Using for loop to convert Ascii ' + numbers[i] + ' is ' + res);
        document.getElementById("loop").innerHTML = 'Using for loop to convert Ascii ' + numbers[i] + ' is ' + res;
    }
}
myLoop();

// Using the forEach method:
function myForEach() {
    numbers.forEach(function(entry) {
        var res = String.fromCharCode(entry);
        console.log('Using forEach mehtod to convert Ascii: ' + res);
        document.getElementById("forEach").innerHTML = 'Using forEach mehtod to convert Ascii: ' + res;
    });
}
myForEach();

// Using the map method:
function myMap() {
    var newArray = [];
    var newArray = numbers.map(function(num) {
        var res = String.fromCharCode(num);
        console.log('Using Map mehtod to convert Ascii: ' + res);
        document.getElementById("map").innerHTML = 'Using Map mehtod to convert Ascii: ' + res;
    });
}
myMap();

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
function myFilter() {
    const result = numbers.filter(number => number > 72 && number <= 88);
    console.log(result);
    //var newResult = String.fromCharCode(result);
    //console.log('Using filter method ' + newResult);
    document.getElementById("filter").innerHTML = 'Using filter method ' + result;
}
myFilter();

// 3. Display the product of all numbers using reduce
function myReduce() {
    const reducer = (accumulator, currentValue, currentIndex, array) => accumulator * currentValue;
    console.log('Displaying the product of all numbers using reduce method ' + numbers.reduce(reducer));
    document.getElementById("reduce").innerHTML = 'Displaying the product of all numbers using reduce method ' + numbers.reduce(reducer);
}
myReduce();
