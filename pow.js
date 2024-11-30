let number = +prompt("Enter the value of the number:");
let degree = +prompt("Enter the degree:");
function pow(num, deg) {
    let result = 1; 
    for (let i = 0; i < deg; i++) {
        result *= num; 
    }
    return result;
}
alert(`Your result is ${pow(number, degree)}`);
