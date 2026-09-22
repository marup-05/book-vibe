import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-emerald-50 px-6 py-10 shadow-sm md:px-12 md:py-14">
          
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-2xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                📚 Discover Your Next Read
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Books to freshen up
                <span className="block text-emerald-600">
                  your bookshelf
                </span>
              </h1>

              <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                Explore inspiring stories, timeless classics, and exciting new
                releases. Find your next favorite book today.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="btn btn-success rounded-full px-6 text-white shadow-md transition hover:scale-105">
                  Explore Books →
                </button>

                <button className="btn btn-outline rounded-full px-6">
                  View Categories
                </button>
              </div>

              {/* Small Stats */}
              <div className="flex gap-8 pt-3">
                <div>
                  <p className="text-2xl font-bold text-slate-900">10K+</p>
                  <p className="text-sm text-slate-500">Books</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">5K+</p>
                  <p className="text-sm text-slate-500">Readers</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">4.9★</p>
                  <p className="text-sm text-slate-500">Rating</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center">
              <div className="absolute inset-8 rounded-full bg-emerald-200/40 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={bannerImg}
                  alt="Books collection"
                  width={600}
                  height={500}
                  priority
                  className="h-auto w-full max-w-xl object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
