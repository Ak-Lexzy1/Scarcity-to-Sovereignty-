export interface Product {
  slug: string;
  name: string;
  price: string;
  description: string;
  checkoutUrl: string;
  comingSoon?: boolean;
}

export const products: Product[] = [
  {
    slug: "coming-soon",
    name: "Your First Digital Product",
    price: "—",
    description:
      "Workbooks, planners, and guides are on the way. Join the newsletter waitlist to be the first to know when they launch.",
    checkoutUrl: "#",
    comingSoon: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
                           }
