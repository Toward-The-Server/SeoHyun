/*
    1. 함수 선언식
    function 함수명(매개변수) {
        ...
    }
*/
function add(x, y) {
    return x + y;
}
console.log(add(2,3))

/*
    2. 함수 표현식
    var 함수명 = function(매개변수) {
        ...
    }
*/
var addStr = function(x, y) {
    return x + y;
}
console.log(addStr("안녕", "하세요"));

/*
    2-1. 화살표 함수 표현식
    var 함수명 = (매개변수) => {
        ...
    }
*/
var add = (x, y) => {
    return x + y;
}
console.log(add(2,3));

// 객체를 리턴하고 로직이 한줄일때는 소괄호 ( ) 로 감싸줘야함
var person = function(name, age) {
    return {
      name: name, 
      age: age,
    };
  }
  
var person = (name, age) => ({ name: name, age: age });