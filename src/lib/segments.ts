export type SegmentSlug = "money-foundations" | "wealth-income-building" | "mindset-freedom";

export interface Segment {
  slug: SegmentSlug;
  name: string;
  subtitle: string;
  description: string;
}

export const segments: Segment[] = [
  {
    slug: "money-foundations",
    name: "Money Foundations",
    subtitle: "Practical Budgeting · Saving Strategies · Financial Literacy",
    description:
      "The everyday fundamentals — budgeting systems, saving strategies, and financial literacy for anyone starting from scratch.",
  },
  {
    slug: "wealth-income-building",
    name: "Wealth & Income Building",
    subtitle: "Real Income Ideas · Making Money Online · Side Hustles · Smart Investing",
    description:
      "Growing beyond your current income — online income ideas, side hustles, and smart, educational investing.",
  },
  {
    slug: "mindset-freedom",
    name: "Mindset & Freedom",
    subtitle: "Financial Freedom · Positive Wealth-Building Mindset",
    description:
      "The inner work behind the outer results — shifting from scarcity thinking to a mindset built for financial freedom.",
  },
];

export function getSegment(slug: string): Segment | undefined {
  return segments.find((s) => s.slug === slug);
  }
