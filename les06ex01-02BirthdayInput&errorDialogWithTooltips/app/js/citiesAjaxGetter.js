
function getCitiesData() {
    let $citiesSelect = $('#citiesSelect');

    $.ajax({
        type: 'GET',
        url: '../json/cities.json',
        dataType: 'json',
        success: function(data) {
            data.forEach(function(elem) {
                $citiesSelect.append($(`<option value=${elem['value']}>${elem['text']}</option>`));
            });
        },
        error: function(mess) {
            console.log('FAKE');
            console.log(mess);
        }
    });
}


