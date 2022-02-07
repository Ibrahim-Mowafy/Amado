import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsLoaded = new Subject<Product[]>();

  private products: Product[] = [
    new Product(
      1,
      'Park Bench',
      'https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?cs=srgb&dl=pexels-emre-can-acer-2079249.jpg&fm=jpg',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10877309/pexels-photo-10877309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Chairs',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      2,
      'Upholstered Bench',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?cs=srgb&dl=pexels-emre-can-acer-2079249.jpg&fm=jpg',
      [
        'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?cs=srgb&dl=pexels-emre-can-acer-2079249.jpg&fm=jpg',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      599,
      'Chairs',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      3,
      'Wing Chair',
      'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10877309/pexels-photo-10877309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      296,
      'Beds',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      4,
      'Cantilever chair',
      'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/5203527/pexels-photo-5203527.jpeg?cs=srgb&dl=pexels-andrea-davis-5203527.jpg&fm=jpg',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      296,
      'Chairs',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      5,
      'Garden Chair',
      'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/6968828/pexels-photo-6968828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      296,
      'Chairs',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      6,
      'Ladderback chair',
      'https://images.pexels.com/photos/5203527/pexels-photo-5203527.jpeg?cs=srgb&dl=pexels-andrea-davis-5203527.jpg&fm=jpg',
      [
        'https://images.pexels.com/photos/5203527/pexels-photo-5203527.jpeg?cs=srgb&dl=pexels-andrea-davis-5203527.jpg&fm=jpg',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Chairs',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      7,
      'IDANÄS',
      'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Beds',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      8,
      'MALM',
      'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Beds',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      9,
      'HAUGA',
      'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Tables',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      10,
      'Industrial Bed',
      'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Beds',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      11,
      'Modern Bed',
      'https://images.pexels.com/photos/6782433/pexels-photo-6782433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/6782433/pexels-photo-6782433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Beds',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      12,
      'Convertible Bed',
      'https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Beds',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      13,
      'FYRESDAL',
      'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Accessories',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      14,
      'BLÅKULLEN',
      'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Beds',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      15,
      'BLÅKULLEN',
      'https://images.pexels.com/photos/6585743/pexels-photo-6585743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/6585743/pexels-photo-6585743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Furniture',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      16,
      'UTESPELARE',
      'https://images.pexels.com/photos/10114999/pexels-photo-10114999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/10114999/pexels-photo-10114999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Tables',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      17,
      'UTESPELARE',
      'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Tables',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      18,
      'UTESPELARE',
      'https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/6968828/pexels-photo-6968828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2829026/pexels-photo-2829026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Decoration',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      19,
      'UTESPELARE',
      'https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      [
        'https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Decoration',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      20,
      'UTESPELARE',
      'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/10115003/pexels-photo-10115003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/6782433/pexels-photo-6782433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Accessories',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
    new Product(
      21,
      'UTESPELARE',
      'https://images.pexels.com/photos/6782433/pexels-photo-6782433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        'https://images.pexels.com/photos/6782433/pexels-photo-6782433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/6968828/pexels-photo-6968828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
      250,
      'Lighting',
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quae eveniet culpa officia quidem mollitia impedit iste
      asperiores nisi reprehenderit consequatur, autem, nostrum
      pariatur enim?`
    ),
  ];
  constructor() {}

  public getProducts(): Product[] {
    // this.dataStorageService.fetchData().subscribe((res) => {
    //   this.products = res;
    //   this.productsLoaded.next(res);
    // })
    return this.products;
  }

  public setProducts(products: Product[]) {
    this.products = products;
    this.productsLoaded.next(this.products);
  }
  public getProduct(index: number) {
    return this.products[index - 1];
  }
}
