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
    <section id="faq" className="bg-white py-24">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our enterprise learning solutions."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
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
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-slate-600 leading-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}