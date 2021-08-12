// Symbol

/*
Symbol은 객채 속성을 만들 수 있는 원시 데이터 형식이다
변경 불가능한 원시 타입의 값

Symbol() 함수에는 문자열을 인자로 전달 가능하다
이는 Symbol 생성에 영향을 주지 않고 description으로 사용된다

*/

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1.description)
console.log(symbol1 === symbol2);

console.log('--------------')

const includes = Symbol('커스텀 includes 함수')

Array.prototype[includes] = function() {
    return 'its symbol';
}

var arr = [1,2,3];
console.log(arr.includes(1));
console.log(arr['includes'](1));
console.log(arr[includes]());
