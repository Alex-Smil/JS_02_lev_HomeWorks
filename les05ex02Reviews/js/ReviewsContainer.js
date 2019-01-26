class ReviewsContainer {
    constructor(id_container) {
        this.id = id_container;
        this.reviewsItems = [];
        this.getReviews(); // Здесь полчаем отзывы из json файла
    }

    getReviews() {
        // let appendId = `#${this.id}_reviews`;

        $.ajax({
            type: 'GET',
            url: './json/list.json',
            context: this,
            dataType: 'json',
            success: function(data) {
                console.log('Ajax Удача');
                // Или создать или все таки найти имеющийся ???
                let $reviews = $('<div />', {
                        id: 'reviews',
                        text: 'Отзывы'
                });
                console.log(`From ajax $reviews: ${$reviews.id}`);
                // или
                // let $reviews = $('#reviews');

                // Копируем отзывы из JSON в reviewsItems[] текущего экземпляра 
                // Создаем экземпляры reviews по данным из json
                // и сразу же render-им их в <div id="reviews"> Отзывы  ... </div>        
                // console.log('reviewsItems.length: ' + this.reviewsItems.length);
                
                for (let i = 0; i < data.comments.length; i++) {
                    // console.log(data.comments[i].id_user,
                    // data.comments[i].id_comment,
                    // data.comments[i].text);

                    this.reviewsItems.push(new Review(data.comments[i].id_user,
                                                        data.comments[i].id_comment,
                                                        data.comments[i].text,
                                                        ).render($reviews));
                    
                    
                }
                // console.log('reviewsItems.length: ' + this.reviewsItems.length);
            },
            error: function(error) {
                consol.log(`error_message: ${error}`);
            }
        });
    }

    render($jQueryElement) {
        // let $reviews = $('#reviews');
        let $reviews = $('<div />', {
            id: 'reviews',
            text: 'Отзывы'
        });
        $reviews.appendTo($jQueryElement);
    }
}