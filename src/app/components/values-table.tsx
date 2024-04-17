"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { useCategoryDropdownStore } from "@/lib/store";

export function ValuesTable() {
  const { categoryValue, subCategoryValue, properties } =
    useCategoryDropdownStore();

  return (
    <Table>
      <TableCaption>A list of your key/value pairs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Key</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium w-[130px]">Main Category</TableCell>
          <TableCell>{categoryValue}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium w-[130px]">Sub Category</TableCell>
          <TableCell>{subCategoryValue}</TableCell>
        </TableRow>

        {properties.map((property) => (
          <TableRow key={property.id}>
            <TableCell className="font-medium">{property.name}</TableCell>
            <TableCell>{property.selectedOption.label}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
