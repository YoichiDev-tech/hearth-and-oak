import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Info, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hours",
  description: "Illustrative opening hours for the fictional Take 5 café concept.",
  robots: { index: false, follow: false },
};

export default function VisitPage() {
  return (
    <div className="bg-hearth-50">
      <section className="border-b border-hearth-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-hearth-600">Plan ahead</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-hearth-950 sm:text-4xl">A little time for yourself.</h1>
          <p className="mt-4 max-w-xl leading-relaxed text-oak-700">
            These sample hours help demonstrate how useful visit information
            could be presented. Take 5 is fictional, so no physical location or
            directions are published.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
        <div className="card-surface">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-100 text-hearth-700"><Clock className="h-5 w-5" /></span>
            <div>
              <h2 className="font-display text-xl font-semibold text-hearth-900">Illustrative opening hours</h2>
              <p className="mt-1 text-xs text-oak-500">Example content only — not real operating hours.</p>
            </div>
          </div>
          <ul className="mt-6 divide-y divide-hearth-100">
            {site.hours.map((hour) => (
              <li key={hour.day} className="flex items-center justify-between gap-4 py-3 text-sm first:pt-0 last:pb-0">
                <span className="text-oak-700">{hour.day}</span>
                <span className="font-semibold tabular-nums text-hearth-900">{hour.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-8 rounded-2xl bg-hearth-200/70 p-6 sm:p-8">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-hearth-700"><Info className="h-5 w-5" /></span>
            <h2 className="mt-5 font-display text-xl font-semibold text-hearth-950">A demo, not a destination</h2>
            <p className="mt-3 text-sm leading-relaxed text-oak-700">
              No address, map pin, phone number or live booking service is
              attached to this concept. This is intentional: the demo should
              never send visitors to an invented place.
            </p>
          </div>
          <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-hearth-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-hearth-800">
            <MessageCircle className="h-4 w-4" /> Open contact demo
          </Link>
        </div>
      </section>
    </div>
  );
}
