export class Customers{
    name: string;
    age: number;
    id: number;
    years: number;
    imgUrl: string;


    constructor(){

        this.name = '';
        this.age = -1;
        this.id = -1;
        this.years = -1;
        this.imgUrl = '';

    }

}

export const CUSTOMERS: Customers[] = [
    {name: 'Aman', age: 21, id: 1, years: 1, imgUrl: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'},
    {name: 'Abel', age: 19, id: 2, years: 2, imgUrl: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'},
    {name: 'Alex', age: 21, id: 3, years: 4, imgUrl: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}
]