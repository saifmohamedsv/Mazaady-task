'use client';
import { Button } from "@/components/ui";
import { useState } from "react";
import { ValuesTable } from "./values-table";
import { useCategoryDropdownStore } from "@/zustand-store/store";

interface ShowValuesTableProps {}

export function ShowValuesTable({}: ShowValuesTableProps) {
  const [submitted, setSubmitted] = useState(false);
  const {properties, categoryValue, subCategoryValue} = useCategoryDropdownStore();
  return (
    <>
      <Button disabled={!properties.length || !categoryValue || !subCategoryValue} className="mt-4" onClick={() => setSubmitted(true)}>
        Submit
      </Button>

      {submitted && (
        <div className="mt-4">
          <ValuesTable />
        </div>
      )}
    </>
  );
}
