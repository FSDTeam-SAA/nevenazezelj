import { watches } from "@/lib/constant";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Watches() {
  return (
    <section className="py-8 lg:py-20">
      <div className="container">
        <div className="text-center text-[#b8bb9a] max-w-3xl mx-auto lg:space-y-5 space-y-3">
          <h2 className="lg:text-5xl text-2xl font-bold">Our Premium Watches</h2>
          <p className="text-sm lg:text-base text-justify lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem maxime sequi quis veritatis, numquam, dolorum
            consectetur repellat impedit necessitatibus, debitis reiciendis
            animi sapiente velit saepe eaque recusandae perferendis.
            Reprehenderit, nemo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-8 mt-8">
          {watches.map((watch) => (
            <div key={watch.id}>
              <Link href={`/watches/${watch.slug}`}>
                <div className="flex items-center justify-center bg-[#efefef]">
                  <Image
                    src={watch.images[0]}
                    alt={watch.title}
                    width={1000}
                    height={1000}
                    className="w-full aspect-[5/4] object-cover"
                  />
                </div>
              </Link>
              <div className="lg:pt-5 pt-2 space-y-1">
                <h3 className="lg:text-2xl text-xl font-semibold text-[#b8bb9a]">
                  {watch.title}
                </h3>
                <Link href={`/watches/${watch.slug}`}>
                  <p className="text-[#b8bb9a] flex items-center gap-2">
                    Discover More <ChevronRight className="w-4 h-4"/>
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
