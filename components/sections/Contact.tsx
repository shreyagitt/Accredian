"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

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
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

 return (
<section
id="contact"
className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-cyan-700 py-24"
>

<div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400 opacity-20 blur-[120px]" />

<div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400 opacity-20 blur-[120px]" />

<Container>

<div className="grid gap-16 lg:grid-cols-2 items-center">

{/* LEFT */}

<div className="text-white">

<span className="rounded-full bg-white/20 px-5 py-2 font-medium">
Enterprise Learning
</span>

<h2 className="mt-8 text-5xl font-bold leading-tight">

Ready to Upskill
<br/>

Your Workforce?

</h2>

<p className="mt-6 text-lg leading-8 text-blue-100">

Partner with us to build future-ready teams through
industry-leading enterprise learning programs.

</p>

<div className="mt-10 space-y-6">

<div className="flex items-center gap-4">

<CheckCircle className="text-green-300"/>

<p>Customized Learning Paths</p>

</div>

<div className="flex items-center gap-4">

<GraduationCap className="text-green-300"/>

<p>Industry Expert Mentors</p>

</div>

<div className="flex items-center gap-4">

<Users className="text-green-300"/>

<p>Dedicated Success Manager</p>

</div>

<div className="flex items-center gap-4">

<BarChart3 className="text-green-300"/>

<p>Learning Analytics Dashboard</p>

</div>

</div>

</div>

<div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">

<form
onSubmit={handleSubmit(onSubmit)}
className="space-y-5"
>

<div className="grid gap-5 md:grid-cols-2">

<Input

label="Full Name"

placeholder="John Doe"

error={errors.name?.message}

{...register("name")}

/>

<Input

label="Email"

type="email"

placeholder="john@example.com"

error={errors.email?.message}

{...register("email")}

/>

</div>

<div className="grid gap-5 md:grid-cols-2">

<Input

label="Phone"

placeholder="9876543210"

error={errors.phone?.message}

{...register("phone")}

/>

<Input

label="Company"

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

{
label:"Select Team Size",
value:"",
},

{
label:"1-20",
value:"1-20",
},

{
label:"20-100",
value:"20-100",
},

{
label:"100-500",
value:"100-500",
},

{
label:"500+",
value:"500+",
},

]}

/>

<Textarea

label="Message"

placeholder="Tell us about your learning goals..."

error={errors.message?.message}

{...register("message")}

/>

<Button

type="submit"

loading={loading}

variant="gradient"

fullWidth

size="lg"

>

Request Demo

</Button>

</form>

</div>

</div>

</Container>

</section>

);

}
