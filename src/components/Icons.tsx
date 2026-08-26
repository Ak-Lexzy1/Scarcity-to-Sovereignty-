import {
  PiggyBank, Wallet, Coins, CreditCard, Banknote, TrendingUp, TrendingDown,
  LineChart, BarChart3, PieChart, Landmark, Building2, Receipt, Calculator,
  Target, Compass, Map, Milestone, Flag, Trophy, Award, Medal, Star,
  Brain, Sparkles, Sunrise, Sun, Lightbulb, Eye, Heart, HeartHandshake,
  Shield, ShieldCheck, Lock, Unlock, Key, Vault, Gem, Crown,
  Rocket, Zap, Flame, Gauge, ArrowUpRight, ArrowUpCircle, TrendingUp as Growth,
  Laptop, Smartphone, Globe, Wifi, Mail, Send, Briefcase, BriefcaseBusiness,
  Users, UserCheck, Handshake, MessageCircle, Megaphone,
  Home, Car, Plane, ShoppingBag, ShoppingCart, Tag, Percent,
  Calendar, CalendarCheck, Clock, Hourglass, AlarmClock,
  BookOpen, GraduationCap, PenTool, FileText, ClipboardList, ClipboardCheck,
  CheckCircle2, CircleDollarSign, DollarSign, Infinity, Repeat, RefreshCw,
  Layers, Building, Factory, Store, Package, Boxes,
  Umbrella, LifeBuoy, Anchor, Mountain, TreePine, Leaf, Seedling,
  Puzzle, Wrench, Settings, Cog, Filter, Search,
  Smile, ThumbsUp, HandCoins, Landmark as Bank, Scale, Gavel,
  AlertCircle, AlertTriangle, Info, HelpCircle, Ban, XCircle,
  type LucideIcon,
} from "lucide-react";
import type { SVGProps } from "react";

export const iconMap: Record<string, LucideIcon> = {
  // Money & wealth
  budget: Calculator,
  savings: PiggyBank,
  wallet: Wallet,
  coin: Coins,
  cash: Banknote,
  "credit-card": CreditCard,
  income: CircleDollarSign,
  money: DollarSign,
  receipt: Receipt,
  "hand-coins": HandCoins,
  bank: Bank,
  vault: Vault,

  // Growth & investing
  growth: TrendingUp,
  decline: TrendingDown,
  chart: LineChart,
  "bar-chart": BarChart3,
  "pie-chart": PieChart,
  invest: Landmark,
  compound: Repeat,
  scale: Scale,

  // Mindset & wellbeing
  mindset: Brain,
  clarity: Sparkles,
  awaken: Sunrise,
  positivity: Sun,
  idea: Lightbulb,
  vision: Eye,
  heart: Heart,
  gratitude: HeartHandshake,
  calm: Smile,

  // Security & freedom
  shield: Shield,
  protected: ShieldCheck,
  lock: Lock,
  unlock: Unlock,
  key: Key,
  freedom: Unlock,
  gem: Gem,
  sovereignty: Crown,

  // Ambition & progress
  compass: Compass,
  map: Map,
  milestone: Milestone,
  goal: Flag,
  win: Trophy,
  award: Award,
  achievement: Medal,
  star: Star,
  rocket: Rocket,
  energy: Zap,
  motivation: Flame,
  speed: Gauge,
  rise: ArrowUpRight,
  levelup: ArrowUpCircle,

  // Work & income streams
  laptop: Laptop,
  mobile: Smartphone,
  online: Globe,
  connected: Wifi,
  email: Mail,
  outreach: Send,
  job: Briefcase,
  business: BriefcaseBusiness,
  team: Users,
  trusted: UserCheck,
  deal: Handshake,
  conversation: MessageCircle,
  marketing: Megaphone,

  // Lifestyle & spending
  home: Home,
  car: Car,
  travel: Plane,
  shopping: ShoppingBag,
  cart: ShoppingCart,
  discount: Tag,
  percent: Percent,

  // Time & planning
  calendar: Calendar,
  planned: CalendarCheck,
  time: Clock,
  waiting: Hourglass,
  reminder: AlarmClock,

  // Learning & documentation
  book: BookOpen,
  education: GraduationCap,
  writing: PenTool,
  document: FileText,
  checklist: ClipboardList,
  approved: ClipboardCheck,
  done: CheckCircle2,
  infinite: Infinity,
  refresh: RefreshCw,

  // Structure & systems
  layers: Layers,
  building: Building,
  factory: Factory,
  store: Store,
  package: Package,
  inventory: Boxes,

  // Safety net & stability
  umbrella: Umbrella,
  lifeline: LifeBuoy,
  anchor: Anchor,
  mountain: Mountain,
  tree: TreePine,
  leaf: Leaf,
  seedling: Seedling,

  // Problem-solving
  puzzle: Puzzle,
  fix: Wrench,
  settings: Settings,
  system: Cog,
  filter: Filter,
  search: Search,

  // Approval & warnings (for tips/mistakes posts)
  thumbsup: ThumbsUp,
  legal: Gavel,
  warning: AlertTriangle,
  alert: AlertCircle,
  info: Info,
  question: HelpCircle,
  avoid: Ban,
  wrong: XCircle,
};

export function PostIcon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const Icon = iconMap[name] ?? Compass;
  return <Icon {...props} />;
}
