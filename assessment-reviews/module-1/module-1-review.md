# Module 1 Review Questions and Exercises

## Instructions

1. Click "edit" at the top of the page.
2. Fill in your answers below each question.
3. Save your changes and send a link to your mentor!

## HTML

### Questions

1. What is HTML and what is it used for?
HTML is a mark up language used to structure web pages. It is distinct from the complementary mark up language of CSS that applies styles or implies presentation on top of the structure of HTML. HTMl code should indicate what the purpose and tone of different areas and contents of a webpage are and in this way can be refered to as being semantic or indicating meaning.
2. What is the difference between an ID and a class?
An ID is a way of outling a single distinct part of a webpage for css styles such as the main content container. Classes, on the other hand, can be used many times in a webpage to target different tags and content.
3. What does it mean to write "semantic" HTML?
Semantic html refers to the html that is markedup to indicate the purpose or function of each part of the webpage rather than its appearance. For example, using <div class="red-nav"> instead of using the html5 nav tag and styling it with a class would not be good semantic code.

### Exercises

1. Write a paragraph tag with a class of "highlight" and content "Watch out!".
<p class="highlight">Watch out!.</p>
2. Write an HTML image tag to show an image called `profile-picture.jpg`.
<img src="profile-picture.jpg" />
3. Write a link tag that links to http://google.com.
<a href="http://google.com"></a>
5. Write an complete standard HTML document outline (including a DOCTYPE, and `<html>`, `<head>`, and `<body>` tags).
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link href="main.css" type="text/css">
<script src="main.js">
</script>
</head>
<body>
<ol>
<li>Huckleberry Finn</li>
<li>The Idiot</li>
<li>The Rum Diary</li>
</ol>
</body>
</html>
6. Inside of the code for the previous exercise, write the appropriate tag to link to a script file called `main.js`.
7. Inside of the code for the previous exercise, write the appropriate tag to link to a stylesheet file called `main.css`.
8. Write a numbered list in HTML and list three of your favorite books.
9. Fix the indentation of the following HTML sample:

  ```html
  <div>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
  </div>
  ```

## CSS

### Questions

1. What is CSS and what is it used for?
Cascading Style Sheets. This is a selection of styles that can be applied to a html document to change its appearance. Styles are applied at various levels of the html structure to alter the layout and style of the page. 
2. What is the CSS box model?
The box model is a set of rules for creating space around content in css. The box model defines the order of properties that create space around content.
3. What's the difference between margin and padding?
Padding creates space immediately around content (i.e. html tags) and is surrounded by a border. The margin creates space surrounding the border.

### Exercises

1. Write a CSS rule to make the text of all `h1` tags red.
h1 {
    color: red;
}
2. Write a CSS rule to make the background color of the link with `class="btn"` blue:
.btn {
    background-color: blue;
}

  ```html
  <a href="#" class="btn">Learn more</a>
  ```

3. Write a CSS rule to give the first paragraph in the following HTML a font size of `20px`, but not the second paragraph.
header p {
    font-size: 20px;
}

  ```html
  <header class="jumbotron">
    <p>Hello, World!</p>
  </header>

  <p>Welcome to this awesome website!</p>
  ```

## JavaScript

### Questions

1. What is a function? What are they used for?
A function is a collection of code that performs a specific task that can be reused. Value (parameters) can be passed into functions to run the tasks within the function. The function can be called to carry out it's task.
2. What is the difference between `==` and `===`?
The == operator check for equality in values whereas the === operator checks for absolute equality where the value and data type must be the same.
3. What is the difference between global and local scope variables?
Scope defines the accessability of assignments and declarations in Javascript to other parts of a script. Global Scope means that all these elements are avaible to the whole script. Local scope means that these elements are only available to the scope of the encolsing function.
4. What is a boolean value?
A true or false value
5. What is an array?
An array is an indexed container for data types

### Exercises

1. Write a line that declares a variable called `myName` and set its value to your name.
var myName = "Josh Cone"
2. Write a loop that logs the numbers 1 through 10 to the console.
for (var i = 0; i < 11; i++) {
    console.log(i);
}
3. Translate the following pseudocode into JavaScript: if `score` is greater than `3` and `lives` is greater than `0`, alert "You win!".
if (score > 3 && lives > 0) {
    alert("You win!");
}
4. Write a function `sayHello` that takes one argument, a name, and logs "Hello, <name>!" to the console. Then, call the function below the function definition and pass in your name as the argument.

function sayHello(name) {
    console.log('Hello ' + name);
}   
sayHello('Josh');
5. What would the following script log to the console?

  ```javascript
  var currentSong = "Call Me Maybe";

  function setSong(song) {
    currentSong = song;
  }

  setSong("Friday, Friday");

  console.log(currentSong);
  ```
Logs: Friday, Friday

6. What would the following script log to the console?

  ```javascript
  var add = function(a, b) {
    return a + b;
  }

  var result = add(3, 7);

  console.log(result);
  ```
Logs: 10

7. What would the following script log to the console?

  ```javascript
  var helloGoodbye = function(name) {
    return sayHello(name) + " " + sayGoodbye(name);
  }

  var sayHello = function(name) {
    return "Hello " + name + " !";
  }

  var sayGoodbye = function(name) {
    return "Goodbye " + name " !";
  }

  console.log(helloGoodbye("Sarah"));
  ```
Logs: Hello Sarah ! Goodbye Sarah !

8. Write a function `findLongestWord()` that takes an array of words and returns the length of the longest one.
var words = ['word', 'words', 'worded', 'worder', 'wordle', 'wordicate'];
var number = 0;
function findLongestWord() {
    for(var i = 0; i < words.length; i++) {
        if(words[i].length > number) {
			 number = words[i].length;	
        }
    }
console.log(number);
}
findLongestWord();
9. Define a function `sum()` that sums all the numbers in an array of numbers. For example, `sum([1,2,3,4])` should return 10.
var numbers = [1,2,3,4];
var number = 0;
function sum(array) {
       for (var i = 0; i < array.length; i++) {
            number += array[i];
       }
		console.log(number);
}
10. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function charVowel() {
    
}   
11. Write the correct line to make `"Woof!"` show up in the console based on this script:

  ```javascript
  var pet = {
    name: "Charles",
    goodDog: true,
    speak: function() {
      console.log("Woof!");
    }
  };
  ```
pet.speak();

12. Using the same script as above, write the correct line to log the dogs name to the console.

## Command Line

### Questions

1. What is the command line and what is it used for?
Navigating a file system. The command line accepts commands which are directive that the computer actions.
2. What does the command `ls` do?
List files in current directory
3. What does the command `pwd` do?
Print working directory shows you the directory path to the current directory from the root directory
4. What does the following command do: `cd my-cool-project`
Changes directory to the directory my-cool-project

### Exercises

1. Write the command to make a new directory called "my-cool-project".
mkdir my-cool-project
2. Write the command to create a file called "index.html".
touch index.html
3. Write the command to delete a file called "main.css".
rm main.css
## Git

### Questions

1. What is Git and what is it used for?
GIT is a distributed repository system that allows developers to take snap shot of a file and store it. Different verions  of file states can be restored, overwritten and cloned. In addition, different branches can be created to owrk on independently of a central code base.
2. What's the difference between a local repository and a remote repository?
the local

### Exercises

1. Write the command that you would use to create a new local Git repository.
2. Write the command to stage a file called `index.html` to be committed.
3. Write the command to view the current status of the git repository.
