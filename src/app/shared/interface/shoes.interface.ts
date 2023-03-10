export interface Shoes {
    shoes: Shoe[];
}

export interface Shoe {
    id:          number;
    brand:       string;
    img:         string;
    price:       number;
    description: string;
    size:        number[];
    stock:       number;
}
