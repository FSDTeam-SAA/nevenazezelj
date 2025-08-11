import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 lg:py-20">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Main Menu */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Main Menu</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/empower" className="block text-gray-300 hover:text-white transition-colors">
                WE EMPOWER YOU
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Information</h3>
            <nav className="space-y-3">
              <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/shipping" className="block text-gray-300 hover:text-white transition-colors">
                Shipping Policy
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sign up to our newsletter to receive exclusive offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="E-mail"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-600"
              />
              <Button className="w-full text-black font-medium">SUBSCRIBE</Button>
            </div>
          </div>

          {/* SSL Badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-bold text-black">SECURE</div>
                <div className="text-lg font-bold text-black">SSL</div>
                <div className="text-xs text-black">CERTIFICATE</div>
              </div>
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
              <Link href="https://www.facebook.com/official.royaltyfashion" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/royaltyfashion_official/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://de.pinterest.com/royaltyfashion_official/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@RoyaltyFashion_Official" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="https://www.tiktok.com/@we_are_royal" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 - ROYALTY® WATCHES ALL RIGHTS RESERVED
            </div>

            {/* Payment Icons */}
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded px-2 py-1">
                <span className="text-xs font-bold text-black">Apple Pay</span>
              </div>
              <div className="bg-white rounded px-2 py-1">
                <span className="text-xs font-bold text-black">G Pay</span>
              </div>
              <div className="bg-blue-600 rounded px-2 py-1">
                <span className="text-xs font-bold text-white">maestro</span>
              </div>
              <div className="bg-red-600 rounded px-2 py-1">
                <span className="text-xs font-bold text-white">MC</span>
              </div>
              <div className="bg-blue-800 rounded px-2 py-1">
                <span className="text-xs font-bold text-white">PayPal</span>
              </div>
              <div className="bg-blue-900 rounded px-2 py-1">
                <span className="text-xs font-bold text-white">VISA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
