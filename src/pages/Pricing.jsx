import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "$ 0",
    yearlyPrice: "$ 0",
    period: "/ forever",
    subtitle: "For professionals getting started with smaller projects.",
    cta: "Get started - it's free",
    note: "No credit card required",
    to: "/signup",
    features: [
      { text: "2 free projects", included: true },
      { text: "1 GB of cloud storage", included: true },
      { text: "For personal use", included: true },
      { text: "Weekly data backup", included: false },
      { text: "No Ads. No trackers", included: false },
      { text: "12/5 email support", included: true },
    ],
  },
  {
    name: "Basic",
    monthlyPrice: "$ 16.99",
    yearlyPrice: "$ 11.99",
    period: "/ mo",
    subtitle: "For personal use or small teams with simple workflows.",
    cta: "Start 14-day trial",
    note: "7-Day Money Back Guarantee",
    to: "/signup",
    features: [
      { text: "Up to 250 projects", included: true },
      { text: "15 GB of Cloud Storage", included: true },
      { text: "Shared team workspace", included: true },
      { text: "Daily data backup", included: true },
      { text: "No Ads. No trackers", included: true },
      { text: "12/7 email support", included: true },
    ],
  },
  {
    name: "Advanced",
    monthlyPrice: "$ 24.99",
    yearlyPrice: "$ 16.99",
    period: "/ mo",
    subtitle: "For growing teams that need more services and flexibility.",
    cta: "Upgrade your plan",
    note: "7-Day Money Back Guarantee",
    to: "/signup",
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Private cloud hosting", included: true },
      { text: "Custom security", included: true },
      { text: "Advanced user permissions", included: true },
      { text: "Multi-team management", included: true },
      { text: "24/7 Email Support", included: true },
    ],
  },
];

const trustedBrands = [
  { name: "INTDECO", src: "/images/brand-1.png" },
  { name: "SPARK", src: "/images/brand-2.png" },
  { name: "MOUNTAIN", src: "/images/brand-3.png" },
  { name: "LOREM LOGO", src: "/images/brand-4.png" },
  { name: "PEGASUS", src: "/images/brand-5.png" },
  { name: "FACTORY", src: "/images/brand-6.png" },
  { name: "HOSTING", src: "/images/brand-7.png" },
  { name: "ARK", src: "/images/brand-8.png" },
  { name: "BD ARCHITECT", src: "/images/brand-9.png" },
];

const comparisonRows = [
  { feature: "Available Projects", starter: "Up to 2", basic: "Up to 250", premium: "Unlimited" },
  { feature: "Available Storage", starter: "2Gb", basic: "50gb", premium: "350Gb" },
  { feature: "Private Cloud Hosting", starter: false, basic: false, premium: true },
  { feature: "User Permissions", starter: true, basic: true, premium: true },
  { feature: "Direct Integrations", starter: true, basic: true, premium: true },
  { feature: "Reusable Components", starter: false, basic: true, premium: true },
  { feature: "Data Backup", starter: "Weekly", basic: "Daily", premium: "Daily" },
  { feature: "No Ads. No Trackers", starter: false, basic: true, premium: true },
  { feature: "Advanced Security", starter: false, basic: true, premium: true },
  { feature: "Shared Team Workspace", starter: false, basic: true, premium: true },
  { feature: "Team Management", starter: false, basic: false, premium: true },
  { feature: "Customer Support", starter: "Limited", basic: "Basic", premium: "Priority" },
];

const paymentMethods = [
  { name: "VISA", className: "bg-[#1a1f71] text-white" },
  { name: "AMEX", className: "bg-[#2e77bb] text-white" },
  { name: "DISCOVER", className: "bg-[#2b2b2b] text-white" },
  { name: "PayPal", className: "bg-[#c9e3fb] text-[#1a3d7c]" },
  { name: "JCB", className: "bg-[#e8e8ee] text-[#1a3d7c]" },
  { name: "shopify", className: "bg-[#5fb246] text-white" },
];

const faqLeft = [
  {
    q: "Getting started with Martex",
    paragraphs: [
      "Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet",
    ],
  },
  {
    q: "How do I choose a plan?",
    paragraphs: [
      "An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula",
    ],
  },
  {
    q: "Do I need a credit card to sign up?",
    bullets: [
      "Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum tempor sapien",
      "Nemo ipsam egestas volute undo turpis purus lipsum primis aliquam sapien quaerat sodales pretium a purus",
    ],
  },
];

const faqRight = [
  {
    q: "Discounts for annual plans",
    paragraphs: [
      "Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus dolor luctus",
      "An enim nullam tempor sapien gravida donec congue metus. Vitae arcu mollis blandit integer nemo volute velna",
    ],
  },
  {
    q: "How to request a refund?",
    paragraphs: [
      "Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida donec neque blandit justo aliquam molestie nunc sapien justo",
    ],
  },
  {
    q: "Can I cancel at anytime?",
    paragraphs: [
      "An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula",
    ],
  },
];

function BrandLogo({ name, src }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-heading text-sm font-extrabold tracking-[0.14em] text-ink/55">
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="max-h-10 w-auto object-contain opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0"
    />
  );
}

function BrandMarquee({ brands }) {
  const loop = [...brands, ...brands];

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <style>{`
        @keyframes brand-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .brand-marquee-track { animation: brand-marquee 30s linear infinite; }
        .group:hover .brand-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track { animation: none; }
        }
      `}</style>

      <div className="brand-marquee-track flex w-max items-center">
        {loop.map((b, i) => (
          <div
            key={`${b.name}-${i}`}
            aria-hidden={i >= brands.length}
            className="flex h-12 w-44 shrink-0 items-center justify-center px-6"
          >
            <BrandLogo name={b.name} src={b.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckMark({ className = "text-[#1677ff]" }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M4 10.5l4 4 8-8.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossMark() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-ink/35"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  );
}

function TableCellValue({ value }) {
  if (typeof value === "boolean") {
    return (
      <span className="inline-flex justify-center">
        {value ? <CheckMark /> : <CrossMark />}
      </span>
    );
  }
  return <span className="text-base font-medium text-ink/75">{value}</span>;
}

function FaqItem({ index, item }) {
  return (
    <div>
      <h3 className="text-2xl font-bold leading-snug text-ink sm:text-[28px]">
        {index}. {item.q}
      </h3>
      {item.paragraphs &&
        item.paragraphs.map((p) => (
          <p key={p} className="mt-4 text-lg leading-8 text-ink/60">
            {p}
          </p>
        ))}
      {item.bullets && (
        <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-8 text-ink/60 marker:text-ink/40">
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="bg-white text-ink">
      {/* 1. PRICING HEADER, TOGGLE & CARDS */}
      <section className="pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-[1320px] px-5">
          <Reveal className="text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.12]">
              Simple, Flexible Pricing
            </h1>

            <div className="mt-7 flex items-center justify-center gap-4 text-xl text-ink/70">
              <span className={!annual ? "font-semibold text-ink" : ""}>
                Billed monthly
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={annual}
                aria-label="Toggle yearly billing"
                onClick={() => setAnnual((v) => !v)}
                className={`inline-flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
                  annual ? "bg-[#1677ff]" : "bg-[#cfd3dc]"
                }`}
              >
                <span
                  className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    annual ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={annual ? "font-semibold text-ink" : ""}>
                Billed yearly
              </span>
            </div>

            <p className="mt-4 text-base font-semibold text-[#1677ff]">
              Save up to 35% with yearly billing
            </p>
          </Reveal>

          {/* 3-Column Pricing Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {plans.map((plan, idx) => {
              const price = annual ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <Reveal key={plan.name} delay={idx * 80} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-8 shadow-[0_10px_35px_rgba(43,39,80,0.05)]">
                    <h2 className="text-3xl font-bold">{plan.name}</h2>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-heading text-5xl font-extrabold tracking-tight sm:text-[54px]">
                        {price}
                      </span>
                      <span className="text-xl text-ink/50">{plan.period}</span>
                    </div>

                    {/* Fixed minimum height keeps the buttons level across all cards */}
                    <p className="mt-4 text-[17px] leading-7 text-ink/65 lg:min-h-[84px] xl:min-h-[56px]">
                      {plan.subtitle}
                    </p>

                    <Link
                      to={plan.to}
                      className="mt-7 block w-full rounded-md bg-[#1677ff] px-6 py-3.5 text-center text-lg font-semibold text-white transition-colors hover:bg-[#0f5fd6]"
                    >
                      {plan.cta}
                    </Link>

                    <p className="mt-3 text-center text-sm text-ink/55">
                      {plan.note}
                    </p>

                    <ul className="mt-6 space-y-4 text-[17px]">
                      {plan.features.map((feat) => (
                        <li
                          key={feat.text}
                          className={`flex items-center gap-3 ${
                            feat.included ? "text-ink/85" : "text-ink/35"
                          }`}
                        >
                          <CheckMark
                            className={feat.included ? "text-ink" : "text-ink/25"}
                          />
                          <span>{feat.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY BRANDS STRIP */}
      <section className="border-y border-ink/10 bg-[#fafafa] py-14">
        <Reveal>
          <p className="text-center text-lg font-semibold text-ink/75">
            Trusted and used by over 3,400 companies
          </p>
          <div className="mt-9">
            <BrandMarquee brands={trustedBrands} />
          </div>
        </Reveal>
      </section>

      {/* 3. COMPARE OUR PLANS TABLE */}
      <section className="pt-20 lg:pt-28">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.15]">
              Compare Our Plans
            </h2>
            <p className="mt-4 text-xl text-ink/60">
              Complete list of features available in our pricing plans
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/15">
                  <th className="w-2/5 py-6 pr-6 text-lg font-bold text-ink" />
                  <th className="w-1/5 px-4 py-6 text-center text-xl font-bold text-ink">
                    Starter
                  </th>
                  <th className="w-1/5 px-4 py-6 text-center text-xl font-bold text-ink">
                    Basic
                  </th>
                  <th className="w-1/5 px-4 py-6 text-center text-xl font-bold text-ink">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="transition-colors hover:bg-[#f8f9fc]"
                  >
                    <td className="py-5 pr-6 text-[17px] font-medium text-ink/85">
                      {row.feature}
                    </td>
                    <td className="px-4 py-5 text-center">
                      <TableCellValue value={row.starter} />
                    </td>
                    <td className="px-4 py-5 text-center">
                      <TableCellValue value={row.basic} />
                    </td>
                    <td className="px-4 py-5 text-center">
                      <TableCellValue value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* 4. PAYMENT METHODS, MONEY BACK, SSL */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-14">
              <div>
                <h3 className="text-2xl font-bold sm:text-[28px]">
                  Accepted Payment Methods
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {paymentMethods.map((p) => (
                    <span
                      key={p.name}
                      className={`inline-flex h-10 min-w-[56px] items-center justify-center rounded px-3 text-xs font-extrabold tracking-wide ${p.className}`}
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold sm:text-[28px]">
                  Money Back Guarantee
                </h3>
                <p className="mt-4 text-lg leading-8 text-ink/60">
                  Explore Martex Premium for 14 days. If it’s not a perfect fit,
                  receive a full refund.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold sm:text-[28px]">
                  SSL Encrypted Payment
                </h3>
                <p className="mt-4 text-lg leading-8 text-ink/60">
                  Your information is protected by 256-bit SSL encryption.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. QUESTIONS & ANSWERS */}
      <section className="bg-[#f7f7fb] py-20 lg:py-28">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal className="text-center">
            <h2 className="text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.12]">
              Questions &amp; Answers
            </h2>
            <p className="mt-4 text-xl text-ink/55">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
              <div className="space-y-12">
                {faqLeft.map((item, i) => (
                  <FaqItem key={item.q} index={i + 1} item={item} />
                ))}
              </div>
              <div className="space-y-12">
                {faqRight.map((item, i) => (
                  <FaqItem key={item.q} index={i + 4} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <p className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#eeeef6] px-8 py-4 text-center text-xl text-ink/65">
                Have any questions?
                <Link
                  to="/contact"
                  className="font-semibold text-[#1677ff] underline underline-offset-4 hover:text-[#0f5fd6]"
                >
                  Get in Touch
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. FINAL CTA CARD */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#5a54c8] px-6 py-20 text-center text-white sm:py-24">
              {/* decorative shapes */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/[0.06]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-black/[0.05]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-10 left-10 hidden h-24 w-40 sm:block"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-24 top-12 hidden h-20 w-36 sm:block"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.12]">
                  Give it a try, it’s free!
                </h2>
                <p className="mt-5 text-xl text-white/90 sm:text-2xl">
                  It only takes a few clicks to get started
                </p>

                <Link
                  to="/signup"
                  className="mt-10 inline-block rounded-md bg-[#1677ff] px-10 py-4 text-xl font-semibold text-white transition-colors hover:bg-[#0f5fd6]"
                >
                  Get started - it's free
                </Link>

                <p className="mt-7 inline-flex items-center justify-center gap-2 text-lg text-white/90 sm:text-xl">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10.5l4 4 8-8.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Free for 14 days, no credit card required.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}