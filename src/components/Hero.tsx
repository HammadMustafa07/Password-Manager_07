
'use client'
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Key, Eye, EyeOff, CheckCircle, ArrowRight} from 'lucide-react';

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

  // const securityWords = ['secure', 'protected', 'encrypted', 'safe'];
  // const word = securityWords[currentStat % securityWords.length];
  useEffect(() => {
  const securityWords = ['secure', 'protected', 'encrypted', 'safe'];
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
        <div className="absolute top-20 left-10 w-72 h-72 md:w-72 md:h-72 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 md:w-80 md:h-80 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Shield className="absolute top-32 left-20 md:left-8 sm:left-4 w-8 h-8 md:w-6 md:h-6 sm:w-5 sm:h-5 text-purple-400/30 animate-bounce delay-300" />
        <Lock className="absolute top-48 right-32 md:right-8 sm:right-4 w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 text-purple-300/40 animate-bounce delay-700" />
        <Key className="absolute bottom-40 left-32 md:left-8 sm:left-4 w-7 h-7 md:w-6 md:h-6 sm:w-5 sm:h-5 text-purple-500/35 animate-bounce delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-16 sm:pt-12 pb-16 md:pb-12 sm:pb-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-8 sm:gap-6 items-center min-h-[80vh] md:min-h-[70vh] sm:min-h-[60vh]">
          
          {/* Left Content */}
          <div className="space-y-8 md:space-y-6 sm:space-y-4 lg:order-1 order-1">
            <div className="space-y-6 md:space-y-4 sm:space-y-3">
              <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 md:px-3 md:py-1.5 sm:px-3 sm:py-1 backdrop-blur-sm">
                <div className="w-2 h-2 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-purple-200 text-sm md:text-xs sm:text-xs">Secure password management</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl md:text-4xl sm:text-3xl font-bold text-white leading-tight">
                Keep your passwords{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
              <p className="text-xl md:text-lg sm:text-base text-purple-200 leading-relaxed max-w-xl">
                SecureVault is a simple and secure password manager that keeps your 
                passwords safe and easily accessible across all your devices.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-3 sm:gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 md:space-x-2 sm:space-x-2 group">
                  <CheckCircle className="w-5 h-5 md:w-4 md:h-4 sm:w-4 sm:h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-purple-200 text-sm md:text-sm sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="flex items-center justify-center space-x-3 md:space-x-2 sm:space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 md:px-6 md:py-3 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 w-full sm:w-full md:w-auto">
                <span className="md:text-sm sm:text-sm">Get Started</span>
                <ArrowRight className="w-5 h-5 md:w-4 md:h-4 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Right Content - Password Manager Demo */}
          <div className="relative lg:order-2 order-2">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl md:rounded-xl sm:rounded-lg p-8 md:p-6 sm:p-4 shadow-2xl">
              <div className="space-y-6 md:space-y-4 sm:space-y-3">
                {/* Demo Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-lg sm:text-base font-semibold text-white">Your Secure Vault</h3>
                  <div className="flex items-center space-x-2 md:space-x-1 sm:space-x-1">
                    <div className="w-3 h-3 md:w-2 md:h-2 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm md:text-xs sm:text-xs text-green-400">Protected</span>
                  </div>
                </div>

                {/* Demo Password Entries */}
                <div className="space-y-4 md:space-y-3 sm:space-y-2">
                  {[
                    { site: 'Gmail', username: 'john.doe@gmail.com', strength: 'Strong' },
                    { site: 'GitHub', username: 'johndoe_dev', strength: 'Very Strong' },
                    { site: 'Netflix', username: 'john.doe@gmail.com', strength: 'Medium' }
                  ].map((entry, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg md:rounded-md sm:rounded p-4 md:p-3 sm:p-3 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 md:space-x-2 sm:space-x-2">
                          <div className="w-10 h-10 md:w-8 md:h-8 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg md:rounded-md sm:rounded-md flex items-center justify-center">
                            <span className="text-white font-semibold text-sm md:text-xs sm:text-xs">{entry.site[0]}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-white font-medium md:text-sm sm:text-sm truncate">{entry.site}</div>
                            <div className="text-purple-300 text-sm md:text-xs sm:text-xs truncate">{entry.username}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 md:space-x-2 sm:space-x-2 flex-shrink-0">
                          <span className={`text-xs md:text-xs sm:text-xs px-2 py-1 md:px-1.5 md:py-0.5 sm:px-1.5 sm:py-0.5 rounded-full whitespace-nowrap ${
                            entry.strength === 'Very Strong' ? 'bg-green-500/20 text-green-400' :
                            entry.strength === 'Strong' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {entry.strength}
                          </span>
                          <button 
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            className="text-purple-400 hover:text-purple-300 transition-colors p-1"
                          >
                            {isPasswordVisible ? <EyeOff className="w-4 h-4 md:w-3.5 md:h-3.5 sm:w-3.5 sm:h-3.5" /> : <Eye className="w-4 h-4 md:w-3.5 md:h-3.5 sm:w-3.5 sm:h-3.5" />}
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 text-sm md:text-xs sm:text-xs font-mono text-purple-200">
                        {isPasswordVisible ? '••••••••••••' : '••••••••••••'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Demo Action Buttons */}
                <div className="flex flex-col sm:flex-col md:flex-row space-y-3 sm:space-y-2 md:space-y-0 md:space-x-3 pt-4 md:pt-3 sm:pt-2">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 md:py-2.5 sm:py-2.5 rounded-lg md:rounded-md sm:rounded-md font-medium md:text-sm sm:text-sm transition-colors flex items-center justify-center space-x-2 md:space-x-1 sm:space-x-1">
                    <Key className="w-4 h-4 md:w-3.5 md:h-3.5 sm:w-3.5 sm:h-3.5" />
                    <span>Generate Password</span>
                  </button>
                  <button className="px-6 md:px-4 sm:px-4 bg-slate-700 hover:bg-slate-600 text-purple-200 py-3 md:py-2.5 sm:py-2.5 rounded-lg md:rounded-md sm:rounded-md font-medium md:text-sm sm:text-sm transition-colors">
                    Add New
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 md:-top-3 sm:hidden -right-4 md:-right-3 sm:-right-2 bg-green-500 text-white p-3 md:p-2 sm:p-2 rounded-full shadow-lg">
              <Shield className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />
            </div>
            <div className="absolute -bottom-4 md:-bottom-3 sm:-bottom-2 -left-4 md:-left-3 sm:-left-2 bg-purple-500 text-white p-3 md:p-2 sm:p-2 rounded-full shadow-lg">
              <Lock className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-24 sm:h-16 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}