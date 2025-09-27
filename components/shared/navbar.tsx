"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "MEET ROYALTY", href: "/about-us" },
    { name: "OUR WATCHES", href: "/watches" },
  ];

  return (
    <nav className="w-full bg-[#000000] border-b border-gray-800 sticky top-0 z-50 py-2">
      <div className="container lg:pb-5 py-1 md:py-0 md:pb-3">
        <div className="flex items-center justify-between md:justify-center relative">
          {/* Mobile menu button */}
          <div className="md:hidden order-2 lg:order-1">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-gray-800"
                >
                  <Menu className="!h-6 !w-6 text-white" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-[#000000] border-[#000000]"
              >
                <SheetTitle className="text-white sr-only">Menu</SheetTitle>
                <SheetDescription className="text-white sr-only">
                  Menu
                </SheetDescription>
                <div className="flex items-center justify-center mb-8 mt-4">
                  <div className="flex items-center justify-center">
                    <Link href="/" className="flex items-center justify-center">
                      <Image
                        src="/images/effect-logo.png"
                        alt="Royalty"
                        width={1000}
                        height={1000}
                        className="h-12 object-contain"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 pl-5">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#C0A875] transition-colors duration-200 text-sm font-medium tracking-wide py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="md:space-y-4">
              <Link href="/" className="flex items-center justify-center">
                <Image
                  src="/images/effect-logo.png"
                  alt="Royalty"
                  width={1000}
                  height={1000}
                  className="h-14 w-fit object-contain md:mt-2 absolute left-1/2 md:left-0 transform -translate-x-1/2 md:relative md:translate-x-0"
                />
              </Link>
              {/* Desktop navigation */}
              <div className="hidden md:flex items-center text-center justify-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-[#C0A875] text-center transition-colors duration-200 text-sm font-medium tracking-wide"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
