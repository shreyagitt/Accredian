"use client";

import Image from "next/image";
import { Star } from "lucide-react";
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
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Trusted by organizations across industries."
        />

        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
          ]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-6 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="fill-yellow-400 text-yellow-400"
                      size={18}
                    />
                  ))}
                </div>

                <p className="leading-8 text-slate-600">
                  "{item.review}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />

                  <div>
                    <h4 className="font-bold">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>

                    <p className="text-sm text-blue-600">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}