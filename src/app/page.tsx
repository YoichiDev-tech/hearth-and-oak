import Link from "next/link";
import { Coffee, Croissant, Leaf, MapPin, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

// Home page — I keep the hero short and the next step obvious so a
// first-time visitor can decide in under 10 seconds whether to visit.

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hearth-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-hearth-600">
              {site.location}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-hearth-950 sm:text-5xl">
              Coffee, pastry,
              <br />
              and a quiet corner
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-oak-700 sm:text-lg">
              We are a small independent café and bakery in Ancoats. Fresh bread
              every morning, proper espresso, and tables you can stay at as long
              as you like.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-hearth-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-hearth-800"
              >
                See the menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 rounded-full border border-hearth-300 bg-white px-5 py-2.5 text-sm font-semibold text-hearth-800 transition hover:bg-hearth-50"
              >
                <MapPin className="h-4 w-4" />
                Find us
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-hearth-300 via-hearth-500 to-oak-700 shadow-xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-hearth-50">
              <Coffee className="h-14 w-14 opacity-90" />
              <p className="mt-4 font-display text-2xl font-bold">Open today</p>
              <p className="mt-1 text-sm text-hearth-100">7:30 – 16:00</p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-hearth-100/90">
                Walk-ins welcome. Book a table for groups of 6 or more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hearth-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-hearth-950 sm:text-3xl">
              What we care about
            </h2>
            <p className="mt-3 text-oak-700">
              No gimmicks. Just good ingredients, a steady team, and a room that
              feels like it belongs to the neighbourhood.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="card-surface-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-200 text-hearth-800">
                <Coffee className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-hearth-900">
                Coffee first
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-oak-700">
                Single-origin and house blends, dialled in every morning. Flat
                whites, filters, and a strong black if that is your thing.
              </p>
            </div>
            <div className="card-surface-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-200 text-hearth-800">
                <Croissant className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-hearth-900">
                Baked on site
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-oak-700">
                Sourdough, seasonal tarts, and the sticky cinnamon buns people
                queue for. We bake through the morning so it stays fresh.
              </p>
            </div>
            <div className="card-surface-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hearth-200 text-hearth-800">
                <Leaf className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-hearth-900">
                Local where we can
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-oak-700">
                Milk from a nearby dairy, eggs from Lancashire, and produce that
                changes with the season. We keep the menu honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-hearth-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-hearth-950 sm:text-3xl">
            Come and sit for a while
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-oak-700">
            We are open seven days. Laptops are fine until 11. Dogs are welcome
            on a lead. Groups of six or more — drop us a message first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-hearth-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-hearth-800"
            >
              Book a table
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-hearth-300 bg-white px-6 py-2.5 text-sm font-semibold text-hearth-800 transition hover:bg-hearth-50"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
