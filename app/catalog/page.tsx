// app/catalog/page.tsx
import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";
export const metadata: Metadata = {
  title: "Catalog | RentalCar",
  description: "Browse and filter our rental car catalog.",
};
export default function CatalogPage() {
  return <CatalogClient />;
}
