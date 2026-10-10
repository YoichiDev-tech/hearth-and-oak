"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// Client-side validation keeps the experience smooth without exposing the
// Supabase key in the browser. We still validate on the API route too.
type Status = "idle" | "loading" | "success" | "error";
type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "table",
  message: "",
};

function getInputClasses(hasError: boolean) {
  return [
    "mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-hearth-950 shadow-sm placeholder:text-oak-400 focus:outline-none focus:ring-1",
    hasError
      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
      : "border-hearth-200 focus:border-hearth-500 focus:ring-hearth-500",
  ].join(" ");
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  function validateField(name: keyof FormValues, value: string): string | undefined {
    switch (name) {
      case "name":
        return value.trim().length >= 2 ? undefined : "Please enter your name.";
      case "email": {
        if (!value.trim()) return "Please enter your email address.";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? undefined
          : "Please enter a valid email address.";
      }
      case "phone":
        return value.trim() && value.trim().length < 7
          ? "Please enter a valid phone number or leave it blank."
          : undefined;
      case "subject":
        return value.trim() ? undefined : "Please select the reason for your message.";
      case "message":
        return value.trim().length >= 10
          ? undefined
          : "Please add a few more details so we can help.";
      default:
        return undefined;
    }
  }

  function validateForm(values: FormValues) {
    const nextErrors: FormErrors = {};

    (Object.keys(values) as Array<keyof FormValues>).forEach((field) => {
      const message = validateField(field, values[field]);
      if (message) {
        nextErrors[field] = message;
      }
    });

    setFormErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    const fieldName = name as keyof FormValues;
    const nextValues = { ...formValues, [fieldName]: value };

    setFormValues(nextValues);
    setStatus("idle");
    setErrorMessage("");

    if (formErrors[fieldName]) {
      const nextValidationMessage = validateField(fieldName, value);
      setFormErrors((prev) => ({
        ...prev,
        [fieldName]: nextValidationMessage,
      }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm(formValues)) {
      setStatus("error");
      setErrorMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formValues,
          phone: formValues.phone.trim() || undefined,
          website: formData.get("website"),
          source: "website-contact",
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormValues(initialValues);
      setFormErrors({});
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Unable to send. Please call us instead."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface-soft p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-hearth-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-hearth-900">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-oak-700">
          Thanks — we usually reply within one working day. For same-day tables,
          give us a call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-hearth-700 underline underline-offset-2 hover:text-hearth-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-live="polite">
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-oak-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formValues.name}
            onChange={handleChange}
            aria-invalid={Boolean(formErrors.name)}
            aria-describedby={formErrors.name ? "name-error" : undefined}
            className={getInputClasses(Boolean(formErrors.name))}
            placeholder="Your name"
          />
          {formErrors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {formErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-oak-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            aria-invalid={Boolean(formErrors.email)}
            aria-describedby={formErrors.email ? "email-error" : undefined}
            className={getInputClasses(Boolean(formErrors.email))}
            placeholder="you@example.com"
          />
          {formErrors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {formErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-oak-800">
            Phone <span className="font-normal text-oak-500">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formValues.phone}
            onChange={handleChange}
            aria-invalid={Boolean(formErrors.phone)}
            aria-describedby={formErrors.phone ? "phone-error" : undefined}
            className={getInputClasses(Boolean(formErrors.phone))}
            placeholder="07xxx xxxxxx"
          />
          {formErrors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-oak-800">
            What is this about?
          </label>
          <select
            id="subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            aria-invalid={Boolean(formErrors.subject)}
            aria-describedby={formErrors.subject ? "subject-error" : undefined}
            className={
              getInputClasses(Boolean(formErrors.subject)) +
              " appearance-none pr-11"
            }
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5.5 7.5L10 12l4.5-4.5' stroke='%23513d2d' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              backgroundPosition: "right 0.9rem center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <option value="table">Book a table</option>
            <option value="catering">Catering enquiry</option>
            <option value="events">Private hire / events</option>
            <option value="feedback">Feedback</option>
            <option value="other">Something else</option>
          </select>
          {formErrors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs text-red-600">
              {formErrors.subject}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-oak-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formValues.message}
          onChange={handleChange}
          aria-invalid={Boolean(formErrors.message)}
          aria-describedby={formErrors.message ? "message-error" : undefined}
          className={getInputClasses(Boolean(formErrors.message))}
          placeholder="Date, time, party size, or any other details..."
        />
        {formErrors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {formErrors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-hearth-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-hearth-800 focus:outline-none focus:ring-2 focus:ring-hearth-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
