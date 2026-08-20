import type { SVGProps } from "react";
import type * as React from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBudget(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="6" y="14" width="36" height="26" rx="3" />
      <path d="M6 20h36" />
      <circle cx="24" cy="30" r="5" />
      <path d="M14 8h20" />
    </svg>
  );
}

export function IconGrowth(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 38 16 26l8 7 18-24" />
      <path d="M32 12h10v10" />
    </svg>
  );
}

export function IconCoin(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="24" r="17" />
      <path d="M24 14v20M18 20a6 6 0 0 1 6-4c4.5 0 6.5 2.2 6.5 5s-3 3.8-6.5 4.8-6.5 2-6.5 5.2 3 5 6.5 5a6 6 0 0 0 6-4" />
    </svg>
  );
}

export function IconMindset(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="19" r="11" />
      <path d="M12 40c1.5-8.5 6-12.5 12-12.5S34.5 31.5 36 40" />
      <path d="M19 19a5 5 0 0 1 5-4" />
    </svg>
  );
}

export function IconLaptop(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="10" y="10" width="28" height="19" rx="2" />
      <path d="M4 36h40l-4-7H8Z" />
    </svg>
  );
}

export function IconCompass(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M29 19l-3 10-10 3 3-10z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 6l16 6v11c0 10-7 16.5-16 19-9-2.5-16-9-16-19V12z" />
      <path d="M17 24l5 5 9-11" />
    </svg>
  );
}

export function IconKey(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="16" cy="24" r="9" />
      <path d="M23 24h19M35 24v7M41 24v7" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="10" y="22" width="28" height="18" rx="3" />
      <path d="M16 22v-6a8 8 0 0 1 16 0v6" />
    </svg>
  );
}

export const iconMap: Record<string, React.ComponentType<IconProps>> = {
  budget: IconBudget,
  growth: IconGrowth,
  coin: IconCoin,
  mindset: IconMindset,
  laptop: IconLaptop,
  compass: IconCompass,
  shield: IconShield,
  key: IconKey,
  lock: IconLock,
};

export function PostIcon({ name, ...props }: { name: string } & IconProps) {
  const Icon = iconMap[name] ?? IconCompass;
  return <Icon {...props} />;
}
