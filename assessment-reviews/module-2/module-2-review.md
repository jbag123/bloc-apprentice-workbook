# Module 2 Review Questions and Exercises

## Instructions

1. Click "edit" at the top of the page.
2. Fill in your answers below each question.
3. Save your changes and send a link to your mentor!

*Note: any topics from the first assessment should be reviewed in addition to the questions below!*

## CSS

### Questions

1. What is the box model?
The box model means that a each element in a webpage have certain features which orientate it relative to other elements. Each element will have padding, a border and a margin. 
2. What is the difference between block and inline elements?
Block elements fill the entire norizontal space around them whereas inline elements are able to be floated next to other elements with the float command.
3. What is responsive design?
Responsive design involved create elements that have a relative measurements for width so that those and surrounding elements can adjust to the width of the browser window as it changes dimensions on different devices.
4. Which selector is more specific, a tag selector or class selector?
A class slector.
5. What does `box-sizing` do?
Box sizing changes the way that width and height are calculated. The default that is used means that width wil be calculated from the combination of padding, border and margin values. The declaration content-box means that width will be calulated from both the area of the content and any additional padding and border. With the border-box model only the width or height are added to the final calculation.
6. What's the difference between `relative` and `absolute` positioning?
Relative positioning positions an element relative to normal position; absolute positioning positions an element relative to a browser window or it's nearest position ancestor.
### Exercises

1. Write a CSS rule to turn the background color of the link with the `.btn` class blue on hover:

  ```css
  a.btn:hover {
    background-color: blue;
  }
  ```

  ```html
  <a href="#" class="btn">Learn more</a>
  ```

2. Write a CSS rule to give the `.container` a maximum width of `980px` when the browser window is wider than `1200px`:

  ```css
  html {
    max-width: 1200px;
  }
  
  .container {
    max-width: 980px;
  }
  ```

  ```html
  <div class="container">
    <h1>I'm a heading!</h1>
  </div>
  ```

3. Which text would be red in the following example?

  ```html
  <style>
    section p:last-child {
      color: red;
    }
  </style>

  <section>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p> This text
  </section>
  <section>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p> This text
  </section>
  ```

4. Open this [JSBin](http://jsbin.com/qigiwuhepe/1/edit?html,css,output). Write a CSS rule using floats to make the HTML sample into a four column layout. Paste your udpated link below.

http://jsbin.com/qaduvuvuvo/edit?html,css,output

## JavaScript

### Questions

1. What is a callback?
A callback function is a function that is not called but referenced by another function. This function can be called upon later when the containing function is called. 

### Exercises

1. Write a function `filterLongWords()` that takes an array of words and an integer `num` and returns the array of words that are longer than `num`.


function filterLongWords(array, num) {
    for (var i = 0; i < array.length; i++) {
        var length = i;
    }
    if (num < length) {
      return array;
    } else {
      return "Number wins";
    }
}

console.log(filterLongWords([1,2,3,3], 0));

2. Write a function `charFreq()` that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like `charFreq("abbabcbdbabdbdbabababcbcbab")`.

function charSet(string) {
  var splitString = string.split("");
  var obj = {};
  for (var i = 0; i < splitString.length; i++) {
      value = splitString[i];
      if (value in obj) {
          obj[value]++;
        } else {
          obj[value] = 1;
        }
  }
  return obj;
}

console.log(charSet("abbabcbdbabdbdbabababcbcbab"));

## DOM Scripting

### Questions

1. What does DOM stand for and what is it?

Document Object Model

This means that the code you write for webpages is itself represented in the browser. This presentation is can be manipulated with code and the relationshps between the different elements (nodes) of a webpage can also be exploited. 

### Exercises

1. Write a JavaScript statement that finds the element with the ID, `next`, and saves it to a variable called `nextButton`:

  ```html
  <a href="#" id="next" class="btn">Next</a>
  ```
  
  ```javascript
  var nextButton = document.getElementById("next");
  nextButton.innerHtml = "Next image";
  document.getElementById("next").addEventListener('click', function () {
    alert(Next image coming up.");
  );
  ```

2. Write another line that updates the text of `nextButton` to `"Next image"`.
3. Write another line that adds a click event listener to `nextButton` so that when it's clicked the browser alerts `"Next image coming up."`.

## jQuery

### Questions

1. What is a JavaScript library and why do we use them?
A Javscript library is a collection of commands that simplifies the use of the Javascript language.
2. What is jQuery for?
jQuery allows for the use of selectors to select elements and add event listeners to those selectors. It offers a better chance to move through the DOM and manipulate elmments in one block of code.

### Exercises

1. Write a statement to select all elements with the `.btn` class using a jQuery selector and save them to a variable called `buttons`:

  ```html
  <a href="#" id="next" class="btn">Next</a>
  <a href="#" id="beginning" class="btn">Beginning</a>
  <a href="#" id="previous" class="btn">Previous</a>
  ```
  
  ```jQuery 
  var buttons = $('.btn');
  $(buttons).click(function() {
    console.log('click');
  });
  ```

2. Write another line that adds a click event to the buttons that logs `'click'` to the console when the button is clicked. Use the jQuery syntax.


## Angular

### Questions

1. How is a framework different than a library?
A framework provides more of a methodology for working than a set of tools. The framework will provide a way of working and organising code.
2. What is a controller?
A controller is a way of preparing data as it moves to and from the model and the view in an application. 
3. What is a view?
The view is the front end of an application and represents the scope that is integrating the logic of the controller. 
4. What is a single page application?
Using Angular means that a seamless movement between different states of an application without loading new pages in the browser. All assests are handled in the browser and actions are exchaned between the model and view of the data.
5. What is a directive in Angular?
A direvtive is an entension of html tag attributes that allow for interaction between the controller and the view. 

## Git

### Exercises

1. Write a command to create a new branch called `bug-fix`.
git checkout -b bug-fix
2. If you're on the `master` branch, write a command to merge a branch called `bug-fix` into the `master` branch.
git merge bug-fix
