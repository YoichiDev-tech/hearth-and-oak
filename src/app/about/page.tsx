import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story",
  description: "The thinking behind Take 5, a fictional Site Rescue demonstration by PrismWave Studio.",
  robots: { index: false, follow: false },
};

export default function AboutPage() {
  return (
    <div className="bg-hearth-50">
      <section className="border-b border-hearth-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-hearth-600">
            <Sparkles className="h-4 w-4" /> The concept
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-hearth-950 sm:text-4xl">
            A little room to reset.
          </h1>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-oak-800">
            <p>
              Take 5 is a fictional café brand created by PrismWave Studio as a
              Site Rescue demonstration. It is not a real business, and its menu,
              sample hours and brand story are illustrative.
            </p>
            <p>
              The design direction is warm, calm and straightforward: clear
              information, confident typography, thoughtful interactions and
              an experience that adapts to the screen in front of you.
            </p>
            <p>
              The point of this project is to show how an existing website can
              be improved with practical UI/UX decisions and careful
              implementation — without sending visitors to an invented address
              or implying that a fictional business is live.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/menu" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-hearth-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-hearth-800">
              Explore the menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-full border border-hearth-300 bg-white px-5 py-2.5 text-sm font-semibold text-hearth-800 transition hover:bg-hearth-50">
              Try the contact demo
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="card-surface">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-100 text-hearth-700"><MonitorSmartphone className="h-5 w-5" /></span>
            <h2 className="mt-4 font-display text-lg font-semibold text-hearth-900">Responsive by design</h2>
            <p className="mt-2 text-sm leading-relaxed text-oak-700">Layouts, navigation and calls to action are designed to work comfortably on mobile, tablet and desktop.</p>
          </article>
          <article className="card-surface">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-100 text-hearth-700"><CheckCircle2 className="h-5 w-5" /></span>
            <h2 className="mt-4 font-display text-lg font-semibold text-hearth-900">Clear expectations</h2>
            <p className="mt-2 text-sm leading-relaxed text-oak-700">Illustrative content is labelled as such, and fake location details have been deliberately removed.</p>
          </article>
          <article className="card-surface">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-100 text-hearth-700"><Sparkles className="h-5 w-5" /></span>
            <h2 className="mt-4 font-display text-lg font-semibold text-hearth-900">Built with intent</h2>
            <p className="mt-2 text-sm leading-relaxed text-oak-700">The goal is a polished, maintainable site with accessible patterns rather than decorative complexity.</p>
          </article>
        </div>
        <p className="mt-10 text-center text-sm text-oak-600">
          Created for demonstration by <a href="https://prismwave-studio.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-hearth-700 underline underline-offset-4 hover:text-hearth-900">PrismWave Studio</a>.
        </p>
      </section>
    </div>
  );
}
