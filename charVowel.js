// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// Create the function

function charVowel(vowel,vowelList) {
    for (var i = 0; i < vowelList.length; i++) {
    if (vowel == vowelList[i]) {
        return vowelList[i];
    }
    }
}
charVowel('e',['a','e','i','o','u']);