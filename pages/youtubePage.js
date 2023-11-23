exports.youtubePage= class youtubePage {
    /*описываем нужные элементы на главной стринице youtube.com
    1. Кнопка остановки воспроизведения видео pauseButton" ]*/

    constructor(page) {
        this.page=page;
        //Обозначаем локатор для постройки функции
        this.pauseButton = ".video-stream.html5-main-video";
    }

    //создаем функцию, которую потом вызовим в тесте
     async gotoyoutubeAction(){
     //нажатие на паузу
        await this.page.locator(this.pauseButton).click();
     }

     
}