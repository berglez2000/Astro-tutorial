export interface ProductInterface {
  id: number;
  title: string;
  slug: string;
  description: string;
  prices: string;
  colors: boolean;
  sizes: string;
  checks: Check[];
  showBuy: boolean;
  galerija: Galerija[];
}

export interface Check {
  text: string;
}

export interface Galerija {
  large: string;
  thumbnail: string;
}
