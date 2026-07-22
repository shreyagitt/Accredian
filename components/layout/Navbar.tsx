"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const bottom = top + section.clientHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

     <Link
  href="/"
  className="flex items-center gap-3"
>
  {/* <Image
    src="/logos/image.png"
    alt="Accredian Logo"
    width={48}
    height={48}
    priority
    className="h-12 w-auto"
  /> */}
 
  <span className="text-2xl font-bold">
    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
      Accredian
    </span>
  </span> 
</Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition ${
                  active === item.href.replace("#", "")
                    ? "font-semibold text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden lg:block">
  <Link href="#contact">
    <Button>Contact Us</Button>
  </Link>
</div>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="border-t bg-white lg:hidden"
          >
            <Container>
              <div className="flex flex-col py-5">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-2 py-3 transition hover:bg-blue-50"
                  >
                    {item.title}
                  </a>
                ))}

                <Button className="mt-5">
                  Contact Us
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}