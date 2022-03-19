export class Page{
    currentPage: number;

    constructor(){
        this.currentPage = 0;
    }
}

export const PAGES: Page [] = [
    {currentPage: 1},
    {currentPage: 2}
]