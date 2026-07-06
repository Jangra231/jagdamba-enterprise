/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Product, TimelineEvent, CoreValue } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description: 'We connect opportunities with potential, driving measurable business growth.',
    details: [
      'B2B matchmaking & prospecting',
      'Targeted campaign management',
      'Qualified lead qualification',
      'Sales channel development'
    ],
    iconName: 'Magnet'
  },
  {
    id: 'trading',
    title: 'Trading & Sourcing',
    description: 'Global trade solutions delivering value, reliability, and trust across borders.',
    details: [
      'Global supply chain networks',
      'Commodity trading & logistics',
      'Quality assurance inspections',
      'Trade compliance advisory'
    ],
    iconName: 'Globe'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Solutions',
    description: 'Streamlined logistics and supply chain excellence for seamless operations.',
    details: [
      'Optimized freight routing',
      'Warehouse & distribution solutions',
      'Customs clearance & compliance',
      'Real-time supply tracking'
    ],
    iconName: 'Package'
  },
  {
    id: 'industrial-solutions',
    title: 'Industrial Solutions',
    description: 'Advanced industrial solutions tailored for efficiency, safety, and sustainable growth.',
    details: [
      'Equipment procurement & setup',
      'Automation & smart manufacturing',
      'Preventative maintenance systems',
      'Energy efficient upgrades'
    ],
    iconName: 'Settings'
  },
  {
    id: 'consulting',
    title: 'Consulting Advisory',
    description: 'Strategic insights and advisory services to help your business thrive tomorrow.',
    details: [
      'Operational risk mitigation',
      'Strategic growth roadmap',
      'Investment & cost management',
      'Regulatory compliance audit'
    ],
    iconName: 'MessageSquare'
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-industrial',
    name: 'Industrial Products',
    category: 'Industrial',
    description: 'Heavy machinery, precision manufacturing tools, and industrial automation components.',
    imageSeed: 'industrial_machinery',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-agriculture',
    name: 'Agriculture Solutions',
    category: 'Agriculture',
    description: 'Farming tech, organic fertilizers, precision irrigation, and sustainable crop protection.',
    imageSeed: 'agriculture_tractor',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-construction',
    name: 'Construction Materials',
    category: 'Construction',
    description: 'Premium structural steel, high-grade cements, aggregate solutions, and sustainable bricks.',
    imageSeed: 'construction_scaffolding',
    imageUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-packaging',
    name: 'Packaging Materials',
    category: 'Packaging',
    description: 'Recyclable corrugated boxes, food-grade barrier films, and customized industrial packaging.',
    imageSeed: 'packaging_boxes',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-chemicals',
    name: 'Chemicals & Raw Materials',
    category: 'Chemicals',
    description: 'Certified organic compounds, solvent blends, and specialty minerals for industrial syntheses.',
    imageSeed: 'chemistry_beakers',
    imageUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-energy',
    name: 'Energy Solutions',
    category: 'Energy',
    description: 'Solar panel arrays, clean energy storage systems, micro-inverters, and power grid optimization.',
    imageSeed: 'energy_solar',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '1998',
    title: 'Our Beginning',
    description: 'Laid the foundation with a vision to deliver unmatched trading quality and integrity.',
    iconName: 'Building'
  },
  {
    year: '2005',
    title: 'Expansion Phase',
    description: 'Entered new domestic industrial markets and broadened product procurement lines.',
    iconName: 'TrendingUp'
  },
  {
    year: '2012',
    title: 'Diversification',
    description: 'Strengthened our portfolio with green materials and state-of-the-art tech.',
    iconName: 'Layers'
  },
  {
    year: '2018',
    title: 'Global Partnerships',
    description: 'Built robust cross-continental trade partnerships with international clients.',
    iconName: 'Globe'
  },
  {
    year: '2024+',
    title: 'Shaping Tomorrow',
    description: 'Expanding sustainable solutions, localizing manufacturing, and enhancing digital operations.',
    iconName: 'Leaf'
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Integrity in Every Action',
    description: 'We believe transparent and honest dealing forms the ultimate bedrock of business relations.'
  },
  {
    title: 'Excellence in Execution',
    description: 'We strive for pristine precision, high speed, and flawless quality in every supply chain link.'
  },
  {
    title: 'Collaboration in Spirit',
    description: 'We treat clients, vendors, and stakeholders as integrated partners in joint long-term success.'
  },
  {
    title: 'Innovation in Approach',
    description: 'We leverage modern intelligence, tracking software, and green tech for legacy challenges.'
  },
  {
    title: 'Impact in Everything We Do',
    description: 'We ensure our business footprint builds up communities, protects environments, and drives growth.'
  }
];

export const STATISTICS_DATA = [
  { value: 25, label: 'Years of Excellence', suffix: '+' },
  { value: 6, label: 'Diverse Industries', suffix: '+' },
  { value: 1000, label: 'Projects Delivered', suffix: '+' },
  { value: 50, label: 'Global Partners', suffix: '+' }
];
