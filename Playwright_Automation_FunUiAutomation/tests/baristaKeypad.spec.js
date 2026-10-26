import { test, expect } from '@playwright/test'
import { General } from '../Pages/general'

let general;

test.beforeEach('opening the Barista Keypad cofee shop url', async ({ page }) => {
    general = new General(page);
    await general.goto_BaristaKeypadUrl();
})


//test to check the input shot field
test('checking the input shot field', async ({ page }) => {
    await expect(general.baristakeypad_Shots).toBeVisible();
    await expect(general.baristakeypad_Shots).toBeEnabled();
    await expect(general.baristakeypad_Shots).toHaveAttribute('type', 'number');
    await expect(general.baristakeypad_Shots).toHaveValue('2');
    await expect(general.baristakeypad_Shots).toHaveAttribute('min', '1');
    await expect(general.baristakeypad_Shots).toHaveAttribute('max', '6');
    await general.baristakeypad_Shots.focus();
    await page.keyboard.press('ArrowDown');
    await expect(general.baristakeypad_Shots).toHaveValue('1');
    await page.keyboard.press('ArrowUp');
    await expect(general.baristakeypad_Shots).toHaveValue('2');
})


//test to check the key logger field or last key pressed display
test('checking the key logger field or last key pressed display', async ({ page }) => {
    // await page.pause();
    await expect(general.baristakeypad_keyLoggerResult).toHaveText('No keys pressed yet.');
    await general.baristakeypad_keyLogger.focus();
    await page.keyboard.press('A');
    await expect(general.baristakeypad_keyLoggerResult).toHaveText('You pressed: A');
    await page.keyboard.press('p');
    await expect(general.baristakeypad_keyLoggerResult).toHaveText('You pressed: P');
    await page.keyboard.press('4');
    await expect(general.baristakeypad_keyLoggerResult).toHaveText('You pressed: 4');
    await page.keyboard.press('Backspace');
    await expect(general.baristakeypad_keyLoggerResult).toHaveText('You pressed: BACKSPACE');
    await page.keyboard.press('Enter');
    await expect(general.baristakeypad_keyLoggerResult).toHaveText('You pressed: ENTER');
})


//test to check the live counting of the characters
test('checking for the order note or live counting of the characters', async ({ page }) => {
    // await page.pause();
    await expect(general.baristakeypad_orderNoteCount).toHaveText('0/20 characters');
    await expect(general.baristakeypad_orderNote).toHaveAttribute('maxlength', '20');
    await general.baristakeypad_orderNote.focus();
    await page.keyboard.press('L');
    await expect(general.baristakeypad_orderNoteCount).toHaveText('1/20 characters');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('Logicwind', { delay: 100 });
    await expect(general.baristakeypad_orderNoteCount).toHaveText('9/20 characters');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('Logicwind TestIntern', { delay: 100 });
    await expect(general.baristakeypad_orderNoteCount).toHaveText('20/20 characters');
})