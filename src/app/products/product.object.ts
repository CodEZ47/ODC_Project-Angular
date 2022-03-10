export class Product{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;


    constructor(){
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.imageUrl = '';
        this.description = '';
    }

}

export const PRODUCTS: Product[ ] = [
    { id: 1, name: 'Nike', price: 2000, imageUrl: '../../assets/nike.jpeg', description: 'Good Looking Nike Shoes for Men.'},
    { id: 2, name: 'Puma', price: 9, imageUrl: '../../assets/puma.png', description: 'Good Looking Puma Shoes for Men.'},
    { id: 3, name: 'Adidas', price: 1500, imageUrl: '../../assets/adidas.png', description: 'Good Looking Adidas Shoes for Men.'}

];

