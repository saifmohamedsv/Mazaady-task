import { SubCategories } from "@/components/common";
import { render, screen } from "@testing-library/react";
import React from "react";

jest.mock("../src/lib/store", () => ({
  useCategoryDropdownStore: () => ({
    categoryValue: "1",
    subCategoryValue: "",
    setSubCategoryValue: jest.fn(),
  }),
}));

describe("SubCategories component", () => {
  test("renders sub category button", () => {
    const categories = [
      {
        id: "1",
        children: [
          { slug: "SubCategory 1", id: "subCatId1" },
          { slug: "SubCategory 2", id: "subCatId2" },
        ],
      },
    ];
    render(<SubCategories categories={categories} />);

    expect(
      screen.getByRole("combobox", { expanded: false })
    ).toBeInTheDocument();
  });

  test("displays default text if no sub category selected", () => {
    const categories = [
      {
        id: "1",
        children: [
          { slug: "SubCategory 1", id: "subCatId1" },
          { slug: "SubCategory 2", id: "subCatId2" },
        ],
      },
    ];
    jest
      .spyOn(require("../src/lib/store"), "useCategoryDropdownStore")
      .mockReturnValueOnce({
        categoryValue: "1",
        subCategoryValue: null,
        setSubCategoryValue: jest.fn(),
      });

    render(<SubCategories categories={categories} />);

    expect(screen.getByText("Select sub category...")).toBeInTheDocument();
  });
});
