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
  shortName?: string;
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
    name: "NUST One: Student LMS & Qalam",
    shortName: "NUST One",
    tagline: "Unified student companion for NUST: attendance Bunk Meter, LMS deadline sync, and grade roadmaps.",
    description:
      "NUST One: Student LMS & Qalam is an unofficial, independently built companion app for NUST (National University of Sciences and Technology) students. It connects directly to your Qalam and LMS (Moodle) accounts to bring attendance tracking with a live Bunk Meter, assignment and quiz deadline calendar sync, GPA predictions, and an exam Score Roadmap into one fast, native mobile interface.",
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
      "/screenshots/nust-one-6.png",
      "/screenshots/nust-one-7.png"
    ],
    features: [
      {
        title: "Score Roadmap (Target Grade Solver)",
        description:
          "Pick your target letter grade (such as an A or B+) for any enrolled course. The app evaluates your current graded weightages and calculates the exact scores needed in upcoming final exams, midterms, quizzes, and assignments to hit that goal.",
      },
      {
        title: "Attendance & Live Bunk Meter",
        description:
          "Track real-time course attendance percentages directly from Qalam. The built-in Bunk Meter calculates how many classes you can safely miss—or how many you must attend—to remain safely above the university's 75% attendance threshold.",
      },
      {
        title: "LMS Integration & Calendar Sync",
        description:
          "Connects to the NUST LMS (Moodle) to display enrolled courses, course files, and assignment, lab, or quiz deadlines. With one tap, sync all deadlines straight to your device's native calendar (such as Google Calendar) with custom advance alerts.",
      },
      {
        title: "GPA Predictor & Custom Weightages",
        description:
          "Calculates your current CGPA and predicts your semester GPA based on graded assessments from Qalam. Add and customize course weightages (quizzes, assignments, midterms, labs, and finals) for precise semester forecasts.",
      },
      {
        title: "What-If Grade Simulator",
        description:
          "Simulate hypothetical exam and assignment scores before results are officially published, giving you clear foresight into how different marks will impact your semester GPA.",
      },
      {
        title: "Biometric CGPA Privacy",
        description:
          "Keep sensitive academic records and CGPA private. The app lets you lock your CGPA behind your phone's biometric gate (fingerprint or face unlock) on the home dashboard.",
      },
      {
        title: "Class Hubs & Real-Time Sync",
        description:
          "Join your section with a code from your Class Representative (CR) to view shared timetables, makeup class alerts, and section announcements.",
      },
      {
        title: "Native Performance & Offline Caching",
        description:
          "Built natively with Kotlin and Jetpack Compose. Stale-while-revalidate offline caching ensures your attendance, timetable, and deadlines load instantly even when campus Wi-Fi is slow.",
      },
    ],
    faqs: [
      {
        question: "What is NUST One: Student LMS & Qalam?",
        answer:
          "NUST One: Student LMS & Qalam is an unofficial mobile companion app for students at the National University of Sciences and Technology (NUST) in Pakistan. It consolidates Qalam (attendance and grade tracking), a target Score Roadmap, LMS/Moodle (course content, assignment, lab, and quiz deadlines with calendar sync), and class event coordination into a single mobile app.",
      },
      {
        question: "Is NUST One an official NUST app?",
        answer:
          "No. NUST One is an independently developed, unofficial companion app built by a NUST student. It is not created, operated, or endorsed by NUST University itself, but it connects to the official Qalam and LMS systems using each student's own login credentials.",
      },
      {
        question: "Is my data safe on NUST One?",
        answer:
          "Yes. NUST One saves your Qalam and LMS credentials locally on your device in encrypted form. Your credentials and academic data never leave your device and are not stored on any external server.",
      },
      {
        question: "Does NUST One require a separate account?",
        answer:
          "No. NUST One uses your existing Qalam ID/password and LMS (Moodle) username/password to connect — the same credentials already used on the official Qalam and LMS websites. NUST One does not create a new, separate account for these services.",
      },
      {
        question: "How does the Score Roadmap work in NUST One?",
        answer:
          "The Score Roadmap reverse-engineers grade boundaries for your courses. By analyzing your graded quizzes, assignments, and midterms against course weightages, it calculates the minimum scores you need in remaining assessments to achieve your target letter grade (e.g., A, B+).",
      },
      {
        question: "How does the GPA Predictor work?",
        answer:
          "It reads your graded assessments from Qalam and calculates a predicted semester GPA using NUST assessment weightings (quizzes, assignments, midterms, finals, and lecture/lab splits). You can also enter custom weightages to match your instructor's specific course outline.",
      },
      {
        question: "Can I sync LMS assignment deadlines to my calendar?",
        answer:
          "Yes. With one tap, NUST One extracts your upcoming assignment, lab, and quiz deadlines from NUST LMS and adds them to your phone's native calendar (such as Google Calendar) with automated advance reminders.",
      },
      {
        question: "Can someone else see my CGPA if they use my phone?",
        answer:
          "No, if you enable the Biometric Lock. NUST One integrates with Android's native biometric prompt, allowing you to hide your CGPA and grade details behind fingerprint or device lock.",
      },
      {
        question: "What is the What-If Predictor in NUST One?",
        answer:
          "It lets you enter a hypothetical grade for an upcoming or ungraded assessment and see how it would affect your predicted GPA, without that grade having actually been posted yet.",
      },
      {
        question: "Can I see my LMS course content and deadlines in NUST One?",
        answer:
          "Yes. NUST One connects to the NUST LMS (Moodle) to show enrolled courses, course files, and upcoming assignment, lab, or quiz deadlines directly inside the app.",
      },
      {
        question: "How do I join my class on NUST One?",
        answer:
          "Enter a class code shared by your Class Representative (CR). Once approved, you can see and discuss events specific to that class.",
      },
      {
        question: "Who can post events for a class on NUST One?",
        answer:
          "Only the Class Representative (CR) of a given class, or an app administrator, can post new events for that class. Regular class members can view events and comment on them but cannot post new ones.",
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
