const tooltipTexts = {
    name: 'Имя не должно быть длиннее 3 символов и содержат что-либо помимо букв',
    email: 'формат почты mail@mail.ru или mail@mail.ru.com например',
    citiesSelect: 'Выбирите ваш город',
    tel: 'Телефон вводится в формате +7(495)123-4567',
    textArea: 'Текст не должен превышать 5 символов'
}

function showTooltipFor(input) {
    if(typeof input === 'object') {
        input = input.target.parentNode.childNodes[1].id;
        tooltipHideDelay = 3000; 
    } else {
        tooltipHideDelay = 7000;
    }

    if(document.querySelector(`#${input}Tooltip`)) { return; } // если подсказка уже отображена ничего не делаем
   
    let coursoreLeftPos = 899;
    let coursoreBottomPos = 19;
    
    let textLeftPos = 455;
    let textBottomPos = 49;

    let tooltipWidth = 50;
    
    // ****************** tooltip left shift ************************
    switch(input) {
        case 'email':
            textLeftPos += 92;
            tooltipWidth -= 5;
            break;

        case 'tel':
            textLeftPos += 184;
            tooltipWidth -= 10;
            break;

        case 'citiesSelect':
            textLeftPos += 276;
            tooltipWidth -= 15;
            break;

        case 'textArea':
            textLeftPos += 368;
            tooltipWidth -= 20;
            coursoreBottomPos += 77;
            textBottomPos += 77;
            break;
    }
    // ************* END of tooltip left shift **********************

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
                                    width: ${tooltipWidth}%;
                                    height: 50px;
                                    padding: 10px;
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