import CustomerService from "@/components/our-watches/c-service";
import Craftsman from "@/components/our-watches/craftsman";
import Watches from "@/components/our-watches/watches";
import React from "react";

export default function page() {
  return (
    <main>
      <Watches />
      <Craftsman />
      <CustomerService />
    </main>
  );
}
