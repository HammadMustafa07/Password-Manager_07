'use client'
import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@securevault.com',
      available: '24/7'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our security experts',
      contact: 'Available in app',
      available: '9 AM - 6 PM EST'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      available: 'Mon-Fri 9 AM - 6 PM'
    }
  ];

  const faqItems = [
    {
      question: 'How secure is my data?',
      answer: 'Your data is encrypted with AES-256 encryption and zero-knowledge architecture.'
    },
    {
      question: 'Can I sync across devices?',
      answer: 'Yes, SecureVault syncs seamlessly across all your devices with end-to-end encryption.'
    },
    {
      question: 'What if I forget my master password?',
      answer: 'We offer secure recovery options, but cannot access your data due to zero-knowledge design.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Shield className="absolute top-32 left-20 w-8 h-8 text-purple-400/30 animate-bounce delay-300" />
        <Mail className="absolute top-48 right-32 w-6 h-6 text-purple-300/40 animate-bounce delay-700" />
        <MessageSquare className="absolute bottom-40 left-32 w-7 h-7 text-purple-500/35 animate-bounce delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-200 text-sm">We&apos;re here to help</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Touch
            </span>
          </h1>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Have questions about SecureVault? Need help with your password security? 
            Our team of experts is ready to assist you with any concerns.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Send us a message</h2>
                  <p className="text-purple-300">We&apos;ll get back to you within 24 hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-purple-200">Thank you for contacting us. We&apos;ll respond soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-purple-200 mb-2">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="security">Security Question</option>
                        <option value="billing">Billing</option>
                        <option value="feature">Feature Request</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-purple-200 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                        placeholder="Brief subject line"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                      placeholder="Describe your question or concern in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-800 disabled:to-pink-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-purple-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Other ways to reach us</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-slate-700/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-sm text-purple-300 mb-2">{method.description}</p>
                      <p className="text-sm text-purple-200 font-medium">{method.contact}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Clock className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-400">{method.available}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Quick Answers</h3>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border border-purple-500/20 rounded-lg p-4 hover:border-purple-400/40 transition-colors">
                    <h4 className="font-medium text-white mb-2">{item.question}</h4>
                    <p className="text-sm text-purple-300 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-purple-500/20">
                <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                  <span>View all FAQs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">Your Privacy is Protected</h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                All communications are encrypted and secure. We never share your personal information 
                and follow strict privacy protocols to keep your data safe.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}