export class Product {
  constructor(
    public id: number,
    public name: string,
    public imagePath: string,
    public imagesDetails: string[],
    public price: number,
    public category: string,
    public description: string,
    public quantity: number = 1,
    public isSelected: boolean = false
  ) {}
}
