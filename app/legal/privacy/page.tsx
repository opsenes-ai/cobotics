import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Opsenes",
  description: "How Opsenes collects, uses and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> November 13, 2026
      </p>

      <p>
        This Privacy Policy explains how Opsenes (&ldquo;Opsenes&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, shares and
        protects personal data when you use opsenes.com and related services
        (the &ldquo;Service&rdquo;). Opsenes is the data controller (or
        &ldquo;data fiduciary&rdquo;) for the personal data described here.
      </p>

      <h2>1. Data we collect</h2>
      <h3>Data you provide</h3>
      <ul>
        <li>
          <strong>Account data:</strong> name, email address and password
          (stored only as a salted hash).
        </li>
        <li>
          <strong>Communications:</strong> messages you send us, such as
          support requests.
        </li>
        <li>
          <strong>Content:</strong> information you submit while using the
          Service.
        </li>
      </ul>
      <h3>Data collected automatically</h3>
      <ul>
        <li>
          <strong>Device and usage data:</strong> IP address, browser type,
          operating system, pages viewed, referring URL and timestamps.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> described in our{" "}
          <Link href="/legal/cookies">Cookie Policy</Link>.
        </li>
      </ul>
      <p>We do not knowingly collect sensitive personal data.</p>

      <h2>2. How we use data and our legal bases</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Provide, maintain and secure the Service and your account</td>
            <td>Performance of a contract; legitimate interests</td>
          </tr>
          <tr>
            <td>Authenticate users and prevent fraud and abuse</td>
            <td>Legitimate interests; legal obligation</td>
          </tr>
          <tr>
            <td>Respond to support and other requests</td>
            <td>Performance of a contract; legitimate interests</td>
          </tr>
          <tr>
            <td>Understand usage and improve the Service</td>
            <td>Legitimate interests; consent where required</td>
          </tr>
          <tr>
            <td>Send service and security notices</td>
            <td>Performance of a contract; legal obligation</td>
          </tr>
          <tr>
            <td>Comply with legal obligations and enforce our terms</td>
            <td>Legal obligation; legitimate interests</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do not sell your personal data and we do not use it for
        cross-context behavioral advertising.
      </p>

      <h2>3. How we share data</h2>
      <ul>
        <li>
          <strong>Service providers</strong> that process data on our behalf
          under contract, such as hosting, infrastructure, email delivery and
          analytics providers.
        </li>
        <li>
          <strong>Legal and safety:</strong> when required by law or to
          protect rights, safety and security.
        </li>
        <li>
          <strong>Business transfers:</strong> in connection with a merger,
          acquisition or sale of assets, subject to this policy.
        </li>
        <li>
          <strong>With your direction or consent.</strong>
        </li>
      </ul>

      <h2>4. International transfers</h2>
      <p>
        Your data may be processed in countries other than your own. Where we
        transfer personal data across borders, we rely on appropriate
        safeguards such as contractual protections, as required by applicable
        law.
      </p>

      <h2>5. Retention</h2>
      <p>
        We keep personal data only as long as needed for the purposes above.
        Account data is kept while your account is active and deleted or
        anonymized within a reasonable period after closure, unless we must
        retain it to meet legal, tax or security obligations or to resolve
        disputes.
      </p>

      <h2>6. Security</h2>
      <p>
        We use technical and organizational measures such as encryption in
        transit, access controls and password hashing. No system is
        perfectly secure. If a breach affects your data, we will notify you
        and the relevant authorities as required by law.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access,
        correct, update or delete your personal data; to object to or
        restrict processing; to withdraw consent; to data portability; and to
        nominate another person to exercise rights on your behalf. You may
        also complain to your local data protection authority. To exercise
        these rights, email{" "}
        <a href="mailto:privacy@opsenes.in">privacy@opsenes.in</a>. We may
        need to verify your identity and will respond within the time
        required by law.
      </p>

      <h2>8. Children</h2>
      <p>
        The Service is not directed to children under 18 and we do not
        knowingly collect their personal data. If you believe a child has
        provided us data, contact us and we will delete it.
      </p>

      <h2>9. Third-party links</h2>
      <p>
        The Service may link to third-party sites. We are not responsible for
        their privacy practices.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy. We will change the &ldquo;Last
        updated&rdquo; date and, for material changes, provide additional
        notice.
      </p>

      <h2>11. Contact</h2>
      <p>
        Privacy questions or requests:{" "}
        <a href="mailto:privacy@opsenes.in">privacy@opsenes.in</a>.
      </p>
    </>
  );
}
