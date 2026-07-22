"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import {
  CheckCircle,
  Users,
  GraduationCap,
  BarChart3,
} from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";

import {
  leadSchema,
  LeadFormData,
} from "@/lib/schema";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      toast.success("Request submitted successfully!");

      reset();
    } catch {
      toast.error("Unable to submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

return (
  <section
    id="contact"
    className="relative overflow-hidden bg-gradient-to-br from-[#FDFEFF] via-[#F5F9FF] to-[#EDF5FF] py-28"
  >
    {/* Background */}

    <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-[140px]" />

    <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-[140px]" />

    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-[120px]" />

    <Container>

      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            🚀 Enterprise Learning Solutions
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

            Empower Your
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Workforce
            </span>

          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Accelerate employee growth with customized learning programs,
            expert mentorship, measurable outcomes, and enterprise-grade
            analytics designed for modern organizations.
          </p>

          {/* Trust Stats */}

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

              <h3 className="text-3xl font-black text-blue-700">
                300+
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Enterprise Clients
              </p>

            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

              <h3 className="text-3xl font-black text-blue-700">
                95%
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Completion Rate
              </p>

            </div>

          </div>

          {/* Features */}

          <div className="mt-12 space-y-5">

            {[
              {
                icon: CheckCircle,
                text: "Customized Learning Paths",
              },
              {
                icon: GraduationCap,
                text: "Industry Expert Mentors",
              },
              {
                icon: Users,
                text: "Dedicated Success Manager",
              },
              {
                icon: BarChart3,
                text: "Advanced Learning Analytics",
              },
            ].map(({ icon: Icon, text }) => (

              <div
                key={text}
                className="group flex items-center gap-5 rounded-2xl border border-blue-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">

                  <Icon size={24} />

                </div>

                <p className="text-lg font-medium text-slate-700">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_25px_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl lg:p-10"
>
  {/* Decorative Gradient */}

  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />

  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />

  <div className="relative z-10">

    {/* Header */}

    <div className="mb-8">

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
        Get Started
      </span>

      <h3 className="mt-4 text-3xl font-bold text-slate-900">
        Request a Demo
      </h3>

      <p className="mt-2 text-slate-500">
        Fill in your details and our team will contact you within 24 hours.
      </p>

    </div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >

      <div className="grid gap-5 md:grid-cols-2">

        <Input
          label="Full Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email")}
        />

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <Input
          label="Phone Number"
          placeholder="+91 9876543210"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Input
          label="Company Name"
          placeholder="Microsoft"
          error={errors.company?.message}
          {...register("company")}
        />

      </div>

      <Select
        label="Team Size"
        error={errors.teamSize?.message}
        {...register("teamSize")}
        options={[
          { label: "Select Team Size", value: "" },
          { label: "1 - 20 Employees", value: "1-20" },
          { label: "20 - 100 Employees", value: "20-100" },
          { label: "100 - 500 Employees", value: "100-500" },
          { label: "500+ Employees", value: "500+" },
        ]}
      />

      <Textarea
        label="Project Requirements"
        placeholder="Tell us about your learning goals..."
        error={errors.message?.message}
        {...register("message")}
      />

      {/* Trust Indicators */}

      <div className="flex flex-wrap gap-3 text-sm">

        <span className="rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-700">
          ✓ Free Consultation
        </span>

        <span className="rounded-full bg-green-50 px-4 py-2 font-medium text-green-700">
          ✓ No Hidden Charges
        </span>

        <span className="rounded-full bg-cyan-50 px-4 py-2 font-medium text-cyan-700">
          ✓ 24 Hour Response
        </span>

      </div>

      <Button
        type="submit"
        loading={loading}
        variant="gradient"
        fullWidth
        size="lg"
      >
        {loading ? "Submitting..." : "Request Free Demo"}
      </Button>

    </form>

  </div>

</motion.div>

{/* Bottom Stats */}

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
    delay: 0.2,
  }}
  viewport={{
    once: true,
  }}
  className="lg:col-span-2"
>
  <div className="mt-20 grid gap-6 rounded-[32px] border border-blue-100 bg-white/80 p-8 shadow-xl backdrop-blur-xl md:grid-cols-3">

    <div className="text-center">
      <h3 className="text-4xl font-black text-blue-700">
        <CountUp
          end={300}
          duration={2}
        />
        +
      </h3>

      <p className="mt-3 text-slate-500">
        Enterprise Clients
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-4xl font-black text-blue-700">
        <CountUp
          end={25000}
          duration={2}
          separator=","
        />
        +
      </h3>

      <p className="mt-3 text-slate-500">
        Professionals Trained
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-4xl font-black text-blue-700">
        <CountUp
          end={98}
          duration={2}
        />
        %
      </h3>

      <p className="mt-3 text-slate-500">
        Client Satisfaction
      </p>
    </div>

  </div>
</motion.div>

      </div>
    </Container>
  </section>
);
}
