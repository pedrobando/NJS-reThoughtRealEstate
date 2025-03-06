"use client";

import ListingsError from "@/components/ui/ErrorUI/ListingsError";

export default function Error({ error, reset }) {

  return <ListingsError error={error} reset={reset} color="bg-white"/>;
}
