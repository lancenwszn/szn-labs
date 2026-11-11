import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About, Philosophy, WhatWeDo } from "@/components/Sections";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <WhatWeDo />
      <Products />
      <Philosophy />
      <Contact />
    </main>
  );
}
