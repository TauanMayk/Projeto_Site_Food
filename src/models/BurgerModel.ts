export interface Burger {
  id: number;
  name: string;
  images: [
    {
      sm: string;
      lg: string;
    }
  ];
  desc: string;
  ingredients: [
    {
      id: number;
      name: string;
      img: string;
    }
  ];
  price: number;
  veg: boolean;
}