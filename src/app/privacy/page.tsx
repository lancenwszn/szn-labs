import type { Metadata } from "next";
import Link from "next/link";
import { ContactRoute, LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

const title = "Privacy Policy";
const description = "How SZN Labs handles personal information on this website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${title} — ${site.name}`,
    description,
    url: "/privacy",
    locale: "en_US",
    images: [
      { url: "/opengraph-image.png", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` },
    ],
  },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="November 11, 2026">
      <p>
        This Privacy Policy explains how SZN Labs (&ldquo;SZN Labs&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal information in
        connection with this website. It covers this website only. Products
        built by SZN Labs may have their own privacy policies, which apply to
        those products.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        <strong>Information you give us.</strong> When you use the contact
        form, we collect the name, email address, subject, and message you
        submit.
      </p>
      <p>
        <strong>Technical information.</strong> Like most websites, the
        servers that host this site may automatically record basic technical
        data when you visit, such as your IP address, browser type, the pages
        requested, and the date and time of the request. This is used to keep
        the site secure and working.
      </p>
      <p>
        This website does not use advertising or analytics cookies and does
        not track you across other websites.
      </p>

      <h2>2. How we use information</h2>
      <ul>
        <li>To read and respond to messages sent through the contact form.</li>
        <li>To operate, secure, and maintain this website.</li>
        <li>To comply with legal obligations that apply to us.</li>
      </ul>
      <p>
        We do not sell personal information, and we do not use contact form
        submissions for marketing unless you ask us to.
      </p>

      <h2>3. How information is shared</h2>
      <p>
        We share personal information only with service providers that help
        us run this website, and only as needed for that purpose:
      </p>
      <ul>
        <li>
          our website hosting provider, which serves the site and may keep
          server logs; and
        </li>
        <li>
          our email delivery provider (currently Resend), which transmits
          contact form messages to our inbox.
        </li>
      </ul>
      <p>
        We may also disclose information if required by law, or to protect
        the rights, safety, or property of SZN Labs or others.
      </p>

      <h2>4. How long we keep information</h2>
      <p>
        We keep contact form messages for as long as needed to handle your
        enquiry and any follow-up, and then delete them when they are no
        longer needed, unless we are required to keep them longer by law.
      </p>

      <h2>5. Your choices and rights</h2>
      <p>
        Depending on where you live, you may have the right to ask for
        access to the personal information we hold about you, to have it
        corrected or deleted, or to object to how we use it. To make a
        request, contact us <ContactRoute />. We will respond within a
        reasonable time.
      </p>

      <h2>6. Security</h2>
      <p>
        We take reasonable measures to protect personal information. No
        method of transmission or storage is completely secure, so we cannot
        guarantee absolute security.
      </p>

      <h2>7. Children</h2>
      <p>
        This website is not directed to children, and we do not knowingly
        collect personal information from children. If you believe a child
        has sent us personal information, please contact us so we can delete
        it.
      </p>

      <h2>8. International visitors</h2>
      <p>
        Our service providers may process information in countries other
        than the one you live in. By using the contact form, you understand
        that your information may be processed in those countries.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will
        revise the &ldquo;Last updated&rdquo; date at the top of this page.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy can be sent to SZN Labs <ContactRoute />.
        See also our <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
