import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CategoriesDropdownProps {
  categoryValue: string;
  setCategoryValue: (categoryId: string) => void;

  subCategoryValue: string;
  setSubCategoryValue: (subCategoryId: string) => void;
}

export const useCategoryDropdownStore = create<CategoriesDropdownProps>()(
  devtools((set) => ({
    categoryValue: "",
    setCategoryValue: (categoryId: string) => {
      set({ categoryValue: categoryId });
    },

    subCategoryValue: "",
    setSubCategoryValue: (subCategoryId: string) => {
      set({ subCategoryValue: subCategoryId });
    },
  }))
);
