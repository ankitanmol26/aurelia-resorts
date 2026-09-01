export interface Offer {
  id: string;
  title: string;
  description: string;
  validity: string;
  details: string[];
  image: string;
}

export const offers: Offer[] = [
  {
    id: "early-escape",
    title: "Early Escape",
    description: "Plan ahead and enjoy significant savings. Book your sanctuary at least 60 days in advance to receive an exclusive preferred rate for your luxury retreat.",
    validity: "Valid for stays through December 2024",
    details: [
      "Save up to 20% on our best available rate", 
      "Complimentary room upgrade (subject to availability)",
      "Welcome signature cocktail upon arrival"
    ],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "extended-stay",
    title: "Extended Stay",
    description: "Linger longer in luxury. Immerse yourself fully in the Aurelia lifestyle with a complimentary night when you reserve four consecutive nights with us.",
    validity: "Valid for stays through March 2025",
    details: [
      "Stay 4 nights and receive the 5th night complimentary", 
      "Daily gourmet breakfast for two included",
      "Late checkout guaranteed"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "romantic-getaway",
    title: "Romantic Getaway",
    description: "Celebrate your connection with a curated escape designed specifically for couples, featuring secluded dining, spa sanctuaries, and unforgettable moments.",
    validity: "Valid year-round",
    details: [
      "Chilled Champagne and artisan chocolates upon arrival", 
      "60-minute signature couples massage", 
      "Private candlelit beachfront dinner"
    ],
    image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1200&q=80"
  }
];
