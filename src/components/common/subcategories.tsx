"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { useCategoryDropdownStore } from "@/zustand-store/store";

interface SubCategoriesDropdown {
  categories: Category[];
}

export function SubCategories({ categories }: SubCategoriesDropdown) {
  const [open, setOpen] = React.useState(false);
  const { categoryValue, subCategoryValue, setSubCategoryValue } =
    useCategoryDropdownStore();

  const SC = categories
    .find((c) => c.id === categoryValue)
    ?.children.map(({ slug, id }) => ({ value: id, label: slug })) as {
    label: string;
    value: string;
  }[];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div>
        <p className="mb-1 text-sm font-semibold">Sub category</p>
        <PopoverTrigger disabled={!categoryValue} asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="min-w-[340px] justify-between"
          >
            {subCategoryValue
              ? SC?.find((item) => item.value == subCategoryValue)?.label
              : "Select sub category..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[260px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {SC?.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setSubCategoryValue(item.value);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        subCategoryValue === item.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </div>
    </Popover>
  );
}
