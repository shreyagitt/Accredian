"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import { programs } from "@/lib/data";

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 bg-white"
    >
      <Container>

        <SectionTitle
          title="Explore Learning Programs"
          subtitle="Choose from our industry-focused learning paths designed for enterprise teams."
        />

        <div className="grid gap-8 mt-14 md:grid-cols-2">

          {programs.map((program, index) => {

            const Icon = program.icon;

            return (

              <motion.div
                key={program.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-blue-100 p-4 transition group-hover:scale-110">
                    <Icon
                      size={34}
                      className="text-blue-600"
                    />
                  </div>

                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                    {program.level}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {program.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                    📅 {program.duration}
                  </span>

                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                    💻 {program.mode}
                  </span>

                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                    🎓 Certificate
                  </span>

                </div>

                <Button className="mt-8 w-full">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="ml-2 inline"
                  />

                </Button>

              </motion.div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}