/*This declares a variable called question
and assigns the string 'What is Superman's real name?' to it.*/
const question = "What is Superman's real name?"

/*Next, we need to ask the question stored in the question variable, using a prompt dialog:
A prompt dialog allows the player to type in a response,
which is then stored in the variable it is assigned to, which is answer in this case.*/
const answer = prompt(question);

/* Finally, we use an alert dialog to display the player's answer using string interpolation
to insert the value of answer into the template literal that is displayed in an alert box:
This shows the player the answer they provided.*/
alert(`You answered ${answer}`);

const addNumbers = () => {
    const input = parseInt(document.getElementById('fname').value);

    if (typeof input == 'number') {
        let $total = 0;
        for (let i = 0; i <= input; i++) {
            $total += i;
        }

        document.getElementById("result").innerHTML = $total;
    }
}

function calculateadd() {
    let input1 = parseInt(document.getElementById('fname').value);
    let input2 = parseInt(document.getElementById('add').value);
    let result = input1 + input2;
    document.getElementById('result').innerHTML = result;
}

const calculateSub = function () {
    let input1 = parseInt(document.getElementById('fname').value);
    let input2 = parseInt(document.getElementById('add').value);
    let result = input1 - input2;
    document.getElementById('result').innerHTML = result;
}


function myFunction() {
    const input = document.getElementById('fname').value;
    document.getElementById('result').innerHTML = input;
}