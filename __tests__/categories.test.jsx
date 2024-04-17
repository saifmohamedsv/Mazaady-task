import { Categories } from "@/components/common";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("../src/lib/store", () => ({
  useCategoryDropdownStore: () => ({
    setCategoryValue: jest.fn(),
    categoryValue: "",
  }),
}));

describe("Categories component", () => {
  test("renders main category button", () => {
    const categories = [
      { slug: "Category 1", id: "1" },
      { slug: "Category 2", id: "2" },
    ];

    render(<Categories categories={categories} />);

    expect(
      screen.getByRole("combobox", { expanded: false })
    ).toBeInTheDocument();

    expect(screen.getByRole("combobox", { expanded: false })).toHaveTextContent(
      "Select main category..."
    );
  });
});
