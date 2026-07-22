"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FCFDFF] via-[#F5F9FF] to-[#EDF5FF] py-24 text-slate-900">

  {/* Top Left Glow */}
  <div className="absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-[#DCEEFF]/70 blur-[110px]" />

  {/* Top Right Glow */}
  <div className="absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-[#EAF4FF]/70 blur-[100px]" />

  {/* Bottom Left Glow */}
  <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-[#F2F8FF] blur-[90px]" />

  {/* Bottom Right Glow */}
  <div className="absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full bg-[#D8EBFF]/60 blur-[120px]" />

  {/* Soft Radial Overlay */}
  <div
    className="absolute inset-0 opacity-70"
    style={{
      background:
        "radial-gradient(circle at top left, rgba(59,130,246,0.05), transparent 35%), radial-gradient(circle at bottom right, rgba(14,165,233,0.05), transparent 40%)",
    }}
  />

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

              className="rounded-3xl border border-blue-100 bg-white/80 p-8 backdrop-blur-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(37,99,235,.12)]"

            >

              <h2 className="text-4xl font-bold">

                <CountUp

                  end={item.value}

                  duration={2}

                  decimals={item.value % 1 ? 1 : 0}

                />

                {item.suffix}

              </h2>

              <p className="mt-3 text-blue-600">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}