import {test, expect} from '@playwright/test'
import { mainPage } from '../pages/mainPage';
import { resultPage } from '../pages/resultPage';
import { youtubePage } from '../pages/youtubePage';


test('test', async ({page}) =>{
    
     const searchRick=new mainPage(page);
     const choiseLink=new resultPage(page);
     const youtubeAction=new youtubePage(page);
     await searchRick.gotoMainPage();
     await searchRick.gotoSearch();
     await choiseLink.gotofirstLink();
     await youtubeAction.gotoyoutubeAction();
     await page.waitForTimeout(10000)
})  