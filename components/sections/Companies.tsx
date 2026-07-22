"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { companies } from "@/lib/data";

export default function Companies() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Trusted by Leading Organizations"
          subtitle="Helping enterprises build future-ready teams across industries."
        />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
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
                y: -5,
                scale: 1.05,
              }}
              className="flex h-24 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={90}
                height={40}
                className="object-contain grayscale transition hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}