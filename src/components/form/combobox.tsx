"use client";

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { Property } from "@/types";
import { useCategoryDropdownStore } from "@/zustand-store/store";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

interface CategoryDropdown extends Property {}

export function PropertyCombobox({
  options,
  name: propertyName,
  id: propertyId,
}: CategoryDropdown) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<any>("");
  const [otherValue, setOtherValue] = React.useState<any>("");
  const { insertPropertyValue, removePropertyValue } =
    useCategoryDropdownStore();

  const O = options.map(({ name, id }) => ({
    value: id.toString(),
    label: name,
  }));

  console.log(O, `options of property ${propertyName}`);

  const handleSetValueOnSelectAndClosePopover = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
  };

  const OtherOption = () => (
    <CommandItem
      value={"other"}
      onSelect={handleSetValueOnSelectAndClosePopover}
    >
      Other
      <CheckIcon
        className={cn(
          "ml-auto h-4 w-4",
          value === "other" ? "opacity-100" : "opacity-0"
        )}
      />
    </CommandItem>
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div>
        <p className="mb-1 text-sm font-semibold">{propertyName}</p>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="min-w-[340px] justify-between"
          >
            {value ? (
              O.find((item) => item.value === value)?.label || "Other"
            ) : (
              <p className="text-gray-400">Select {propertyName}...</p>
            )}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[260px] p-0">
          <Command>
            <CommandInput
              placeholder={`Search ${propertyName}...`}
              className="h-9"
            />
            <CommandEmpty>
              No item found, please type <strong>`Other`</strong>
              to add custom value
            </CommandEmpty>
            <CommandGroup>
              <CommandList>
                {O.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    defaultValue={item.value}
                    onSelect={(currentValue) => {
                      currentValue === value
                        ? removePropertyValue(propertyId)
                        : insertPropertyValue({
                            id: propertyId,
                            name: propertyName,
                            selectedOption: item,
                          });
                      handleSetValueOnSelectAndClosePopover(currentValue);
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
                <OtherOption /> {/* If user selected the other option... */}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>

        {value === "other" && (
          <Input
            value={otherValue}
            onChange={(e) => setOtherValue(e.target.value)}
            className="mt-1"
            type="text"
            placeholder={`Write other value for ${propertyName}`}
          />
        )}
      </div>
    </Popover>
  );
}
