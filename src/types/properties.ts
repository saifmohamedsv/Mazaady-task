export interface Property {
  description: string | null;
  id: number;
  list: boolean;
  name: string;
  options: {
    id: number;
    name: string;
    slug: string;
    parent: number;
    child: boolean;
  }[];
  other_value: any;
  parent: number;
  slug: string;
  type: any;
  value: string;
}
