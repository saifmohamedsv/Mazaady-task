"use client";
import { getProperties } from "@/services";
import { useCategoryDropdownStore } from "@/zustand-store/store";
import { useEffect, useState } from "react";

export function useFetchProperties() {
  const { subCategoryValue } = useCategoryDropdownStore();
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const res = await getProperties(subCategoryValue);
      setData(res.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    subCategoryValue && fetchProperties();
  }, [subCategoryValue]);

  return { data, error, loading };
}
