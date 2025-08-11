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
    <div className="bg-white">
      <div className="container grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <Gallery images={watch?.images || []} />
        </div>
        <div className="col-span-1">Hello</div>
      </div>
    </div>
  );
}

