class Good {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    render($jQueryElement) {
        // Создаеи новый элемент, альтернативный способ
        let $goodContainer = $('<div />', {
            id: this.id,
            class: 'good draggable'
        });

        let $goodTitle = $ ('<p />', {
            text: this.name
        });

        let $goodId = $ ('<p />', {
            text: `id: ${this.id}`,
            class: 'goodIdStyle'
        });

        let $goodPrice = $(`<p>Стоимость: <span class='product-price'>${this.price}</span> руб.</p>`);

        let $goodBtnAdd = $('<button />', {
            class: 'buyGood',
            text: 'Добавить в корзину',
            'data-id': this.id
        });

        let $goodBtnRemove = $('<button />', {
            class: 'removeGood',
            text: 'Удалить товар',
            'data-id': this.id
        })
        
        // Создаеv структуру товара
        $goodTitle.appendTo($goodContainer);
        $goodId.appendTo($goodContainer);
        $goodPrice.appendTo($goodContainer);
        $goodBtnAdd.appendTo($goodContainer);
        $goodBtnRemove.appendTo($goodContainer);
        
        $goodContainer.appendTo($jQueryElement);
    }
}