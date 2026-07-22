"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { benefits } from "@/lib/data";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionTitle
          title="Why Enterprises Choose Us"
          subtitle="Empowering organizations with scalable, outcome-driven learning solutions."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 transition-transform duration-300 group-hover:rotate-6">
                  <Icon
                    className="text-blue-600"
                    size={32}
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}