import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, Train, Car } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find Hearth & Oak in Ancoats, Manchester — address, opening hours, and how to get here.",
};

export default function VisitPage() {
  return (
    <div className="bg-hearth-50">
      <section className="border-b border-hearth-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-hearth-600">
            Visit
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-hearth-950 sm:text-4xl">
            Come and find us
          </h1>
          <p className="mt-4 max-w-xl text-oak-700">
            We are on Blossom Street in Ancoats, a short walk from the Northern
            Quarter and New Islington.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="card-surface">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-hearth-600" />
                <div>
                  <p className="font-semibold text-hearth-900">Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-oak-700">
                    {site.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-surface">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-hearth-600" />
                <div className="w-full">
                  <p className="font-semibold text-hearth-900">Opening hours</p>
                  <ul className="mt-3 space-y-2 text-sm text-oak-700">
                    {site.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between gap-4 border-b border-hearth-50 pb-2 last:border-0 last:pb-0"
                      >
                        <span>{h.day}</span>
                        <span className="font-medium tabular-nums text-hearth-800">
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-surface">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-hearth-600" />
                <div>
                  <p className="font-semibold text-hearth-900">Phone</p>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-hearth-700 hover:underline"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-2 text-sm text-oak-600">
                    Best for same-day tables and larger groups.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-hearth-200 bg-hearth-100 p-8 text-center shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-hearth-300 hover:shadow-md">
              <MapPin className="h-10 w-10 text-hearth-600" />
              <p className="mt-3 font-display text-lg font-semibold text-hearth-900">
                14 Blossom Street
              </p>
              <p className="mt-1 text-sm text-oak-600">Ancoats, Manchester M4 6AJ</p>
              <a
                href="https://maps.google.com/?q=14+Blossom+Street+Manchester+M4+6AJ"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-hearth-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-hearth-800"
              >
                Open in Maps
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-surface">
                <Train className="h-5 w-5 text-hearth-600" />
                <p className="mt-2 font-medium text-hearth-900">Public transport</p>
                <p className="mt-1 text-sm text-oak-600">
                  Metrolink to New Islington or Piccadilly. Short walk from both.
                </p>
              </div>
              <div className="card-surface">
                <Car className="h-5 w-5 text-hearth-600" />
                <p className="mt-2 font-medium text-hearth-900">Parking</p>
                <p className="mt-1 text-sm text-oak-600">
                  Limited street parking nearby. Bike racks outside the door.
                </p>
              </div>
            </div>

            <div className="card-surface-dark">
              <p className="font-display text-lg font-semibold">Planning a group?</p>
              <p className="mt-2 text-sm text-hearth-100">
                Tables of six or more are best booked ahead so we can look after
                you properly.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-hearth-900 transition hover:bg-hearth-100"
              >
                Book a table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
