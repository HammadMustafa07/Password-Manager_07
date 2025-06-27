"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Key,
  Menu,
  X,
  Home,
  Users,
  Phone,
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative bg-gradient-to-r z-50 from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href={"/"}>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
              <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-purple-300 absolute -bottom-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white">SecureVault</span>
              <span className="text-xs text-purple-300 hidden sm:block">Password Manager</span>
            </div>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group"
            >
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Home</span>
            </Link>
            <Link
              href="/pages/about"
              className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group"
            >
              <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>About</span>
            </Link>
            <Link
              href="/pages/contact"
              className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group"
            >
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Contact</span>
            </Link>
            <Link
              href="/pages/vault"
              className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group"
            >
              <Key className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
              <span>Vault</span>
            </Link>
          </div>

          {/* Tablet Navigation (md breakpoint) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link
              href="/"
              className="flex items-center text-purple-200 hover:text-white transition-colors duration-200 group p-2 rounded-lg hover:bg-slate-800/30"
            >
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </Link>
            <Link
              href="/pages/about"
              className="flex items-center text-purple-200 hover:text-white transition-colors duration-200 group p-2 rounded-lg hover:bg-slate-800/30"
            >
              <Users className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </Link>
            <Link
              href="/pages/contact"
              className="flex items-center text-purple-200 hover:text-white transition-colors duration-200 group p-2 rounded-lg hover:bg-slate-800/30"
            >
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </Link>
            <Link
              href="/pages/vault"
              className="flex items-center text-purple-200 hover:text-white transition-colors duration-200 group p-2 rounded-lg hover:bg-slate-800/30"
            >
              <Key className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Styled Clerk Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <SignedOut>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <SignInButton>
                    <button className="px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-purple-200 hover:text-white border border-purple-500/50 rounded-lg hover:border-purple-400 hover:bg-purple-800/30 transition-all duration-200 backdrop-blur-sm">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:scale-105">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center space-x-2">
                  <UserButton 
                    // appearance={{
                    //   elements: {
                    //     avatarBox: "w-6 h-6 sm:w-8 sm:h-8 ring-2 ring-purple-400/50 hover:ring-purple-300 transition-all duration-200",
                    //     userButtonPopoverCard: "bg-slate-800 border border-purple-500/20",
                    //     userButtonPopoverText: "text-purple-200",
                    //     userButtonPopoverActionButton: "text-purple-200 hover:text-white hover:bg-purple-800/30"
                    //   }
                    // }}
                  />
                </div>
              </SignedIn>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden text-purple-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/30 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-500/20 mt-2 pt-4 pb-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 mx-2"
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                href="/pages/about"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 mx-2"
              >
                <Users className="h-5 w-5" />
                <span className="font-medium">About</span>
              </Link>
              <Link
                href="/pages/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 mx-2"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">Contact</span>
              </Link>
              <Link
                href="/pages/vault"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 text-purple-200 hover:text-white p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 mx-2"
              >
                <Key className="h-5 w-5" />
                <span className="font-medium">My Vault</span>
              </Link>
            </div>

            {/* Mobile Auth Section */}
            <SignedOut>
              <div className="border-t border-purple-500/20 mt-4 pt-4 mx-2">
                <div className="space-y-2">
                  <SignInButton>
                    <button className="w-full px-4 py-3 text-sm font-medium text-purple-200 hover:text-white border border-purple-500/50 rounded-lg hover:border-purple-400 hover:bg-purple-800/30 transition-all duration-200 backdrop-blur-sm">
                      Sign In to Your Account
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                      Create New Account
                    </button>
                  </SignUpButton>
                </div>
              </div>
            </SignedOut>
          </div>
        )}
      </div>
    </nav>
  );
}