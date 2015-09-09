/**
 * Created by likelight on 15/8/31.
 */
$(function () {
     var href = location.href;

    $('#search-button').click(function(e) {

        var text = $('#input').val();
        e.stopPropagation();
        window.location = 'https://www.baidu.com/s?wd='+text;
        return false;
    });

})