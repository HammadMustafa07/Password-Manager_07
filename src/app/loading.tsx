import React from 'react';
import { Shield, Lock, Key, Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Shield className="absolute top-32 left-20 w-8 h-8 text-purple-400/30 animate-bounce delay-300" />
        <Lock className="absolute top-48 right-32 w-6 h-6 text-purple-300/40 animate-bounce delay-700" />
        <Key className="absolute bottom-40 left-32 w-7 h-7 text-purple-500/35 animate-bounce delay-500" />
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        
        {/* Logo/Brand Section */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              SecureVault
            </span>
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-16 h-16 border-4 border-purple-500/20 rounded-full mx-auto animate-spin">
              <div className="w-full h-full border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
            </div>
            
            {/* Inner Rotating Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-purple-400 animate-spin" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-xl text-white font-medium">Loading SecureVault</p>
          <p className="text-purple-300 text-sm">Securing your digital life...</p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-500/60 rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-purple-500/40 rounded-full animate-pulse delay-400"></div>
        </div>

        {/* Security Badge */}
        <div className="mt-8 inline-flex items-center space-x-2 bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-purple-200 text-sm">AES-256 Encrypted</span>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}