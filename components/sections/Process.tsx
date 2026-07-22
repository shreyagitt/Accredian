"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section  id="process" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-28">
      {/* Background Blur */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

      <Container>
        <SectionTitle
          title="Our Learning Process"
          subtitle="A structured approach that helps organizations build future-ready teams with measurable learning outcomes."
        />

        {/* ================= Desktop Timeline ================= */}

        <div className="relative mt-24 hidden lg:block">

          {/* Main Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

          <div className="grid grid-cols-4 gap-10">

            {processSteps.map((step, index) => {

              const Icon = step.icon;

              const top = index % 2 === 0;

              return (

                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    y: top ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="relative flex flex-col items-center"
                >

                  {/* Top Content */}

                  {top && (
                    <>
                      <div className="mb-8 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,.15)]">

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                          Step {step.id}
                        </span>

                        <h3 className="mt-3 text-2xl font-bold text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                          {step.description}
                        </p>

                      </div>

                      {/* Connector */}
                      <div className="h-14 w-[3px] bg-gradient-to-b from-blue-500 to-cyan-500" />
                    </>
                  )}

                  {/* Circle */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 6,
                    }}
                    className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-white bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_20px_45px_rgba(37,99,235,.25)]"
                  >

                    <div className="absolute inset-2 rounded-full border border-white/30" />

                    <Icon
                      size={38}
                      className="relative z-10 text-white"
                    />

                  </motion.div>

                  {/* Bottom Content */}

                  {!top && (
                    <>
                      <div className="h-14 w-[3px] bg-gradient-to-b from-cyan-500 to-blue-500" />

                      <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,.15)]">

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                          Step {step.id}
                        </span>

                        <h3 className="mt-3 text-2xl font-bold text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                          {step.description}
                        </p>

                      </div>
                    </>
                  )}

                </motion.div>

              );

            })}

          </div>

        </div>
                {/* ================= Mobile Timeline ================= */}

        <div className="mt-16 space-y-8 lg:hidden">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="relative flex gap-5"
              >
                {/* Timeline */}

                <div className="flex flex-col items-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">

                    <Icon size={26} />

                  </div>

                  {index !== processSteps.length - 1 && (
                    <div className="mt-2 h-full w-[3px] rounded-full bg-gradient-to-b from-blue-600 to-cyan-500" />
                  )}

                </div>

                {/* Card */}

                <div className="mb-6 flex-1 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg">

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                    Step {step.id}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.6,
  }}
  viewport={{
    once: true,
  }}
  className="relative mt-24 overflow-hidden rounded-[36px] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-10 text-center shadow-[0_25px_60px_rgba(37,99,235,.10)]"
>
  {/* Background Decorations */}

  <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

  <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

  <div className="relative z-10">

    <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 shadow-sm">
      Enterprise Learning
    </span>

    <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
      Build
      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
        {" "}Future-Ready Teams
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      Empower your workforce through AI-powered learning,
      expert mentorship, hands-on projects, and enterprise
      analytics that deliver measurable business outcomes.
    </p>
<Link href="#contact">
    <button
      className="
      mt-10
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-cyan-500
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(37,99,235,.25)]
      "
    >
      Schedule a Demo
    </button>
    </Link>

  </div>
</motion.div>

      </Container>
    </section>
  );
}