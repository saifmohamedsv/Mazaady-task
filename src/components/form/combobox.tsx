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
import { Property } from "@/types";

interface CategoryDropdown extends Property {}

export function PropertyCombobox({ options, name }: CategoryDropdown) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<any>("");

  // const { setCategoryValue, categoryValue } = useCategoryDropdownStore();
  const O = options.map(({ name, id }) => ({
    value: id.toString(),
    label: name,
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div>
        <p className="mb-1 text-sm font-semibold">{name}</p>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="min-w-[340px] justify-between"
          >
            {value ? (
              O.find((item) => item.value === value)?.label
            ) : (
              <p className="text-gray-400">Select {name}...</p>
            )}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[260px] p-0">
          <Command>
            <CommandInput placeholder={`Search ${name}...`} className="h-9" />
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {O.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    defaultValue={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0"
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
