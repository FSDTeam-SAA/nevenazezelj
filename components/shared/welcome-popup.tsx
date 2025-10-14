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
      <div className="bg-black border border-[#C0A875] rounded-2xl p-8 max-w-md text-center shadow-[0_0_25px_#C0A875]">
        <h1 className="text-2xl font-bold text-[#C0A875] mb-4">
          Welcome, Investors!
        </h1>
        <p className="text-[#C0A875] leading-relaxed">
          This exclusive preview website is tailored just for you. Here
          you&apos;ll find a curated look at the{" "}
          <strong>ROYALTY &copy;</strong> brand concept and our watch
          models. <br />
          <br />
          Please note:{" "}
          <strong>
            This is not our official public site
          </strong>
          , but a dedicated space to share our vision with potential partners
          like you.
        </p>
        <Button
          onClick={handleClose}
          className="mt-6 bg-[#C0A875] text-black font-semibold px-12 py-3 rounded-md transition-all hover:bg-[#C0A875] cursor-pointer"
        >
          OK
        </Button>
      </div>
    </div>
  );
}
