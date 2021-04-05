function lotto(){
    //배열형 데이터 선언
    var lotto = [];
    //inp.value = lotto[i];
    for(var j = 0; j <= 6; j++){
        var rnum = parseInt(Math.random()*45+1);
        lotto[j] = rnum;
        //반복된 숫자검사
        for(var k = 0 ; k <= 6; k++){
            if(lotto[k] == rnum){
                rnum = parseInt(Math.random()*45+1);
                //lotto[k]= rnum;
            }
        }
    }
    console.log(lotto);
    for(var i = 0 ; i <= 6 ; i++){
        var inp= document.getElementById('n'+ i);
        inp.value=lotto[i];
    }
}