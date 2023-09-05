export interface IProduct {
  _id: number;
  name: string;
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  quantity?: number;
}

export interface ICart {
  products: IProduct[];
  total: number;
}
