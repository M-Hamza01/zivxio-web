// Central place for site-wide facts used across metadata, JSON-LD, and
// sitemap/robots. Update siteUrl once the real domain is live — everything
// else derives from this file so you only change it in one place.

import appStats from "@/data/app-stats.json";

export const siteConfig = {
  name: "ZivXio",
  siteUrl: "https://zivxio.vercel.app",
  description:
    "ZivXio is a software studio building useful, reliable mobile apps for students and everyday productivity.",
  email: "zivxio.app@gmail.com",
  twitter: "", // add handle if/when you have one, e.g. "@zivxio"
  github: "", // optional
  fiverrUrl: "https://fiverr.com/m__h_a_m_z_a",
  founded: "2026",
};

export type ServiceInfo = {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
};

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
      "Fast, modern websites and landing pages built with Next.js — for small businesses.",
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
      "Clean, purposeful interface design for mobile and web — wireframes through polished UI -everything.",
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

// Fallback facts, used until scripts/update-app-stats.mjs has run at least
// once, or if a given app's live fetch fails. Keep rating/ratingCount/installs
// here reasonably current by hand as a safety net — see src/data/app-stats.json
// and scripts/README.md for how the live values are kept fresh automatically.
const appDefaults: AppInfo[] = [
  {
    slug: "nust-one",
    name: "NUST One",
    tagline: "Everything NUST, in one app.",
    description:
      "NUST One is an unofficial, independently built companion app for NUST (National University of Sciences and Technology) students. It connects to your existing Qalam and LMS (Moodle) accounts and brings your grades, attendance, GPA predictions, course activity, and class announcements into one consistent, modern interface — instead of switching between multiple websites and apps throughout the day.",
    category: "Education",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.zivxio.nustone&hl=en_ZA",
    rating: 5,
    ratingCount: 13,
    installs: "300+",
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
        title: "GPA Predictor",
        description:
          "Calculates your current CGPA and a live-updating predicted semester GPA from the assessment results already posted on Qalam. Updates automatically as new quiz, assignment, midterm, or final results are graded.",
      },
      {
        title: "What-If Predictor",
        description:
          "Simulate hypothetical outcomes before they happen — see how a B+ instead of an A- on your final would shift your GPA, so you know exactly how much a specific assessment is worth.",
      },
      {
        title: "Qalam Integration",
        description:
          "Connects directly to your Qalam account to pull grades, course standing, and attendance data, using the same Qalam ID and password you already use — no separate account needed.",
      },
      {
        title: "LMS (Moodle) Integration",
        description:
          "Connects to the NUST LMS to show enrolled courses, course content, and assignment or quiz deadlines natively inside the app, without opening the LMS website separately.",
      },
      {
        title: "Class Events & Community",
        description:
          "Join your class with a code from your Class Representative to see class-specific events — quizzes, makeup classes, due dates, announcements — and comment on each one for quick clarifications.",
      },
      {
        title: "Appearance & Themes",
        description:
          "Multiple visual themes and accent colors so you can personalize how the app looks, instead of being limited to a single fixed design.",
      },
      {
        title: "Notifications",
        description:
          "Get notified for new class events and reminders ahead of upcoming ones, with adjustable notification settings.",
      },
      {
        title: "Onboarding for New Students",
        description:
          "A short first-launch walkthrough explains what NUST One does and guides you through connecting your Qalam and LMS accounts, so your dashboard is meaningful from day one.",
      },
    ],
    faqs: [
      {
        question: "What is NUST One?",
        answer:
          "NUST One is an unofficial mobile app for NUST (National University of Sciences and Technology, Pakistan) students that combines Qalam grade tracking, GPA prediction, LMS/Moodle course activity, and class event management into a single app.",
      },
      {
        question: "Is NUST One an official NUST app?",
        answer:
          "No. NUST One is an independently developed, unofficial companion app built by a NUST student. It is not created, operated, or endorsed by NUST University itself, but it connects to the official Qalam and LMS systems using each student's own login credentials.",
      },
      {
        question: "Does NUST One require a separate account?",
        answer:
          "No. NUST One uses your existing Qalam ID/password and LMS (Moodle) username/password to connect — the same credentials already used on the official Qalam and LMS websites. NUST One doesn't create a new, separate account for these services.",
      },
      {
        question: "How does the GPA Predictor in NUST One work?",
        answer:
          "It reads your currently graded assessments from Qalam and calculates a predicted semester GPA using NUST-typical assessment weightings (Quiz, Assignment, Mid, Final, and Lecture/Lab splits where applicable). It updates automatically as new results are posted.",
      },
      {
        question: "What is the What-If Predictor in NUST One?",
        answer:
          "It lets you enter a hypothetical grade for an upcoming or ungraded assessment and see how it would affect your predicted GPA, without that grade having actually been posted yet.",
      },
      {
        question: "Can I see my LMS assignments and deadlines in NUST One?",
        answer:
          "Yes. NUST One connects to the NUST LMS (Moodle) to show enrolled courses, course content, and upcoming assignment or quiz deadlines directly inside the app.",
      },
      {
        question: "How do I join my class on NUST One?",
        answer:
          "Enter a class code shared by your Class Representative (CR). Once approved, you can see and discuss events specific to that class.",
      },
      {
        question: "Who can post events for a class on NUST One?",
        answer:
          "Only the Class Representative (CR) of a given class, or an app administrator, can post new events for that class. Regular class members can view events and comment on them but can't post new ones.",
      },
      {
        question: "Is NUST One free?",
        answer:
          "Yes. NUST One is free to download and use. The app includes an optional in-app \"Buy Me a Chai\" donation option to support the developer, but this is entirely optional.",
      },
      {
        question: "What platforms is NUST One available on?",
        answer:
          "NUST One is available on Android via the Google Play Store.",
      },
      {
        question: "Who made NUST One?",
        answer:
          "NUST One is built and maintained independently by a NUST student developer, not by NUST University or any official university department.",
      },
    ],
  },
  {
    slug: "billcheck",
    name: "BillCheck",
    tagline: "Every electricity bill in Pakistan, one app.",
    description:
      "BillCheck lets you check, view, track, and download electricity bills from all major Pakistani DISCOs — LESCO, IESCO, PESCO, FESCO, MEPCO, GEPCO, HESCO, SEPCO, QESCO, TESCO, and K-Electric — in one place. No account, no login, no juggling separate websites.",
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
      "/screenshots/billcheck-6.png",
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
    slug: "momently",
    name: "Momently",
    tagline: "Capture the moments, make memories",
    description:
      "Add one picture daily, see your whole month or year on one screen.",
    category: "Lifestyle",
    rating: 0,
    ratingCount: 0,
    installs: "—",
    status: "coming-soon",
    heroScreenshot: "/screenshots/momently.png",
    screenshots: [],
    features: [],
    faqs: [],
  },
];

// Live-fetched Play Store stats, refreshed by `npm run update-stats`
// (scripts/update-app-stats.mjs) — see scripts/README.md. Only
// rating/ratingCount/installs ever come from that file; everything else
// (copy, features, faqs) always comes from appDefaults above. If a slug is
// missing from the JSON (script hasn't run yet, or that app has no Play
// Store listing), its appDefaults values are used untouched.
export const apps: AppInfo[] = appDefaults.map((app) => {
  const live = appStats.apps[app.slug as keyof typeof appStats.apps];
  return live ? { ...app, ...live } : app;
});
