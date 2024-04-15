import { Categories } from "@/components/common";
import { SubCategories } from "@/components/common/subcategories";
import { api } from "@/services";
import { Category } from "@/types";
import { Properties } from "./components";

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
    <main className="min-h-screen p-24 max-w-sm flex flex-col items-start gap-4">
      <Categories categories={categories} />
      <SubCategories categories={categories} />

      <div className="mt-4">
        <Properties />
      </div>

      {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
    </main>
  );
}
