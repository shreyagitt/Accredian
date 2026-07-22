"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section
      id="process"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionTitle
          title="Our Learning Process"
          subtitle="A structured journey designed to maximize employee growth and business outcomes."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 hidden h-full w-1 bg-blue-200 md:block" />

          <div className="space-y-10">

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative flex gap-6"
              >
                {/* Timeline Dot */}

                <div className="relative z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Card */}

                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </Container>
    </section>
  );
}