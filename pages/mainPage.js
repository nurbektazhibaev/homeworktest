exports.mainPage= 
class mainPage {
    /* Описываем нужные элементы на главной стринице youtube.com
    1. Кнопка инпута помскавого запроса "searchInput"
    2. Кнопка значка поиска "searchButton" */
    constructor(page) {
        this.page=page;
        // Обозначаем локатор для постройки функции
        this.searchInput = '#searchbox_input';
        this.searchButton = "//button[@aria-label='Search']";
    }

    async gotoMainPage(){
        await this.page.goto('https://duck.com');
    }
     // Создаем функцию, которую потом вызовим в тесте
     async gotoSearch(){
        await this.page.locator(this.searchInput).fill('rickrol');
        await this.page.locator(this.searchButton).click();
     }
}