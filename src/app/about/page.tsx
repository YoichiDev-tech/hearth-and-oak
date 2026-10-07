import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "How Hearth & Oak started, who we are, and why we still bake everything on site in Ancoats.",
};

// About page — I write in the café’s voice so the page feels owned by
// the business, not by a web agency.

export default function AboutPage() {
  return (
    <div className="bg-hearth-50">
      <section className="border-b border-hearth-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-hearth-600">
            Our story
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-hearth-950 sm:text-4xl">
            A small room on Blossom Street
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-oak-800">
            <p>
              Hearth & Oak opened in 2022 with two people, a second-hand oven,
              and a very long list of things we refused to cut corners on.
              Coffee, bread, and the way people are treated when they walk in.
            </p>
            <p>
              We are still independent. No investors, no franchise playbook. The
              team lives nearby, the milk comes from a dairy a short drive away,
              and the sourdough starter has been fed every day since we started.
            </p>
            <p>
              The room is simple: wooden tables, big windows, and enough sockets
              for a laptop if you need one in the morning. After 11 we prefer the
              space for conversation and lunch, not for meetings that never end.
            </p>
            <p>
              If you are looking for a quiet table, a cinnamon bun, or somewhere
              that still feels like a neighbourhood place — you are welcome.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-hearth-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-hearth-800"
            >
              See what we serve
            </Link>
            <Link
              href="/visit"
              className="rounded-full border border-hearth-300 bg-white px-5 py-2.5 text-sm font-semibold text-hearth-800 transition hover:bg-hearth-50"
            >
              Visit us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="card-surface">
            <p className="text-3xl font-bold text-hearth-700">2022</p>
            <p className="mt-2 text-sm font-medium text-hearth-900">Opened</p>
            <p className="mt-1 text-sm text-oak-600">
              First service on a wet Tuesday in March. We sold out of bread by
              11.
            </p>
          </div>
          <div className="card-surface">
            <p className="text-3xl font-bold text-hearth-700">8</p>
            <p className="mt-2 text-sm font-medium text-hearth-900">Team</p>
            <p className="mt-1 text-sm text-oak-600">
              Baristas, bakers, and front of house who know regulars by name.
            </p>
          </div>
          <div className="card-surface">
            <p className="text-3xl font-bold text-hearth-700">1</p>
            <p className="mt-2 text-sm font-medium text-hearth-900">Kitchen</p>
            <p className="mt-1 text-sm text-oak-600">
              Everything is still baked and prepped in the same small room out
              back.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-oak-600">
          Questions about catering or private hire?{" "}
          <Link href="/contact" className="font-medium text-hearth-700 underline underline-offset-2">
            Get in touch
          </Link>{" "}
          or call {site.phone}.
        </p>
      </section>
    </div>
  );
}
