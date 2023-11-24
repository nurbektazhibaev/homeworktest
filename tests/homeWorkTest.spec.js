import {test, expect} from '@playwright/test'
import { mainPage } from '../pages/mainPage';
import { resultPage } from '../pages/resultPage';
import { youtubePage } from '../pages/youtubePage';


test('test', async ({page, browser}) =>{
     const searchRick=new mainPage(page);
     const choiseLink=new resultPage(page);
     const youtubeAction=new youtubePage(page);
     // Вызываем действие с mainPage
     await searchRick.gotoMainPage();
     await searchRick.gotoSearch();
     // Вызываем действие с resultPage
     await choiseLink.gotofirstLink();
     // Вызываем действие с youtubePage
     await youtubeAction.gotoyoutubeAction();
     await page.waitForTimeout(2000);
     // Создаем новую страницу в текущем контексте
     const newPage = await browser.newPage();
     // Открываем сайт Swap.com
    await newPage.goto('https://www.window-swap.com/');
    await newPage.waitForTimeout(2000);
     // Можно выполнить другие действия на новой вкладке
     // Закрываем новую вкладку 
    await newPage.close();
})  