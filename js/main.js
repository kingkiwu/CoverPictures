/**
 * Created by zam on 2016/6/24.
 */
$(function(){
    var div = $("<div></div><div></div><div></div><div></div>");
    $("ul li").append(div);
    $("ul li").hover(function(){
        $(this).find("div").css({opacity:1})
            .eq(0).addClass("tranX").end()
            .eq(1).addClass("tranY").end()
    },function(){
        $(this).find("div").attr("class","").css({opacity:0});
    })
})