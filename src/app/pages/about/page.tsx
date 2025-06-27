'use client'
import React, { useState, useEffect, useMemo } from 'react';
import { Shield, Lock, Globe, Award, Zap, Database, Eye, Server, CheckCircle } from 'lucide-react';

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [animatedCount, setAnimatedCount] = useState({ users: 0, passwords: 0, years: 0 });

  const stats = useMemo(() => [
    { label: "Trusted Users", value: 250000, suffix: "+" },
    { label: "Passwords Protected", value: 5000000, suffix: "+" },
    { label: "Years of Security", value: 8, suffix: "" }
  ], []);

  const features = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "Your passwords are protected with AES-256 encryption, the same standard used by banks and government agencies.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Cross-Platform Sync",
      description: "Access your passwords seamlessly across all your devices with real-time synchronization.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Eye,
      title: "Zero-Knowledge Architecture",
      description: "We can't see your passwords even if we wanted to. Your data is encrypted before it leaves your device.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate strong passwords instantly and auto-fill them across all your favorite websites and apps.",
      color: "from-yellow-500 to-orange-500"
    }
  ];


  const team = [
    {
      name: "Alex Chen",
      role: "Security Engineer",
      description: "Former cybersecurity consultant with 10+ years protecting digital assets.",
      avatar: "AC"
    },
    {
      name: "Sarah Miller",
      role: "Product Designer",
      description: "UX expert focused on making security tools accessible to everyone.",
      avatar: "SM"
    },
    {
      name: "Marcus Johnson",
      role: "Backend Developer",
      description: "Encryption specialist ensuring your data stays private and secure.",
      avatar: "MJ"
    }
  ];

  // Animate counters
  useEffect(() => {
  const duration = 2000;
  const steps = 60;
  const stepDuration = duration / steps;

  stats.forEach((stat, index) => {
    let currentValue = 0;
    const increment = stat.value / steps;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= stat.value) {
        currentValue = stat.value;
        clearInterval(timer);
      }

      setAnimatedCount((prev) => ({
        ...prev,
        [index === 0 ? 'users' : index === 1 ? 'passwords' : 'years']: Math.floor(currentValue),
      }));
    }, stepDuration);
  });
}, [stats]); // ✅ include stats


  // Auto-rotate features
  useEffect(() => {
  const interval = setInterval(() => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  }, 4000);
  return () => clearInterval(interval);
}, [features.length]); // ✅ added

  const formatNumber = (num : number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Database className="absolute top-20 left-10 w-6 h-6 text-purple-400/20 animate-bounce delay-300" />
        <Server className="absolute top-40 right-16 w-7 h-7 text-purple-300/25 animate-bounce delay-700" />
        <Lock className="absolute bottom-32 left-24 w-5 h-5 text-purple-500/30 animate-bounce delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 backdrop-blur-sm mb-8">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-purple-200">About SecureVault</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              security
            </span>
          </h2>
          
          <p className="text-xl text-purple-200 leading-relaxed max-w-3xl mx-auto">
            We believe everyone deserves digital security without complexity. SecureVault was created 
            by security experts who got tired of complicated password managers that put features over protection.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {formatNumber(Object.values(animatedCount)[index])}{stat.suffix}
                </div>
                <div className="text-purple-200 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Feature Display */}
          <div className="relative">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center`}>
                  {React.createElement(features[activeFeature].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{features[activeFeature].title}</h3>
                </div>
              </div>
              <p className="text-purple-200 text-lg leading-relaxed">
                {features[activeFeature].description}
              </p>
            </div>
            
            {/* Feature Indicators */}
            <div className="flex justify-center space-x-3 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature 
                      ? 'bg-purple-400 scale-125' 
                      : 'bg-purple-600/40 hover:bg-purple-500/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Why Choose SecureVault?</h3>
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  index === activeFeature 
                    ? 'bg-purple-900/40 border border-purple-500/30' 
                    : 'hover:bg-slate-800/30'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  {React.createElement(feature.icon, { className: "w-5 h-5 text-white" })}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                  <p className="text-purple-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Meet Our Team</h3>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Security experts and privacy advocates working together to keep your digital life safe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{member.avatar}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <div className="text-purple-400 font-medium mb-3">{member.role}</div>
                <p className="text-purple-200 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-12 text-center">
          <Shield className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-xl text-purple-200 leading-relaxed max-w-4xl mx-auto">
            To democratize digital security by making enterprise-grade password management 
            accessible, intuitive, and trustworthy for everyone. We believe that strong security 
            shouldn&apos;t require a computer science degree.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-8 text-purple-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Privacy First</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>User Focused</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}