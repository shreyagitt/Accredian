"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  Building2,
  Users,
  GraduationCap,
  Award,
} from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Professionals Trained",
  },
  {
    icon: Building2,
    value: 300,
    suffix: "+",
    label: "Enterprise Clients",
  },
  {
    icon: GraduationCap,
    value: 120,
    suffix: "+",
    label: "Programs",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Success Rate",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-28"
    >
      <Container>

        <div className="grid min-h-[90vh] items-center gap-14 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Enterprise Learning Platform
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
              Upskill Your
              <span className="block text-blue-600">
                Workforce
              </span>
              with Industry Ready Programs
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Empower your employees through
              AI-powered learning programs,
              certifications and measurable business outcomes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                Get Started
              </Button>

              <button className="flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition hover:bg-gray-100">
                Explore Programs
                <ArrowRight size={18}/>
              </button>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity:0,x:40 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            className="relative"
          >

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <img
                src="/images/hero.png"
                alt="Hero"
                className="mx-auto w-full max-w-md"
              />

            </div>

            <motion.div
              animate={{
                y:[0,-15,0]
              }}
              transition={{
                repeat:Infinity,
                duration:4
              }}
              className="absolute -left-8 top-10 rounded-2xl bg-white p-5 shadow-xl"
            >
              <p className="text-sm text-gray-500">
                Learning Progress
              </p>

              <h3 className="text-3xl font-bold text-blue-600">
                92%
              </h3>

            </motion.div>

            <motion.div
              animate={{
                y:[0,15,0]
              }}
              transition={{
                repeat:Infinity,
                duration:5
              }}
              className="absolute -right-8 bottom-10 rounded-2xl bg-white p-5 shadow-xl"
            >
              <p className="text-sm text-gray-500">
                Certifications
              </p>

              <h3 className="text-3xl font-bold text-blue-600">
                12K+
              </h3>

            </motion.div>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item,index)=>{

            const Icon=item.icon;

            return(

              <motion.div
              key={index}
              whileHover={{
                y:-8
              }}
              className="rounded-2xl bg-white p-6 shadow-lg"
              >

                <Icon
                className="mb-4 text-blue-600"
                size={34}
                />

                <h2 className="text-3xl font-bold">

                  <CountUp
                  end={item.value}
                  duration={2}
                  />

                  {item.suffix}

                </h2>

                <p className="mt-2 text-gray-500">
                  {item.label}
                </p>

              </motion.div>

            )

          })}

        </div>

      </Container>
    </section>
  );
}