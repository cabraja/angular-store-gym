export interface CartItem{
    id: number,
    name: string,
    price: number,
    images: Array<string>,
    discountPercent: number,
    description: string,
    productionDate: string,
    freeShipping: boolean,
    cartId: number
}