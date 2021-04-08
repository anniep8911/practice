var txt ='';
txt = prompt('값을 입력하세요');
switch(txt){
    case 'block':alert('1번코드 실행');
    break;
    case 'none':alert('2번코드 실행');
    break;
    case 'flex':alert('3번코드 실행');
    break;
    case 'grid':alert('4번코드 실행');
    break;
    default: alert('그외의코드이다');
}

var i=1;
if(i>=0){
    alert('함수실행1');
}else if(i<=3){
    alert('함수실행2');
}else{
    alert('함수실행3');
}