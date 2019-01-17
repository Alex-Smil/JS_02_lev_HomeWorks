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

        // default:
            // do something // Нужен ли в данной ситуации?
    }

    // **************** Обработчики для отдельных полей формы ****************
    function validateName(nameInput, event) {
        if((nameInput.value === '') || (/(^[а-яё']{1,3}$)|(^[a-z']{1,3}$)/i.test(nameInput.value))) { // если введенные данные валидны
            switch(event) {
                case 'input':
                    nameColorTimers.forEach(nameTimer => { // Чистим timerIdCollect если это уже не первое вхождение, иначе придут задержки от предыдущих экземпляров
                        clearTimeout(nameTimer);
                    });
                    hideTooltipFor(nameInput.id);
                    if(nameInput.value === '') {
                        changeTextColor(nameInput.id, 'black');
                    } else {
                        changeTextColor(nameInput.id, 'green');
                        nameColorTimers.push(setTimeout(() => { // Убираем green цвет
                            changeTextColor(nameInput.id, 'black');
                        }, textColorDelay));
                    }
            }
        } else { // если данные не валидны
            nameColorTimers.forEach(timerId => { // Чистим timerIdCollect, иначе придут задержки от ранее созданных экземпляров и текст станет black
                clearTimeout(timerId);
            }); 
            switch(event) {
                case 'input':
                    changeTextColor(nameInput.id, 'red');
                    break;
                case 'change':
                    showTooltipFor(nameInput.id);
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
                    hideTooltipFor(emailInput.id);
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
                    showTooltipFor(emailInput.id);
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
                    hideTooltipFor(telInput.id);
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
                    showTooltipFor(telInput.id);
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
                    hideTooltipFor(textArea.id);
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
                    showTooltipFor(textArea.id);
                    break;
            }
        }
    }

    function changeTextColor(inputId, color) {
        document.querySelector(`#${inputId}`).style.color = color;
    }
}



