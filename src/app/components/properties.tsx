"use client";

import { PropertyCombobox } from "@/components/common/property-combobox";
import { ScrollArea, ScrollBar } from "@/components/ui";
import { useFetchProperties } from "@/hooks";
import clsx from "clsx";

interface PropertiesProps {}

export function Properties({}: PropertiesProps) {
  const { data: properties, error, loading } = useFetchProperties();

  if (loading) return "Loading...";
  if (loading || !properties) return "No properties to display";

  console.log(properties[0], "Property");

  return (
    <>
      <h1 className="mb-2 font-semibold text-slate-500">Select properties</h1>
      <div className="flex flex-col items-start gap-4">
        {properties?.map((property) => (
          <PropertyCombobox key={property.id} {...property} />
        ))}
      </div>
    </>
  );
}
