class Basket {
    constructor(idBasket) {
        this.id = idBasket;
        this.amount = 0; // Общая стоимость товаров
        this.basketItems = []; // Массив для хранения товаров

        // Получаем товары
        this.getItems();// Метод вызыается в момент создания экземпляра корзины
        
    }

    getItems() {
        let appendId = `#${this.id}_items`; // id='basket_items'

        // ловим this
        // 1 вар - вариант JS
        // let self = this;

        $.ajax({
            type: 'GET',
            url: './json/get_items.json',
            // 2 вар - вар jQuery
            context: this,
            dataType: 'json',
            success: function(data) {
                let $basketData = $('<div />', {
                    id: 'basket_data'
                });
                this.amount = data.amount;  // Общая стоимость товаров в корзине

                // Копируем товары из серверной корзины(представленные в ввиде json)
                // в клиентскую корзину.
                for(let i = 0; i < data.basket.length; i++) {
                    this.basketItems.push(data.basket[i]);
                }

                $basketData.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
                $basketData.append(`<p>Общая стоимость : ${this.amount}</p>`);

                $basketData.appendTo(appendId);// вставляем в basket_items *** Как это присходит 
                // ведь div с id = basket_items создатся после, на строке 63 ? 
                // На текущий момент его не должно существовать.

                this.refreshLeftBar();
            },

            error: function(error) {
                console.log('ajax не работает');
                console.log(error);
            }
        });
    }

    render($jQuerySelector) {
        let $basketDiv = $('<div />', {
            id: this.id, // basket
            class: 'droppable',
        });

        let $basketTitle = $('<h2 />', {
            text: 'Корзина'
        });

        let $basketItemsDiv = $('<div />', {
            id: `${this.id}_items`
        });

        let $droppableDiv = $('<div />', {
            text: 'Просто перетащите карточку товара в корзину или воспользуйтесь кнопками',
            class: 'infoBasket'
        });

        $basketTitle.appendTo($basketDiv);
        $droppableDiv.appendTo($basketDiv);
        $basketItemsDiv.appendTo($basketDiv);
        $basketDiv.appendTo($jQuerySelector);
    }

    addProduct(idProduct, price) {
        let goodItem = { // этот экземпляр объекта будет добавлен в корзину
            id_product: idProduct,
            // price: price // ES5
            price // ES6 
        };

        this.amount += price;

        this.basketItems.push(goodItem);
        this.refresh(); // Неоходимо перерисоать корзину.

        this.refreshLeftBar();

    }
    
    removeProduct(idProduct, price) {
        if(this.myFindIndex(idProduct)) {
            console.log(`Remove product id: ${idProduct}`);
            this.basketItems.splice(this.myFindIndex(idProduct), 1);
            this.amount -= price;
            this.refresh();
            this.refreshLeftBar();
        } else {
            console.log(`Good with id: ${idProduct} has not been added to basket!`);
            // модальное окно с предупреждением.
        }
    }

    myFindIndex(prodId) {
        for(let i = 0; i < this.basketItems.length; i++) {
            if(this.basketItems[i]['id_product'] === prodId) {
                return i;
            }
        }
        return false;
    }
    // *********** END of ДЗ № 1 *************

    refresh() {
        let $basketData = $('#basket_data');
        $basketData.empty(); // Очитска содержимого без его удаления, только textContent
        $basketData.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
        $basketData.append(`<p>Общая стоимость : ${this.amount}</p>`);
        
        // Для отладки
        console.log(this.basketItems);
    }

    refreshLeftBar() {
        let $leftBar = $('.leftBar ul');
        $leftBar.empty();
        this.basketItems.forEach(el => {
            $leftBar.append(`<li id=${el.id_product}>ID товара: ${el.id_product} цена ${el.price}</li>`);
        });
        // $leftBar.append(`<li>ID товара: ${el.id_product} цена ${el.price}</li>`);
    }
}