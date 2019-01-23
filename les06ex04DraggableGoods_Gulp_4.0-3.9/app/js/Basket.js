class Basket {
    constructor(classBasket) {
        this.class = classBasket;
        this.amount = 0; 
        this.basketItems = []; 
        this.getItems();
    }

    getItems() {
        let appendId = `.${this.class}__items`; // class='basket__items'
        // let appendId = $(`.${this.class}__items`); // class='basket__items'

        $.ajax({
            type: 'GET',
            url: '../json/get_items.json',
            context: this,
            dataType: 'json',
            success: function(data) {
                // let $basketData = $('<div />', {
                //     class: 'basket__itemsData'
                // });
                this.amount = data.amount;  // Общая стоимость товаров в корзине

                for(let i = 0; i < data.basket.length; i++) {
                    this.basketItems.push(data.basket[i]);
                }

                $(`${appendId}`).append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
                $(`${appendId}`).append(`<p>Общая стоимость : ${this.amount}</p>`);

                // appendId.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
                // appendId.append(`<p>Общая стоимость : ${this.amount}</p>`);



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
            class: `${this.class} droppable` // basket droappable ....
        });

        let $basketTitle = $('<h2 />', {
            class: `${this.class}__title`,
            text: 'Корзина'
        });

        let $basketItemsDiv = $('<div />', {
            class: `${this.class}__items`
        });

        let $droppableDiv = $('<div />', {
            text: 'Просто перетащите карточку товара в корзину или воспользуйтесь кнопками',
            class: `basket__droppableArea`
        });

        $basketTitle.appendTo($basketDiv);
        $droppableDiv.appendTo($basketDiv);
        $basketItemsDiv.appendTo($basketDiv);
        $basketDiv.appendTo($jQuerySelector);
    }

    addProduct(idProduct, price) {
        console.log(`Add Product id: ${idProduct}, price: ${price}`);
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

    refresh() {
        let $basketData = $('.basket__items');
        $basketData.empty(); // Очитска содержимого без его удаления, только textContent
        $basketData.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
        $basketData.append(`<p>Общая стоимость : ${this.amount}</p>`);
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