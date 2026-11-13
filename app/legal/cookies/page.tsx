import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Opsenes",
  description: "How Opsenes uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p>
        <strong>Last updated:</strong> November 13, 2026
      </p>

      <p>
        This Cookie Policy explains how Opsenes uses cookies and similar
        technologies on opsenes.com. It should be read with our{" "}
        <Link href="/legal/privacy">Privacy Policy</Link>.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device by your browser.
        They let a site recognize your device, remember settings and keep you
        signed in. Similar technologies include local storage and session
        storage.
      </p>

      <h2>2. Categories we use</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>Consent required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictly necessary</td>
            <td>
              Sign-in and session management, security, load balancing and
              remembering your cookie choices. The Service cannot work
              properly without them.
            </td>
            <td>No</td>
          </tr>
          <tr>
            <td>Preferences</td>
            <td>
              Remember settings such as theme or language to personalize your
              experience.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>
              Help us understand how the Service is used so we can improve it.
              Data is used in aggregate.
            </td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <p>We do not use advertising or cross-site tracking cookies.</p>

      <h2>3. Third-party cookies</h2>
      <p>
        Some cookies may be set by service providers acting on our behalf,
        such as analytics providers. They may only process data for the
        purposes we specify.
      </p>

      <h2>4. Managing cookies</h2>
      <p>
        Where consent is required, we will ask before setting non-essential
        cookies, and you can change your choice at any time. You can also
        block or delete cookies through your browser settings. Blocking
        strictly necessary cookies may stop parts of the Service, such as
        signing in, from working.
      </p>

      <h2>5. Retention</h2>
      <p>
        Session cookies are deleted when you close your browser. Persistent
        cookies remain for a limited period, generally no longer than 12
        months, unless you delete them sooner.
      </p>

      <h2>6. Changes</h2>
      <p>
        We may update this policy as our use of cookies changes. The
        &ldquo;Last updated&rdquo; date above shows the latest revision.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about cookies:{" "}
        <a href="mailto:privacy@opsenes.in">privacy@opsenes.in</a>.
      </p>
    </>
  );
}
