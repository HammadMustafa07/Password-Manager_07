'use client'
import React, { useState } from 'react';
import { Shield, Lock, Key, Plus, Menu, X, Home, Users, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-purple-400" />
              <Lock className="h-4 w-4 text-purple-300 absolute -bottom-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">SecureVault</span>
              <span className="text-xs text-purple-300">Password Manager</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group">
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Home</span>
            </a>
            <a href="#about" className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group">
              <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>About</span>
            </a>
            <a href="#contact" className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group">
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Contact</span>
            </a>
            <a href="/vault" className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group">
              <Key className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
              <span>Vault</span>
            </a>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* <button className="relative text-purple-300 hover:text-white transition-colors">
            </button> */}
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-purple-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-500/20 mt-2 pt-4 pb-4 space-y-3">
            {/* Mobile Search */}
            
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <a href="#home" className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </a>
              <a href="#about" className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Users className="h-5 w-5" />
                <span>About</span>
              </a>
              <a href="#contact" className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Phone className="h-5 w-5" />
                <span>Contact</span>
              </a>
              <a href="#vault" className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Key className="h-5 w-5" />
                <span>My Vault</span>
              </a>
              <a href="#generator" className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Plus className="h-5 w-5" />
                <span>Password Generator</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}