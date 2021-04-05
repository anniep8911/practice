var ran,msg = {},num,tt,ttd,cnt = 0,bg;

function start() {
    ran = parseInt(Math.random() * 100 + 1);
    msg = document.getElementById('msg');
    msg.value = "숫자를 입력 후 정답버튼을 클릭해주세요!";
    ttd = document.getElementById('tt');
    tt = document.getElementById('tt');
    cnt = 0;
    //console.log(ran);
    bg = document.getElementById('bg');
    bg.style.backgroundColor = "white";
    ttd.disabled = "";
    tt.value = " ";
}

function check() {
    tt = document
        .getElementById('tt')
        .value;
    ttd = document.getElementById('tt');
    msg = document.getElementById('msg');
    bg = document.getElementById('bg');
    cnt++;
    if (ran == undefined) {
        msg.value = "게임시작 버튼부터 클릭해주세요!";
    } else if (isNaN(tt)) {
        msg.value = "숫자만 입력 가능합니다!"
        cnt = cnt-1;
    }else if (tt > 100 || tt < 0 || tt == " ") {
        msg.value = "1부터 100까지의 숫자만 입력해주세요!"
        cnt = cnt-1;
    }else {
        if (cnt > 10) {
            msg.value="더이상 도전불가ㅜㅜㅜ 게임시작 버튼을 눌러주세요!";
            ttd.disabled = "true";
        } else {
            if (tt > ran) {
                msg.value = cnt+"회 시도 입력한 숫자보다 작습니다.";
            } else if (tt < ran) {
                msg.value = cnt+"회 시도입력한 숫자보다 큽니다.";
            } else if (tt == ran) {
                msg.value = cnt + "회 도전만에 정답입니다!";
                bg.style.backgroundColor = "green";
            }
        }
    }
}