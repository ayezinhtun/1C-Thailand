import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Database, 
  Globe, 
  Zap, 
  Lock, 
  Server, 
  Network, 
  HardDrive, 
  Settings, 
  Monitor, 
  Layers 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Cloud Compute',
      description: 'Scalable virtual machines and containers with auto-scaling capabilities for enterprise workloads.',
      icon: Cloud,
      features: ['Auto-scaling', 'Load balancing', 'High availability', '99.9% SLA'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Kubernetes',
      description: 'Managed Kubernetes clusters with enterprise-grade security and monitoring.',
      icon: Layers,
      features: ['Managed clusters', 'Auto-updates', 'RBAC security', 'Multi-zone deployment'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Block Storage',
      description: 'High-performance, persistent storage solutions with snapshot and backup capabilities.',
      icon: HardDrive,
      features: ['SSD performance', 'Snapshots', 'Encryption', 'Multi-attach support'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DNS Management',
      description: 'Enterprise DNS with global anycast network and advanced traffic routing.',
      icon: Globe,
      features: ['Global anycast', 'Traffic routing', 'Health checks', '100% uptime SLA'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Load Balancer',
      description: 'Advanced load balancing with SSL termination and health monitoring.',
      icon: Network,
      features: ['SSL termination', 'Health monitoring', 'Sticky sessions', 'DDoS protection'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Auto Scaling',
      description: 'Intelligent auto-scaling based on metrics with predictive scaling capabilities.',
      icon: Zap,
      features: ['Metric-based scaling', 'Predictive scaling', 'Cost optimization', 'Custom policies'],
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Object Storage',
      description: 'Unlimited scalable storage with CDN integration and lifecycle management.',
      icon: Database,
      features: ['Unlimited scale', 'CDN integration', 'Lifecycle policies', 'Version control'],
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Security Center',
      description: 'Comprehensive security monitoring with threat detection and compliance reporting.',
      icon: Shield,
      features: ['Threat detection', 'Compliance reporting', 'Vulnerability scanning', '24/7 monitoring'],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Identity Management',
      description: 'Enterprise identity and access management with SSO and multi-factor authentication.',
      icon: Lock,
      features: ['SSO integration', 'MFA', 'Role-based access', 'Audit logging'],
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Dedicated Servers',
      description: 'High-performance bare metal servers with custom configurations.',
      icon: Server,
      features: ['Custom hardware', 'Root access', 'High performance', 'Dedicated support'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Real-time monitoring and analytics with custom dashboards and alerting.',
      icon: Monitor,
      features: ['Real-time metrics', 'Custom dashboards', 'Alerting', 'Log analysis'],
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      title: 'DevOps Automation',
      description: 'Complete CI/CD pipelines with infrastructure as code and automated testing.',
      icon: Settings,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing', 'Deployment automation'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cloud infrastructure and system integration services designed to accelerate your 
              digital transformation journey with enterprise-grade reliability and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white/5 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are organized into key categories to address all aspects of your IT infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Infrastructure',
                description: 'Core computing, storage, and networking services',
                services: ['Cloud Compute', 'Block Storage', 'Dedicated Servers', 'Load Balancer'],
                icon: Server,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Platform',
                description: 'Managed platforms and orchestration services',
                services: ['Kubernetes', 'Auto Scaling', 'DevOps Automation', 'DNS Management'],
                icon: Layers,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Security',
                description: 'Comprehensive security and compliance solutions',
                services: ['Security Center', 'Identity Management', 'DDoS Protection', 'Compliance'],
                icon: Shield,
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Operations',
                description: 'Monitoring, analytics, and operational excellence',
                services: ['Monitoring & Analytics', 'Log Management', 'Alerting', 'Support'],
                icon: Monitor,
                color: 'from-orange-500 to-red-500'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <span className="text-sm text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA & Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Service Level Agreements</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Uptime Guarantee</span>
                  <span className="text-2xl font-bold text-green-600">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="text-2xl font-bold text-indigo-600">&lt; 15min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Resolution Time</span>
                  <span className="text-2xl font-bold text-purple-600">&lt; 4hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Support Coverage</span>
                  <span className="text-2xl font-bold text-orange-600">24/7</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Support Tiers</h3>
              <div className="space-y-6">
                {[
                  { tier: 'Basic', description: 'Email support, 8x5 coverage', price: 'Included' },
                  { tier: 'Professional', description: 'Phone + email, 24x7 coverage', price: 'Premium' },
                  { tier: 'Enterprise', description: 'Dedicated support team', price: 'Custom' },
                  { tier: 'Mission Critical', description: 'On-site support available', price: 'Contact' }
                ].map((support, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/20">
                    <div>
                      <h4 className="font-semibold text-gray-900">{support.tier}</h4>
                      <p className="text-sm text-gray-600">{support.description}</p>
                    </div>
                    <span className="text-sm font-medium text-indigo-600">{support.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;