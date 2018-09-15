jQuery(function($)
{
    $.scrollTo(0);

    $('.scrollup').click(function()
    {
        $.scrollTo($('.app'), 1000);
    });
}
);

$(window).scroll(function()
{
    if ($(this).scrollTop()>1000) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
});
