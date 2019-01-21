// *************  README  *****************
// 1) На сайте в форме обратной связи добавьте следующие поля:
// a) поле даты рождения - реализовано при помощи datepicker jqury ui

// b) ошибочные поля подсветить с помощью какого-нибудь эффекта , например, Bounce, (+ Все возвращаемые ошибки выводить с помощью виджета Dialog.)
// Эффект срабатывает на событие change, т.е. если в поле оставить не валидные данные и попытаться переместиться к другому input,
// то в этом случае сработает эффект, помимо этого будет отображено окно dialog с подсказкой в чем заключается ошибка.
// Так же осуществленна подсказка в виде соответсвующей подсветки цвета синтаксиса (Осталось от предыдущего ДЗ на native JS)
// *****************************************

const nameColorTimers = [];
const emailColorTimers = [];
const telColorTimers = [];
const textAreaColorTimers = [];
let textColorDelay = 1000;
var tooltipHideDelay;



function validateInput(eventObj) {
    // Определяем поле и тип события
    switch(eventObj.target.id) {
        case 'name':
            validateName(eventObj.target, eventObj.type);
            break;

        case 'email':
            validateEmail(eventObj.target, eventObj.type);
            break;

        case 'tel':
            validateTelephone(eventObj.target, eventObj.type);
            break;

        case 'textArea':
            validateTextArea(eventObj.target, eventObj.type);
            break;
    }

    // **************** Обработчики для отдельных полей формы ****************
    function validateName(nameInput, event) {
        if((nameInput.value === '') || (/(^[а-яё']{1,3}$)|(^[a-z']{1,3}$)/i.test(nameInput.value))) { 
            switch(event) {
                case 'input':
                    nameColorTimers.forEach(nameTimer => {
                        clearTimeout(nameTimer);
                    });
                    $(`#${nameInput.id}Dialog`).dialog('close'); // ex 2 *** les 6
                    if(nameInput.value === '') {
                        changeTextColor(nameInput.id, 'black');
                    } else {
                        changeTextColor(nameInput.id, 'green');
                        nameColorTimers.push(setTimeout(() => { 
                            changeTextColor(nameInput.id, 'black');
                        }, textColorDelay));
                    }
            }
        } else { 
            nameColorTimers.forEach(timerId => { // Чистим timerIdCollect, иначе придут задержки от ранее созданных экземпляров и текст станет black
                clearTimeout(timerId);
            }); 
            switch(event) {
                case 'input':
                    changeTextColor(nameInput.id, 'red');
                    break;
                case 'change':
                    applayJQueryUI_Effect(nameInput.id); // ex 1-b *** les 6
                    $(`#${nameInput.id}Dialog`).dialog( "moveToTop" ); // ex 2 *** les 6
                    $(`#${nameInput.id}Dialog`).dialog('open'); // ex 2 les *** 6

                    break;
            }
        }
    }

    function validateEmail(emailInput, event) {
        if((emailInput.value === '') || (/^[\w-']+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i.test(emailInput.value))) {
            switch(event) {
                case 'input':
                    emailColorTimers.forEach(emailTimer => {
                        clearTimeout(emailTimer);
                    });
                    $(`#${emailInput.id}Dialog`).dialog('close'); // ex 2 *** les 6
                    if(emailInput.value === '') {
                        changeTextColor(emailInput.id, 'black');
                    } else {
                        changeTextColor(emailInput.id, 'green');
                        emailColorTimers.push(setTimeout(() => {
                            changeTextColor(emailInput.id, 'black');
                        }, textColorDelay));
                    }
                    break;
            }
        } else {
            emailColorTimers.forEach(emailTimer => {
                clearTimeout(emailTimer);
            });
            switch(event) {
                case 'input':
                    changeTextColor(emailInput.id, 'red');
                    break;
                case 'change':
                    applayJQueryUI_Effect(emailInput.id); // ex 1-b *** les 6
                    $(`#${emailInput.id}Dialog`).dialog('open'); // ex 2 *** les 6
                    break;
            }
        }
    }

    function validateTelephone(telInput, event) {
        if((telInput.value === '') || (/^\+\d\(\d{3}\)\d{3}-\d{4}$/.test(telInput.value))) {
            switch(event) {
                case 'input':
                    telColorTimers.forEach((telTimer) => {
                        clearTimeout(telTimer);
                    });
                    $(`#${telInput.id}Dialog`).dialog('close'); // ex 2 *** les 6
                    if(telInput.value === '') {
                        changeTextColor(telInput.id, 'black');
                    } else {
                        changeTextColor(telInput.id, 'green');
                        telColorTimers.push(setTimeout(() => { 
                            changeTextColor(telInput.id, 'black');
                        }, textColorDelay));
                    }
                    break;
            }
        } else {
            telColorTimers.forEach((telTimer) => {
                clearTimeout(telTimer);
            });
            switch(event) {
                case 'input':
                    changeTextColor(telInput.id, 'red');
                    break;

                case 'change':
                    applayJQueryUI_Effect(telInput.id); // ex 1-b *** les 6
                    $(`#${telInput.id}Dialog`).dialog('open'); // ex 2 *** les 6
                    break;
            }
        }
    }

    function validateTextArea(textArea, event) {
        if(/^.{0,5}$/i.test(textArea.value)) {
            switch(event) {
                case 'input':
                    textAreaColorTimers.forEach(textAreaTimer => {
                        clearTimeout(textAreaTimer);
                    });
                    $(`#${textArea.id}Dialog`).dialog('close'); // ex 2 *** les 6
                    if(textArea.value === '') {
                        changeTextColor(textArea.id, 'black');
                    } else {
                        changeTextColor(textArea.id, 'green');
                        textAreaColorTimers.push(setTimeout(() => { 
                            changeTextColor(textArea.id, 'black');
                        }, textColorDelay));
                    }
                    break;
            }
        } else {
            textAreaColorTimers.forEach(textAreaTimer => {
                clearTimeout(textAreaTimer);
            });
            switch(event) {
                case 'input':
                    changeTextColor(textArea.id, 'red');
                    break;

                case 'change':
                    applayJQueryUI_Effect(textArea.id); // ex 1-b *** les 6
                    $(`#${textArea.id}Dialog`).dialog('open'); // ex 2 *** les 6
                    break;
            }
        }
    }

    function changeTextColor(inputId, color) {
        document.querySelector(`#${inputId}`).style.color = color;
    }

    function applayJQueryUI_Effect(inputId) { // ex 1-b *** les 6
        $(`#${inputId}`).effect('shake', {}, 1000);
    }
}



