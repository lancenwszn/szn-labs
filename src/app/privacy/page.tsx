import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      {/* TODO: replace with the approved policy text. */}
      <p>
        The SZN Labs Privacy Policy is being finalized and will be published
        on this page.
      </p>
    </LegalPage>
  );
}
