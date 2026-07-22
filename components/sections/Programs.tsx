"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  BarChart3,
  ShieldCheck,
  Cloud,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const programs = [
  {
    title: "Artificial Intelligence",
    description:
      "Master modern AI, machine learning, deep learning and generative AI with hands-on projects.",
    duration: "16 Weeks",
    level: "Advanced",
    icon: Brain,
    featured: true,
  },
  {
    title: "Data Science",
    description:
      "Learn Python, SQL, analytics, visualization and predictive modeling for business decisions.",
    duration: "14 Weeks",
    level: "Intermediate",
    icon: BarChart3,
  },
  {
    title: "Cyber Security",
    description:
      "Develop expertise in ethical hacking, cloud security, SOC operations and risk management.",
    duration: "12 Weeks",
    level: "Intermediate",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Computing",
    description:
      "Build scalable cloud-native applications using AWS, Azure and DevOps practices.",
    duration: "15 Weeks",
    level: "Beginner",
    icon: Cloud,
  },
];

export default function Programs() {
  return (
    <section
    id="programs" 
    className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-24">
      <Container>
        <SectionTitle
          title="Enterprise Learning Programs"
          subtitle="Industry-designed learning paths that help organizations build future-ready teams."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative flex flex-col rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
              >
                {program.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                )}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg transition duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {program.description}
                </p>

                <div className="mt-6 flex gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {program.duration}
                  </span>

                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
                    {program.level}
                  </span>
                </div>

                <Button
                  className="mt-8 w-full"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Learn More
                </Button>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}