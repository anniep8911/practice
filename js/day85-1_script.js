$(function(){
    var $drag =$('.drag section .bar');
    $drag.draggable({
        //부모요소에서만 작동
        //아래 값엔 .drag header와 같이 특정 영역 지정도 가능
        containment:'.drag section',
        //x축 == 좌우 로만 이동 가능
        axis:'x'
    });
});