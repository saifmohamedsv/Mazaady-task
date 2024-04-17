import { PropertyCombobox } from "@/components/common"; // Adjust the import path as needed
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

jest.mock("../src/lib/store", () => ({
  useCategoryDropdownStore: () => ({
    insertPropertyValue: jest.fn(),
    removePropertyValue: jest.fn(),
    properties: [],
  }),
}));

describe("PropertyCombobox component", () => {
  test("renders component with default text", () => {
    const options = [
      { name: "Option 1", id: "1" },
      { name: "Option 2", id: "2" },
    ];
    const propertyName = "Test Property";
    const propertyId = "1";
    render(
      <PropertyCombobox options={options} name={propertyName} id={propertyId} />
    );

    expect(screen.getByText(`Select ${propertyName}...`)).toBeInTheDocument();
  });
});
