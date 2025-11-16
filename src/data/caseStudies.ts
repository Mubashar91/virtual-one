export interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: {
    costSaved: string;
    timeframe: string;
    vaCount: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-Commerce Giant Reduces Costs by 70% While Scaling Operations",
    company: "TechMart GmbH",
    industry: "E-Commerce",
    challenge:
      "TechMart was spending €42,000/month on customer service with a team of 7 full-time employees. Response times were slow, first-contact resolution was inconsistent, and scaling for peak seasons required expensive temporary hires and overtime. Management was spending too much time firefighting instead of working on growth.",
    solution:
      "We implemented a structured support operation built around a team of 5 dedicated VAs who handled all level-1 customer inquiries, order processing, and basic technical support. Native German managers monitored tickets daily, reviewed sample conversations every week, and ran playbook-based coaching sessions so tone of voice and quality stayed fully aligned with the TechMart brand.",
    results: [
      {
        metric: "Cost Reduction",
        value: "70%",
        description:
          "Monthly operational costs dropped from €42,000 to €12,600 while maintaining the same coverage window. Savings were immediately visible in the P&L.",
      },
      {
        metric: "Response Time",
        value: "65% Faster",
        description:
          "Average response time improved from 4 hours to 1.4 hours, with 92% of tickets now answered within the first hour.",
      },
      {
        metric: "Customer Satisfaction",
        value: "4.8/5",
        description:
          "Up from 3.9/5 to 4.8/5, with 95% positive feedback across post-chat and post-email surveys.",
      },
      {
        metric: "Scalability",
        value: "3x Capacity",
        description:
          "The operation can now handle 3x more inquiries during peak seasons without last-minute hiring or overtime.",
      },
    ],
    testimonial:
      "DON VA transformed our customer service operations. We're saving €350,000 annually while providing better service than ever before. The native German quality control was the game-changer – it feels like an in-house team, not an outsourced one.",
    testimonialAuthor: "Stefan Richter",
    testimonialRole: "CEO, TechMart GmbH",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€350K/year",
      timeframe: "3 months",
      vaCount: "5 VAs",
    },
  },
  {
    id: 2,
    title: "Marketing Agency Scales to 50+ Clients Without Hiring Full-Time Staff",
    company: "Digital Dynamics",
    industry: "Marketing Agency",
    challenge:
      "Rapid growth meant the agency needed to scale operations quickly. Hiring full-time staff was slow and expensive, and project demands fluctuated significantly from month to month. Internal project managers were overloaded with admin work instead of focusing on client strategy and upsells.",
    solution:
      "We provided a flexible team of 8 VAs specializing in social media management, content creation, client reporting, and administrative tasks. The team was organized into pods around key accounts and could scale up or down within 48 hours based on the live pipeline, freeing the core team to focus entirely on high-value strategy and sales conversations.",
    results: [
      {
        metric: "Client Growth",
        value: "150%",
        description:
          "Grew from 20 to 50 recurring clients in 6 months without adding a single full-time operational hire.",
      },
      {
        metric: "Cost Efficiency",
        value: "€180K Saved",
        description:
          "Compared to hiring an equivalent project coordination and execution team in-house across 12 months.",
      },
      {
        metric: "Project Delivery",
        value: "40% Faster",
        description:
          "Improved turnaround times on social content calendars, reports, and campaign launches across the entire client base.",
      },
      {
        metric: "Team Flexibility",
        value: "100%",
        description:
          "Can scale team size within 48 hours to absorb new client wins or seasonal spikes without compromising quality.",
      },
    ],
    testimonial:
      "We couldn't have scaled this fast with traditional hiring. DON VA gave us the flexibility to grow without the overhead. Our clients are happier, our delivery is more predictable, and our margins are better than ever.",
    testimonialAuthor: "Julia Becker",
    testimonialRole: "Founder, Digital Dynamics",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€180K/year",
      timeframe: "6 months",
      vaCount: "8 VAs",
    },
  },
  {
    id: 3,
    title: "SaaS Startup Achieves 24/7 Support Coverage on a Lean Budget",
    company: "CloudFlow Solutions",
    industry: "SaaS",
    challenge:
      "As a startup with global customers, CloudFlow needed 24/7 support but couldn't afford a full-time team across multiple time zones. Customer churn was increasing due to slow response times and inconsistent onboarding, and founders were covering late-night shifts themselves.",
    solution:
      "We deployed a distributed team of 4 VAs across different time zones, providing round-the-clock coverage for tier-1 support, onboarding, and keeping product documentation up to date. Clear playbooks and escalation paths ensured that complex technical issues still landed with the internal engineering team, while routine questions were resolved directly by the VAs.",
    results: [
      {
        metric: "Support Coverage",
        value: "24/7",
        description:
          "From a 9–5 support window to round-the-clock availability covering all major customer regions.",
      },
      {
        metric: "Customer Churn",
        value: "45% Reduction",
        description:
          "Churn dropped from 8% to 4.4% monthly within the first two quarters after the change.",
      },
      {
        metric: "Cost Savings",
        value: "€120K/year",
        description:
          "Compared to hiring and training a full-time in-house support team operating on shifts.",
      },
      {
        metric: "Response Time",
        value: "Under 30 min",
        description:
          "Average first response time across all time zones, including nights and weekends.",
      },
    ],
    testimonial:
      "DON VA made 24/7 support possible for our startup. The ROI was immediate – reduced churn alone paid for the service 3x over. Our customers repeatedly mention the fast, friendly support in reviews.",
    testimonialAuthor: "Marco Schneider",
    testimonialRole: "CTO, CloudFlow Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€120K/year",
      timeframe: "4 months",
      vaCount: "4 VAs",
    },
  },
];
