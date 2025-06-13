import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Landmark,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Award,
  Target,
  Clock,
  DollarSign,
  BarChart
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: 'Enterprise Cloud Migration',
      description: 'Complete cloud transformation for large enterprises with zero-downtime migration strategies, comprehensive modernization, and ongoing optimization. Transform legacy infrastructure into scalable, secure cloud environments.',
      icon: Building2,
      features: [
        'Zero-downtime migration strategy',
        'Legacy system modernization',
        'Multi-cloud and hybrid architecture',
        'Cost optimization and rightsizing',
        'Compliance and governance framework',
        'Training and change management'
      ],
      benefits: [
        '60% reduction in infrastructure costs',
        '99.9% uptime guarantee during migration',
        'Scalable architecture for future growth',
        '24/7 expert support and monitoring'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      industries: ['Manufacturing', 'Finance', 'Retail', 'Technology'],
      caseStudy: 'Migrated 500+ servers for Fortune 500 company with zero downtime and 40% cost savings',
      timeline: '3-6 months',
      investment: '$100K - $1M+',
      roi: '300% in first year'
    },
    {
      title: 'E-commerce Platform Solutions',
      description: 'Scalable, secure e-commerce infrastructure that handles high traffic volumes with advanced payment processing, inventory management, and real-time analytics. Built for peak performance during high-demand periods.',
      icon: ShoppingCart,
      features: [
        'Auto-scaling infrastructure for traffic spikes',
        'Secure payment gateway integration',
        'Real-time inventory management',
        'Advanced analytics and reporting',
        'Mobile-first responsive design',
        'PCI DSS compliance and security'
      ],
      benefits: [
        '300% traffic handling capacity increase',
        'Sub-second page load times globally',
        'PCI DSS compliance certification',
        'Global CDN coverage and optimization'
      ],
      gradient: 'from-purple-500 to-pink-500',
      industries: ['Retail', 'Fashion', 'Electronics', 'Consumer Goods'],
      caseStudy: 'Scaled e-commerce platform to handle 1M+ concurrent users during Black Friday with 99.99% uptime',
      timeline: '2-4 months',
      investment: '$50K - $500K',
      roi: '250% in first year'
    },
    {
      title: 'Educational Technology Platform',
      description: 'Modern learning management systems with virtual classrooms, content delivery networks, student engagement tools, and comprehensive analytics. Designed for institutions of all sizes.',
      icon: GraduationCap,
      features: [
        'Virtual classroom integration with video conferencing',
        'Comprehensive content management system',
        'Student portal and mobile applications',
        'Advanced assessment and grading tools',
        'Offline content access and synchronization',
        'Real-time analytics and progress tracking'
      ],
      benefits: [
        'Support for 100K+ concurrent students',
        'Multi-language and accessibility support',
        'Offline content access capabilities',
        'Real-time collaboration and engagement'
      ],
      gradient: 'from-green-500 to-emerald-500',
      industries: ['Education', 'Training', 'Corporate Learning', 'Certification'],
      caseStudy: 'Deployed LMS for 50+ universities serving 500K+ students globally with 99.9% availability',
      timeline: '4-8 months',
      investment: '$75K - $750K',
      roi: '200% in first year'
    },
    {
      title: 'Healthcare Data Management',
      description: 'HIPAA-compliant healthcare solutions with electronic health records, telemedicine platforms, medical imaging storage, and advanced analytics. Secure, scalable, and interoperable.',
      icon: Heart,
      features: [
        'Electronic Health Records (EHR) system',
        'Telemedicine platform with video consultation',
        'Medical imaging storage and PACS integration',
        'Appointment scheduling and patient portal',
        'Billing and insurance integration',
        'Compliance reporting and audit trails'
      ],
      benefits: [
        'HIPAA compliance certification',
        'End-to-end encryption and security',
        'Disaster recovery and data backup',
        'HL7 FHIR interoperability standards'
      ],
      gradient: 'from-red-500 to-rose-500',
      industries: ['Hospitals', 'Clinics', 'Pharmaceutical', 'Medical Research'],
      caseStudy: 'Implemented EHR system for 200+ healthcare facilities improving patient care efficiency by 40%',
      timeline: '6-12 months',
      investment: '$200K - $2M+',
      roi: '180% in first year'
    },
    {
      title: 'Financial Services Infrastructure',
      description: 'Secure, compliant financial technology solutions with real-time transaction processing, advanced fraud detection, regulatory compliance, and risk management tools.',
      icon: Landmark,
      features: [
        'Real-time transaction processing engine',
        'AI-powered fraud detection system',
        'Regulatory compliance automation',
        'Mobile banking and digital wallet apps',
        'API gateway and open banking',
        'Risk management and reporting tools'
      ],
      benefits: [
        'SOX and regulatory compliance',
        'Real-time fraud detection and prevention',
        'High-frequency trading support',
        'Multi-currency and global payment support'
      ],
      gradient: 'from-orange-500 to-amber-500',
      industries: ['Banking', 'Insurance', 'Investment', 'Fintech'],
      caseStudy: 'Built trading platform processing 1M+ transactions per second with 99.99% accuracy',
      timeline: '8-18 months',
      investment: '$500K - $5M+',
      roi: '400% in first year'
    },
    {
      title: 'Smart Manufacturing IoT',
      description: 'Industrial IoT solutions for smart manufacturing with predictive maintenance, quality control, supply chain optimization, and real-time production monitoring.',
      icon: Building2,
      features: [
        'IoT sensor integration and data collection',
        'Predictive maintenance algorithms',
        'Quality control and defect detection',
        'Supply chain optimization',
        'Real-time production monitoring',
        'Energy management and optimization'
      ],
      benefits: [
        '30% reduction in maintenance costs',
        '25% improvement in production efficiency',
        '50% reduction in unplanned downtime',
        'Real-time visibility across operations'
      ],
      gradient: 'from-indigo-500 to-blue-500',
      industries: ['Manufacturing', 'Automotive', 'Aerospace', 'Energy'],
      caseStudy: 'Implemented IoT solution reducing manufacturing downtime by 60% and increasing efficiency by 35%',
      timeline: '6-12 months',
      investment: '$150K - $1.5M',
      roi: '320% in first year'
    }
  ];

  const implementationProcess = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current infrastructure, business requirements, and strategic objectives',
      duration: '2-4 weeks',
      deliverables: ['Current state assessment', 'Gap analysis', 'Requirements documentation', 'Risk assessment']
    },
    {
      step: '02',
      title: 'Solution Design & Planning',
      description: 'Detailed architecture design, implementation roadmap, and project planning with stakeholder alignment',
      duration: '3-6 weeks',
      deliverables: ['Solution architecture', 'Implementation roadmap', 'Project plan', 'Resource allocation']
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Agile development and deployment with continuous testing, monitoring, and stakeholder communication',
      duration: '8-24 weeks',
      deliverables: ['Solution development', 'Testing and QA', 'Deployment', 'Documentation']
    },
    {
      step: '04',
      title: 'Training & Go-Live',
      description: 'User training, change management, go-live support, and initial optimization',
      duration: '2-4 weeks',
      deliverables: ['User training', 'Go-live support', 'Performance optimization', 'Knowledge transfer']
    },
    {
      step: '05',
      title: 'Support & Optimization',
      description: 'Ongoing support, monitoring, optimization, and continuous improvement',
      duration: 'Ongoing',
      deliverables: ['24/7 support', 'Performance monitoring', 'Regular optimization', 'Feature updates']
    }
  ];

  const successMetrics = [
    { metric: '95%', label: 'Project Success Rate', description: 'On-time, on-budget delivery' },
    { metric: '40%', label: 'Average Cost Reduction', description: 'Infrastructure and operational savings' },
    { metric: '300%', label: 'Average ROI', description: 'Return on investment in first year' },
    { metric: '99.9%', label: 'Uptime Achievement', description: 'System availability and reliability' },
    { metric: '60%', label: 'Faster Time to Market', description: 'Accelerated development cycles' },
    { metric: '98%', label: 'Client Satisfaction', description: 'Customer satisfaction rating' }
  ];

  const technologyStack = [
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Multi-cloud'],
      icon: Globe
    },
    {
      category: 'Containers & Orchestration',
      technologies: ['Kubernetes', 'Docker', 'OpenShift', 'Service Mesh'],
      icon: Target
    },
    {
      category: 'DevOps & CI/CD',
      technologies: ['Jenkins', 'GitLab', 'Terraform', 'Ansible'],
      icon: Zap
    },
    {
      category: 'Monitoring & Analytics',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog'],
      icon: BarChart
    },
    {
      category: 'Security & Compliance',
      technologies: ['Zero Trust', 'SIEM', 'IAM', 'Compliance Tools'],
      icon: Shield
    },
    {
      category: 'Databases & Storage',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Object Storage'],
      icon: Users
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
              Premium <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
              Industry-specific solutions designed to address unique challenges and accelerate digital transformation 
              across various sectors. Our proven methodologies and expert implementation ensure successful outcomes 
              with measurable business impact and sustainable growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-indigo-600 mb-2">6+</div>
                <div className="text-gray-600">Solution Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">300%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Solutions Grid */}
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
              Comprehensive Solution Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              End-to-end solutions tailored for specific industries and use cases
            </p>
          </motion.div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-6">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center`}>
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {solution.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{solution.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{solution.investment}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{solution.roi} ROI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-3">
                            <Zap className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-indigo-600" />
                      Success Story
                    </h4>
                    <p className="text-gray-600 italic leading-relaxed">"{solution.caseStudy}"</p>
                  </div>
                </div>
                
                {/* Visual Card */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300"
                  >
                    <div className="space-y-8">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">Industries Served</h3>
                        <Globe className="w-6 h-6 text-indigo-600" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {solution.industries.map((industry, industryIndex) => (
                          <div key={industryIndex} className="bg-white/10 rounded-2xl p-4 text-center">
                            <span className="font-medium text-gray-800">{industry}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Solution Highlights</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-white/5 rounded-2xl">
                            <div className="text-2xl font-bold text-indigo-600 mb-1">99.9%</div>
                            <div className="text-xs text-gray-600">Uptime SLA</div>
                          </div>
                          <div className="text-center p-4 bg-white/5 rounded-2xl">
                            <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                            <div className="text-xs text-gray-600">Support</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-white/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-indigo-600" />
                            <span className="text-sm text-gray-600">Enterprise Ready</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-gray-600">Secure & Compliant</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cutting-edge technologies and proven frameworks that power our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stack.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {stack.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-white/10 rounded-xl p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
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
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our proven methodology ensures successful solution delivery with minimal business disruption
            </p>
          </motion.div>

          <div className="space-y-12">
            {implementationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-12`}
              >
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl font-bold text-indigo-600">{process.step}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                        <div className="text-sm text-purple-600 font-medium">{process.duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {process.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {process.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <div className="text-2xl font-bold text-white">{process.step}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
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
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Track record of delivering measurable business value and exceptional outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {metric.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-3">
                  {metric.label}
                </div>
                <div className="text-gray-600">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-16 text-center shadow-2xl"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Need a Custom Solution?
            </h2>
            <p className="text-2xl text-indigo-100 max-w-4xl mx-auto mb-12">
              Our expert team can design and implement tailored solutions that perfectly match your unique 
              business requirements, industry-specific challenges, and strategic objectives. Let's build 
              something extraordinary together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Expert Consultation</h4>
                <p className="text-indigo-100">Free assessment and recommendations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Tailored Approach</h4>
                <p className="text-indigo-100">Custom solutions for your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Rapid Implementation</h4>
                <p className="text-indigo-100">Fast deployment and go-live</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Proven Results</h4>
                <p className="text-indigo-100">Track record of success</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center justify-center px-12 py-6 bg-white text-indigo-600 font-semibold rounded-3xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group text-xl">
                Discuss Your Project
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-12 py-6 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold rounded-3xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl text-xl">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;