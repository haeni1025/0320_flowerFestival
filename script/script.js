$(function () {

    /* GNB 메뉴 */

    $("#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(1000);
    });
        $("#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(300);
    });

    /* GNB 메뉴 */


    /* 슬라이드쇼 */
    setInterval (fnSlide, 3000);

    function fnSlide() {

        $("#shuttleFrame a").fadeOut(500);
        $("#shuttleFrame a:nth-child(2)").fadeIn(
            1000,
            function() {
                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
            }
        );
    }
    /* 슬라이드쇼 */


    /* 모달 레이어 팝업 */
     $(".content li:first-child").click(function() {
        $("#modalLayerBG").css({"display": "block"});
    });
    $("#modalLayerPopup button").click(function() {
        $("#modalLayerBG").css({"display": "none"});
    });
    /* 모달 레이어 팝업 */

});
