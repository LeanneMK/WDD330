//WEEK 02 Examples
///function toggleMenu() {
// document.querySelector('#nav').classList.toggle('open');
//}

///document.querySelector('#menu').addEventListener('click', toggleMenu);


////WEEK 03 EXamples
//function doSomething() {
//  console.log('Something Happened!');
//}
//addEventListener('click', doSomething);


//const clickParagraph = document.getElementById('click');
//clickParagraph.addEventListener('click', () => console.log('click'));
//clickParagraph.addEventListener('mousedown', () => console.log('down'));
//clickParagraph.addEventListener('mouseup', () => console.log('up'));


//WEEK 04 Examples
const form = document.forms['search'];
form.addEventListener('submit', search, false);

function search() {
    alert(' Form Submitted');
}

//We can actually stop the form from being submitted to that URL altogether by using the preventDefault()
//method that we saw in the last chapter. Add the following line to the search function:

function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}

//We’ll also need a file called main.js that is saved in the same folder as the hero.html file.
//In this file, let’s start off by assigning the form to a variable and then adding an event listener for when the form is submitted:

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

//The event listener will invoke the makeHero() function when the form is submitted.
//This function will return an object based on the information provided in the form.
//Let’s implement that function by adding this code to main.js :

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

//We can then iterate over this collection using a for loop to see if each checkbox was checked.
//Checkbox objects have a checked property that tells us if it has been checked or not. It is a boolean property,
//so can only have the values true or false . The value property is used to set the name of the power that can be
//used if the checkbox has been checked. Add the following code to the makeHero() function in main.js :

hero.powers = [];
for (let i = 0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}

//We can refactor this code to be much more succinct by using the array iterators we saw in Chapter 4. The following code will achieve the same result:

hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

//It is also possible to implement custom form validation using JavaScript. For example, say we wanted to
//exclude any superhero names that begin with an 'X'. This is not a standard form of validation, so we’d have
//to write our own. Add this code to main.js to see an example of custom validation:

form.addEventListener('submit', validate, false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

//We can improve the usability of the form further by giving instant feedback, instead of waiting for the form to be submitted.
//This can be achieved by adding the event listener directly to the input field that will fire when the user presses a key (using the keyup event).
//The feedback can then be inserted inside the label element of the input field, along with a class of error for more direct feedback.
//Add the following code to main.js :

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

//***WEEK 04 GROUP WORK */
// Core Requirements
const reset = document.getElementById('reset');
const cells = document.querySelectorAll('.cell');
const divBoard = document.forms.ticTac;
const player1 = {
    name: "player1",
    sign: "X"
};
const player2 = {
    name: "player2",
    sign: "0"
};
let player = player1;

document.getElementById("currentPlayer").innerHTML = player.name;

const getId = (e) => {
    let cellName = e.target;
    document.getElementById("currentPlayer").innerHTML = player.name;
    cellName.innerHTML = player.sign;
    if (player == player1) player = player2;
    else player = player1;
}
// console.log(e.target);

divBoard.addEventListener('click', getId);


// 03
// Add a reset button.
// When touched the reset button should remove all of the marks from the board.


const resetBoard = (e) => {
    e.preventDefault();
    document.getElementById("currentPlayer").innerHTML = player1.name;
    cells.forEach((c) => {
        c.innerHTML = '';
    });
}

reset.addEventListener('click', resetBoard, false);