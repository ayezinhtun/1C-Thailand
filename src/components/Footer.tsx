import React from 'react';
import { Cloud, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <div className="bg-white/5 backdrop-blur-lg border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Cloud className="w-8 h-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-800">One Cloud</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Next Generation System Integration Services. Transforming IT infrastructure with smart cloud solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
              <div className="space-y-2">
                <a href="/about" className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors">About Us</a>
                <a href="/services" className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
                <a href="/solutions" className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors">Solutions</a>
                <a href="/contact" className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm text-gray-600">sales@onecloud.th</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm text-gray-600">+66-2-123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-indigo-600 mt-0.5" />
                  <span className="text-sm text-gray-600">Bangkok, Thailand</span>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors">Terms of Service</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                © 2024 One Cloud – Designed & Powered by 1Cloud Next Generation. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;