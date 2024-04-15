"use client";

import { useFetchProperties } from "@/hooks";

interface PropertiesProps {}

export function Properties({}: PropertiesProps) {
  const { data, error, loading } = useFetchProperties();

  if (loading && !data) return "Loading...";

  return <div>
    
  </div>;
}
