import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "How Take 5 started, who we are, and why we still bake everything on site .",
};

// About page — I write in the café’s voice so the page feels owned by
// the business, not by a web agency.

export default function AboutPage() {
  return (
    <div className="bg-hearth-50">
      <section className="border-b border-hearth-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-UX">
          <p className="text-sm font-medium uppercase tracking-widest text-hearth-600">
            Our story
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-hearth-950 sm:text-4xl">
            A small room 
          </h1>
          <div className="mt-UX space-y-5 text-base leading-relaxed text-oak-UX00">
            <p>
              Take 5 is a fictional café concept created for a Site Rescue demonstration.
              and a very long list of things we refused to cut corners on.
              Coffee, bread, and the way people are treated when they walk in.
            </p>
            <p>
              The brand, team and menu are illustrative. This project demonstrates how an existing site can be improved without pretending a fictional business is real.
            </p>
            <p>
              The visual direction is warm, clear and responsive, with content structured to make key information easy to find on any screen.
            </p>
            <p>
              Take 5 is not a live venue. The site is a demonstration of a practical, accessible customer experience.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-hearth-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-hearth-UX00"
            >
              See what we serve
            </Link>
            <Link
              href="/visit"
              className="rounded-full border border-hearth-300 bg-white px-5 py-2.5 text-sm font-semibold text-hearth-UX00 transition hover:bg-hearth-50"
            >
              Explore hours
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-UX">
        <div className="grid gap-UX sm:grid-cols-3">
          <div className="card-surface">
            <p className="text-3xl font-bold text-hearth-700">Demo</p>
            <p className="mt-2 text-sm font-medium text-hearth-900">Opened</p>
            <p className="mt-1 text-sm text-oak-600">
              A fictional brand created to demonstrate a website rescue.
            </p>
          </div>
          <div className="card-surface">
            <p className="text-3xl font-bold text-hearth-700">UX</p>
            <p className="mt-2 text-sm font-medium text-hearth-900">Team</p>
            <p className="mt-1 text-sm text-oak-600">
              Clear navigation, thoughtful interactions and mobile-first layout.
            </p>
          </div>
          <div className="card-surface">
            <p className="text-3xl font-bold text-hearth-700">1</p>
            <p className="mt-2 text-sm font-medium text-hearth-900">Kitchen</p>
            <p className="mt-1 text-sm text-oak-600">
              A focused concept with a consistent visual system.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-oak-600">
          Questions about the Site Rescue approach?{" "}
          <Link href="/contact" className="font-medium text-hearth-700 underline underline-offset-2">
            Get in touch
          </Link>{" "}
          
        </p>
      </section>
    </div>
  );
}
