//traversing :: 탐색메서드 -> 미리만들어진 함수(기능)의 호출
//fitering : 객체에 할당된 인덱스 번호로 요소를 선택
//마우스가 가르키는 '이것' or 함수가 적용된 '이것'
//$(this).firtst();

//탐색 메서드는 선택자와 구분이 되기때문에 다양한 형태의 선택자로 보다 폭 넓은 요소나 객체를 선택할 수 있다.

$(function(){
    $('li').first().css({fontWeight : 'bold'});
    $('li').last().css({fontWeight : 'bold'});
    $('li').eq(5).css({fontWeight : 'bold'});

    //tree traversal ==  자식선택자 ==  계층선택자 : 자식, 하위, 동위, 형제들선택자 부모, 조부모, 형, 형들, 형동생을 포함한 형제들 선택가능.!
    //$('#wrapper>.header');
    //children에서는 인수가 비어져있을 시 default로 전체선택자가 들어감 
    $('#wrapper').children('.section').css({borderColor : 'orange'});
    //전체 li가 선택
    $('ul').children().css({borderColor : 'magenta'});
    //$('#wrapper li')
    //하위요소는 find라고 하는 요소를 사용함
    $('#wrapper').find('li').css({backgroundColor:'olive'});
    //동위선택자 => 동위선택자는 바로 다음에 오는 형제를 가르킴.
    $('.item+li').css({color : 'orange'});
    //next() 의 default는 all('*')임:: 어떤 태그가와도 선택 :next는 바로 다음의 요소를 의미함
    $('.item').next().css({color : 'blue'});
    $('.item').next('p').css({color : 'red'});
    $('.item~li').css({color : 'red'});
    $('.item').nextAll('li').css({backgroundColor : 'cyan'});
    $('.item').nextAll().css({backgroundColor : 'black'});
    $('.item').prev().css({backgroundColor : 'coral'});
    $('.item').prevAll().css({backgroundColor : 'blue'});
    $('.item').siblings().css({color : 'yellow' , fontSize : '28px', textTransform : 'uppercase'});
    $('.item').parents().css({borderWidth: 10});
    $('.item').parent().css({borderWidth: 20});

    $('.p1').parent().next().children('.p2').css({backgroundColor : 'olive'});
});