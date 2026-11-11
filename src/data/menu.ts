// Menu items from the G'Forge Foods brand package.
// `photo` is a filename (without extension) in src/assets/photos/. Drop a matching
// .jpg/.png/.webp there and it appears automatically, compressed and lazy-loaded.
// TODO(client): confirm descriptions and supply prices (GH₵). Leave price undefined to hide it.

export type Category = 'meals' | 'pizzas' | 'pastries' | 'beverages';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: Category;
  photo: string;
  price?: number;
  bestSeller?: boolean;
};

export const categories: { id: Category; label: string }[] = [
  { id: 'meals', label: 'Meals' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'pastries', label: 'Pastries & Snacks' },
  { id: 'beverages', label: 'Beverages' },
];

export const menu: MenuItem[] = [
  {
    id: 'banku-tilapia',
    name: 'Banku & Grilled Tilapia',
    description: 'Whole grilled tilapia with soft banku, rich pepper sauce and fresh garnish.',
    category: 'meals',
    photo: 'banku-tilapia',
    bestSeller: true,
  },
  {
    id: 'jollof-chicken',
    name: 'Jollof Rice & Grilled Chicken',
    description: 'Smoky, well-spiced jollof served with juicy grilled chicken.',
    category: 'meals',
    photo: 'jollof-chicken',
    bestSeller: true,
  },
  {
    id: 'fried-rice',
    name: 'Assorted Fried Rice',
    description: 'Colourful fried rice loaded with vegetables and assorted proteins.',
    category: 'meals',
    photo: 'fried-rice',
  },
  {
    id: 'noodles',
    name: 'Assorted Noodles',
    description: 'Stir-fried noodles tossed with vegetables and assorted proteins.',
    category: 'meals',
    photo: 'noodles',
  },
  {
    id: 'pizza',
    name: 'Signature Loaded Pizza',
    description: 'Cheese-pull pizza with assorted toppings, olives and fresh vegetables.',
    category: 'pizzas',
    photo: 'pizza',
    bestSeller: true,
  },
  {
    id: 'shawarma',
    name: 'Shawarma Wrap',
    description: 'Creamy meat or chicken shawarma, wrapped warm and packed with flavour.',
    category: 'pastries',
    photo: 'shawarma',
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    description: 'Crispy fries piled high with savoury toppings.',
    category: 'pastries',
    photo: 'loaded-fries',
  },
  {
    id: 'doughnuts',
    name: 'Milky Doughnuts',
    description: 'Soft milky doughnuts, pink-glazed or chocolate-coated.',
    category: 'pastries',
    photo: 'doughnuts',
  },
  {
    id: 'birthday-cake',
    name: 'Birthday Cakes',
    description: 'Custom celebration cakes made to order. Message us with your date and design.',
    category: 'pastries',
    photo: 'birthday-cake',
  },
  {
    id: 'sobolu',
    name: 'Sobolu Juice',
    description: 'Freshly brewed natural sobolu (hibiscus) juice, served chilled.',
    category: 'beverages',
    photo: 'sobolu',
  },
];

export const bestSellers = menu.filter((m) => m.bestSeller);
