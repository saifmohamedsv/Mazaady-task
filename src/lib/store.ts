import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface StoredProperty {
  name: string;
  id: number;
  selectedOption: { value: string; label: string };
}
interface CategoriesDropdownProps {
  categoryValue: string;
  setCategoryValue: (categoryId: string) => void;

  subCategoryValue: string;
  setSubCategoryValue: (subCategoryId: string) => void;

  properties: StoredProperty[];
  insertPropertyValue: (property: StoredProperty) => void;
  removePropertyValue: (propertyId: number) => void;
}

export const useCategoryDropdownStore = create<CategoriesDropdownProps>()(
  devtools((set, get) => ({
    categoryValue: "",
    setCategoryValue: (categoryId: string) => {
      set({ categoryValue: categoryId });
    },

    subCategoryValue: "",
    setSubCategoryValue: (subCategoryId: string) => {
      set({ subCategoryValue: subCategoryId });
    },

    properties: [],
    insertPropertyValue: (property: StoredProperty) => {
      const foundProperty = get().properties.find(
        (prop) => prop.id === property.id
      );
      const filteredProperties = get().properties.filter(
        (prop) => prop.id !== property.id
      );
      console.log(foundProperty, !foundProperty);
      if (!foundProperty) {
        set((state) => ({
          properties: [...state.properties, property],
        }));
      } else {
        set({
          properties: [...filteredProperties, property],
        });
      }
    },
    removePropertyValue: (proeprtyId: number) => {
      const filteredProperties = get().properties.filter(
        (prop) => prop.id !== proeprtyId
      );
      set({
        properties: filteredProperties,
      });
    },
  }))
);
