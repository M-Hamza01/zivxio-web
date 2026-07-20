// Central place for site-wide facts used across metadata, JSON-LD, and
// sitemap/robots. Update siteUrl once the real domain is live — everything
// else derives from this file so you only change it in one place.

export const siteConfig = {
  name: "ZivXio",
  siteUrl: "https://zivxio.com", // TODO: replace with real domain before launch
  description:
    "ZivXio is an independent software studio building useful, reliable mobile apps for students and everyday productivity.",
  email: "zivxio.app@gmail.com",
  twitter: "", // add handle if/when you have one, e.g. "@zivxio"
  github: "", // optional
  fiverrUrl: "", // add your Fiverr profile URL here once ready, e.g. "https://fiverr.com/yourprofile"
  founded: "2024",
};

export type ServiceInfo = {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
};

// Placeholder offerings — edit titles/descriptions/deliverables to match
// what you actually want to offer before this goes live.
export const services: ServiceInfo[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "End-to-end Android app development — from idea to a published, maintained product.",
    deliverables: [
      "Native Android app",
      "Play Store listing setup",
      "Post-launch bug fixes",
    ],
  },
  {
    slug: "web-landing-pages",
    title: "Web & Landing Pages",
    description:
      "Fast, modern websites and landing pages built with Next.js — for products, portfolios, or small businesses.",
    deliverables: [
      "Responsive Next.js website",
      "SEO-ready structure",
      "Deployment support",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Clean, purposeful interface design for mobile and web — wireframes through polished UI.",
    deliverables: [
      "Wireframes & prototypes",
      "Design system / style guide",
      "Design file handoff",
    ],
  },
];

export type AppInfo = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  playStoreUrl?: string;
  rating: number;
  ratingCount: number;
  installs: string; // human-readable, e.g. "100+"
  status: "live" | "coming-soon";
  // Paths under /public. icon is the square app icon (Play Store style).
  // Optional for coming-soon apps that don't have one yet.
  icon?: string;
  heroScreenshot: string;
  screenshots: string[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

// Single source of truth for app facts. As you ship more apps, add entries
// here — the home page, sitemap, and JSON-LD all read from this.
export const apps: AppInfo[] = [
  {
    slug: "nust-one",
    name: "NUST One",
    tagline: "The ultimate student companion for NUST.",
    description:
      "NUST One brings your NUST student portals, timetable, and notices into one premium app, so you stop juggling logins and start managing your campus life from a single dashboard.",
    category: "Education",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.zivxio.nustone&hl=en_ZA",
    rating: 5,
    ratingCount: 12,
    installs: "100+",
    status: "live",
    icon: "/icons/nust-one.png",
    heroScreenshot: "/screenshots/nust-one-1.png",
    screenshots: [
      "/screenshots/nust-one-1.png",
      "/screenshots/nust-one-2.png",
      "/screenshots/nust-one-3.png",
      "/screenshots/nust-one-4.png",
      "/screenshots/nust-one-5.png",
    ],
    features: [
      {
        title: "Seamless portals",
        description:
          "No more constant logins. Your academic information across multiple NUST domains is securely aggregated into a single, straightforward dashboard.",
      },
      {
        title: "Contextual notifications",
        description:
          "Receive immediate push alerts for urgent portal announcements, grading releases, or timetable changes directly on your phone.",
      },
      {
        title: "Smart timetables",
        description:
          "A dynamic scheduler that handles section assignments automatically. Track attendance benchmarks and daily venue maps cleanly.",
      },
    ],
    faqs: [
      {
        question: "Is my NUST portal password secure?",
        answer:
          "Yes, entirely. NUST One processes your login authentication directly with official portal protocols and does not store credentials externally.",
      },
      {
        question: "Does this app track my real-time location?",
        answer:
          "No. The smart timetable relies entirely on pre-loaded campus coordinates and schedule data to show you your next class venue.",
      },
      {
        question: "Is NUST One an official app of NUST?",
        answer:
          "No. NUST One is an independent app built by ZivXio for NUST students. It connects to official NUST portals but is not developed or endorsed by the university.",
      },
      {
        question: "Is the app free to use?",
        answer:
          "Yes. NUST One is free to download and use, with no subscription required.",
      },
    ],
  },
  {
    slug: "billcheck",
    name: "BillCheck",
    tagline: "Every electricity bill in Pakistan, one app.",
    description:
      "BillCheck lets you check, view, and download electricity bills from all major Pakistani DISCOs — LESCO, IESCO, PESCO, FESCO, MEPCO, GEPCO, HESCO, SEPCO, QESCO, TESCO, and K-Electric — in one place. No account, no login, no juggling separate websites.",
    category: "Utilities",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.zivxio.billcheck",
    // TODO: fill in real stats once available
    rating: 0,
    ratingCount: 0,
    installs: "New",
    status: "live",
    icon: "/icons/billcheck.png",
    heroScreenshot: "/screenshots/billcheck-1.png",
    screenshots: [
      "/screenshots/billcheck-1.png",
      "/screenshots/billcheck-2.png",
      "/screenshots/billcheck-3.png",
      "/screenshots/billcheck-4.png",
      "/screenshots/billcheck-5.png",
    ],
    features: [
      {
        title: "Every major DISCO, one app",
        description:
          "LESCO, IESCO, PESCO, FESCO, MEPCO, GEPCO, HESCO, SEPCO, QESCO, TESCO, and K-Electric — all supported in one consistent interface.",
      },
      {
        title: "No account, no login",
        description:
          "Just add your meter with its reference or account number — the same one printed on your paper bill. Nothing to sign up for.",
      },
      {
        title: "Multiple meters, one screen",
        description:
          "Add your home, shop, and parents' place under nicknames you choose. Switch between all of them in a tap.",
      },
      {
        title: "Full bill details",
        description:
          "Units consumed, billing dates, amount payable, due date, and a full charge breakdown — pulled live from your DISCO's official portal.",
      },
      {
        title: "Bill history & usage tracking",
        description:
          "Scroll back through previous months and see a 6 or 12-month chart with a plain-language note on what's changed — not just a graph.",
      },
      {
        title: "Smart notifications",
        description:
          "Get alerted the moment a new bill is issued, and choose your own due-date reminder: 1, 2, 3, or 7 days ahead.",
      },
    ],
    faqs: [
      {
        question: "Is BillCheck free?",
        answer:
          "Yes. BillCheck is completely free to download and use. It's supported by ads rather than subscriptions or a paywall.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No. There's no sign-up, no password, and no personal profile. You just add a meter using its reference or account number, and BillCheck fetches your bill.",
      },
      {
        question: "Which DISCOs are supported?",
        answer:
          "LESCO, IESCO, PESCO, FESCO, MEPCO, GEPCO, HESCO, SEPCO, QESCO, TESCO, and K-Electric. If your bill comes from any of these providers, BillCheck can check it.",
      },
      {
        question: "Where do I find my reference or account number?",
        answer:
          "It's printed on your paper bill near the top — a 14-digit reference number for most DISCOs, or your account number for K-Electric. BillCheck will guide you when you add a meter.",
      },
      {
        question: "Can I check bills for more than one house or shop?",
        answer:
          "Yes. Add as many meters as you need — each with its own nickname — and switch between them from the home screen.",
      },
      {
        question: "Is my data safe? Where is it stored?",
        answer:
          "Your meter details and bill history are stored only on your own phone. BillCheck doesn't run its own server — every check goes directly from your device to your DISCO's official website.",
      },
      {
        question: "Does BillCheck let me pay my bill?",
        answer:
          "No. BillCheck helps you check, track, and download your bill — it doesn't process payments. You'll still pay through your bank, your DISCO's own channels, or wherever you normally pay.",
      },
      {
        question: "Is BillCheck affiliated with LESCO, PESCO, K-Electric, or the government?",
        answer:
          "No. BillCheck is an independent app and isn't affiliated with, endorsed by, or operated by any DISCO, K-Electric, or any government body.",
      },
    ],
  },
  {
    slug: "batchbook",
    name: "BatchBook",
    tagline: "Smart batch management for students.",
    description:
      "BatchBook helps student batches organize class info, announcements, and shared resources in one place.",
    category: "Productivity",
    rating: 0,
    ratingCount: 0,
    installs: "—",
    status: "coming-soon",
    heroScreenshot: "/screenshots/batchbook-1.png",
    screenshots: [],
    features: [],
    faqs: [],
  },
  {
    slug: "gpa-calculator",
    name: "GPA Calculator",
    tagline: "Calculate, analyze, and improve your GPA.",
    description:
      "A simple, accurate GPA calculator built for university grading systems, with semester-by-semester tracking.",
    category: "Education",
    rating: 0,
    ratingCount: 0,
    installs: "—",
    status: "coming-soon",
    heroScreenshot: "/screenshots/gpa-calculator-1.png",
    screenshots: [],
    features: [],
    faqs: [],
  },
];
