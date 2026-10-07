# Hearth & Oak — neighbourhood café & bakery

This is a complete, production-style website for an independent 
SMB in Ancoats, Manchester.

I built it as a **case-study site** for PrismWave Studio — the kind of site 
we deliver for small and medium businesses that need to look serious online, 
take enquiries, and convert walk-ins without relying on Instagram alone.

It is not a live client project. It is a realistic example of what we ship: 
clear structure, mobile-first layout, working contact flow, 
and room for the owner to update copy and connect real data later.


## Stack

- **Next.js 15** (App Router)
- **React 19 + TypeScript**
- **Tailwind CSS** (custom warm brand palette)
- **Supabase** (contact / enquiry storage)
- **lucide-react** for icons

No page builders. No bloated themes. 
Just code that is easy to host, easy to change, and easy to hand over.


## What is included

| **Home** | Short hero, three trust points, clear CTAs |
| **Menu** | Coffee, bakery, kitchen — scannable on a phone |
| **Our story** | Brand voice, not agency filler |
| **Visit** | Address, hours, how to get there, group CTA |
| **Contact** | Form + phone / email / address |

Also included:

- Sticky header with mobile menu and primary CTA
- Footer with practical details on every page
- Contact form -> API route → Supabase `enquiries` table
- Demo mode if Supabase is not configured yet (form still "works" and logs to the server)
- Accessibility basics (focus rings, semantic HTML, clear labels)
- SEO-friendly metadata per page


## Project structure

```
src/
  app/
    page.tsx          → Home
    about/            → Our story
    menu/             → Menu
    visit/            → Visit / find us
    contact/          → Contact + form
    api/contact/      → Server route that writes to Supabase
  components/
    Header.tsx
    Footer.tsx
    ContactForm.tsx
  lib/
    site.ts           -> Business copy & nav in one place
    supabase.ts       -> Browser client + types
```

I keep business text in `src/lib/site.ts` so an owner (or a junior) can change address, hours, or phone without hunting through components.

---

## Why this site exists (PrismWave)

Most SMB sites we audit are either:

- a Facebook page with no real web presence, or
- a template that looks the same as every other café in the city.

This project is the opposite direction: one clear brand voice, one primary action (book / visit / enquire), and a stack that does not lock the owner into a monthly page-builder fee.

Use it as a reference when you talk to leads:

- This is the standard of site we build for neighbourhood businesses.
- It works on a phone, takes messages, and is ready for real photos and a live Supabase project.


## Notes for hand-off

- Swap the gradient hero block for real photography when the client is ready.
- Point the Google Maps link at the real pin.
- Connect Supabase and optionally add email notifications (Resend, Supabase Edge Functions, etc.).
- Comments in the code are written in first person so the intent is clear when someone else opens the project later.


**Built by PrismWave Studio**  
Web sites and revamps for SMBs.

