import { BrickWallShield, Crown, Store } from "lucide-react";
import React from "react";

const tagsData = [
  {
    icon: Crown,
    title: "royal treatman only",
    subtitle: "TOP-NOTCH Royal Family Support",
  },
  {
    icon: Store,
    title: "royal treatman only",
    subtitle: "Free Shipping. We have got you covered",
  },
  {
    icon: BrickWallShield,
    title: "Secure Payments",
    subtitle: "Your Payment - Our Protection",
  },
];

export default function Tags() {
  return (
    <section className="py-8 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tagsData.map(({ icon: Icon, title, subtitle }, index) => (
            <div key={index} className="px-10 space-y-2 text-center">
              <div className="flex justify-center pb-2">
                <Icon className="h-10 w-10 text-[#b8bb9a]" />
              </div>
              <h2 className="font-medium uppercase tracking-wide text-base">{title}</h2>
              <h3 className="text-base">{subtitle}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
