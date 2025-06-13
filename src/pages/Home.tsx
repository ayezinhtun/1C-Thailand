import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, Globe, Shield, Cloud, Zap, Database, Lock, Server, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Enterprise Clients', description: 'Trusted by Fortune 500 companies' },
    { number: '99.9%', label: 'Uptime Guarantee', description: 'Industry-leading reliability' },
    { number: '24/7', label: 'Support Coverage', description: 'Round-the-clock expert assistance' },
    { number: '10+', label: 'Years Experience', description: 'Decade of proven excellence' }
  ];

  const coreServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions with enterprise-grade performance and reliability.',
      features: ['Multi-cloud deployment', 'Auto-scaling', 'Disaster recovery', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced threat protection with AI-powered detection and response capabilities.',
      features: ['Zero-trust architecture', 'SOC monitoring', 'Compliance management', 'Incident response']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data solutions from storage to analytics and business intelligence.',
      features: ['Data warehousing', 'Real-time analytics', 'Backup & recovery', 'Data governance']
    },
    {
      icon: Server,
      title: 'Infrastructure Services',
      description: 'Complete IT infrastructure management with proactive monitoring and optimization.',
      features: ['Server management', 'Network optimization', 'Performance tuning', 'Capacity planning']
    }
  ];

  const industries = [
    { name: 'Financial Services', clients: '150+', description: 'Banks, insurance, fintech' },
    { name: 'Healthcare', clients: '80+', description: 'Hospitals, clinics, pharma' },
    { name: 'Manufacturing', clients: '120+', description: 'Automotive, electronics, industrial' },
    { name: 'Retail & E-commerce', clients: '90+', description: 'Online stores, retail chains' },
    { name: 'Education', clients: '60+', description: 'Universities, schools, training' },
    { name: 'Government', clients: '40+', description: 'Public sector, agencies' }
  ];

  const testimonials = [
    {
      quote: "One Cloud transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving our system reliability.",
      author: "Sarah Chen",
      position: "CTO, TechCorp Asia",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "The security solutions implemented by One Cloud have been exceptional. We've had zero security incidents since their deployment, and their 24/7 monitoring gives us peace of mind.",
      author: "Michael Rodriguez",
      position: "IT Director, SecureBank",
      company: "Leading Financial Institution"
    },
    {
      quote: "Their DevOps automation reduced our deployment time from hours to minutes. The team's expertise and support have been invaluable to our digital transformation journey.",
      author: "Lisa Wang",
      position: "Head of Engineering, InnovateLab",
      company: "Healthcare Technology Startup"
    }
  ];

  return (
    <div className="pt-24">
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              {/* Main Heading */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-sm font-medium text-indigo-700 mb-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Next Generation System Integration
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
                  Transforming IT into
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block mt-2">
                    Smart Cloud Solutions
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl font-light">
                  Powered by <span className="font-semibold text-indigo-600">One Cloud</span> – Your trusted partner for enterprise-grade cloud infrastructure, 
                  cybersecurity solutions, and digital transformation services that scale with your business ambitions.
                </p>

                <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-indigo-600">500+</div>
                      <div className="text-sm text-gray-600">Enterprise Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime SLA</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/solutions"
                  className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-3xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl group text-lg"
                >
                  Explore Solutions
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/20 backdrop-blur-lg border border-white/30 text-gray-800 font-semibold rounded-3xl hover:bg-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg"
                >
                  Contact Sales
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-6">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">SOC 2 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm text-gray-600">AWS Premier Partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-600">Global Coverage</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Visual Elements */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">System Health</div>
                      <div className="text-xs text-green-600">All Systems Operational</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-32 left-0 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Performance</div>
                      <div className="text-xs text-blue-600">99.9% Uptime</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-0 right-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Security</div>
                      <div className="text-xs text-purple-600">Zero Breaches</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Core <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive sustainable business growth in the cloud-first era.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Industries We <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trusted by leading organizations across diverse industries, delivering tailored solutions 
              that address unique sector-specific challenges and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {industry.name}
                </h3>
                <div className="text-3xl font-bold text-indigo-600 mb-2">{industry.clients}</div>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Client <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear from industry leaders who have transformed their businesses with our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
              >
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic text-lg mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-indigo-600 text-sm">{testimonial.position}</div>
                  <div className="text-gray-500 text-xs mt-1">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-16 shadow-2xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Proven Track Record
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that demonstrate our commitment to excellence and client success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-900">
                    {stat.label}
                  </div>
                  <div className="text-gray-600">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Join hundreds of enterprises who trust One Cloud for their digital transformation journey. 
                Let's build the future of your business together with cutting-edge cloud solutions.
              </p>
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Free Consultation</div>
                    <div className="text-sm text-gray-600">Expert assessment of your needs</div>
                  </div>
                  <div>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Rapid Deployment</div>
                    <div className="text-sm text-gray-600">Quick implementation timeline</div>
                  </div>
                  <div>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Guaranteed Results</div>
                    <div className="text-sm text-gray-600">SLA-backed performance</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-3xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl group text-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-12 py-6 bg-white/20 backdrop-blur-lg border border-white/30 text-gray-800 font-semibold rounded-3xl hover:bg-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl text-xl"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;