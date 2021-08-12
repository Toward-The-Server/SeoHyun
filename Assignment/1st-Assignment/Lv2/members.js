const members = [
    {
        "name": "장서현",
        "age": 23,
        "part": "iOS"
    }, 
    {
        "name": "서호영",
        "age": 26,
        "part": "PLAN"
    }, 
    {
        "name": "김지수",
        "age": 23,
        "part": "iOS"
    }, 
    {
        "name": "김승찬",
        "age": 25,
        "part": "iOS"
    }
]

exports.members = members

/* 

    require()과 exports

require()는 module.exports를 리턴한다.
exports는 module.exports를 refer하고 있으며, shortcut에 불과하다.

exports 해놔야 다른 파일에서 이 모듈을 require 할 수 있음

*/

/* 참고 링크
https://medium.com/@chullino/require-exports-module-exports-%EA%B3%B5%EC%8B%9D%EB%AC%B8%EC%84%9C%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-1d024ec5aca3
*/