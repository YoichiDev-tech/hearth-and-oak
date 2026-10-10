import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, navLinks } from "@/lib/site";

// I put practical details (address, hours, phone) in the footer so
// locals can find them on every page without hunting.
export default function Footer() {
  return (
    <footer className="border-t border-hearth-200 bg-oak-950 text-oak-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold text-hearth-100">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-oak-300">{site.tagline}</p>
            <p className="mt-1 text-sm text-oak-400">{site.location}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-hearth-200">
              Explore
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-oak-300 transition hover:text-hearth-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-hearth-200">
              Visit us
            </p>
            <ul className="mt-3 space-y-3 text-sm text-oak-300">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-hearth-400" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-hearth-400" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-hearth-200">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-hearth-400" />
                <a href={`mailto:${site.email}`} className="hover:text-hearth-200">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-hearth-200">
              Opening hours
            </p>
            <ul className="mt-3 space-y-2 text-sm text-oak-300">
              {site.hours.map((h) => (
                <li key={h.day} className="flex gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-hearth-400" />
                  <span>
                    <span className="text-oak-200">{h.day}</span>
                    <br />
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-oak-500">
          Fictional portfolio case study. Menu, business details, and testimonials are illustrative, not a live café.
        </p>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-oak-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-oak-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-oak-500">
            Site built by{" "}
            <a
              href="https://prismwavestudio.com"
              className="text-hearth-400 hover:text-hearth-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              PrismWave Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
