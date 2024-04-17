"use client";

import { syntaxHighlight } from "@/lib/utils";
import { useCategoryDropdownStore } from "@/lib/store";

interface StorePrettyDisplayProps {}

export function StorePrettyDisplay({}: StorePrettyDisplayProps) {
  const { properties, categoryValue, subCategoryValue } =
    useCategoryDropdownStore();

  return (
    <pre
      dangerouslySetInnerHTML={{
        __html: syntaxHighlight(
          JSON.stringify(
            { categoryValue, subCategoryValue, properties },
            null,
            4
          )
        ),
      }}
    ></pre>
  );
}
