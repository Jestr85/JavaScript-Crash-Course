const str = "Frontend Simplified"

for (let i = 0; i <= str.length; i++) {
    console.log(str[i])
}

// for loop -  for printing every character of a string //

function welcomePersonToFES(firstName, lastName) {
    console.log(`Welcome to FES, ${firstName}, ${lastName}`)
}
welcomePersonToFES('David', 'Bragg');
welcomePersonToFES('John', 'Doe');

// calling a function //

// function convertCelsiusToFahrenheit(celsius)
//    return celsius * 1.8 + 32


// console.log(convertCelsiusToFahrenheit(0))
// console.log(convertCelsiusToFahrenheit(10))
// console.log(convertCelsiusToFahrenheit(30))

// 2 ways to call functions //

const convertCelsiusToFahrenheit = () => {
    return 'FES'
}
console.log(convertCelsiusToFahrenheit(0))

/* arrays */

let arr = [20, 30, 40, 50, 100]

// first element of array
console.log(arr[0])

//last element of array
console.log(arr[arr.length - 1])

// add element onto the end of the array
arr.push(200)

let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
    return true;
    }
})

console.log(newArr)

// Practice Array

let grades = ['A+', 'A', 'FAIL']

let goodGrades = grades.filter((element) => {
    console.log(element)
    if (element !== 'FAIL') {
        return true;
    }
})

console.log(goodGrades)

// Simplify this -->

let rank = ['A+', 'A', 'FAIL']
let goodRank = rank.filter(element => element !== 'FAIL')
console.log(goodRank)

// 'for' loop in arrays

// let goodGrades = []
for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }
}    
// console.log(goodGrades);


let array =  [1, 4, 9, 16]
let newArray = array.map(element => 'dog')
console.log(newArray)

// array practice //

let dollars = [1, 5, 10, 3]
let cents = dollars.map(element => element * 100)
console.log(cents)
            // OR //
//  for (let i = 0; i < dollars.length; ++i)
//  cents.push(dollars[i] * 100)
//  console.log(cents)


            // Objects //

let userFirstName = 'Jerry'
let userLastName = 'Estrada'
let userDiscordId = 'Jestr85'
let userSubscriptionStatus = 'VIP'
        // Simplify //
let users = [
{
    username: 'Jestr85',
    email: 'jestr85x@gmail.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'Jestr85x',
},
{
    username: 'David',
    email: 'david@frontendsimplified.com',
    password: 'david123',
    subscriptionStatus: 'VIP',
    discordId: 'David Bragg#0001', 
}
]
function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
    console.log(users[i])
    }
}
login('jestr85x@gmail.com', 'test123')

    // Add user to above list //

function register(user) {
    users.push(user);
}

register({
    username: "Jerry",
    email: "jestr85x@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Jestr85x",
    lessonsCompleted: [0, 1, 2]
})

console.log(users);

        // Document Object Model //

// First way to access an element
console.log(document.querySelector('#title'));

//Second way to access an element
console.log(document.getElementById('title'));

// Change HTML
document.querySelector('#title').innerHTML = 'Frontend Simplified'

// Change CSS
document.querySelector('#title').style.fontSize = '30px'


function toggleDarkTheme() {
    document.querySelector('body').classList.toggle('dark-theme')
}


    // Promises //

const emailRef = document.querySelector(".email");

fetch("https://jsonplaceholder.typicode.com/users/i").then((response) => {
    return response.json();
})
    .then((data) => {
        console.log(data);
        emailRef.innerHTML = data.email
    })


async function main() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users/1");								-	'Async/Await' method
	const data = await response.json();
	emailRef.innerHTML = data.email
}


const statusRef = document.querySelector('status')

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

console.log(getSubscriptionStatus())


    // Challenge //

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
       if (subscriptionStatus === "VIP") {
        resolve("show video")
       }
       else if (subscriptionStatus === "FREE") {
        resolve("show trailer")
       }
       else {
        reject("no video")
       }
    })
}

async function main () {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    console.log(await getVideo(status))
}
