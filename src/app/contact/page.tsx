import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a table, ask about catering, or send a message to Mallowfen Bakehouse in Ancoats.",
};

export default function ContactPage() {
  return (
    <div className="bg-hearth-50">
      <section className="border-b border-hearth-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-hearth-600">
            Contact
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-hearth-950 sm:text-4xl">
            Say hello
          </h1>
          <p className="mt-4 max-w-xl text-oak-700">
            Tables, catering, private hire, or just a question — we read every
            message. For same-day seating, calling is faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="card-surface sm:p-8">
              <h2 className="font-display text-xl font-semibold text-hearth-900">
                Send a message
              </h2>
              <p className="mt-1 text-sm text-oak-600">
                We usually reply within one working day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="card-surface">
              <p className="text-sm font-semibold uppercase tracking-wide text-hearth-600">
                Prefer to call?
              </p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-3 flex items-center gap-2 text-lg font-semibold text-hearth-900 hover:text-hearth-700"
              >
                <Phone className="h-5 w-5 text-hearth-600" />
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-oak-600">
                Best during opening hours for table availability.
              </p>
            </div>

            <div className="card-surface">
              <p className="text-sm font-semibold uppercase tracking-wide text-hearth-600">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 flex items-center gap-2 font-medium text-hearth-900 hover:text-hearth-700"
              >
                <Mail className="h-5 w-5 text-hearth-600" />
                {site.email}
              </a>
            </div>

            <div className="card-surface">
              <p className="text-sm font-semibold uppercase tracking-wide text-hearth-600">
                Find us
              </p>
              <div className="mt-3 flex gap-2 text-sm text-oak-700">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-hearth-600" />
                <span>{site.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
