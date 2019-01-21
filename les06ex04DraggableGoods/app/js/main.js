$(document).ready(function() {
    // Контейнер с товарами
    let $goodContainer = $('#goods');
    
    // Создаем товары
    let good1 = new Good(125, 'Коврик для мыши', 400);
    good1.render($goodContainer);

    let good2 = new Good(126, 'Клавиатура для ПК', 600);
    good2.render($goodContainer);

    let good3 = new Good(127, 'Сжатый воздух для ПК', 800);
    good3.render($goodContainer);

    let good4 = new Good(128, 'Кресло для ПК', 1000);
    good4.render($goodContainer);

    // Создаем экземпляр корзины
    let basket = new Basket('basket');
    basket.render($('.basket_wrapper'));

    // ДОбавления товаров в корзину
    $('.buyGood').on('click', function() {
        let idProduct = parseInt($(this).attr('data-id'));
        let price = parseInt($(this).parent().find('.product-price').text());
        console.log(`Add Product id: ${idProduct}, price: ${price}`);
        basket.addProduct(idProduct, price);
    });

    $('.removeGood').on('click', function() {
        let idProduct = parseInt($(this).attr('data-id'));
        let price = parseInt($(this).parent().find('.product-price').text());
        // console.log(`Remove product id: ${idProduct}`);
        basket.removeProduct(idProduct, price);
    });

    // *****  les 06 ex 04*  *****  
    $('.draggable').draggable({
        revert: true,
        revertDuration: 200
    });

    $('.droppable').droppable({
        drop: function( event, ui ) {
            let idProduct = parseInt(ui.draggable[0].id);
            let price = parseInt($(ui.draggable[0]).children().find('.product-price').text());
            basket.addProduct(idProduct, price);
        }
    });
});