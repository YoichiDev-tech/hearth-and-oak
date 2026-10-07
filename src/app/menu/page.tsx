import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Coffee, pastries, breakfast and lunch at Hearth & Oak, Ancoats. Menu changes with the season.",
};

// I structure the menu so it is scannable on a phone — short sections,
// clear prices, and a note that items can sell out.

type Item = { name: string; desc?: string; price: string };

const coffee: Item[] = [
  { name: "Espresso", price: "2.60" },
  { name: "Macchiato", price: "2.80" },
  { name: "Flat white", price: "3.40" },
  { name: "Cappuccino", price: "3.50" },
  { name: "Latte", price: "3.60" },
  { name: "Filter (batch)", price: "3.20" },
  { name: "Pour-over", desc: "Single origin, ask for today’s bean", price: "4.20" },
  { name: "Hot chocolate", price: "3.60" },
  { name: "Chai latte", price: "3.70" },
];

const bakery: Item[] = [
  { name: "Sourdough loaf", desc: "Take-home, baked mornings", price: "4.50" },
  { name: "Cinnamon bun", desc: "Our most ordered item", price: "3.80" },
  { name: "Butter croissant", price: "3.20" },
  { name: "Almond croissant", price: "3.80" },
  { name: "Seasonal tart", desc: "Changes weekly", price: "4.20" },
  { name: "Banana bread", desc: "Gluten-free option available", price: "3.50" },
];

const kitchen: Item[] = [
  {
    name: "Sourdough toast",
    desc: "Butter & jam, or smashed avocado & chilli",
    price: "4.50 / 7.50",
  },
  {
    name: "Granola bowl",
    desc: "Yoghurt, fruit, local honey",
    price: "7.00",
  },
  {
    name: "Eggs on toast",
    desc: "Soft scrambled or fried, herbs",
    price: "8.50",
  },
  {
    name: "Full plate",
    desc: "Eggs, bacon, beans, sourdough, tomato",
    price: "12.50",
  },
  {
    name: "Soup of the day",
    desc: "With warm bread — ask the team",
    price: "7.50",
  },
  {
    name: "Toastie",
    desc: "Cheese & ham, or seasonal veg",
    price: "8.00",
  },
  {
    name: "Salad bowl",
    desc: "Leaves, grains, house dressing",
    price: "9.50",
  },
];

function MenuSection({ title, items }: { title: string; items: Item[] }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-hearth-900 sm:text-2xl">
        {title}
      </h2>
      <ul className="mt-5 divide-y divide-hearth-100">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-start justify-between gap-4 py-3.5 first:pt-0"
          >
            <div>
              <p className="font-medium text-hearth-950">{item.name}</p>
              {item.desc && (
                <p className="mt-0.5 text-sm text-oak-600">{item.desc}</p>
              )}
            </div>
            <p className="shrink-0 text-sm font-medium tabular-nums text-hearth-800">
              £{item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-hearth-200 bg-hearth-50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-hearth-600">
            Menu
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-hearth-950 sm:text-4xl">
            What we are serving
          </h1>
          <p className="mt-4 text-oak-700">
            Prices include VAT. Kitchen closes 30 minutes before we do. Pastries
            and bread can sell out — come early if you have a favourite.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <MenuSection title="Coffee & hot drinks" items={coffee} />
        <MenuSection title="Bakery" items={bakery} />
        <MenuSection title="Kitchen" items={kitchen} />

        <div className="card-surface-soft text-center">
          <p className="text-sm text-oak-700">
            Dietary needs? Just ask — we mark allergens and can adapt most
            plates. For larger groups or catering,{" "}
            <Link
              href="/contact"
              className="font-medium text-hearth-700 underline underline-offset-2"
            >
              send us a message
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
