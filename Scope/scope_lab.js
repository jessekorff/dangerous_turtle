// Global Scope
var globalVar = "I'm a global variable.";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block Scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

//Global Scope
console.log(globalVar); //output: "I'm a global variable"
console.log(globalLet); //output: "I'm also global, but scoped with let"
console.log(globalConst); //output: "I'm a global const"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let funcitonLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
