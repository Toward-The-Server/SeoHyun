/*
    1. 배열 선언하기
*/

var arr1 = [];
console.log(arr1); // undefined
console.log(typeof arr1); // array

var arr2 = new Array(1,2,3,4,5);
console.log(arr2);
console.log(typeof arr2);

// json도 배열의 원소가 될 수 있음
var arr3 = ['장서현', 1, 2, 3, null, {name: 'sh', age: 23}];
console.log(arr3);
console.log(typeof arr3);

/*
    2. array prototype 메소드
*/
console.log('*** Array 기본 함수를 알아보자 ***');
var arr = [1, 2, 3, 4];

/*
    2-1. length
*/
console.log(`arr의 길이: ${arr.length}`);

/*
    2-2. push, pop
*/
arr.push('new item');
console.log('arr push: ', arr);
arr.pop();
console.log('arr pop: ', arr);

/*
    2-3. shift, unshift
*/