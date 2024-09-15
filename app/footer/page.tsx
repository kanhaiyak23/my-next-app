'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

 function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4">POPULAR LOCATIONS</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:underline">Kolkata</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Mumbai</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Chennai</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Pune</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">TRENDING LOCATIONS</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:underline">Bhubaneshwar</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Hyderabad</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Chandigarh</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Nashik</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:underline">Tech@OLX</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">OLX</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:underline">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Help</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Sitemap</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Legal & Privacy information</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Vulnerability Disclosure Program</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Facebook size={24} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Instagram size={24} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Twitter size={24} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Youtube size={24} /></Link>
            </div>
            <div className="mt-4 flex space-x-4">
              <Link href="#"><Image src="https://statics.olx.in/external/base/img/playstore.webp" alt="Google Play" width={120} height={40} /></Link>
              <Link href="#"><Image src="https://statics.olx.in/external/base/img/appstore.webp" alt="App Store" width={120} height={40} /></Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'rgb(1, 47, 52)' }} className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-8 mb-4 lg:mb-0">
              <Image src="" alt="CarTrade Tech Group" width={150} height={40} />
              <Image src="" alt="OLX" width={60} height={40} />
              <Image src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg" alt="CarWale" width={100} height={40} />
              {/* <Image src="data:image/png;base64,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" alt="BikeWale" width={100} height={40} />
              <Image src="data:image/png;base64,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" alt="CarTrade" width={80} height={20} />
              <Image src="data:image/png;base64,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" alt="Mobility Outlook" width={150} height={40} /> */}
            </div>
            <div className="text-sm">
              <Link href="#" className="hover:underline mr-4">Help</Link>
              <Link href="#" className="hover:underline">Sitemap</Link>
              <p className="mt-2">All rights reserved © 2006-2024 OLX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer