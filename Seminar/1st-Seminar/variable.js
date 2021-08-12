// var variableVar = "123";
// var variableVar = "321";

// console.log(`variableVar: ${variableVar}`);

// if(true) {
//     var x = 'var';
// }
// console.log(`var: ${x}`); // var: var

// if(true) {
//     let y = 'let';
// }
// console.log(`let: ${y}`); // ReferenceError: y is not defined

// function colorFunction() {
//     if(true){
//         var color = 'blue';
//         console.log(color)
//     }
//     console.log(color);
// }
// colorFunction();
// console.log(color)

hoistFunction();
function hoistFunction() {
    console.log(x);
    var x = 'var';
    console.log(x);
}