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