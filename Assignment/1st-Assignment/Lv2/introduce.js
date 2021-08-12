const sprint_team = require('./members');
const members = sprint_team.members;

function introduce(member_information) { // 이때 매개변수는 JSON을 원소로 갖는 배열
    console.log("*** 갈겨갈겨 스프린트 팀원을 소개합니다 ***");
    for(var member of member_information) { /// member 변수 선언만, 초기화 X (undefined)
        const {name, age, part} = member; /// member 변수에 JSON 값 할당
        console.log(`이름: ${name}, 나이: ${age}세, 파트: ${part}`)
    }
}

introduce(members)
