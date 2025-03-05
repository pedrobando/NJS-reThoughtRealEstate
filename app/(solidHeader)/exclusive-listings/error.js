"use client";

import ListingsError from "../../_components/ui/ErrorUI/ListingsError";

export default function Error({ error, reset }) {

  return <ListingsError error={error} reset={reset} />;
}
