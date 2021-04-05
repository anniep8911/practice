//문자를 저장할수있는 변수
var str = '100';
console.log(str);
var num= 111;
console.log(typeof num);
num='111';
console.log(typeof num);

str='100'+'100'+'100';
str= 100+100+'100';

var num=0;
num=100;
num= 100+'100';
num= 1+1+1+'100'+'1'+'1';
console.log(num);
//문자앞 숫자는 숫자형으로 인식하지만, 문자뒤의 숫자 계산은 문자로 인식한다.
num= 1+1+1+'100'+1+1;
console.log(num);
console.log(str);

//배열형 데이터
var arr= ['park',33,'Jeong', -100];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
arr[0]='bitddd';
console.log(arr);
console.log(arr);
var obj = {width:'100px', height:'200px'};
console.log(obj);
//함수형 데이터 선언
var fx= function(){
    console.log(obj);
};
//함수형 데이터 사용(만들어진 기능 호출)
fx();