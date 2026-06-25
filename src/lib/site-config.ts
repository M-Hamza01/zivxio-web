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
  founded: "2024",
};

export type AppInfo = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  playStoreUrl: string;
  rating: number;
  ratingCount: number;
  installs: string; // human-readable, e.g. "100+"
  status: "live" | "coming-soon";
  // Paths under /public. heroScreenshot is used on the home hero + app
  // page hero; screenshots is the full gallery shown on the app page.
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
];
