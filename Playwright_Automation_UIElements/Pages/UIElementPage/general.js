export class General {
    constructor(page) {
        this.page = page;
    }

    async goto(URL) {
        await this.page.goto(URL);
    }
}