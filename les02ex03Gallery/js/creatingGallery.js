// **********  Формируем DOM  ****************
function createGallery(objFromJson) {
    // *******  dev.test.block for objFromJson  ******
    // console.log("from createGallery: ");
    // console.log(objFromJson);
    // console.log(objFromJson[0]['imgMin']);
    // console.log("*******************************");
    // for(let el in objFromJson) {
    //     console.log("Response from createGallery");
    //     console.log("pict N: " + el);
    //     console.log(objFromJson[el]['imgMin']);//
    //     console.log(objFromJson[el]['imgMax']);
    // }
    // ************************************************

    let body = document.querySelector('body');
    let gallery = document.createElement('div');
    gallery.className = 'gallery';
    let unitsWrap = document.createElement('div');
    unitsWrap.className = 'gallery__unitsWrap';

    // Создаем в цикле по очереди unit-ы (<div>) в них помещаем картинки(<img>),
    // картинки помещаем в доп.оберт. div так как
    // В дальнейшем в unit(ы) можно будет еще добавить titles и т.д.
    // Кол-во картинок в галерее зависит от кол-ва объектов(т.е. картинок) в JSON ответе
    for(let i = 0, unit, imgMin; i < objFromJson.length; i++) {
        // Создаем Unit
        unit = document.createElement('div');
        unit.className = 'gallery__unit';
        unit.id = 'unit_' + i;
        // Создаем imgMin
        imgMin = document.createElement('img');
        imgMin.className = 'gallery__imgSmall';
        imgMin.id = 'imgSmall_' + i;
        imgMin.src = objFromJson[i]['imgMin']; // вставялем адрес маленькой картинки из objFromJson

        // Далее добавляем свой аттрибут 'maxSize' в imgMin, в нем сохраним строку с адресом большой картинки
        // в дальнейшем эта строка будет подставляться в src большой модальной картинки.
        imgMin.setAttribute('maxSize', objFromJson[i]['imgMax']);

        // Добавляем несколько обработчиков событий на imgMin
        imgMin.addEventListener('click', getMaxFromMinImg);
        imgMin.addEventListener('click', showModalWindow);

        // Помещаем сконфигурированную imgMin в unit
        unit.appendChild(imgMin);
        // а unit во внутрь unitsWrap
        unitsWrap.appendChild(unit);
    }
    gallery.appendChild(unitsWrap);
    body.appendChild(gallery);

    // Формируем темный фон для модального окна
    let filter = document.createElement('div');
    filter.id = 'filter';
    filter.addEventListener('click', hiddenModalWindow);
    body.appendChild(filter);

    let modalImg = document.createElement('img');
    modalImg.id = 'modalImg';

    // <i class='far fa-times-circle'></i>
    // let closeSign = document.createElement('i');
    // closeSign.className = 'far fa-times-circle';
    // modalImg.appendChild(closeSign);

    body.appendChild(modalImg);

    // ************* Вспомогательные функции ***************
    // Замыкаем вспомогательные функции внутри function createGallery
    function getMaxFromMinImg(eventObj) {
        let modalImg = document.querySelector('#modalImg');
        let imgMin = eventObj.target;
        console.log(imgMin.getAttribute('maxSize'));
        modalImg.src = imgMin.getAttribute('maxSize');
    }

    function showModalWindow() {
        document.querySelector('#filter').style.display = 'block';
        document.querySelector('#modalImg').style.display = 'block';
    }

    function hiddenModalWindow() {
        document.querySelector('#filter').style.display = 'none';
        document.querySelector('#modalImg').style.display = 'none';
    }
}

