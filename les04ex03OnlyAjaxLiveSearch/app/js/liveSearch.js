
$(document).ready(function() {
    $('#textInput').on('keyup', function() {
        autoComplete($(this).val());
        // $('#autoCompUl').show();// Если сотавить здесь, то лагает немного. см в insertList()
    });

    $('#autoCompUl').on('click', function(e) {//Эффект всплытия события
        $('#textInput').val(e.target.textContent);
        $('#autoCompUl').hide();
        e.preventDefault();
    });
});


function autoComplete(str) {
    if(str === '') {
        $('#autoCompUl').children('li').remove();
        return;
    }
    
    // Мне кажется, что весь поиск и отсев должен быть осуществлен на стороне сервера и туда надо бы кидать str
    // т.е function filterList(str, list){}  должна стоять на сервере, верно?
    $.ajax({
        type: 'GET',
        url: 'js/cities.json',
        dataType: 'json',
        success: function(data) {
            insertList(filterList(str, data));
            console.log('работает');
        },
        error: function(error) {
            console.log('не работает!');
            console.log(error);
        }
    });

    function filterList(str, list) {
        let re = new RegExp('^' + str + '.*', 'igm');
        return list.cities.filter(function(elem) {
            return elem.match(re);
        });
    }

    function insertList(list) {
        $autoCompUl = $('#autoCompUl');
        
        if($autoCompUl.children('li').length > 0) {
            $autoCompUl.children('li').remove()
        }

        list.forEach(function(city) {
            $autoCompUl.append(`<li><a class='link'>${city}</a></li>`);
        });

        $('#autoCompUl').show();
    }
}
