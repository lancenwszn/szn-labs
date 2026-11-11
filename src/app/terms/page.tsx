import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service">
      {/* TODO: replace with the approved terms text. */}
      <p>
        The SZN Labs Terms of Service are being finalized and will be
        published on this page.
      </p>
    </LegalPage>
  );
}
