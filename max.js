//Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

//define the max() function + two number as parameters
function max(num1, num2) {
//test for the larger number
    if (num1 > num2) {
            alert(num1 + " is the largest number");
        } else if (num1 == num2)  {
            alert('shit\'s even yo!')
        } else {
            alert(num2 + " is the largest number");        
        }
};
$(document).ready(function() {
    alert('Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript');
    var number1 = prompt('Enter the first number for this script');
    var number2 = prompt('Enter the second number for this script');
    $('p').append('<body>' +  max(number1,number2) +'</body>');
});