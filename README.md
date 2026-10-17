# Take 5 — Site Rescue demonstration

Take 5 is a fictional café concept used by **PrismWave Studio** to demonstrate how an existing website can be reviewed, refreshed and made easier to use.

**This is not a live business.** No real venue, address, phone number, map pin, booking desk or operating hours are represented. Menu items, prices and sample hours are illustrative content only.

## What this demo demonstrates

- Consistent brand identity and clear page hierarchy
- Responsive layouts designed for small screens first
- Accessible navigation, visible focus states and clear calls to action
- A menu that is easy to scan on mobile
- A contact form with client-side and server-side validation
- A server-side Supabase integration that fails closed when configuration is missing
- Shared site configuration for consistent content and navigation
- Demo messaging that avoids sending visitors to invented locations

## Stack

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS
- Supabase for enquiry storage when correctly configured
- lucide-react icons

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

Check production compilation with:

```bash
npm run build
```

## Contact form configuration

The contact API requires server-side environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Never expose the service-role key to the browser or commit it to the repository. Without valid configuration, the API returns a service-unavailable response instead of pretending a message was delivered.

Review `supabase-schema.sql` before applying it to a real project. Before any real launch, configure rate limiting, abuse monitoring, notification delivery, privacy information and real business-approved content.

## Project structure

```
src/
  app/
    page.tsx
    about/page.tsx
    menu/page.tsx
    visit/page.tsx
    contact/page.tsx
    api/contact/route.ts
  components/
    ContactForm.tsx
    Header.tsx
    Footer.tsx
  lib/
    site.ts
```

## Site Rescue context

This is a created demo, not a real client rescue. It demonstrates the standard of UI/UX, responsive implementation and careful content handling PrismWave Studio can bring to an existing site.

**Built by PrismWave Studio.**
