const nameColorTimers = [];
const emailColorTimers = [];
const telColorTimers = [];
const textAreaColorTimers = [];
let textColorDelay = 1000;
var tooltipHideDelay;

const tooltipTexts = {
    name: 'Имя не должно быть длиннее 3 символов и содержат что-либо помимо букв',
    email: 'формат почты mail@mail.ru или mail@mail.ru.com например',
    tel: 'Телефон вводится в формате +7(495)123-4567',
    textArea: 'Текст не должен превышать 5 символов'
}

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
        if((nameInput.value === '') || (/(^[а-яёА-ЯЁ']{1,3}$)|(^[a-z']{1,3}$)/i.test(nameInput.value))) { // если введенные данные валидны
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
        if((telInput.value === '') || (/\+\d\(\d{3}\)\d{3}-\d{4}/.test(telInput.value))) {
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

function showTooltipFor(input) {
    if(typeof input === 'object') {
        input = input.target.parentNode.childNodes[1].id;
        tooltipHideDelay = 1000; 
    } else {
        tooltipHideDelay = 7000;
    }

    if(document.querySelector(`#${input}Tooltip`)) { return; } // если подсказка уже отображена ничего не делаем
   
    let coursoreLeftPos = 442;
    let coursoreBottomPos = 8;
    
    let textLeftPos = 425;
    let textBottomPos = 38;
    
    // ****************** Experiment with left shift ************************
    switch(input) {
        // case 'email':
        //     coursoreLeftPos -= 20;
        //     textLeftPos -= 20;
        //     break;

        // case 'tel':
        //     coursoreLeftPos -= 40;
        //     textLeftPos -= 40;
        //     break;

        case 'textArea':
            // coursoreLeftPos -= 60;
            // textLeftPos -= 60;
            coursoreBottomPos += 74;
            textBottomPos += 74;
            break;
    }
    // ************* END of Experiment left shift **********************

    let head = document.querySelector('head');
    let tooltip = document.createElement('style');   
    tooltip.id = `${input}Tooltip`;
    tooltip.className = 'tooltip';
    // mySpan.classList.add("my-span"); // Прочитай уже наконец-то
    let tooltipContent = tooltipTexts[`${input}`];
    tooltip.innerHTML = `#${input}Wrap:before{
                                    content: '';
                                    position: absolute;
                                    border: 10px solid transparent;
                                    border-top: 20px solid rgba(0,0,0,.85);
                                    left: ${coursoreLeftPos}px;
                                    bottom: ${coursoreBottomPos}px;
                                }`;
    tooltip.innerHTML += `#${input}Wrap:after{
                                    content:'${tooltipContent}';
                                    background: rgba(0,0,0,.85);
                                    color: #fff;
                                    text-align: center;
                                    border-radius: 5px;
                                    width: 50%;
                                    padding: 10px;
                                    height: 70px;
                                    position: absolute;
                                    left: ${textLeftPos}px;
                                    bottom: ${textBottomPos}px;
                                    font-size: 15px;
                                    -webkit-transition: opacity 0.9s;
                                    -moz-transition: opacity 0.9s;
                                    opacity: 1;
                                    transition: 0.9s;
                                }`;
    head.appendChild(tooltip);

    setTimeout(() => {
        hideTooltipFor(input);
    }, tooltipHideDelay);
}


function hideTooltipFor(inputId) {
    if(typeof inputId === 'object') {
        if(inputId.target.className === 'far fa-question-circle') {
            inputId = inputId.target.parentNode.childNodes[1].id;
        } else {
            inputId = inputId.target.id;
        }
    }

    if(!document.querySelector(`#${inputId}Tooltip`)) {
        return;
    } else {
        document.querySelector(`#${inputId}Tooltip`).parentNode.removeChild(document.querySelector(`#${inputId}Tooltip`));
        
    }
}

