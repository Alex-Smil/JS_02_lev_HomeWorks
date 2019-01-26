$(document).ready(function() {
    // Контейнер с товарами
    let $goodContainer = $('#goods');
    
    
    // Создаем товары
    let good1 = new Good(125, 'Коврик для мыши', 400);
    good1.render($goodContainer);

    let good2 = new Good(126, 'Клавиатура для ПК', 600);
    good2.render($goodContainer);

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

    // *********** ДЗ № 1 *************
    // Удаление товара
    $('.removeGood').on('click', function() {
        let idProduct = parseInt($(this).attr('data-id'));
        let price = parseInt($(this).parent().find('.product-price').text());
        // console.log(`Remove product id: ${idProduct}`);
        basket.removeProduct(idProduct, price);
    });
});