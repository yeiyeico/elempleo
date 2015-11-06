$(function($) {
    if($(window).width()>769){
        $('.navbar .dropdown').hover(function() {
            $(this).addClass('active');
            // $(this).css('background-color','#2F5D81');
            $(this).find('.dropdown-menu').first().stop(true, true).delay(250).show();
        }, function() {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).hide();
        });
        $('.navbar .dropdown > a').click(function(){
            location.href = this.href;
        });
    }
});