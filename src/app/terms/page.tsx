import type { Metadata } from "next";
import Link from "next/link";
import { ContactRoute, LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

const title = "Terms of Service";
const description = "The terms that apply to using the SZN Labs website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${title} — ${site.name}`,
    description,
    url: "/terms",
    locale: "en_US",
  },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="November 11, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) apply to your use of
        this website, operated by SZN Labs (&ldquo;SZN Labs&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using this website, you
        agree to these Terms. If you do not agree, please do not use the
        website.
      </p>

      <h2>1. About this website</h2>
      <p>
        This website provides information about SZN Labs and the products we
        build. Individual SZN Labs products may have their own websites and
        their own terms, which apply to your use of those products.
      </p>

      <h2>2. Using the website</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the website in any way that breaks applicable law;</li>
        <li>
          attempt to gain unauthorized access to the website or the systems
          that run it, or interfere with its normal operation;
        </li>
        <li>
          use the contact form to send spam, unlawful, or abusive content;
          or
        </li>
        <li>
          misrepresent your identity or your affiliation with any person or
          organization.
        </li>
      </ul>

      <h2>3. Intellectual property</h2>
      <p>
        The content of this website, including text, design, graphics, the
        SZN Labs name, and the SZN Labs logo, belongs to SZN Labs or its
        licensors and is protected by intellectual property laws. You may
        view and share links to the website, but you may not copy, modify,
        or reuse its content or branding for commercial purposes without our
        written permission.
      </p>

      <h2>4. Ideas and messages you send us</h2>
      <p>
        We welcome messages through the contact form. Please do not send us
        confidential or proprietary information. Unless we agree otherwise
        in writing, messages you send are not treated as confidential, and
        sending us an idea does not create any obligation on our part,
        including any obligation to compensate you. Personal information in
        your messages is handled as described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>5. Products in development</h2>
      <p>
        Information about products that are in development or coming soon
        describes our current plans. Features, timing, and availability may
        change, and nothing on this website is a commitment to release any
        product or feature.
      </p>

      <h2>6. Third-party links</h2>
      <p>
        This website may link to websites we do not operate. We are not
        responsible for their content or practices.
      </p>

      <h2>7. Disclaimer</h2>
      <p>
        This website is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo;. To the fullest extent permitted by law, SZN Labs
        makes no warranties, express or implied, about the website,
        including its accuracy, availability, or fitness for a particular
        purpose.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, SZN Labs will not be liable
        for any indirect, incidental, special, or consequential damages
        arising from your use of, or inability to use, this website. Nothing
        in these Terms limits any liability that cannot be limited by law.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These Terms are governed by the laws of [jurisdiction to be
        confirmed], without regard to its conflict of law rules.
      </p>

      <h2>10. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will
        revise the &ldquo;Last updated&rdquo; date at the top of this page.
        Continuing to use the website after a change means you accept the
        updated Terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms can be sent to SZN Labs <ContactRoute />.
      </p>
    </LegalPage>
  );
}
