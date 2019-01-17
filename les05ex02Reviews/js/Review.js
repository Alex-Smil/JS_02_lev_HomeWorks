class Review {
    constructor(id_user, id_comment, text) {
        this.id_user = id_user;
        this.id_comment = id_comment;
        this.text = text;
    }

    render($jQueryElement) {
        //Контейнер для отдельного отзыва 
        let $reviewWrapper = $('<div />', {
            class: 'reviewWraper'
        });
        
        // let count = ++countReviews;
        let $id_review = $('<div />', {
            class: 'id_review',
            text: ++reviewsCount
        });

        // text 
        let $reviewText = $('<p />', {
            class: 'reviewText',
            text: this.text
        });

        // Autor
        let $autor = $('<div />', {
            class: 'autor',
            text: this.id_user
        });

        // btn like
        let $btnLike = $('<button />', {
            class: 'btnLike',
            text: 'like',
            'data_id': this.id
        });

        //btn remove review
        let $btnRemove = $('<button />', {
            class: 'btnRemove',
            text: 'Remove',
            'data_id': this.id
        });

        // Структура
        $id_review.appendTo($reviewWrapper);
        $reviewText.appendTo($reviewWrapper);
        $autor.appendTo($reviewWrapper);
        $btnLike.appendTo($reviewWrapper);
        $btnRemove.appendTo($reviewWrapper);

        $reviewWrapper.appendTo($jQueryElement);
    }
}