var i =1;

//while은 끝나지 않는 조건을 줄 경우 무한루프를 돌기때문에 사용에 신중!
while(i<=100){
    //추가하는것 (inner html은 덮어쓰는것)
    //증감식
    if(i % 2 == 0){
        document.write("반복문실행"+i,"<br/>");
    }
    i++;
};
document.write("the end!");

for(var j = 0 ; j <= 10 ; j++){
    document.write("for반복문"+j+"번째 반복<br/>")
}