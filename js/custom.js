$(function(){
    setTimeout(function(){

        // 外部リンクにtarget="_blank"を付与
        $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');

        // h1の中に編集履歴のリンクを作成
        $("h1").html($("h1").html()+'<small><a id="history"><i class="fa fa-history"></i></a></small>');
        var file = location.hash.slice(2);
        if (file.lastIndexOf("#") != -1) {file = file.slice(0,file.lastIndexOf("#"));}
        var historyUrl = "https://github.com/chishow-mc/wiki/commits/master/"+file;
        $("#history").attr("href", historyUrl)

        // 上に戻るボタン
        $('#move-page-top').click(
        function(){
            $('html,body').animate({scrollTop:0});
            }
        );

    },1000);
});