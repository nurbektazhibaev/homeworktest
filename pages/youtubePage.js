exports.youtubePage= class youtubePage {
    /* Описываем нужные элементы на главной стринице youtube.com
    1. Кнопка остановки воспроизведения видео "pauseButton"
    2. Кнопка подписки на канал */

    constructor(page) {
        this.page=page;
        //Обозначаем локаторы
        this.pauseButton = "//div[@id='movie_player']";
        this.subscribeButton = "//button[@aria-label='Subscribe to Rick Astley.']";
    }

    // Создаем функцию, которую потом вызовим в тесте
     async gotoyoutubeAction(){
        // Нажатие на паузу
        await this.page.locator(this.pauseButton).click();
        // Нажатие на кнопку "Подписаться"
        await this.page.locator(this.subscribeButton).click();
     }

     
}