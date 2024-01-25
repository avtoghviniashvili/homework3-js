//N1
let array = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];
function positivenumbers(arr) {
    let positivesum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positivesum += arr[i];
        }
    }

    return positivesum;
}

let result = positivenumbers(array);
console.log(result);

//N2
function sum(num1, num2, num3, num4, num5, num6, num7, num8, num9) {
    return (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9)
}
let Result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(Result);


//N3
let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
}

function log() {
    if (user.isloggedin == true) {
        console.log(user.firstname, user.lastname)
    }
    else {
        console.log('false')
    }
}
log()

//N4
let array2 = [6, -4, -10, -16,]

function highest(number) {
    for (i = 0; i < number.length; i++) {
        if (number[i] > number.length) {
            console.log(number[i]);
        }
    }
}
highest(array2)


//N5
function oddoreven(odd) {
    odd = 93

    if (odd % 1 === 1) {
        console.log('this number is odd');
    }
    else {
        console.log('this number is even');
    }
}
oddoreven()

//N6
let array3 = [1, 2, 3, 4, 5];
let reversedarray = [];

for (let i = array3.length - 1; i >= 0; i--) {
    reversedarray.push(array3[i]);
}

console.log(reversedarray);



//N7

function age() {
    age = 21;
    if (age >= 18) {
        console.log('სრულწლოვანი');
    }
    else {
        console.log('არასრულწლოვანი');
    }
}
age()


//N8
function difference(num1, num2) {
    num1 = 10
    num2 = 20

    if(num1 > num2){
        console.log('num1 is the largest')
    }
    else if (num1 < num2){
        console.log('num2 is the largest') 
    }
    else{
    console.log('error')
    }
}
difference()
