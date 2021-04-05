function fx(){
    alert('fx함수가 실행되었습니다.');
}
fx();
$(function(){
    //선택자.이벤트(핸들러);
    $('h4').mouseover(fx);
});
