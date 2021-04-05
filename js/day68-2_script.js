// 내장객체 : 자바스크립트가 미리 만들어놓은 속성값들 미리 만들어진 내장객체는 파스칼표기법으로 만들어 놓음 Math 객체 - 여러 연산을
// 관리, 숫자에대해 정의 Math.random()을 하면 0보다 크고 1보다 작은 무리수를 생성함-> 내장함수 :: 미리 만들어놓은 기능
// parseInt(n) > int로 변환 n의 값을 정수로 분석 예: n이 1.168...을 정수로 분석하면 1 예 n이 0.999999를
// 정수로 분석하면 0 글로벌 변수 :: 전역변수 선언
var ran;

//변수 선언 후 원하는 값을 만들어내는 함수 > 원하는 값이 전역변수에 대입됨.
function start() {
    //0이 안나오게 하는방법은 +1을 하면 됨
    ran= parseInt(Math.random() * 100 + 1);
    console.log(ran);
}

function odd() {
    if (ran % 2 == 1) {
        alert('맞았습니다!');
    } else {
        alert('틀렸습니다!');
    }
}
function even() {
    if (ran % 2 == 0) {
        alert('맞았습니다!');
    } else {
        alert('틀렸습니다!');
    }
}