window.onload = init;

function init() {
    // displayFeedbackForm();// скрипт для отрисовки блока Feedback

    document.querySelectorAll('.input').forEach(input => { //регистрация обработки полей
        input.addEventListener('input', validateInput);
        input.addEventListener('change', validateInput);
    });

    // ex 02 les 04
    $(document).ready(getCitiesData);

    // ********  LES 05  *********
    // ex 1-a les 05 
    $( "#datepicker" ).datepicker({
        dateFormat: 'dd-mm-yy',
        dayNamesMin: [ "ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ" ],
        firstDay: 1
    });

    // ex 1-b (effects) les 05 см. в файле validator.js строка 173

    // toolTip
    $( document ).tooltip({
        track: true
    });

    // ex 2 les 5 - show effect on error
    $(".dialog").dialog({
        autoOpen: false,
        // modal: true
        title: "Ошибка",
        closeText: ''
  });
   
}
