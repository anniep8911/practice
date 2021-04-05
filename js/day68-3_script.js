var num;
var msg = {};
function start(){
    msg =  document.getElementById('msg');
    num = parseInt(Math.random()*100+1);
    console.log(num);
    msg.innerHTML="숫자를 입력해주세요. (1~100까지)";
}
function check(){
    var tt = document.getElementById('tt').value;
    if(num == undefined){
        alert('게임시작 버튼을 눌러주세요');
        msg.innerHTML="게임시작버튼을 눌러주세요!"; 
    }else if(isNaN(tt)){
        alert('숫자만 입력해주세요!');
    }else if(tt> 100 || tt < 0){
        alert('1부터 100까지의 숫자만 가능합니다.');
        msg.innerHTML="1부터 100사이 까지만 입력해주세요!"; 
    }else if(num == undefined){
    }else{
        if(tt > num){
            msg.innerHTML="입력값보다 작습니다."; 
        }else if(tt < num){
            msg.innerHTML="입력값보다 큽니다."; 
        }else{
            msg.innerHTML="정답입니다."; 
        }
    }
}