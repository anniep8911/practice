$(function(){
    var $artTxt = $('.gal008 article .texts');
    $artTxt.click(cl);
    function cl(){
        $artTxt.removeClass('show');
        $(this).addClass('show');
    }
});