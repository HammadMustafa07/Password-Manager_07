'use client'
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Key, Eye, EyeOff, CheckCircle, ArrowRight, Play, Star, Users, Database } from 'lucide-react';

export default function Hero() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [typedText, setTypedText] = useState('');
  
  const features = [
    'Strong encryption',
    'Cross-platform sync',
    'Secure storage',
    'Easy access'
  ];

  const securityWords = ['secure', 'protected', 'encrypted', 'safe'];

  // Typing animation effect
  useEffect(() => {
    const word = securityWords[currentStat % securityWords.length];
    let i = 0;
    const timer = setInterval(() => {
      if (i < word.length) {
        setTypedText(word.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentStat(prev => prev + 1);
          setTypedText('');
        }, 2000);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [currentStat]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-purple-200 text-sm">Secure password management</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Keep your passwords{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
              <p className="text-xl text-purple-200 leading-relaxed max-w-xl">
                SecureVault is a simple and secure password manager that keeps your 
                passwords safe and easily accessible across all your devices.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-purple-200 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Password Manager Demo */}
          <div className="relative">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Demo Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Your Secure Vault</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">Protected</span>
                  </div>
                </div>

                {/* Demo Password Entries */}
                <div className="space-y-4">
                  {[
                    { site: 'Gmail', username: 'john.doe@gmail.com', strength: 'Strong' },
                    { site: 'GitHub', username: 'johndoe_dev', strength: 'Very Strong' },
                    { site: 'Netflix', username: 'john.doe@gmail.com', strength: 'Medium' }
                  ].map((entry, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">{entry.site[0]}</span>
                          </div>
                          <div>
                            <div className="text-white font-medium">{entry.site}</div>
                            <div className="text-purple-300 text-sm">{entry.username}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            entry.strength === 'Very Strong' ? 'bg-green-500/20 text-green-400' :
                            entry.strength === 'Strong' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {entry.strength}
                          </span>
                          <button 
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            {isPasswordVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 text-sm font-mono text-purple-200">
                        {isPasswordVisible ? '••••••••••••' : '••••••••••••'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Demo Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                    <Key className="w-4 h-4" />
                    <span>Generate Password</span>
                  </button>
                  <button className="px-6 bg-slate-700 hover:bg-slate-600 text-purple-200 py-3 rounded-lg font-medium transition-colors">
                    Add New
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg">
              <Lock className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}