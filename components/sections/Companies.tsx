"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { companies } from "@/lib/data";

export default function Companies() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <Container>
        <SectionTitle
          title="Trusted by Leading Organizations"
          subtitle="Helping enterprises build future-ready teams across industries."
        />

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                group
                flex
                h-28
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-100
                bg-gradient-to-br
                from-white
                to-blue-50
                p-5
                shadow-md
                transition-all
                duration-300
                hover:border-blue-400
                hover:shadow-[0_15px_40px_rgba(37,99,235,0.18)]
                hover:bg-gradient-to-br
                hover:from-blue-50
                hover:to-cyan-50
              "
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={100}
                height={50}
                className="
                  h-10
                  w-auto
                  object-contain
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}