window.onload = init;

function init() {
    // displayFeedbackForm();// скрипт для отрисовки блока Feedback

    document.querySelectorAll('.input').forEach(input => { //регистрация обработки полей
        input.addEventListener('input', validateInput);
        input.addEventListener('change', validateInput);
    });

    document.querySelectorAll('.far.fa-question-circle').forEach(question => {
        question.addEventListener('mouseover', showTooltipFor);
        // question.addEventListener('mouseout', hiddenHintFor); // Без этого лучше работает
    });
}
