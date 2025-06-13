import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cloud, Shield, Globe, Award, Users, Building, Zap, Target, TrendingUp, Star } from 'lucide-react';

const Journey = () => {
  const journeySteps = [
    {
      year: '2014',
      title: 'Foundation & Vision',
      description: 'One Cloud was founded with a mission to democratize enterprise-grade cloud solutions for businesses of all sizes. Started with a small team of passionate engineers in Bangkok, Thailand.',
      icon: Rocket,
      details: [
        'Founded by industry veterans with 20+ years combined experience in enterprise technology',
        'Initial focus on small to medium enterprise cloud solutions and system integration',
        'Established strategic partnerships with major cloud providers including AWS and Microsoft',
        'First office opened in Bangkok\'s central business district with a team of 5 engineers',
        'Secured seed funding of $2M to accelerate product development and market entry',
        'Developed proprietary cloud migration methodology that would become industry standard'
      ],
      metrics: { clients: '5', revenue: '$500K', employees: '5' },
      milestone: 'Company Incorporation'
    },
    {
      year: '2016',
      title: 'Cloud Excellence & Growth',
      description: 'Achieved AWS Advanced Consulting Partner status and expanded our cloud infrastructure services. Deployed our first enterprise-scale cloud migration project for a Fortune 500 manufacturing company.',
      icon: Cloud,
      details: [
        'AWS Advanced Consulting Partner certification achieved - highest tier partnership',
        'Launched 24/7 cloud monitoring and support services with dedicated NOC',
        'Completed 50+ successful cloud migrations with zero downtime guarantee',
        'Expanded engineering team to 25 cloud specialists and solution architects',
        'Opened second office in Singapore to serve Southeast Asian markets',
        'Developed AI-powered cost optimization tools reducing client cloud spend by 30%'
      ],
      metrics: { clients: '50', revenue: '$5M', employees: '25' },
      milestone: 'AWS Premier Partnership'
    },
    {
      year: '2018',
      title: 'Security Leadership & Compliance',
      description: 'Became a cybersecurity leader in the region with advanced threat detection and response capabilities. Achieved SOC 2 Type II compliance and established our Security Operations Center.',
      icon: Shield,
      details: [
        'SOC 2 Type II compliance achieved with zero findings in initial audit',
        'Advanced threat detection platform launched with ML-powered analytics',
        'Incident response team established with average 15-minute response time',
        'Cybersecurity training programs initiated for 500+ client organizations',
        'ISO 27001 certification obtained for information security management',
        'Zero-trust security architecture implemented for all client environments'
      ],
      metrics: { clients: '150', revenue: '$15M', employees: '60' },
      milestone: 'Security Excellence Recognition'
    },
    {
      year: '2021',
      title: 'Digital Transformation Leadership',
      description: 'Expanded into comprehensive digital transformation services, helping enterprises modernize their entire IT infrastructure and business processes during the global digital acceleration.',
      icon: Globe,
      details: [
        'Digital transformation consulting services launched with 50+ certified consultants',
        'AI and machine learning capabilities added to service portfolio',
        'DevOps and automation services expanded with CI/CD pipeline implementations',
        'Reached 500+ enterprise clients milestone with 99.9% satisfaction rate',
        'Established innovation lab for emerging technologies research and development',
        'Launched sustainability initiative helping clients reduce carbon footprint by 40%'
      ],
      metrics: { clients: '500', revenue: '$50M', employees: '150' },
      milestone: 'Digital Transformation Leader'
    },
    {
      year: '2024',
      title: 'Innovation Leadership & Next-Gen Platform',
      description: 'Leading the next generation of SI services with cutting-edge technologies, sustainable solutions, and comprehensive platform integrations. Launched AI-powered automation platform.',
      icon: Award,
      details: [
        'Next-generation SI platform launched with AI-powered automation capabilities',
        'Sustainable cloud solutions introduced reducing environmental impact by 50%',
        'Advanced analytics and reporting capabilities with real-time business intelligence',
        'Industry recognition as top SI provider in Southeast Asia by leading analysts',
        'Quantum-ready security solutions developed for future-proof protection',
        'Global expansion initiated with offices planned in 5 additional countries'
      ],
      metrics: { clients: '750+', revenue: '$100M+', employees: '300+' },
      milestone: 'Industry Innovation Leader'
    }
  ];

  const achievements = [
    { icon: Users, number: '750+', label: 'Enterprise Clients', description: 'Trusted by Fortune 500 companies' },
    { icon: Building, number: '1000+', label: 'Projects Completed', description: 'Successful implementations' },
    { icon: Globe, number: '15', label: 'Countries Served', description: 'Global presence and reach' },
    { icon: Award, number: '50+', label: 'Industry Awards', description: 'Recognition for excellence' },
    { icon: Users, number: '300+', label: 'Expert Engineers', description: 'Certified professionals' },
    { icon: Star, number: '99.9%', label: 'Client Satisfaction', description: 'Proven track record' }
  ];

  const innovations = [
    {
      year: '2015',
      title: 'Cloud Migration Accelerator',
      description: 'Proprietary tool reducing migration time by 60%',
      impact: 'Migrated 500+ applications with zero downtime'
    },
    {
      year: '2017',
      title: 'AI-Powered Monitoring',
      description: 'Machine learning for predictive maintenance',
      impact: 'Reduced system failures by 80%'
    },
    {
      year: '2019',
      title: 'Zero-Trust Security Framework',
      description: 'Advanced security architecture implementation',
      impact: 'Zero security breaches across all clients'
    },
    {
      year: '2021',
      title: 'Sustainable Cloud Platform',
      description: 'Green computing solutions for carbon reduction',
      impact: '40% reduction in client carbon footprint'
    },
    {
      year: '2023',
      title: 'Quantum-Ready Infrastructure',
      description: 'Future-proof security and computing solutions',
      impact: 'Prepared 100+ clients for quantum era'
    }
  ];

  const clientStories = [
    {
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Legacy system modernization',
      solution: 'Complete cloud transformation',
      result: '50% cost reduction, 300% performance improvement',
      timeline: '6 months'
    },
    {
      company: 'Southeast Bank',
      industry: 'Financial Services',
      challenge: 'Regulatory compliance and security',
      solution: 'Zero-trust security implementation',
      result: '100% compliance, zero security incidents',
      timeline: '4 months'
    },
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Scalable telemedicine platform',
      solution: 'Cloud-native architecture',
      result: '1000% user growth, 99.99% uptime',
      timeline: '8 months'
    }
  ];

  return (
    <div className="pt-24">
      {/* Enhanced Hero Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
              A decade of innovation, growth, and technological advancement. From a small startup with big dreams 
              to Southeast Asia's leading System Integration company, serving enterprises across 15 countries 
              with cutting-edge cloud solutions and digital transformation services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">750+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
                <div className="text-4xl font-bold text-cyan-600 mb-2">$100M+</div>
                <div className="text-gray-600">Annual Revenue</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Milestones & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Key moments that defined our growth and established our position as a technology leader
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            
            <div className="space-y-20">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-6 mb-8">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-indigo-600 mb-2">{step.year}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <div className="text-sm text-purple-600 font-medium">{step.milestone}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {step.description}
                      </p>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5 rounded-2xl">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-indigo-600">{step.metrics.clients}</div>
                          <div className="text-sm text-gray-600">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{step.metrics.revenue}</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-600">{step.metrics.employees}</div>
                          <div className="text-sm text-gra  y-600">Team</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">Key Achievements:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
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
              Innovation <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Breakthrough innovations that have shaped the industry and delivered exceptional value to our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
              >
                <div className="text-2xl font-bold text-indigo-600 mb-4">{innovation.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-gray-600 mb-6">{innovation.description}</p>
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-4">
                  <div className="text-sm font-semibold text-indigo-700 mb-1">Impact:</div>
                  <div className="text-sm text-indigo-600">{innovation.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
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
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real transformations that demonstrate our commitment to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  <div className="text-sm text-indigo-600 font-medium">{story.industry}</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Result</h4>
                    <p className="text-green-600 text-sm font-medium">{story.result}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Timeline:</span>
                      <span className="text-sm font-medium text-indigo-600">{story.timeline}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Milestones Section */}
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
              Key Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and continuous growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-3">
                  {achievement.label}
                </div>
                <div className="text-gray-600">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-16 shadow-2xl text-center"
          >
            <div className="w-24 h-24 mx-auto mb-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Looking Forward
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
              As we continue our journey into the next decade, we're committed to pushing the boundaries of what's possible in 
              system integration and cloud services. Our roadmap includes revolutionary AI-powered automation, quantum-ready 
              security solutions, and sustainable cloud technologies that will define the future of enterprise IT.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {[
                { title: 'AI-Powered Automation', desc: 'Intelligent systems that learn and adapt' },
                { title: 'Quantum-Ready Security', desc: 'Future-proof protection mechanisms' },
                { title: 'Sustainable Computing', desc: 'Carbon-neutral cloud solutions' },
                { title: 'Global Expansion', desc: 'Serving clients worldwide' }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">2025-2030 Vision</h3>
              <p className="text-indigo-100 leading-relaxed">
                To become the global leader in intelligent system integration, serving 10,000+ enterprises 
                across 50 countries with AI-driven solutions that transform how businesses operate in the digital age.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Journey;