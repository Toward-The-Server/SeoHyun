/* 비동기식 callback */

// console.log('Hello');

// setTimeout(function (){
//     console.log('Bye');
// }, 3000)

// console.log('Hello again');

/* 동기식 callback */

function print() {
    console.log('print');
}

function printImmediately(print) {
    print();
}

printImmediately(print);