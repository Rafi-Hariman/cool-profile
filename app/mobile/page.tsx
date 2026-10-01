import type { Metadata } from "next";
import {
  Facebook,
  ImageIcon,
  Instagram,
  Linkedin,
  Play,
  Settings,
  Twitter,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "App Mobile",
  description: "Mobile campaign command center landing page.",
};

interface NavigationItem {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface DashboardCard {
  value: string;
  label: string;
  className: string;
}

const navigation: NavigationItem[] = [
  { label: "Feature", href: "#feature" },
  { label: "Showcase", href: "#showcase" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Faq", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// TODO: wire to service
const socialLinks: SocialLink[] = [
  { label: "Twitter", href: "#twitter", icon: Twitter },
  { label: "Facebook", href: "#facebook", icon: Facebook },
  { label: "Instagram", href: "#instagram", icon: Instagram },
  { label: "LinkedIn", href: "#linkedin", icon: Linkedin },
];

// TODO: wire to service
const dashboardCards: DashboardCard[] = [
  {
    value: "$ 20K",
    label: "Total earnings",
    className:
      "left-[2%] top-[2%] z-30 w-[38%] -rotate-[4deg] bg-fuchsia-600",
  },
  {
    value: "20",
    label: "Campaigns",
    className:
      "right-[3%] top-[-8%] z-40 w-[38%] rotate-[2deg] bg-white text-violet-500",
  },
  {
    value: "207",
    label: "Subscribers",
    className:
      "right-[-14%] top-[-28%] z-50 w-[36%] rotate-[5deg] bg-cyan-400 text-white",
  },
  {
    value: "321",
    label: "Followers",
    className:
      "left-[5%] top-[38%] z-40 w-[40%] -rotate-[2deg] bg-cyan-500",
  },
  {
    value: "20",
    label: "Weekly sales",
    className: "right-[-8%] top-[36%] z-50 w-[42%] rotate-[4deg] bg-cyan-400",
  },
];

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function BrandMark() {
  return (
    <a
      href="#feature"
      aria-label="Mobile home"
      className={`group flex shrink-0 flex-col items-center gap-2 rounded-md ${focusClasses}`}
    >
      <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 shadow-md transition-transform duration-200 group-hover:scale-105 group-active:scale-[0.98]">
        <Play
          aria-hidden="true"
          className="ml-1 size-7 text-white"
          strokeWidth={3}
        />
      </span>
      <span className="text-sm font-semibold text-violet-600">Mobile</span>
    </a>
  );
}

function DownloadBadges() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="#app-store"
        aria-label="Download on the App Store"
        className={`flex min-h-14 items-center gap-3 rounded-lg bg-black px-4 py-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85 active:scale-[0.98] ${focusClasses}`}
      >
        <ImageIcon aria-hidden="true" className="size-7 text-white" />
        <span className="flex flex-col leading-none">
          <span className="text-[9px] uppercase tracking-wide">
            Download on the
          </span>
          <span className="mt-1 text-lg font-semibold">App Store</span>
        </span>
      </a>

      <a
        href="#google-play"
        aria-label="Get it on Google Play"
        className={`flex min-h-14 items-center gap-3 rounded-lg bg-black px-4 py-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85 active:scale-[0.98] ${focusClasses}`}
      >
        <span className="grid size-7 place-items-center rounded-md bg-gradient-to-br from-cyan-400 via-emerald-400 to-yellow-400">
          <Play
            aria-hidden="true"
            className="ml-0.5 size-4 fill-white text-white"
          />
        </span>
        <span className="flex flex-col leading-none">
          <span className="text-[9px] uppercase tracking-wide">Get it on</span>
          <span className="mt-1 text-lg font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div
      role="group"
      aria-label="Mobile analytics dashboard preview"
      className="relative mx-auto h-[360px] w-[340px] max-w-full sm:h-[430px] sm:w-[430px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-[2%] bottom-[5%] top-[25%] rotate-[8deg] rounded-[34%_20%_38%_22%] bg-violet-300/75"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[6%] left-[22%] h-[83%] w-[58%] rotate-[28deg] rounded-[42px] bg-violet-100 shadow-[0_28px_48px_rgba(20,18,70,0.35)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[5%] left-[25%] h-[84%] w-[55%] rotate-[28deg] overflow-hidden rounded-[38px] border-[9px] border-white bg-white shadow-[0_25px_45px_rgba(19,18,63,0.32)]"
      >
        <div className="h-full rounded-[27px] bg-slate-50 px-4 pb-5 pt-8">
          <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-slate-200" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-14 rounded-lg bg-fuchsia-500" />
            <div className="h-14 rounded-lg bg-violet-100" />
            <div className="h-14 rounded-lg bg-cyan-400" />
            <div className="h-14 rounded-lg bg-cyan-100" />
          </div>
          <div className="mt-5 text-center">
            <p className="text-[9px] font-bold text-slate-700">
              Product statistics
            </p>
            <div className="mt-3 space-y-2">
              {[82, 66, 74].map((width) => (
                <div
                  key={width}
                  className="flex items-center gap-2 rounded-md bg-white p-1.5"
                >
                  <span className="size-3 rounded-full bg-violet-200" />
                  <span className="h-1.5 flex-1 rounded-full bg-slate-100">
                    <span
                      className="block h-full rounded-full bg-cyan-300"
                      style={{ width: `${width}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-[3%] top-[23%] h-[52%] rotate-[28deg]">
        {dashboardCards.map((card) => (
          <div
            key={card.label}
            className={`absolute rounded-md p-3 text-white shadow-[0_10px_20px_rgba(23,20,74,0.2)] ${card.className}`}
          >
            <p className="text-sm font-bold">{card.value}</p>
            <p className="mt-1 text-[7px] font-medium opacity-80">
              {card.label}
            </p>
            <div className="mt-2 flex h-5 items-end gap-1">
              {[35, 55, 42, 78, 64].map((height, index) => (
                <span
                  key={`${card.label}-${index}`}
                  className="w-2 rounded-sm bg-current opacity-45"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MobilePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#9869df] via-[#5d42bd] to-[#376ac0] px-4 pb-0 pt-10 text-slate-900 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute -left-[9%] -top-[28%] size-[620px] rounded-full bg-violet-400/55"
      />
      <div
        aria-hidden="true"
        className="absolute left-[21%] top-[-20%] size-[580px] rounded-full bg-violet-900/35"
      />
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[3%] size-10 rounded-full border-[9px] border-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute right-[18%] top-[2%] size-12 rotate-[-24deg] border-[9px] border-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[22%] h-14 w-2 rotate-[75deg] bg-white/5 after:absolute after:left-1/2 after:top-1/2 after:h-2 after:w-14 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white/5"
      />

      <header className="relative z-10 mx-auto max-w-6xl text-center text-white">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          App Mobile
        </h1>
        <p className="mt-2 text-2xl font-light sm:text-3xl lg:text-4xl">
          Website Lading Page
        </p>
      </header>

      <section
        id="feature"
        className="relative z-10 mx-auto mt-8 max-w-[1380px] overflow-hidden rounded-t-[56px] bg-gradient-to-r from-white via-white to-blue-500/35 shadow-[0_-5px_35px_rgba(34,25,94,0.12)]"
      >
        <div className="absolute inset-y-0 left-0 w-[67%] rounded-tr-[42%] bg-white" />

        <div className="relative z-10 flex min-h-[640px] flex-col px-8 pb-12 pt-7 sm:px-14 lg:px-16">
          <div className="flex items-start justify-between gap-8">
            <BrandMark />

            <nav
              aria-label="Primary navigation"
              className="hidden flex-1 items-center justify-center gap-12 pt-7 lg:flex"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-sm text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-violet-600 ${focusClasses}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 pt-5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`grid size-9 place-items-center rounded-full bg-white/25 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/40 active:scale-[0.98] ${focusClasses}`}
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}

              <a
                href="#settings"
                aria-label="Settings"
                className={`grid size-9 place-items-center rounded-full bg-violet-600 text-white transition-all duration-200 hover:rotate-45 hover:bg-violet-700 active:scale-[0.98] ${focusClasses}`}
              >
                <Settings aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          {/* Below lg the inline nav is hidden, so it moves to its own
              horizontally scrollable row — same pattern as components/layout/mobile-header.tsx.
              The row overflows at phone widths, so a right-edge fade signals that
              more links are reachable by scrolling. */}
          <nav
            aria-label="Primary navigation"
            className="mt-6 -mx-1 flex gap-6 overflow-x-auto px-1 pb-1 [mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] lg:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`shrink-0 whitespace-nowrap rounded-sm text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-violet-600 ${focusClasses}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-16 grid flex-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-[650px]">
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Welcome to your mobile
                <span className="mt-3 block text-violet-600">
                  command center
                </span>
              </h2>
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-slate-500 sm:text-2xl">
                It&apos;s an all-in-one tool for tracking how well
                <br className="hidden sm:block" />{" "}
                your campaigns are performing.
              </p>
              <DownloadBadges />
            </div>

            <DashboardMockup />
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] right-[-2%] hidden origin-center rotate-90 text-sm leading-8 text-slate-900/80 2xl:block"
      >
        #OpenSourceDesigns #WhateverYouCanDo #DesignsFreedom
        <br />
        #NoAttributionRequired #respect #KaryaAnakBangsa
      </div>

      {/*
        Anchor targets. Only #feature is a real section on this page — the rest
        are unbuilt destinations, so they stay as href="#" placeholders above
        rather than as invisible elements masquerading as sections.
        TODO: replace the placeholder hrefs with real routes/URLs.
      */}
      <span id="showcase" className="sr-only">
        Showcase
      </span>
      <span id="testimonials" className="sr-only">
        Testimonials
      </span>
      <span id="faq" className="sr-only">
        Faq
      </span>
      <span id="contact" className="sr-only">
        Contact
      </span>
      <span id="twitter" className="sr-only">
        Twitter
      </span>
      <span id="facebook" className="sr-only">
        Facebook
      </span>
      <span id="instagram" className="sr-only">
        Instagram
      </span>
      <span id="linkedin" className="sr-only">
        LinkedIn
      </span>
      <span id="settings" className="sr-only">
        Settings
      </span>
      <span id="app-store" className="sr-only">
        App Store
      </span>
      <span id="google-play" className="sr-only">
        Google Play
      </span>
    </main>
  );
}
