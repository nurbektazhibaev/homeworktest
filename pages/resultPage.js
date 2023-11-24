exports.resultPage= class resultPage {

    /* Описываем нужные элменеты на старанице выдачи поиск
    1. Кнопка выборе первого в списке "resultButton" */

    constructor(page) {
        this.page=page;
        // Обозначаем локатор
        this.resultButton = "//article[@id='r1-0']//div[@class='ikg2IXiCD14iVX7AdZo1']";
    }

    // Создаем функцию, которую потом вызовим в тесте
     async gotofirstLink(){
        await this.page.locator(this.resultButton).click()
     }
}