$(document).ready(function(){
    $('nav ul li a.dropdown-item').on('click', function(){
        var category = $(this).attr('class').split(' ')[0];
        if (category == 'all') {
            $('div.row div#items').each(function(){
                if (!$(this).hasClass('hidden')) {
                    $(this).fadeOut('slow').addClass('hidden');
                }
            });
            $('div.row div#items').each(function(){
                if ($(this).hasClass('hidden')) {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        else {
            $('div.row div#items').each(function(){
                if (!$(this).hasClass('hidden')) {
                    $(this).fadeOut('slow').addClass('hidden');
                }
            });
            $('div.row div#items').each(function(){
                if ($(this).hasClass(category)) {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        return false;
    });
});