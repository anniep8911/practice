$(function(){
    //html(), text()는 추가보다는 덮어쓰기의 개념임
    //추가되는 개념은 prepend , append임. 
    //$e.append(); 형식 > 첨부의 의미 :뒤에 붙임
    //$e.prepend(); 미리 첨부의 의미
    var p ="문서객체를 첨부하거나 이동하는 방법을 알아봅시다.";
    $('body').append('<p>'+p+'</p>');
    $('body').append('<p></p>');
    $('p').text(p);

    $('body').append('<ul></ul>');
    for(var i=0; i<=3 ; i++){
        $('ul').append('<li><h4></h4><p></p></li>');
    }

    var t = [],p = [];
    t[0]='$e.append(e)';
    t[1]='$e.prepend(e)';
    t[2]='e.appendTo$(t)';
    t[3]='$e.prpendTo(t)';
    p[0]="선택된 요소t에게 마지막자식으로 e를 첨부합니다.";
    p[1]="선택된 요소t에게 첫번째자식으로 e를 첨부합니다.";
    p[2]="선택된 요소e를 t에게 마지막자식으로 첨부합니다.";
    p[3]="선택된 요소e를 t에게 첫번째자식으로 첨부합니다.";

    for(var i=0; i<=3 ; i++){
        $('li h4').eq(i).text(t[i]);
        $('li p').eq(i).text(p[i]);
    }


    /*
    $('h4').eq(0).text('$e.append(e)');
    $('h4').eq(1).text('$e.prepend(e)');
    $('h4').eq(2).text('e.appendTo$(t)');
    $('h4').eq(3).text('$e.prpendTo(t)');
    
    

    var p1,p2,p3,p4;
    p1="선택된 요소t에게 마지막자식으로 e를 첨부합니다.";
    p2="선택된 요소t에게 첫번째자식으로 e를 첨부합니다.";
    p3="선택된 요소e를 t에게 마지막자식으로 첨부합니다.";
    p4="선택된 요소e를 t에게 첫번째자식으로 첨부합니다.";
    $('li p').eq(0).text(p1);
    $('li p').eq(1).text(p2);
    $('li p').eq(2).text(p3);
    $('li p').eq(3).text(p4);
    */
    
    
    
    

});