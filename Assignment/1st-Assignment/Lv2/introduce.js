const sprint_team = require('./members');
const members = sprint_team.members;

function introduce(member_information) { // 이때 매개변수는 JSON을 원소로 갖는 배열
    console.log("*** 갈겨갈겨 스프린트 팀원을 소개합니다 ***\n");
    for(var member of member_information) { /// member 변수 선언만, 초기화 X (undefined)
        const {name, age, part} = member; /// member 변수에 JSON 값 할당
        console.log(`이름: ${name}, 나이: ${age}세, 파트: ${part}`)
    }
}

introduce(members)

/*
    1차 세미나 Lv2 과제에서 알게된 점

1. 다른 모듈에 접근하고 싶을 땐 require 함수를 이용한다.
    - 이때 require 함수는 경로명을 매개변수로 가진다.
    - require 함수로 접근하려는 모듈에서 export가 되어있어야 접근 가능하다.

2. 배열의 length만큼 for문을 돌리고 싶을 땐 'of'를 쓰는 것도 굿
    - of를 사용하면 배열 내 객체를 비구조화할 수 있다.

*/


/*
    궁금한 점

- 자바스크립트 for문의 종류
- 함수 선언할 때 '함수 표현식'을 가장 많이 쓰는지 ?
- line 6~7 약간 이해될듯 말듯 ...
*/
