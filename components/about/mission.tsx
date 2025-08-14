import React from "react";

export default function Mission() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Our Mission
        </h2>
        <p className="text-xl leading-relaxed text-muted-foreground mb-8">
          When you wear our watches, we want you to feel empowered, confident,
          and embraced by unlimited potential that you have!
        </p>
        <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black p-8 rounded-lg">
          <p className="font-serif text-2xl md:text-3xl font-bold">
            YOU ARE INHERENTLY VALUABLE AND DEEPLY CHERISHED JUST AS YOU ARE
          </p>
        </div>
      </div>
    </section>
  );
}
