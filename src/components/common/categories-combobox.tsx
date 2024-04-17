"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { useCategoryDropdownStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface CategoryDropdown {
  categories: Category[];
}

export function Categories({ categories }: CategoryDropdown) {
  const [open, setOpen] = React.useState(false);
  const { setCategoryValue, categoryValue } = useCategoryDropdownStore();
  const C = categories?.map(({ slug, id }) => ({ value: id, label: slug })) as {
    label: string;
    value: string;
  }[];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <p className="mb-1 text-sm font-semibold">Main Category</p>
      <PopoverTrigger asChild>
        <Button
          name="select-main-category"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[340px] justify-between"
        >
          {categoryValue
            ? C?.find((item) => item.value == categoryValue)?.label
            : "Select main category..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[260px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {C?.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setCategoryValue(item.value);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      categoryValue === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
