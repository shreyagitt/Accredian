"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/60 py-28"
    >
      {/* Background */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-200/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-[120px]" />

      <Container>

        <SectionTitle
          title="What Our Clients Say"
          subtitle="Trusted by organizations across industries."
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={false}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={700}
          grabCursor
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="!pb-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.name}>
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-blue-100
                  bg-white/80
                  p-8
                  backdrop-blur-xl
                  shadow-sm
                  transition-all
                  duration-500
                  hover:border-blue-300
                  hover:shadow-[0_25px_60px_rgba(37,99,235,.15)]
                "
              >
                {/* Hover Gradient */}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Quote */}

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-3xl font-bold text-white shadow-lg">
                    "
                  </div>

                  {/* Stars */}

                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review */}

                  <p className="min-h-[160px] text-[17px] italic leading-8 text-slate-600">
                    "{item.review}"
                  </p>

                  {/* Profile */}

                  <div className="mt-8 flex items-center gap-4">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-full border-4 border-white shadow-lg"
                    />

                    <div>

                      <h4 className="text-lg font-bold text-slate-900">
                        {item.name}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {item.role}
                      </p>

                      <p className="text-sm font-medium text-blue-600">
                        {item.company}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </section>
  );
}