import { AppWindow, Lightbulb, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-mist">
      <div className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-32">
        <Reveal>
          <p className="eyebrow">About SZN Labs</p>
          <h2 className="h2 mt-5">
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
    <section id="what-we-do" className="bg-mist">
      <div className="container-x py-20 lg:py-32">
        <Reveal>
          <p className="eyebrow">What We Do</p>
          <h2 className="h2 mt-5 max-w-2xl">We Build Digital Products.</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
          {areas.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-xl bg-paper p-7 lg:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-10 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{body}</p>
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
    title: "Think Differently",
    body: "Challenge assumptions and explore better possibilities.",
  },
  {
    title: "Build Intentionally",
    body: "Focus on usability, simplicity, and meaningful solutions.",
  },
  {
    title: "Keep Evolving",
    body: "Improve continuously and never stop exploring what's next.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="on-dark bg-ink text-paper">
      <div className="container-x py-20 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow !text-yellow">Our Philosophy</p>
            <h2 className="h2 mt-5">A New Season of Building.</h2>
          </Reveal>
          <Reveal delay={120} className="space-y-4 text-lg leading-relaxed text-stone lg:pt-10">
            <p>We believe there is always room to build something better.</p>
            <p>
              We experiment, learn, improve, and create products that bring
              ideas to life.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid md:grid-cols-3 lg:mt-20">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="border-t border-paper/20 py-8 md:border-l md:border-t-0 md:px-8 md:py-2 md:first:border-l-0 md:first:pl-0"
            >
              <Reveal delay={i * 90}>
                <span className="mb-6 block h-1 w-8 bg-yellow" />
                <h3 className="text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
