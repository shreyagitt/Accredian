"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Users,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { benefits, benefitChecklist } from "@/lib/data";


export default function Benefits() {
  return (
    <section  id="benefits" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-24">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

      <Container>
        <SectionTitle
          title="Why Organizations Choose Us"
          subtitle="Deliver measurable learning outcomes with enterprise-grade technology, expert instructors, and actionable insights."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -8,
                    }}
                    className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-[0_20px_45px_rgba(37,99,235,.15)]"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white transition duration-300 group-hover:scale-110">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Enterprise Benefits
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
              Learning That
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Drives Business Growth
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From onboarding to leadership development, our platform enables
              organizations to build future-ready teams through personalized
              learning experiences and measurable business impact.
            </p>

            <div className="mt-10 space-y-5">
              {benefitChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="rounded-full bg-green-100 p-1">
                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />
                  </div>

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button
              className="mt-10"
              rightIcon={<ArrowRight size={18} />}
            >
              Explore Platform
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}