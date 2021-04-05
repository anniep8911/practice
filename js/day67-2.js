var i;
i = 100;
var j;
j = 'text';

function fx(){
    // .의 의미는 접근이라는 의미이고, getElement 등등은 사용할 함수 안으로 이동
    j= document.getElementById('num').value;
    i= document.getElementById('tt').innerText;
    alert(j);
    alert(i);
};
