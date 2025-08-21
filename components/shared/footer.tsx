import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 lg:py-12">
      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Media Icons - keeping as anchor tags since these are external links */}
            <div className="flex items-center space-x-8">
              <Link
                href="https://www.instagram.com/royaltywatches_official/profilecard/?igsh=MWNueHQ4NXEwMGVndg=="
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
                href="https://www.tiktok.com/@royaltywatches_official?_t=ZN-8yvlE1Ke3mA&_r=1"
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
            <div className="text-sm opacity-90 text-center md:text-left">
              &copy; 2025 - ROYALTY® WATCHES ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
