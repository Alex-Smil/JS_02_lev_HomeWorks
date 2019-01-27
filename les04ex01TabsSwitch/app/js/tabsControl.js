
$(document).ready(function() {
    let $tabsTitle = $('.tabs__title');
    let $tabsContent = $('.tabs__content');

    $tabsTitle.each(function() {
        $(this).on('click', $(this).not('.active'), function() {
            $tabsTitle.filter('.active').removeClass('active');
            $(this).addClass('active');
            $tabsContent.filter('.active').removeClass('active');
            $tabsContent.eq($tabsTitle.index($(this))).addClass('active');
        });
    });
});