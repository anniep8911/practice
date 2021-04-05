var ran;
var yn;
var msg;
var bg;

function start() {
    msg = document.getElementById('msg');
    bg = document.getElementById('bg');
    msg.value="게임시작!!"; 
    ran = parseInt(Math.random() * 100 + 1);
    yn = 0;
    bg.style.backgroundColor="white";
}

function odd() {
    msg = document.getElementById('msg');
    bg = document.getElementById('bg');
    console.log(msg);
    if (yn > 0) {
        alert('이미 게임에 참여하였습니다.');
        msg.value ="다시 하시려면 게임시작 버튼을 눌러주세요!";
    } else {
        if (ran % 2 == 1) {
            msg.value="맞았습니다."
            bg.style.backgroundColor="yellow";
        } else {
            msg.value="틀렸습니다."
            bg.style.backgroundColor="red";
        }
    }
    yn = 1;
}

function even() {
    msg = document.getElementById('msg');
    bg = document.getElementById('bg');
    if (yn > 0) {
        alert('이미 게임에 참여하였습니다.');
        msg.value ="다시 하시려면 게임시작 버튼을 눌러주세요!";
    } else {
        if (ran % 2 == 0) {
            msg.value="맞았습니다."
            bg.style.backgroundColor="yellow";
        } else {
            msg.value="틀렸습니다."
            bg.style.backgroundColor="red";
        }
    }
    yn = 1;
}