import { test, expect } from '@playwright/test'
import { General } from "../Pages/general"

let general;

test.beforeEach('open the Pizza Order Toasts url', async ({ page }) => {
    general = new General(page);
    await general.goto_PizzaOrderToastsUrl();
})


//checking the initial state of the elements on page
test('testing initial state of elements on page', async () => {
    // await page.pause();
    await expect(general.pizzaOrderToast_btnPizzaOrder).toBeVisible();
    await expect(general.pizzaOrderToast_btnPizzaOrder).toBeEnabled();
    await expect(general.pizzaOrderToast_btnPizzaOrder).toHaveText(/Place order/);
    await expect(general.pizzaOrderToast_flash).toBeHidden();
})


//checking the success/fail outcome based on button click event
test('testing the outcomes of the place order button click event', async () => {
    // await page.pause();
    await general.pizzaOrderToast_btnPizzaOrder.click();
    await expect(general.pizzaOrderToast_flash).toBeVisible();
    if (await general.pizzaOrderToast_Success.isVisible()) {
        await expect(general.pizzaOrderToast_Success).toHaveText(/The oven accepts your pizza\./);
    } else {
        await expect(general.pizzaOrderToast_Fail).toHaveText(/Oven fire! Order rejected/);
    }
})