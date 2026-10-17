import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { site, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-hearth-200 bg-oak-950 text-oak-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex font-display text-2xl font-bold text-hearth-100 transition hover:text-white">{site.name}</Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-oak-300">{site.tagline}.</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-hearth-700 px-3 py-1.5 text-xs text-hearth-200"><Sparkles className="h-3.5 w-3.5" /> Fictional Site Rescue demo</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-hearth-200">Explore</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-oak-300 transition hover:text-hearth-200">{link.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-hearth-200">Demo details</p>
            <div className="mt-3 flex gap-2 text-sm leading-relaxed text-oak-300"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-hearth-400" /><span>Any hours, menu items and business details shown here are illustrative only.</span></div>
            <a href="https://prismwave-studio.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-hearth-300 transition hover:text-white">Made with PrismWave Studio <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-oak-800 pt-6 text-xs text-oak-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Fictional concept.</p>
          <p>Site Rescue demonstration · No real venue or live booking service.</p>
        </div>
      </div>
    </footer>
  );
}
