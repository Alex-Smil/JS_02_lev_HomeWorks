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
            class: 'goodsCatalog__good draggable'
        });

        let $goodTitle = $ ('<h4 />', {
            class: 'goodsCatalog__goodTitle',
            text: this.name
        });

        let $goodId = $ ('<div />', {
            text: `id: ${this.id}`,
            class: 'goodsCatalog__goodId'
        });

        let $goodPrice = $(`<div>Стоимость: <span class='goodsCatalog__goodPrice'>${this.price}</span> руб.</div>`);

        let $goodBtnAdd = $('<button />', {
            class: 'goodsCatalog__buyGood',
            text: 'Добавить в корзину',
            'data-id': this.id
        });

        // *********** ДЗ № 1 *************
        let $goodBtnRemove = $('<button />', {
            class: 'goodsCatalog__removeGood',
            text: 'Удалить товар',
            'data-id': this.id
        })
        
        // Создаеv структуру товара
        $goodTitle.appendTo($goodContainer);
        $goodId.appendTo($goodContainer);
        $goodPrice.appendTo($goodContainer);
        $goodBtnAdd.appendTo($goodContainer);
        $goodBtnRemove.appendTo($goodContainer); // ДЗ № 1

        $goodContainer.appendTo($jQueryElement);
    }
}