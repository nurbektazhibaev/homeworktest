exports.resultPage= class resultPage {

    /*описываем нужные элменеты на старинице выдачи поиск
    1. Кнопка выборе первого в списке resultButton*/

    constructor(page) {
        this.page=page;
        //Обозначаем локатор для постройки функции
        this.resultButton = "//article[@id='r1-0']//div[@class='ikg2IXiCD14iVX7AdZo1']";
    }

    //создаем функцию, которую потом вызовим в тесте
     async gotofirstLink(){
        await this.page.locator(this.resultButton).click()
     }
}