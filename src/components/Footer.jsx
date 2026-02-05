import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-white">
              Namma Karnataka
            </h3>
            <p className="text-sm leading-relaxed">
              Discover the beauty, culture, and heritage of Karnataka through our curated content.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-primary-400 transition-colors text-sm">
                  Explore Karnataka
                </Link>
              </li>
              <li>
                <Link to="/reels" className="hover:text-primary-400 transition-colors text-sm">
                  Reels
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li className="hover:text-primary-400 transition-colors text-sm cursor-pointer">
                Travel
              </li>
              <li className="hover:text-primary-400 transition-colors text-sm cursor-pointer">
                Food
              </li>
              <li className="hover:text-primary-400 transition-colors text-sm cursor-pointer">
                Culture
              </li>
              <li className="hover:text-primary-400 transition-colors text-sm cursor-pointer">
                Heritage
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@Nammakarnataka.com</li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-2" /> for Karnataka
          </p>
          <p className="mt-2">
            &copy; {currentYear} Namma Karnataka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
