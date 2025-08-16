import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 lg:py-20">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Menu */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Main Menu
            </h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                MEET ROYALTY
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div className="flex lg:justify-center">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Information
              </h3>
              <nav className="space-y-3">
                <Link
                  href="/terms"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/shipping"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
              </nav>
            </div>
          </div>

          {/* SSL Badge */}
          <div className="flex items-center  lg:justify-end">
            <div className="w-24 h-24 rounded-full flex items-center justify-center">
              <Image
                src="/images/ssl.png"
                alt="ssl badge"
                width={1000}
                height={1000}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Media Icons - keeping as anchor tags since these are external links */}
            <div className="flex items-center space-x-8">
              <Link
                href="https://www.instagram.com/royaltyfashion_official/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Image
                  src="/images/insta.png"
                  alt="instagram"
                  width={1000}
                  height={1000}
                  className="w-12 h-12"
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@royaltywatches"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Image
                  src="/images/tiktok.png"
                  alt="instagram"
                  width={1000}
                  height={1000}
                  className="w-12 h-12"
                />
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 - ROYALTY® WATCHES ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
