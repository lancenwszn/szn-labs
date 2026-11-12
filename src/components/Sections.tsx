import { AppWindow, Lightbulb, RefreshCw, Rocket, Target } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about">
      <div className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">About SZN Labs</p>
          <h2 className="h2 mt-4">
            Built Around Ideas. Driven by Possibilities.
          </h2>
        </Reveal>
        <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            SZN Labs is an independent software company focused on creating
            digital products that solve problems, simplify experiences, and
            make everyday work better.
          </p>
          <p>
            We believe great products begin with curiosity, thoughtful
            experimentation, and a commitment to building things that matter.
          </p>
          <p className="border-l-4 border-yellow pl-5 text-xl font-semibold leading-snug text-ink sm:text-2xl">
            Our focus is simple: turn good ideas into useful products.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const areas = [
  {
    icon: AppWindow,
    title: "Software & Applications",
    body: "We develop applications designed to solve real problems and deliver useful experiences.",
  },
  {
    icon: Lightbulb,
    title: "Digital Innovation",
    body: "We explore new ideas, technologies, and opportunities to create better digital solutions.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    body: "From concept and design to development and launch, we build products with purpose.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="on-dark bg-ink text-paper">
      <div className="container-x py-20 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-yellow">What We Do</p>
          <h2 className="h2 mt-4">We Build Digital Products.</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-14">
          {areas.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-md border border-paper/10 bg-paper/5 p-7 lg:p-8">
                <Icon
                  size={26}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="text-yellow"
                />
                <h3 className="mt-8 text-lg font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    icon: Lightbulb,
    title: "Think Differently",
    body: "Challenge assumptions and explore better possibilities.",
  },
  {
    icon: Target,
    title: "Build Intentionally",
    body: "Focus on usability, simplicity, and meaningful solutions.",
  },
  {
    icon: RefreshCw,
    title: "Keep Evolving",
    body: "Improve continuously and never stop exploring what's next.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-yellow text-ink">
      <div className="container-x py-20 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-ink">Our Philosophy</p>
          <h2 className="h2 mt-4">A New Season of Building.</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            We believe there is always room to build something better. We
            experiment, learn, improve, and create products that bring ideas
            to life.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-14">
          {principles.map(({ icon: Icon, title, body }, i) => (
            <li key={title}>
              <Reveal delay={i * 90} className="flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-yellow">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-ink/85">{body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
