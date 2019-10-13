var cont = document.querySelector(".container");

cont.innerHTML = tree(3);

setTimeout(() => {

    var star = document.querySelectorAll(".star");

    for(var s = 0; s < star.length; s++)
    {
        var ini = star[s];
        addClass(ini, s);
    }
    
}, 500);

function tree(daun)
{
    var wood = 5 + daun,
        elem = '<div class="wrap"><div class="first">*</div></div>';

    for(var i = 0; i < daun; i++)
    {

        for(var t = 0; t < 10; t++)
        {

            elem += '<div class="wrap">';

            for(var d = 0; d <= t + i; d++)
            {
                elem += '<div class="star">*</div>';
            }

            elem += "</div>";
        }
    }

    for(var w = 0; w < wood; w++)
    {
        elem += '<div class="wrap">' + 
                    '<div class="star">***</div>' + 
                '</div>';
    }

    return elem;
}

function addClass(elem, index)
{
    setTimeout(() => {
        elem.className += ' aktif';
    }, 50 * index);
}