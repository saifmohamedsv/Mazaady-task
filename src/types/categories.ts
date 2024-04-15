export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  children: SubCategory[];
  circle_icon: string;
  disable_shipping: number;
};

export interface SubCategory extends Category {}
