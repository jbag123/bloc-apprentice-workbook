// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

//Return the function

function translate(vowelsList,consChar) {
    function vowel() {   
        for(var i = 0; i < vowelsList.length; i++) {
            if (consChar == vowelsList[i]) {
                return consChar;
            }
        }
    },  
    function newLine(origLine,separator) {
        var emptLine ="";
        for (var i = 0; i < origLine.length; i++) {
            if () {
                emptLine += origLine[i] + separator + origLine[i];
            }
        }
    console.log(emptLine);
    }
}
translate(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']);