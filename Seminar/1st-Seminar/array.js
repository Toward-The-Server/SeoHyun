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

    unshift(값): 배열 맨 앞의 값 추가
    shift(): 배열 맨 앞의 값 삭제
*/
arr.unshift('first item');
console.log('arr unshift: ', arr);
arr.shift();
console.log('arr shift: ', arr);

/*
    2-4. includes
*/
console.log('arr.includes(4): ', arr.includes(4));
console.log('arr.includes(1000): ', arr.includes(1000));

/*
    2-5. indexOf
*/
console.log('arr.indexOf(4): ', arr.indexOf(4));
console.log('arr.indexOf(100): ', arr.indexOf(100));

/*
    2-6. concat
*/
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var concatArr = arr1.concat(arr2);
console.log('arr1.concat(arr2): ', concatArr);

/*
    2-7. join

    원소들을 연결하여 하나의 값으로 만든다.
    원소구분자를 파라미터로 넣는다.
*/
var location = ["서울", "대전", "대구", "부산"];
console.log(location.join('-> '));

/*
    2-8. reverse
*/
console.log(location.reverse().join('-> '));

/*
    2-9. sort

    arr.sort([compareFunction])

    디폴트는 ASCII 문자 기준 오름차순으로 정렬
        -> 숫자를 비교할 때 적합하지 X
            ex) 아스키 코드 상 '10' < '3'

    이 때 필요한게 compareFunction 파라미터
    compareFunction을 선언할 경우, sort() 함수는 compareFunction이 반환하는 값을 기준으로 정렬한다.

    compareFunction(a, b)의 반환값의 종류와 의미
        - 반환값 < 0 : a가 b보다 앞에 있어야 한다. (그대로)
        - 반환값 = 0 : a와 b의 순서를 바꾸지 않는다.
        - 반환값 > 0 : b가 a보다 앞에 있어야 한다. (바뀐다)

    compareFunction의 경우 단순 계산이므로 '화살표 함수'를 이용하여 간결하게 표현할 수 있다.

    sort함수는 원본도 변경한다. 이에 유의 !
*/
var countries = ['Korea', 'Andorra', 'Vietnam'];
console.log(countries.sort());
console.log(countries.sort( (a, b) => a > b ? -1 : 1) ); // 내림차순 정렬

var numbers = [1, 7, 3, 5];
console.log(numbers.sort( (a, b) => a > b ? 1 : -1)); // a>b가 true면 자리가 바뀌니까 반환값이 양수, 

/*
    2-10. filter

    배열 요소 전체를 대상으로 조건을 걸고, 그 조건을 충족 새로운 배열을 반환한다. (SQL에서 WHERE 역할)
*/
var number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
var minusNumber = number.filter(item => item<0); // minusNumber에 필터처리된 배열이 반환됨
console.log('minusNumber: ', minusNumber);

/*
    2-11. map

    map은 배열 요소 전체를 대상으로 함수를 호출하고, 그 결과로 새로운 배열을 반환한다.
*/
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
var countriesLengths = countries.map( item => item.length);  // string 배열에서 int 배열이 됨
console.log('countriesLengths: ', countriesLengths); 

/*
    2-12. reduce

    배열의 값을 한 개로 갑소시킨다.
    
    arr.reduce(callback[, initialValue])

    1. callBack
        - previousValue: 마지막 콜백에서 반환된 값 | initialValue
        - currentValue: 현재 배열 내 처리되고 있는 요소
        - currentIndex: 현재 배열 내 처리되고 있는 요소의 인덱스
        - array: reduce 호출에 사용되고 있는 원본 배열
    
    2. initialValue: callback의 첫 번째 인수의 값에 사용되는 값(default)
*/

var number = [1,2,3,4,5,6,7,8,9,10];
var sum = number.reduce( (previousValue, currentValue) => {
    console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
    return previousValue + currentValue;
});
console.log('sum = ', sum);

/*
    3. 배열 순회

    - for: 고전적인 for문
    - for in: 해당 객체의 모든 열거할 수 있는 프로퍼티를 순회
    - for of: 반복할 수 있는 객체를 순회 (배열의 요소에 접근)
    - forEach(): 배열 순회 전용
        - value, index값이 들어옴
*/
var sprintStudy = ["김지수", "김승찬", "장서현", "서호영"];
let studyIndexStr = '얘들아 번호 세볼게 ~ ';
let studyPartMemberNameStr = '이름 한번씩 불러주세요 ~ ';

for(let item in sprintStudy) { // in -> 인덱스
    studyIndexStr += ++item + '! ';
}
console.log(studyIndexStr);

for(let item of sprintStudy) { // of -> 원소값
    studyPartMemberNameStr += item + '! ';
}
console.log(studyPartMemberNameStr);

sprintStudy.forEach( item => {
    console.log(item);
})
