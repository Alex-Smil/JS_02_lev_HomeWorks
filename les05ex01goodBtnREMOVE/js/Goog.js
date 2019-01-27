class Good {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    render($jQueryElement) {
        // Создаеи новый элемент, альтернативный способ
        let $goodContainer = $('<div />', {
            class: 'good'
        });

        let $goodTitle = $ ('<p />', {
            text: this.name
        });

        let $goodPrice = $(`<p>Стоимость: <span class='product-price'>${this.price}</span> руб.</p>`);

        let $goodBtnAdd = $('<button />', {
            class: 'buyGood',
            text: 'Добавить в корзину',
            'data-id': this.id
        });

        // *********** ДЗ № 1 *************
        let $goodBtnRemove = $('<button />', {
            class: 'removeGood',
            text: 'Удалить товар',
            'data-id': this.id
        })
        
        // Создаеv структуру товара
        $goodTitle.appendTo($goodContainer);
        $goodPrice.appendTo($goodContainer);
        $goodBtnAdd.appendTo($goodContainer);
        $goodBtnRemove.appendTo($goodContainer); // ДЗ № 1

        $goodContainer.appendTo($jQueryElement);
    }
}