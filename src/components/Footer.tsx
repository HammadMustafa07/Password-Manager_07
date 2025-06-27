import React from 'react';
import { Shield, Github, Twitter, Linkedin, Lock, Heart, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#security' },
      { name: 'Download', href: '#download' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Documentation', href: '#docs' },
      { name: 'System Status', href: '#status' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Hammad_Mustafa7', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/HammadMustafa07', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hammad-mustafa-abro-b0462a338/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-purple-500/20">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 p-2 shadow-lg">
                  <Shield className="w-full h-full text-white" />
                </div>
                <span className="text-2xl font-bold text-white">SecureVault</span>
              </div>
              
              <p className="text-purple-200 mb-6 leading-relaxed">
                Your trusted password manager that keeps your digital life secure and organized. 
                Simple, safe, and reliable password management for everyone.
              </p>

              {/* Newsletter Signup */}
              <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-slate-700/50 border border-purple-500/30 rounded-lg px-3 py-2 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-purple-300 hover:text-purple-200 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-purple-300 hover:text-purple-200 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-purple-300 hover:text-purple-200 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-purple-300 hover:text-purple-200 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-purple-300">
              <span>© {currentYear} SecureVault. Made with</span>
              <Heart className="w-4 h-4 text-pink-500" />
              <span>for your security.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white hover:border-purple-400/50 hover:bg-slate-700/60 transition-all duration-300 transform hover:scale-110"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-2 bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-lg px-3 py-2">
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">256-bit Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}