// Testimonials: only add real customer quotes the client has permission to use.
// Sections that show testimonials stay hidden while this list is empty.
export const testimonials: { quote: string; name: string; detail?: string }[] = [];

// FAQs answered from the brand package. More to add once the client confirms
// delivery area/fees, payment methods (MoMo?) and cake notice periods.
export const faqs: { q: string; a: string }[] = [
  {
    q: 'How do I place an order?',
    a: 'Tap any "Order on WhatsApp" button on our menu. Your order message is written for you, so just send it and we\'ll confirm the details. You can also call 024 724 9385 or 020 845 4678.',
  },
  {
    q: 'Where are you located?',
    a: 'We\'re at Dagomba Line, near Executive Pub, Techiman. Our new mini-restaurant & snack bar opens on 1 December 2026 on Sansama Road, at the Fanmilk Building.',
  },
  {
    q: 'Do you cater for events and bulk orders?',
    a: 'Yes. We cater for birthdays, office lunches, church and school events and more. Send us your details through our Catering page and we\'ll get back to you.',
  },
  {
    q: 'Can I order a custom birthday cake?',
    a: 'Yes! Message us on WhatsApp with your date, size and design idea, and we\'ll work it out with you.',
  },
  {
    q: 'How do you keep your food safe?',
    a: 'Food safety is at the heart of G\'Forge Foods. Every meal is prepared hygienically by a trained team, with fresh ingredients and clean, well-kept kitchens.',
  },
];
