import Link from "next/link";
import { ArrowRight, Coffee, Croissant, Leaf, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hearth-100">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-hearth-300/40 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-hearth-300 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-hearth-700">
              <Sparkles className="h-3.5 w-3.5" />
              {site.demoNotice}
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-hearth-950 sm:text-5xl lg:text-6xl">
              Take a breath.
              <br />
              <span className="text-hearth-700">Take 5.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-oak-700 sm:text-lg">
              Good coffee, something freshly baked, and a little room in the day
              that belongs to you. Take 5 is a fictional café concept created to
              demonstrate a thoughtful website rescue by PrismWave Studio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-hearth-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-hearth-800 focus-visible:outline-offset-4"
              >
                Explore the menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-hearth-300 bg-white px-5 py-2.5 text-sm font-semibold text-hearth-800 transition hover:bg-hearth-50"
              >
                Our story
              </Link>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-oak-600">
              Demo content only. Take 5 is not a real venue and has no public
              address or live booking service.
            </p>
          </div>

          <div className="relative mx-auto flex aspect-[4/3] w-full max-w-xl items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-hearth-300 via-hearth-500 to-oak-800 p-8 shadow-xl sm:p-12">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full border border-white/25" />
            <div className="absolute -bottom-14 -right-10 h-56 w-56 rounded-full border border-white/20" />
            <div className="relative max-w-sm text-center text-white">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/25 bg-white/10 backdrop-blur">
                <Coffee className="h-10 w-10" aria-hidden="true" />
              </div>
              <p className="mt-6 font-display text-3xl font-bold sm:text-4xl">
                Your little pause
              </p>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/85">
                Warm cups. Fresh bakes. No rush.
              </p>
              <div className="mt-7 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/75">
                <span className="h-px w-8 bg-white/50" />
                Make room for good
                <span className="h-px w-8 bg-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hearth-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-hearth-600">The little things</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-hearth-950 sm:text-3xl">
              Simple things, done with care.
            </h2>
            <p className="mt-3 leading-relaxed text-oak-700">
              The concept is built around an easy, welcoming experience — online
              and in the imagined café.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="card-surface-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-200 text-hearth-800">
                <Coffee className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-hearth-900">Coffee worth slowing down for</h3>
              <p className="mt-2 text-sm leading-relaxed text-oak-700">Espresso classics and comforting favourites, prepared with care.</p>
            </article>
            <article className="card-surface-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-200 text-hearth-800">
                <Croissant className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-hearth-900">A little something fresh</h3>
              <p className="mt-2 text-sm leading-relaxed text-oak-700">A bakery-inspired menu of pastries, warm bread and easy lunches.</p>
            </article>
            <article className="card-surface-soft sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-200 text-hearth-800">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-hearth-900">Room to reset</h3>
              <p className="mt-2 text-sm leading-relaxed text-oak-700">A warm, uncluttered space designed to make a short break feel good.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-hearth-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl bg-oak-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-hearth-300">Make it a moment</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">A good break starts with a good choice.</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-oak-200 sm:text-base">
                Browse the illustrative menu or send a test enquiry. The contact
                form requires configuration before it can receive real messages.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/menu" className="inline-flex min-h-11 items-center justify-center rounded-full bg-hearth-200 px-5 py-2.5 text-sm font-semibold text-hearth-950 transition hover:bg-hearth-100">View menu</Link>
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">Contact demo</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
