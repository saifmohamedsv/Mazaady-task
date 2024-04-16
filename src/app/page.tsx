import { Categories } from "@/components/common";
import { SubCategories } from "@/components/common/subcategories";
import { Button } from "@/components/ui";
import { api } from "@/services";
import { Category } from "@/types";
import clsx from "clsx";
import { useState } from "react";
import { Properties, StorePrettyDisplay } from "./components";
import { ShowValuesTable } from "./components/show-values-table";
import { ValuesTable } from "./components/values-table";

async function getCategories(): Promise<Category[]> {
  const res = await api.get("/get_all_cats");

  if (res.status !== 200) {
    throw new Error("Failed to fetch categories");
  }

  return res.data.data?.categories;
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="h-screen p-12 ">
      <div className="grid grid-cols-12">
        <div
          className={clsx(
            "flex flex-col items-start gap-4 col-span-12",
            "md:col-span-6",
            "lg:col-span-4"
          )}
        >
          <Categories categories={categories} />
          <SubCategories categories={categories} />

          <div className="mt-4">
            <Properties />
          </div>
        </div>

        <div className={clsx("col-span-12", "md:col-span-6", "lg:col-span-8")}>
          <StorePrettyDisplay />
        </div>
      </div>
      
      <ShowValuesTable />
    </main>
  );
}
