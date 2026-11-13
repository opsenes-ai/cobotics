import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Opsenes",
  description: "The terms that govern your use of Opsenes.",
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p>
        <strong>Last updated:</strong> November 13, 2026
      </p>

      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the website at opsenes.com and any related services
        (together, the &ldquo;Service&rdquo;) provided by Opsenes
        (&ldquo;Opsenes&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
        accessing or using the Service you agree to these Terms. If you do not
        agree, do not use the Service.
      </p>

      <h2>1. Eligibility and accounts</h2>
      <p>
        You must be at least 18 years old, or the age of majority in your
        jurisdiction, to use the Service. If you use the Service on behalf of
        an organization, you confirm that you have authority to bind that
        organization to these Terms.
      </p>
      <p>
        You are responsible for the accuracy of the information you provide,
        for keeping your credentials confidential, and for all activity under
        your account. Notify us promptly at{" "}
        <a href="mailto:support@opsenes.in">support@opsenes.in</a> if you
        suspect unauthorized access.
      </p>

      <h2>2. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>violate any applicable law or regulation;</li>
        <li>
          infringe the intellectual property, privacy or other rights of any
          person;
        </li>
        <li>
          probe, scan or test the vulnerability of the Service, or bypass
          security or access controls, without our written permission;
        </li>
        <li>
          interfere with or disrupt the Service, including by introducing
          malware or placing excessive load on our systems;
        </li>
        <li>
          access the Service by automated means (such as scraping) except as
          we expressly allow;
        </li>
        <li>
          reverse engineer or attempt to extract source code from the Service,
          except where the law permits it despite this restriction; or
        </li>
        <li>
          use the Service to build a competing product or to resell access
          without our written consent.
        </li>
      </ul>

      <h2>3. Your content</h2>
      <p>
        You retain ownership of the content and data you submit to the
        Service (&ldquo;Your Content&rdquo;). You grant Opsenes a worldwide,
        non-exclusive, royalty-free license to host, store, process and
        display Your Content solely as needed to operate, secure and improve
        the Service and to provide it to you. You are responsible for Your
        Content and for having the rights needed to submit it.
      </p>

      <h2>4. Our intellectual property</h2>
      <p>
        The Service, including its software, design, text, graphics and
        trademarks, is owned by Opsenes or its licensors and is protected by
        intellectual property laws. Subject to these Terms, we grant you a
        limited, non-exclusive, non-transferable, revocable right to use the
        Service for its intended purpose. No other rights are granted.
      </p>

      <h2>5. Feedback</h2>
      <p>
        If you send us suggestions or feedback, we may use them without
        restriction or obligation to you.
      </p>

      <h2>6. Third-party services</h2>
      <p>
        The Service may link to or integrate with third-party services. We do
        not control and are not responsible for those services, and your use
        of them is subject to their own terms and policies.
      </p>

      <h2>7. Fees</h2>
      <p>
        If any part of the Service is offered for a fee, the applicable price
        and billing terms will be presented to you before you purchase. Fees
        are non-refundable except where required by law or stated otherwise
        at the time of purchase.
      </p>

      <h2>8. Suspension and termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or
        terminate your access immediately if you breach these Terms, if
        required by law, or if your use poses a security or legal risk to us
        or others. Provisions that by their nature should survive termination
        (including sections 3&ndash;5, 9&ndash;12) will survive.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo;. To the maximum extent permitted by law, Opsenes
        disclaims all warranties, express or implied, including
        merchantability, fitness for a particular purpose, and
        non-infringement. We do not warrant that the Service will be
        uninterrupted, error-free or secure.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Opsenes and its directors,
        employees and affiliates will not be liable for any indirect,
        incidental, special, consequential or punitive damages, or any loss of
        profits, revenue, data or goodwill, arising out of or related to your
        use of the Service. Our total aggregate liability for any claim
        relating to the Service will not exceed the greater of the amount you
        paid us in the twelve months before the claim arose or USD 100.
        Nothing in these Terms excludes liability that cannot be excluded
        under applicable law.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Opsenes from claims, losses
        and expenses (including reasonable legal fees) arising from your
        breach of these Terms or your misuse of the Service.
      </p>

      <h2>12. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of India, without regard to
        conflict-of-law principles. The courts located in India have
        exclusive jurisdiction over any dispute arising from these Terms or
        the Service, subject to any mandatory consumer protections that apply
        to you.
      </p>

      <h2>13. Changes to the Service and these Terms</h2>
      <p>
        We may modify the Service and update these Terms from time to time. If
        a change is material, we will give reasonable notice, for example by
        posting on this page or emailing you. Your continued use after the
        effective date means you accept the updated Terms.
      </p>

      <h2>14. General</h2>
      <p>
        These Terms are the entire agreement between you and Opsenes about the
        Service. If any provision is held unenforceable, the rest remains in
        effect. Our failure to enforce a provision is not a waiver. You may
        not assign these Terms without our consent; we may assign them in
        connection with a merger, acquisition or sale of assets.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:legal@opsenes.in">legal@opsenes.in</a>.
      </p>
    </>
  );
}
