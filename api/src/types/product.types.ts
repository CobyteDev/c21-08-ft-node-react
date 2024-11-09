export enum CategoriesEnum {
  c1 = '1',
  c2 = '2',
  c3 = '3',
  c4 = '4',
  c5 = '5',
  c6 = '6',
  c7 = '7',
  c8 = '8',
}

export enum PromotionEnum {
  p1 = '1',
  p2 = '2',
  p3 = '3',
}

export enum UnitOfMeasurement {
  u1 = 'kg',
  u2 = 'gr',
  u3 = 'lt',
  u4 = 'ml',
  u5 = 'unitary',
}

export type ImgUrl = {
  full: string;
  medium: string;
};

export interface ProductEntry {
  name: string;
  price: number;
  unitOfMeasurement: UnitOfMeasurement;
  description: string;
  stock: number;
  imgUrl: ImgUrl;
  brand: string;
  categoryId: CategoriesEnum;
  promotionId: PromotionEnum;
}
