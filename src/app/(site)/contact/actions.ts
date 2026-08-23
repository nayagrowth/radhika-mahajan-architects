"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (formData.get("website")) {
    return { status: "success", message: "Thank you — your enquiry has been received." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const locality = String(formData.get("locality") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(email))
    fieldErrors.email = "That email address does not look right.";
  if (!message) fieldErrors.message = "Please provide a brief overview of your property or requirement.";
  else if (message.length < 10)
    fieldErrors.message = "A few more details will help us plan your consultation.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;

  if (endpoint) {
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || null,
          locality: locality || null,
          projectType: projectType || null,
          budget: budget || null,
          message,
          source: "rma.preview.nayagrowth.com/contact",
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("[contact] delivery hook failed:", error);
    }
  }

  return {
    status: "success",
    message: "Thank you for reaching out to Radhika Mahajan Architects. Our principal architect and team will review your project details and connect with you within 24 hours.",
  };
}
