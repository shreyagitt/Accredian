"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "../ui/Container";
import Button from "../ui/Button";

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Enterprise", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

const programLinks = [
  { label: "Data Science", href: "#" },
  { label: "AI & Machine Learning", href: "#" },
  { label: "Cloud Computing", href: "#" },
  { label: "Cyber Security", href: "#" },
];

const resourceLinks = [
  { label: "Blogs", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "FAQs", href: "#faq" },
  { label: "Support", href: "#" },
];

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer  className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-[#E4F1FF] text-slate-700">

      {/* Background Glow */}

      {/* Background Glow */}

<div className="absolute -left-44 top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[170px]" />

<div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-300/20 blur-[170px]" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,.08),transparent_70%)]" />

      <Container>

        <div className="relative z-10 grid gap-14 border-b border-blue-100/70 py-24 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-4xl font-black tracking-tight">

              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Accredian
              </span>

              <span className="text-slate-900">
                {" "}Enterprise
              </span>

            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-600">
              Empower your workforce through AI-powered enterprise
              learning, certification programs, and measurable
              upskilling designed for modern organizations.
            </p>

            <div className="mt-10 space-y-4">

              <div className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-xl shadow-lg shadow-blue-100/50  hover:border-blue-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">

                <div className="rounded-xl bg-blue-600/15 p-3 text-blue-400">
                  <Mail size={18} />
                </div>

                <span className="text-slate-600">
                  enterprise@accredian.com
                </span>

              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-xl shadow-lg shadow-blue-100/50  hover:border-blue-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">

                <div className="rounded-xl bg-blue-600/15 p-3 text-blue-400">
                  <Phone size={18} />
                </div>

                <span className="text-slate-600">
                  +91 98765 43210
                </span>

              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-xl shadow-lg shadow-blue-100/50  hover:border-blue-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">

                <div className="rounded-xl bg-blue-600/15 p-3 text-blue-400">
                  <MapPin size={18} />
                </div>

                <span className="text-slate-600">
                  Gurugram, Haryana, India
                </span>

              </div>

            </div>

          </motion.div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Company
            </h3>

            <ul className="space-y-4">

              {companyLinks.map((item) => (

                <li key={item.label}>

                  <Link
                    href={item.href}
                    className="group inline-flex items-center transition-all duration-300 hover:translate-x-2 hover:text-blue-400"
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Programs */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Programs
            </h3>

            <ul className="space-y-4">

              {programLinks.map((item) => (

                <li key={item.label}>

                  <Link
                    href={item.href}
                    className="group inline-flex items-center transition-all duration-300 hover:translate-x-2 hover:text-blue-400"
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Resources
            </h3>

            <ul className="space-y-4">

              {resourceLinks.map((item) => (

                <li key={item.label}>

                  <Link
                    href={item.href}
                    className="group inline-flex items-center transition-all duration-300 hover:translate-x-2 hover:text-blue-400"
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>
                {/* Newsletter */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="relative my-16 overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-r from-white/90 to-[#f4f9ff]/90 p-10 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-xl"
        >
          {/* Background Glow */}

          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Left */}

            <div className="max-w-lg">

              <span className="inline-flex rounded-full bg-blue-600/15 px-4 py-2 text-sm font-semibold text-blue-300">
                Newsletter
              </span>

              <h3 className="mt-5 text-4xl font-black text-slate-900">
                Stay Ahead with Enterprise Learning
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Get expert insights, AI trends, learning resources,
                case studies, and enterprise updates delivered
                directly to your inbox.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-slate-700 bg-white px-4 py-2 text-sm text-slate-600">
                  Weekly Insights
                </span>

                <span className="rounded-full border border-slate-700 bg-white px-4 py-2 text-sm text-slate-600">
                  No Spam
                </span>

                <span className="rounded-full border border-slate-700 bg-white px-4 py-2 text-sm text-slate-600">
                  Unsubscribe Anytime
                </span>

              </div>

            </div>

            {/* Right */}

            <div className="w-full max-w-xl">

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const email =
                    (
                      e.currentTarget.elements.namedItem(
                        "newsletter"
                      ) as HTMLInputElement
                    ).value;

                  const regex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  if (!regex.test(email)) {
                    alert("Please enter a valid email.");
                    return;
                  }

                  alert("Thank you for subscribing!");

                  e.currentTarget.reset();
                }}
                className="space-y-5"
              >

                <div className="flex flex-col gap-4 sm:flex-row">

                  <input
                    name="newsletter"
                    type="email"
                    placeholder="Enter your work email"
                    className="
                    h-14
                    flex-1
                    rounded-2xl
                    border
                    bg-white
border-blue-200

shadow-sm
                    px-6
                    text-slate-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-500
                    focus:border-blue-500
                    focus:ring-blue-500/20
                    focus:ring-4
                    
                    "
                  />

                  <Button
                    variant="gradient"
                    size="lg"
                  >
                    Subscribe →
                  </Button>

                </div>

                <p className="text-sm text-slate-500">
                  By subscribing you agree to receive emails
                  about enterprise learning, product updates,
                  and industry insights.
                </p>

              </form>

            </div>

          </div>

        </motion.div>
                {/* Bottom */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 border-t border-blue-100/70 py-10 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Copyright */}

          <div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-slate-600">
                Accredian Enterprise
              </span>
              . All rights reserved.
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Empowering organizations through AI-driven workforce
              transformation.
            </p>
          </div>

          {/* Social Icons */}

          <div className="flex items-center gap-3">

            {[
              {
                icon: <FaFacebookF size={17} />,
                href: "#",
              },
              {
                icon: <FaXTwitter size={17} />,
                href: "#",
              },
              {
                icon: <FaLinkedinIn size={17} />,
                href: "#",
              },
              {
                icon: <FaInstagram size={17} />,
                href: "#",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  href={item.href}
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-100
                  bg-white
                  text-slate-600
                  shadow-md shadow-blue-100/40
                  transition-all
                  duration-300
                  hover:bg-gradient-to-r
hover:from-blue-600
hover:to-cyan-500
hover:text-white
hover:border-transparent
hover:shadow-xl
hover:shadow-blue-300/40
                  "
                >
                  {item.icon}
                </Link>
              </motion.div>
            ))}


          </div>
        </motion.div>

      </Container>
    </footer>
  );
}