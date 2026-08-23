# 1. Update actions.ts
actions_code = """\"use server\";

export interface ContactFormState {
  status: \"idle\" | \"success\" | \"error\";
  message: string;
  fieldErrors?: Record<string, string>;
}

const EMAIL_PATTERN = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;

export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (formData.get(\"website\")) {
    return { status: \"success\", message: \"Thank you — your enquiry has been received.\" };
  }

  const name = String(formData.get(\"name\") ?? \"\").trim();
  const email = String(formData.get(\"email\") ?? \"\").trim();
  const phone = String(formData.get(\"phone\") ?? \"\").trim();
  const locality = String(formData.get(\"locality\") ?? \"\").trim();
  const projectType = String(formData.get(\"projectType\") ?? \"\").trim();
  const budget = String(formData.get(\"budget\") ?? \"\").trim();
  const message = String(formData.get(\"message\") ?? \"\").trim();

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = \"Please enter your name.\";
  if (!email) fieldErrors.email = \"Please enter your email.\";
  else if (!EMAIL_PATTERN.test(email))
    fieldErrors.email = \"That email address does not look right.\";
  if (!message) fieldErrors.message = \"Please provide a brief overview of your property or requirement.\";
  else if (message.length < 10)
    fieldErrors.message = \"A few more details will help us plan your consultation.\";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: \"error\",
      message: \"Please correct the highlighted fields.\",
      fieldErrors,
    };
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;

  if (endpoint) {
    try {
      await fetch(endpoint, {
        method: \"POST\",
        headers: { \"Content-Type\": \"application/json\" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || null,
          locality: locality || null,
          projectType: projectType || null,
          budget: budget || null,
          message,
          source: \"rma.preview.nayagrowth.com/contact\",
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error(\"[contact] delivery hook failed:\", error);
    }
  }

  return {
    status: \"success\",
    message: \"Thank you for reaching out to Radhika Mahajan Architects. Our principal architect and team will review your project details and connect with you within 24 hours.\",
  };
}
"""
with open("D:/Projects/RMA/src/app/(site)/contact/actions.ts", "w", encoding="utf-8") as f:
    f.write(actions_code)

# 2. Update ContactForm.tsx
form_code = """\"use client\";

import { useActionState } from \"react\";
import { useSearchParams } from \"next/navigation\";
import { submitContactForm, type ContactFormState } from \"./actions\";
import styles from \"./contact.module.css\";

const INITIAL_STATE: ContactFormState = { status: \"idle\", message: \"\" };

const PROJECT_TYPES = [
  \"Full Home Interior (3 BHK)\",
  \"Full Home Interior (4 BHK)\",
  \"Luxury Bungalow / Villa (Pune / Lonavala)\",
  \"Modular Kitchen & Custom Wardrobes\",
  \"Turnkey Civil Renovation\",
  \"Commercial & Workspace Architecture\",
  \"Complimentary 3D Consultation\",
  \"Other Custom Architecture\",
];

const BUDGET_RANGES = [
  \"₹15 Lakh – ₹25 Lakh\",
  \"₹25 Lakh – ₹40 Lakh\",
  \"₹40 Lakh – ₹75 Lakh\",
  \"₹75 Lakh+\",
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    INITIAL_STATE,
  );

  const searchParams = useSearchParams();
  const requestedTopic = searchParams.get(\"topic\");
  const defaultTopic =
    requestedTopic && PROJECT_TYPES.includes(requestedTopic) ? requestedTopic : \"\";

  if (state.status === \"success\") {
    return (
      <div className={styles.successPanel} role=\"status\">
        <span className={styles.successMark} aria-hidden=\"true\">✦</span>
        <h3 style={{ margin: \"0 0 0.8rem\", fontFamily: \"var(--font-family-serif)\", color: \"var(--gold)\" }}>Consultation Request Received</h3>
        <p className={styles.successText}>{state.message}</p>
        <div style={{ marginTop: \"1.5rem\" }}>
          <a
            href=\"https://wa.me/919876543210?text=Hello%20Ar.%20Radhika%20Mahajan%2C%20I%20just%20submitted%20a%20consultation%20request%20on%20your%20website.\"
            target=\"_blank\"
            rel=\"noopener noreferrer\"
            className={styles.submit}
            style={{ display: \"inline-flex\", background: \"#25D366\", color: \"#ffffff\" }}
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
      <div className={styles.honeypot} aria-hidden=\"true\">
        <label htmlFor=\"website\">Website</label>
        <input id=\"website\" name=\"website\" type=\"text\" tabIndex={-1} autoComplete=\"off\" />
      </div>

      <div className={styles.fieldRow}>
        <Field
          label=\"Your Name\"
          name=\"name\"
          required
          autoComplete=\"name\"
          placeholder=\"e.g. Anand Sharma\"
          error={state.fieldErrors?.name}
        />
        <Field
          label=\"Email Address\"
          name=\"email\"
          type=\"email\"
          required
          autoComplete=\"email\"
          placeholder=\"anand@example.com\"
          error={state.fieldErrors?.email}
        />
      </div>

      <div className={styles.fieldRow}>
        <Field
          label=\"Phone Number (for WhatsApp updates)\"
          name=\"phone\"
          type=\"tel\"
          autoComplete=\"tel\"
          placeholder=\"+91 98765 43210\"
        />
        <Field
          label=\"Property Location / Society\"
          name=\"locality\"
          placeholder=\"e.g. Kolte Patil / Bibewadi / Lonavala\"
        />
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor=\"projectType\">
            Project Scope
          </label>
          <select
            className={styles.select}
            id=\"projectType\"
            name=\"projectType\"
            defaultValue={defaultTopic}
          >
            <option value=\"\">Select Project Type</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor=\"budget\">
            Estimated Budget
          </label>
          <select className={styles.select} id=\"budget\" name=\"budget\">
            <option value=\"\">Select Range</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor=\"message\">
          Project Vision & Requirements <span className={styles.required}>*</span>
        </label>
        <textarea
          className={`${styles.textarea} ${
            state.fieldErrors?.message ? styles.inputError : \"\"
          }`}
          id=\"message\"
          name=\"message\"
          rows={5}
          placeholder=\"Tell us about your flat possession date, design preferences, or specific architectural requirements...\"
          required
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={state.fieldErrors?.message ? \"message-error\" : undefined}
        />
        {state.fieldErrors?.message ? (
          <span className={styles.errorText} id=\"message-error\">
            {state.fieldErrors.message}
          </span>
        ) : null}
      </div>

      {state.status === \"error\" && !state.fieldErrors ? (
        <p className={styles.formError} role=\"alert\">
          {state.message}
        </p>
      ) : null}

      <button className={styles.submit} type=\"submit\" disabled={pending}>
        {pending ? \"Submitting Consultation…\" : \"Book Design Consultation\"}
        <span aria-hidden=\"true\">→</span>
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

function Field({ label, name, type = \"text\", required, autoComplete, placeholder, error }: FieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label} {required ? <span className={styles.required}>*</span> : null}
      </label>
      <input
        className={`${styles.input} ${error ? styles.inputError : \"\"}`}
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
"""
with open("D:/Projects/RMA/src/app/(site)/contact/ContactForm.tsx", "w", encoding="utf-8") as f:
    f.write(form_code)

# 3. Update contact/page.tsx
page_code = """import type { Metadata } from \"next\";
import Image from \"next/image\";
import { Suspense } from \"react\";
import { socialLinks } from \"@/features/site-chrome\";
import { PageHero } from \"@/features/editorial\";
import editorial from \"@/features/editorial/editorial.module.css\";
import { ContactForm } from \"./ContactForm\";
import styles from \"./contact.module.css\";

export const metadata: Metadata = {
  title: \"Book Design Consultation — Radhika Mahajan Architects | Pune & Lonavala\",
  description:
    \"Schedule a 3D architectural consultation, site visit, or turnkey interior enquiry with Ar. Radhika Mahajan and the RMA team in Pune & Lonavala.\",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow=\"Consultation & Intake\"
        index=\"01\"
        headline=\"Start your spatial transformation\"
        body={[
          \"Whether you are taking possession of a new 3/4 BHK in Pune, designing a private retreat in Lonavala, or remodeling an existing space, we invite you to connect with our studio.\",
          \"Reserve a complimentary 3D design consultation and site visit below.\",
        ]}
      />

      <section className={editorial.section}>
        <div className={`${editorial.container} ${styles.contactGrid}`}>
          <div className={styles.formColumn}>
            <Suspense fallback={<div className={styles.formSkeleton} />}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className={styles.asideColumn}>
            <div className={styles.portraitBlock}>
              <Image
                className={styles.portrait}
                src=\"/media/projects/rma-project-a01.webp\"
                alt=\"Radhika Mahajan Architects Studio\"
                width={800}
                height={1000}
                sizes=\"(max-width: 900px) 50vw, 22rem\"
                quality={90}
              />
            </div>

            <div className={styles.asideBlock}>
              <span className={styles.asideLabel}>Direct Studio Coordinate</span>
              <p className={styles.asideText}>
                Prefer instant WhatsApp connectivity or direct discussion?
              </p>
              <a
                className={editorial.ctaSecondary}
                href=\"https://wa.me/919876543210?text=Hello%20Ar.%20Radhika%20Mahajan%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20and%20design%20consultation.\"
                target=\"_blank\"
                rel=\"noopener noreferrer\"
                style={{ display: \"inline-flex\", alignItems: \"center\", gap: \"0.5rem\" }}
              >
                <span>WhatsApp Direct</span>
                <span aria-hidden=\"true\">→</span>
              </a>
            </div>

            <div className={styles.asideBlock}>
              <span className={styles.asideLabel}>Service Coverage</span>
              <p className={styles.asideText}>
                Active site coverage across Pune (Bibewadi, Koregaon Park, Baner, Kothrud, Kolte Patil, Godrej Infinity) and Lonavala.
              </p>
            </div>

            {socialLinks.length > 0 ? (
              <div className={styles.asideBlock}>
                <span className={styles.asideLabel}>Follow the Studio</span>
                <ul className={styles.socialList}>
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        className={styles.socialLink}
                        href={social.href}
                        target=\"_blank\"
                        rel=\"noopener noreferrer\"
                      >
                        {social.label}
                        <span aria-hidden=\"true\">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className={styles.asideBlock}>
              <span className={styles.asideLabel}>Committed Turnaround</span>
              <p className={styles.asideText}>
                Every enquiry is reviewed directly by Ar. Radhika Mahajan. We respond with initial feasibility feedback within 24 hours.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
"""
with open("D:/Projects/RMA/src/app/(site)/contact/page.tsx", "w", encoding="utf-8") as f:
    f.write(page_code)

print("Updated contact page, form, and server action successfully!")
