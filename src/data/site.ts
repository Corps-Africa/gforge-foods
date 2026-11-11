export const site = {
  name: "G'Forge Foods",
  slogan: 'Forging Healthy Futures.',
  tagline: 'Cravings Satisfied, Every Day!',
  description:
    "G'Forge Foods serves delicious, affordable, nutritious and hygienically prepared meals, pizzas, pastries and drinks in Techiman, Ghana. Order on WhatsApp.",
  phones: ['0247249385', '0208454678'],
  whatsapp: '233247249385',
  email: 'maabograce190@gmail.com',
  tiktok: 'https://www.tiktok.com/@gforgefoods',
  tiktokHandle: '@gforgefoods',
  grandOpening: '2026-12-01T08:00:00Z', // Ghana is GMT+0
};

export type Branch = {
  id: string;
  name: string;
  address: string;
  note?: string;
  mapQuery: string;
  hours: string | null; // null = not yet supplied by client
  isNew?: boolean;
};

// TODO(client): confirm exact map pins and opening hours for both branches.
export const branches: Branch[] = [
  {
    id: 'dagomba-line',
    name: 'Dagomba Line',
    address: 'Dagomba Line, near Executive Pub, Techiman',
    mapQuery: 'Dagomba Line, Techiman, Ghana',
    hours: null,
  },
  {
    id: 'sansama-road',
    name: 'Sansama Road',
    address: 'Sansama Road, near Executive Pub, Fanmilk Building, Techiman',
    note: 'Mini-restaurant & snack bar. Grand opening 1 December 2026.',
    mapQuery: 'Fanmilk Building, Sansama Road, Techiman, Ghana',
    hours: null,
    isNew: true,
  },
];

export const telHref = (n: string) => `tel:+233${n.replace(/^0/, '')}`;
export const formatPhone = (n: string) => n.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

export function whatsappLink(message = "Hello G'Forge Foods! I'd like to place an order.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/menu/', label: 'Menu' },
  { href: '/about/', label: 'About' },
  { href: '/catering/', label: 'Catering' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];
