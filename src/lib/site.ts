// I keep all shared business copy and constants in one place so the
// site stays consistent and easy to update for the owner later.

export const site = {
  name: "Hearth & Oak",
  tagline: "Neighbourhood café & bakery",
  location: "Ancoats, Manchester",
  address: "14 Blossom Street, Ancoats, Manchester M4 6AJ",
  phone: "0161 555 0142",
  email: "hello@hearthandoak.co.uk",
  hours: [
    { day: "Monday – Friday", time: "7:30 – 16:00" },
    { day: "Saturday", time: "8:30 – 16:00" },
    { day: "Sunday", time: "9:00 – 15:00" },
  ],
  social: {
    instagram: "https://instagram.com/hearthandoak",
    facebook: "https://facebook.com/hearthandoak",
  },
  domain: "hearthandoak.co.uk",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our story" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact" },
];
