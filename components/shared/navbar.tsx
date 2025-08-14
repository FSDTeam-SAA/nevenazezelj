"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navigationItems = [
        { name: "HOME", href: "/" },
        { name: "WE EMPOWER YOU", href: "/about-us" },
        { name: "CONTACT", href: "/contact" },
    ]

    return (
        <nav className="w-full bg-[#1c1c1c] border-b border-gray-800">
            <div className="container lg:pb-5 md:pb-3">
                <div className="flex items-center justify-between md:justify-center">
                    {/* Mobile menu button */}
                    <div className="md:hidden order-2 lg:order-1">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="lg" className="text-white hover:bg-gray-800">
                                    <Menu className="!h-8 !w-8 text-[#b8bb9a]" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-gray-900 border-gray-800">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center">
                                        <Link href="/" className="flex items-center justify-center">
                                            <Image
                                                src="/images/logo.png"
                                                alt="Royalty"
                                                width={1000}
                                                height={1000}
                                                className="h-20 w-20"
                                            />
                                        </Link>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsOpen(false)}
                                        className="text-white hover:bg-gray-800"
                                    >
                                        <X className="!h-7 !w-7 text-[#b8bb9a] mr-7" />
                                    </Button>
                                </div>
                                <div className="flex flex-col space-y-4 pl-5">
                                    {navigationItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-white hover:text-[#b8bb9a] transition-colors duration-200 text-sm font-medium tracking-wide py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Logo - centered on mobile, left-aligned on desktop */}
                    <div className="flex md:justify-center order-1 lg:order-2">
                        <div className="md:space-y-4">
                            <Link href="/" className="flex items-center justify-center">
                                <Image
                                    src="/images/logo.png"
                                    alt="Royalty"
                                    width={1000}
                                    height={1000}
                                    className="h-20 w-20"
                                />
                            </Link>
                            {/* Desktop navigation */}
                            <div className="hidden md:flex items-center space-x-8">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-white hover:text-[#b8bb9a] transition-colors duration-200 text-sm font-medium tracking-wide"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Spacer for mobile to keep logo centered */}
                </div>
            </div>
        </nav>
    )
}
