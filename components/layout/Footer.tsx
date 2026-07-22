"use client";

import Link from "next/link";

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
    <footer className="bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-12 border-b border-slate-800 py-20 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white">
              Accredian Enterprise
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Empower your workforce with industry-leading learning
              programs designed to upskill employees, improve
              productivity, and accelerate business growth.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>enterprise@accredian.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Programs
            </h3>

            <ul className="space-y-3">
              {programLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-800 py-12 lg:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Stay Updated
            </h3>

            <p className="mt-2 text-slate-400">
              Subscribe to receive enterprise learning insights and
              product updates.
            </p>
          </div>

          <div className="flex w-full max-w-xl gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-blue-500"
            />

            <Button variant="gradient">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Accredian Enterprise. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="rounded-full bg-slate-900 p-3 transition hover:bg-blue-600"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="#"
              className="rounded-full bg-slate-900 p-3 transition hover:bg-blue-600"
            >
              <FaXTwitter size={18} />
            </Link>

            <Link
              href="#"
              className="rounded-full bg-slate-900 p-3 transition hover:bg-blue-600"
            >
              <FaLinkedinIn size={18} />
            </Link>

            <Link
              href="#"
              className="rounded-full bg-slate-900 p-3 transition hover:bg-blue-600"
            >
              <FaInstagram size={18} />
            </Link>

            <button
              onClick={scrollTop}
              className="ml-4 rounded-full bg-blue-600 p-3 transition hover:scale-110 hover:bg-blue-700"
            >
              <ArrowUp size={18} className="text-white" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}