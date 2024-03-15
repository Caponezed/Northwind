export default class Product {
  constructor(
    public productId?: number,
    public productName?: string,
    public quantityPerProduct?: string,
    public unitsInStock?: number,
    public productCategory?: string,
    public productDescription?: string,
    public productPrice?: number,
    public unitsOnOrder?: number,
    public reorderLevel?: number,
    public discounted?: number,
    public imageUrl?: string
  ) {}
}
