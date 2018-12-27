function getJsonData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './js/imgs.json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return;
        }
        // Проверяем ответ сервера
        if(xhr.status === 404) {
            console.log(`Server not found: ${xhr.status}: ${xhr.statusText}`);
            return null;
        } else if (xhr.status !== 200) {
            console.log(`Failed xhr.state !== 200: ${xhr.status}: ${xhr.statusText}`);
        } else {
            try {
                // Парсим JSON ответ
                let imgPaths = JSON.parse(xhr.responseText);
                // Создаем галерею на основе полученного объекта из JSON
                createGallery(imgPaths);
            } catch(e) {
                console.log(`Failed in try JSON.parse: ${e.name} - ${e.message}`);
            }
        }
    };
    xhr.send();
}

