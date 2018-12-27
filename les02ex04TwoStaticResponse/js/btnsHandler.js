window.onload = init;

function init() {
    let btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
        btn.addEventListener('click', createAjaxQuery);
    })
}

// в зависимости от нажатой кнопки подготавливаем запрос для getAjaxResponse(query)
function createAjaxQuery(eventObj) {
    getAjaxResponse(eventObj.target.id)
}

// 1 функция для 2х кнопок
function getAjaxResponse(query) {
    // console.log("query: " + query); // test query
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `./js/${query}.json`);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return;
        }
        // Проверяем ответ сервера
        if (xhr.status !== 200) {
            console.log(`Failed xhr.state !== 200: ${xhr.status}: ${xhr.statusText}`);
        } else {
            try {
                // Парсим JSON ответ
                let respObj = JSON.parse(xhr.responseText);
                // передаем ajax ответ для визуализации результата
                jsonObjViewer(respObj);
            } catch(e) {
                console.log(`Failed in try JSON.parse: ${e.name} - ${e.message}`);
            }
        }
    };
    xhr.send();
}

function jsonObjViewer(obj) {
    console.log(`You ve got ${obj['result']}.json file`);
}