# homework

Небходимо протестировать следующий пользовательский сценарий:

* Пользователь заходит на сайт `duck.com`
* Вводит в поисковое поле запрос 'rickrol'
* Нажимает на кнопку поиска
* Нажимает на первую ссылку в выдаче (пропуская возможную рекламу)
* Попадает на сайт YouTube
* Нажимает на паузу видео
* Нажимает на кнопку подписаться
* Открыват новую страницу 
* Открывает сайт swap.com
* Закрывает страницы

Тест написан с использованием паттерна PageObject
В папку pages были добавлены страницы с описанием элементов и их действии. 
* mainPage
* resultPage
* youtubePage

Названия файла: homeWorkTest.spec.js 
Запуск в терминале по команде: npx playwright test homeWorkTest.spec.js --project chromium --headed

ps: Не удалось нажать на лайк, элемент не поддается идентицикации. Вместо лайка используется другие кнопки на сайте youtube, такие как подписаться, пауза на видео. 



