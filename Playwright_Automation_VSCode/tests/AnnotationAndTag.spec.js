import { test, expect } from '@playwright/test'

test.skip('Test one', async ({ page }) => {

})

test('not ready yet', async ({ page }) => {
    test.fail();
})

test.fixme('need to be fix', async ({ page }) => {

})

test('slow test', async ({ page }) => {
    test.slow();
})

test.only('focus on this', async ({ page }) => {

})