// DOM構築時に外部リンクにtarget="_blank"を付与
$(function(){
    setTimeout(function(){
        $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
    },1000);
});