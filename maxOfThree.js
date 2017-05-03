// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

// create the function which takes three numbers
function maxOfThree(num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        alert(num1);
    } else if (num2 > num1 && num2 > num3) {
        alert(num2);
    } else if (num3 > num1 && num3 > num2) {
        alert(num3);
    }
};

$(document).ready(function() {
    alert('Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.');
    var number1 = prompt('Enter the first number for this script');
    var number2 = prompt('Enter the second number for this script');
    var number3 = prompt('Enter the third number for this script');
    $('p').append('<body>' +  maxOfThree(number1,number2,number3) + '</body>');
});