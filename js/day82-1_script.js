//day82-1_script.js
$(function(){
    //메서드를 연결하는 의미 
    //$('.btTop').click();

    //이벤트를 'on'(연결)하겠다는 의미. >> on이 편한점은 여러 동작을
    //한꺼번에 연결할 수 있음
    //들어가는 변수는 event라는 의미, evt e만 써도 됨.
    //event.type은 해당 이벤트 발생시 타입을 보여줌
    $('.btTop').on('click mouseenter mouseleave',function(evt){
        console.log(evt.type);
    });
    
});