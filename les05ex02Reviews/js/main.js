let reviewsCount = 0;

$(document).ready(function() {
    let reviewsWrapper = $('#reviewsWrapper');

    // Создаем контейнер для всех reviews
    let reviews = new ReviewsContainer('reviews');
    reviews.render();
    
    
    
    // let $reviewsContainer = $('.reviews');

    // let review1 = new Review(103, 'Hello world! I`am from Island, I hope Everything it`s gons b all right');
    // review1.render($reviewsContainer);

    // let review2 = new Review(104, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error perferendis pariatur aperiam eveniet nemo vel vero, nisi architecto velit officiis eos distinctio doloremque necessitatibus ducimus itaque exercitationem! Ex adipisci, numquam eos suscipit mollitia saepe veniam quaerat minima? Quas exercitationem explicabo officiis? Tempore cupiditate atque quo molestiae amet quisquam est quod.');
    // review2.render($reviewsContainer);
});