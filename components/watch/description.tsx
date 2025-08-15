import React from "react";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";
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
  strapAndBuckles: {
    title: string;
    feature: string[];
  }[];
}

export default function Description({ watch }: { watch: Watch }) {
  return (
    <div className="lg:py-10 lg:space-y-5 text-black col-span-1">
      <div className="">
        <h2 className="text-[#3a3935] text-4xl font-semibold uppercase">
          {watch?.title}
        </h2>
        <p className="text-[#b7a98e] lg:text-2xl font-semibold uppercase">
          {watch?.descriptionOne}
        </p>
      </div>
      <p className="text-[#3A3935] lg:text-2xl font-medium">
        {watch?.price?.toLocaleString("fr-FR").replace(/\u202f/g, " ")} &euro;
      </p>
      <p>{watch?.descriptionTwo}</p>
      <div className="space-y-2">
        <div className="flex items-center gap-1 h-12">
          <Button className="bg-[#3a3935] hover:bg-[#3a3935] cursor-pointer text-foreground text-lg w-[90%] h-full uppercase tracking-wide rounded-xs">
            Inquire by phone
          </Button>
          <Button className="bg-[#3a3935] hover:bg-[#3a3935] cursor-pointer text-foreground w-[10%] h-full rounded-xs">
            <Phone />
          </Button>
        </div>
      </div>
      <div className="">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="uppercase lg:text-base cursor-pointer text-[#3a3935]">
              Description
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="lg:text-base text-[#3a3935]/70 leading-snug tracking-wide text-justify">
                {watch?.details}
              </p>
            </AccordionContent>
          </AccordionItem>
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
          <AccordionItem value="item-3">
            <AccordionTrigger className="uppercase lg:text-base cursor-pointer text-[#3a3935]">
              Strap and Buckles
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6 text-balance">
              {watch?.strapAndBuckles?.map((feature) => (
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
        </Accordion>
      </div>
    </div>
  );
}
