$(document).ready(function () {

    var page1 = $("#page-1");
    var ulll = $("#ul-nav");

    $(window).on("resize", function(){

        var wid = $(window).width();
        
        if(wid > 686){
            page1.removeClass("margin-page-1")
        }

        if(wid < 686){
            if(ulll.height() === 330){
                page1.addClass("margin-page-1");
            }
        }
    })
    $("#iconbtn").on("click", function(){
        page1.toggleClass("margin-page-1");
    })
})