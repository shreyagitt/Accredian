"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 py-28"
    >
      {/* Background */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-200/20 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-[120px]" />

      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our enterprise learning solutions."
        />

        <div className="mx-auto mt-14 max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className={`
                  overflow-hidden
                  rounded-[28px]
                  border
                  bg-white/80
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-blue-300 shadow-xl"
                      : "border-blue-100 shadow-sm hover:border-blue-200 hover:shadow-lg"
                  }
                `}
              >
                {/* Top Accent */}

                <motion.div
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scaleX: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1 origin-left bg-gradient-to-r from-blue-600 to-cyan-500"
                />

                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-300 hover:bg-blue-50/40"
                >
                  <span className="pr-6 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-colors
                      ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-600"
                      }
                    `}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-8 pb-8">
                        <div className="mb-5 h-px bg-gradient-to-r from-blue-100 via-blue-200 to-transparent" />

                        <p className="text-[16px] leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}