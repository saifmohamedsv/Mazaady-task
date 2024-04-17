import { Categories } from "@/components/common";
import { SubCategories } from "@/components/common/subcategories-combobox";
import { getCategories } from "@/services";
import clsx from "clsx";
import { Properties, StorePrettyDisplay } from "./components";
import { ShowValuesTable } from "./components/show-values-table";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="h-screen p-12">
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
