import Description from "@/components/watch/description";
import Gallery from "@/components/watch/gallery";
import { watches } from "@/lib/constant";
import React from "react";

export default async function WatchDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  const watch = watches.find((watch) => watch.slug === resolvedParams.slug);

  return (
    <div className="bg-white lg:pb-20">
      <div className="container grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12">
        <div className="lg:col-span-2">
          <Gallery images={watch?.images || []} />
        </div>
        <div className="lg:col-span-1">
          <Description
            watch={
              watch ?? {
                title: "",
                descriptionOne: "",
                descriptionTwo: "",
                price: 0,
                details: "",
                features: [],
                strapAndBuckles: [],
              }
            }
          />
        </div>
      </div>
    </div>
  );
}
