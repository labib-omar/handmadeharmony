import React from "react";
import "./Css/PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>

      <div className="policy-hr"></div>

      <p>
        <strong>Last updated:</strong> 01.12.2025
      </p>
      <p>
        This privacy policy explains how we (H.H Handmade Harmony) collect, use,
        and protect your personal data when you visit and interact with our
        website.
      </p>

      <hr />

      <h2>1. Responsible Entity</h2>

      <p>
        H.H Handmade Harmony
        <br />
        Lindenstraße 12, 30159 Hannover, Germany
        <br />
        <strong>Email</strong>: contact@hh-handmadeharmony.com
      </p>

      <hr />

      <h2>2. General Notes</h2>

      <p>
        We take the protection of your personal data seriously. We handle your
        data in accordance with legal data protection regulations (such as the
        GDPR) and this privacy policy. Personal data is only collected when
        necessary, and we never sell or pass your data on without your consent.
      </p>

      <hr />

      <h2>3. Data Collection on This Website</h2>

      <h3>a. Server Log Files</h3>
      <p>
        When you visit our website, your browser automatically transmits data
        such as:
      </p>
      <ul>
        <li>Referrer URL</li>
        <li>Operating system</li>
        <li>Browser type/version</li>
        <li>Time of server request</li>
        <li>Host name of accessing computer</li>
      </ul>

      <h3>b. Contact Form</h3>
      <p>
        If you contact us using the contact form, your entries (including
        contact details) will be stored for the purpose of processing the
        request and for follow-up questions. We do not share this information
        without your permission.
      </p>

      <hr />

      <h2>4. Cookies</h2>

      <p>
        Our website uses cookies to provide a user-friendly experience. Cookies
        are small text files stored on your device that help us improve
        usability and load times.
      </p>

      <hr />

      <h2>5. Your Rights</h2>

      <ul>
        <li>Request access to your stored data</li>
        <li>Request correction or deletion of your data</li>
        <li>Withdraw consent for data processing at any time</li>
        <li>Lodge a complaint with the relevant data protection authority</li>
      </ul>

      <hr />

      <h2>6. Third Party Services</h2>

      <p>
        If we use tools such as Google Analytics or social media plugins, these
        services may collect anonymized usage data.
      </p>

      <hr />

      <h2>7. Data Security</h2>

      <p>
        We take technical and organizational measures to protect your data from
        unauthorized access, loss, or misuse.
      </p>

      <div className="policy-copyright">
        <hr style={{ marginTop: "60px" }} />

        <p>Copyright @ 2025 - All Right Reserved (H.H Handmade Harmony) </p>

        <hr style={{ width: "40%" }} />

        <p>Powered by H.H Handmade Harmony</p>
      </div>
    </div>
  );
}
