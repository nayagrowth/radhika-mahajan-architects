"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm, type ContactFormState } from "./actions";
import styles from "./contact.module.css";

const INITIAL_STATE: ContactFormState = { status: "idle", message: "" };

const PROJECT_TYPES = [
  "Full Home Interior (3 BHK)",
  "Full Home Interior (4 BHK)",
  "Luxury Bungalow / Villa (Pune / Lonavala)",
  "Modular Kitchen & Custom Wardrobes",
  "Turnkey Civil Renovation",
  "Commercial & Workspace Architecture",
  "Complimentary 3D Consultation",
  "Other Custom Architecture",
];

const BUDGET_RANGES = [
  "₹15 Lakh – ₹25 Lakh",
  "₹25 Lakh – ₹40 Lakh",
  "₹40 Lakh – ₹75 Lakh",
  "₹75 Lakh+",
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    INITIAL_STATE,
  );

  const searchParams = useSearchParams();
  const requestedTopic = searchParams.get("topic");
  const defaultTopic =
    requestedTopic && PROJECT_TYPES.includes(requestedTopic) ? requestedTopic : "";

  if (state.status === "success") {
    return (
      <div className={styles.successPanel} role="status">
        <span className={styles.successMark} aria-hidden="true">✦</span>
        <h3 style={{ margin: "0 0 0.8rem", fontFamily: "var(--font-family-serif)", color: "var(--gold)" }}>Consultation Request Received</h3>
        <p className={styles.successText}>{state.message}</p>
        <div style={{ marginTop: "1.5rem" }}>
          <a
            href="https://wa.me/919876543210?text=Hello%20Ar.%20Radhika%20Mahajan%2C%20I%20just%20submitted%20a%20consultation%20request%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.submit}
            style={{ display: "inline-flex", background: "#25D366", color: "#ffffff" }}
          >
            Direct WhatsApp Connect →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} action={formAction} noValidate>
      {/* Honeypot */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.fieldRow}>
        <Field
          label="Your Name"
          name="name"
          required
          autoComplete="name"
          placeholder="e.g. Anand Sharma"
          error={state.fieldErrors?.name}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="anand@example.com"
          error={state.fieldErrors?.email}
        />
      </div>

      <div className={styles.fieldRow}>
        <Field
          label="Phone Number (for WhatsApp updates)"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
        />
        <Field
          label="Property Location / Society"
          name="locality"
          placeholder="e.g. Kolte Patil / Bibewadi / Lonavala"
        />
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="projectType">
            Project Scope
          </label>
          <select
            className={styles.select}
            id="projectType"
            name="projectType"
            defaultValue={defaultTopic}
          >
            <option value="">Select Project Type</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="budget">
            Estimated Budget
          </label>
          <select className={styles.select} id="budget" name="budget">
            <option value="">Select Range</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Project Vision & Requirements <span className={styles.required}>*</span>
        </label>
        <textarea
          className={`${styles.textarea} ${
            state.fieldErrors?.message ? styles.inputError : ""
          }`}
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your flat possession date, design preferences, or specific architectural requirements..."
          required
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
        />
        {state.fieldErrors?.message ? (
          <span className={styles.errorText} id="message-error">
            {state.fieldErrors.message}
          </span>
        ) : null}
      </div>

      {state.status === "error" && !state.fieldErrors ? (
        <p className={styles.formError} role="alert">
          {state.message}
        </p>
      ) : null}

      <button className={styles.submit} type="submit" disabled={pending}>
        {pending ? "Submitting Consultation…" : "Book Design Consultation"}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
}

function Field({ label, name, type = "text", required, autoComplete, placeholder, error }: FieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label} {required ? <span className={styles.required}>*</span> : null}
      </label>
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <span className={styles.errorText} id={`${name}-error`}>
          {error}
        </span>
      ) : null}
    </div>
  );
}
