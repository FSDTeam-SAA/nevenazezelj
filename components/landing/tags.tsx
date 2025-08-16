import Image from "next/image";
import React from "react";

const tagsData = [
  {
    icon: "/images/crown.png",
    title: "royal treatman only",
    subtitle: "TOP-NOTCH Royal Family Support",
  },
  {
    icon: "/images/car.webp",
    title: "SHOP ROYALLY",
    subtitle: "Free Shipping. We have got you covered",
  },
  {
    icon: "/images/lion_1.png",
    title: "Secure Payments",
    subtitle: "Your Payment - Our Protection",
  },
];

export default function Tags() {
  return (
    <section className="py-8 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tagsData.map(({ icon, title, subtitle }, index) => (
            <div key={index} className="px-10 space-y-2 text-center">
              <div className="flex justify-center pb-2">
                <Image
                  src={icon}
                  alt={title}
                  width={20}
                  height={20}
                  className="h-5 w-5 text-[#C0A875]"
                />
              </div>
              <h2 className="font-medium uppercase tracking-wide text-base">
                {title}
              </h2>
              <h3 className="text-base">{subtitle}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
