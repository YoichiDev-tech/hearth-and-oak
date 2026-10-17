import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Try the Take 5 enquiry form in this fictional Site Rescue demonstration.",
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return (
    <div className="bg-hearth-50">
      <section className="border-b border-hearth-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-hearth-600">Contact</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-hearth-950 sm:text-4xl">Let’s talk.</h1>
          <p className="mt-4 max-w-xl leading-relaxed text-oak-700">
            This form demonstrates the enquiry experience a small business site
            can provide. It will only send messages when the server-side
            connection has been configured.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-3">
          <div className="card-surface sm:p-8">
            <h2 className="font-display text-xl font-semibold text-hearth-900">Send a demo enquiry</h2>
            <p className="mt-1 text-sm text-oak-600">Please do not submit sensitive or personal information.</p>
            <div className="mt-6"><ContactForm /></div>
          </div>
        </div>
        <aside className="space-y-5 lg:col-span-2">
          <div className="card-surface">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-100 text-hearth-700"><ShieldCheck className="h-5 w-5" /></span>
            <h2 className="mt-4 font-display text-lg font-semibold text-hearth-900">Clear expectations</h2>
            <p className="mt-2 text-sm leading-relaxed text-oak-700">Take 5 is a fictional concept. There is no real café, address, phone line or booking desk behind this demo.</p>
          </div>
          <div className="card-surface">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-100 text-hearth-700"><Mail className="h-5 w-5" /></span>
            <h2 className="mt-4 font-display text-lg font-semibold text-hearth-900">For a real project</h2>
            <p className="mt-2 text-sm leading-relaxed text-oak-700">This demonstration was created by PrismWave Studio to show how an existing website can be reviewed, improved and made easier to use.</p>
            <a href="https://prismwave-studio.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-hearth-700 underline underline-offset-4 hover:text-hearth-900">Visit PrismWave Studio</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
