import React from 'react';
import { Shield, Smartphone, RefreshCw, Key, Lock, Zap, Globe, Eye } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Safe Storage',
      description: 'Keep all your passwords in one secure place with basic encryption protection.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Key,
      title: 'Easy Access',
      description: 'Quickly find and copy your passwords when you need them most.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Authentication',
      description: 'Securely access and manage your saved passwords anytime by logging into your account.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Simple Interface',
      description: 'Clean and easy-to-use design that makes managing passwords straightforward.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
            <Lock className="w-4 h-4 text-purple-400" />
            <span className="text-purple-200 text-sm">Why Choose SecureVault</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple password management
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> made easy</span>
          </h2>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            SecureVault provides the basic tools you need to store and manage your passwords safely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-purple-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to secure your passwords?
            </h3>
            <p className="text-purple-200 mb-6">
              Start organizing your passwords today with our simple and secure solution.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}