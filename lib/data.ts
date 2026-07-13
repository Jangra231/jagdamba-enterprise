import { Service, TimelineEvent, CoreValue } from "@/types";

export const SERVICES_DATA: Service[] = [
  {
    id: "consulting",
    title: "Branding & Consulting",
    description:
      "Strategic insights and advisory services to help your business thrive tomorrow.",
    details: [
      "Operational risk mitigation",
      "Strategic growth roadmap",
      "Investment & cost management",
      "Regulatory compliance audit",
    ],
    iconName: "MessageSquare",
  },
  {
    id: "lead-generation",
    title: "Digital Lead Generation",
    description:
      "We connect opportunities with potential, driving measurable business growth.",
    details: [
      "B2B matchmaking & prospecting",
      "Targeted campaign management",
      "Qualified lead qualification",
      "Sales channel development",
    ],
    iconName: "Magnet",
  },
  {
    id: "trading",
    title: "Trading & Sourcing",
    description:
      "Global trade solutions delivering value, reliability, and trust across borders.",
    details: [
      "Global supply chain networks",
      "Commodity trading & logistics",
      "Quality assurance inspections",
      "Trade compliance advisory",
    ],
    iconName: "Globe",
  },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "2023",
    title: "Our Beginning",
    description:
      "Laid the foundation with a vision to deliver unmatched trading quality and integrity.",
    iconName: "Building",
  },
  {
    year: "2024",
    title: "Expansion Phase",
    description:
      "Entered new domestic industrial markets and broadened product procurement lines.",
    iconName: "TrendingUp",
  },
  {
    year: "2025",
    title: "Diversification",
    description:
      "Strengthened our portfolio with green materials and state-of-the-art tech.",
    iconName: "Layers",
  },
  {
    year: "2026",
    title: "Global Partnerships",
    description:
      "Built robust cross-continental trade partnerships with international clients.",
    iconName: "Globe",
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity in Every Action",
    description:
      "We believe transparent and honest dealing forms the ultimate bedrock of business relations.",
  },
  {
    title: "Excellence in Execution",
    description:
      "We strive for pristine precision, high speed, and flawless quality in every supply chain link.",
  },
  {
    title: "Collaboration in Spirit",
    description:
      "We treat clients, vendors, and stakeholders as integrated partners in joint long-term success.",
  },
  {
    title: "Innovation in Approach",
    description:
      "We leverage modern intelligence, tracking software, and green tech for legacy challenges.",
  },
  {
    title: "Impact in Everything We Do",
    description:
      "We ensure our business footprint builds up communities, protects environments, and drives growth.",
  },
];

export const STATISTICS_DATA = [
  { value: 3, label: "Years of Excellence", suffix: "+" },
  { value: 14, label: "Diverse Industries", suffix: "+" },
  { value: 100, label: "Projects Delivered", suffix: "+" },
  { value: 50, label: "Global Partners", suffix: "+" },
];
