"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 py-24 text-white">

      {/* Background Blur */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-400 opacity-20 blur-3xl"/>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl"/>

      <Container>

        <SectionTitle
          title="Driving Measurable Business Impact"
          subtitle="Helping organizations build future-ready teams."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item,index)=>(

            <motion.div

              key={index}

              whileHover={{
                y:-8,
                scale:1.04,
              }}

              className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg"

            >

              <h2 className="text-5xl font-bold">

                <CountUp

                  end={item.value}

                  duration={2}

                  decimals={item.value % 1 ? 1 : 0}

                />

                {item.suffix}

              </h2>

              <p className="mt-3 text-blue-100">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}