"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("welcomeSeen", "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-black border border-[#c5a253] rounded-2xl p-8 max-w-md text-center shadow-[0_0_25px_rgba(197,162,83,0.4)]">
        <h1 className="text-2xl font-bold text-[#d4af37] mb-4">
          Welcome, Investors!
        </h1>
        <p className="text-[#d4af37] leading-relaxed">
          This exclusive preview website is tailored just for you. Here
          you&apos;ll find a curated look at the{" "}
          <strong className="text-">ROYALTY</strong> brand concept and our watch
          models. <br />
          <br />
          Please note:{" "}
          <strong className="font-bold">
            This is not our official public site
          </strong>
          , but a dedicated space to share our vision with potential partners
          like you.
        </p>
        <Button
          onClick={handleClose}
          className="mt-6 bg-[#d4af37] text-black font-semibold px-12 py-3 rounded-md transition-all hover:bg-[#b9962f] cursor-pointer"
        >
          OK
        </Button>
      </div>
    </div>
  );
}
