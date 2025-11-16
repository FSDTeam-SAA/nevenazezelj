import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Watch {
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  price: number;
  details: string;
  features: {
    title: string;
    feature: string[];
  }[];
  movement: {
    title: string;
    feature: string[];
  }[];
}

export default function Description({ watch }: { watch: Watch }) {
  return (
    <div className="lg:pt-10 lg:space-y-5 space-y-2 text-black col-span-1">
      <div className="">
        <h2 className="text-[#3a3935] lg:text-4xl text-3xl font-semibold uppercase">
          {watch?.title}
        </h2>
        <p className="text-[#b7a98e] lg:text-2xl text-xl font-semibold uppercase">
          {watch?.descriptionOne}
        </p>
      </div>
      <p className="text-[#3A3935] lg:text-2xl text-xl font-medium">
        {watch?.price?.toLocaleString("fr-FR").replace(/\u202f/g, " ")} &euro;
      </p>
      <p className="text-base">{watch?.descriptionTwo}</p>
      <div className="space-y-2"></div>
      <div className="">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-3"
        >
          {/* Movement */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="uppercase lg:text-base cursor-pointer text-[#3a3935]">
              Movement
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6 text-balance">
              {watch?.movement?.map((movement) => (
                <div key={movement.title}>
                  <p className="uppercase lg:text-sm text-[#3a3935] font-medium">
                    {movement.title}
                  </p>
                  <ul className="text-[#3a3935]/70 leading-snug tracking-wide text-justify space-y-1">
                    {movement.feature.map((item, index) => (
                      <li key={index} className="text-sm font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Features */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="uppercase lg:text-base cursor-pointer text-[#3a3935]">
              Features
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6 text-balance">
              {watch?.features?.map((feature) => (
                <div key={feature.title}>
                  <p className="uppercase lg:text-sm text-[#3a3935] font-medium">
                    {feature.title}
                  </p>
                  <ul className="text-[#3a3935]/70 leading-snug tracking-wide text-justify space-y-1">
                    {feature.feature.map((item, index) => (
                      <li key={index} className="text-sm font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Description */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="uppercase lg:text-base cursor-pointer text-[#3a3935]">
              Description
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="lg:text-base text-[#3a3935]/70 leading-snug tracking-wide text-justify">
                {watch?.details}
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Personalization */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="uppercase lg:text-base cursor-pointer text-[#3a3935]">
              Personalization
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="lg:text-base text-[#3a3935]/70 leading-snug tracking-wide text-justify">
                Make your ROYALTY© timepiece truly yours. <br /> The lower trapezoidal
                window of your Diamond Queen watch can be custom-engraved with
                your name, initials, or a short personal inscription of choice —
                creating a unique signature piece that reflects your
                individuality. <br /><br /> Because each personalized watch becomes part of
                ROYALTY©’s legacy, personalization requests are reviewed
                individually. <br /><br /> To request a personalized edition, please complete
                our brief questionnaire for approval.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
