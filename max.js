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
    $('p').append('<body>' +  max(10, 10) +'</body>');
});