// Сами тесты

describe('Проверка валидности введенных данных в поля формы', () => {
    // Аргументы для проверки функции
    let inputName = document.createElement('input');
    inputName.id = 'name';

    let eventInputName = {
        target: inputName,
        type: inputName.id
    }

    // let inputEmail = document.createElement('input');
    // inputName.id = 'email';

    // let inputTel = document.createElement('input');
    // inputName.id = 'tel';

    // let textArea = document.createElement('textArea');
    // inputName.id = 'textArea';

    // let inputEventChange = 'change';
    // let inputEventInput = 'input';


    it('Проверка поля с именем', () => {
        expect(validateInput(eventInputName)).toBeTruthy();
    });
});