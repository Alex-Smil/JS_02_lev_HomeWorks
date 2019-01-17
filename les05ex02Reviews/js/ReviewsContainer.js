class ReviewsContainer {
    constructor(id_container) {
        this.id = id_container;
        this.reviewsItems = [];
        // getReviews() Здесь полчаем отзывы из json файла
    }

    getReviews() {
        // let appendId = `#${this.id}_reviews`;

        $.ajax({
            type: 'GET',
            url: './json/list.json',
            context: this,
            dataType: 'json',
            success: function(data) {
                // Или создать или все таки найти имеющийся ???
                let $reviews = $('<div />', {
                        id: 'reviews',
                        text: 'Отзывы'
                });
                // или
                // let $reviews = $('#reviews');

                // Копируем отзывы из JSON в reviewsItems[] текущего экземпляра            
                for (let i = 0; i < data.comments.length; i++) {
                    this.reviewsItems.push(data.comments[i]);
                    // Создаем экземпляры reviews по данным из json
                    // и сразу же render-им их в document
                    new Review(data.comments.id_user,
                                data.comments.id_comment,
                                data.comments.text,
                    ).render($reviews);
                }
            },
            error: function(error) {
                consol.log(`error_message: ${error}`);
            }
        });
    }

    render($jQueryElement) {
        // let $reviews = $('#reviews');
        

    }
}