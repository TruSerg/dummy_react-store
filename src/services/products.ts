export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  quantity: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ServerResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
