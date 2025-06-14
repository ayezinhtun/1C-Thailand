import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Award, CheckCircle, Globe, Building, Calendar, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import A10 from '../assets/img/A10.png';
import APC from '../assets/img/APC-copy.png';
import CheckPoint from '../assets/img/Check-Point-copy.png';
import F5 from '../assets/img/f5-copy.png';
import Fortinet from '../assets/img/Fortinet-copy.png';
import Symantec from '../assets/img/Symantec-copy.png';
import HPE from '../assets/img/Hewlett-Packard-copy.png';
import TrendMicro from '../assets/img/Trendmicro-copy.png';
import Veritas from '../assets/img/Veritas-copy.png';
import VMware from '../assets/img/VMware.png';



const About = () => {
  const partners = [
  { name: 'A10', logo: A10, description: 'Application Delivery & Security' },
  { name: 'APC', logo: APC, description: 'Power & Cooling Solutions' },
  { name: 'Check Point', logo: CheckPoint, description: 'Cybersecurity Solutions' },
  { name: 'F5', logo: F5, description: 'Application Services' },
  { name: 'Fortinet', logo: Fortinet, description: 'Network Security' },
  { name: 'HPE', logo: HPE, description: 'Enterprise Technology' },
  { name: 'Symantec', logo: Symantec, description: 'Endpoint Security' },
  { name: 'Trend Micro', logo: TrendMicro, description: 'Cloud Security' },
  { name: 'Veritas', logo: Veritas, description: 'Data Protection' },
  { name: 'VMware', logo: VMware, description: 'Virtualization Platform' }
];


  const team = [
    { 
      name: 'Dr. James Chen', 
      role: 'Chief Executive Officer & Founder', 
      experience: '20+ years in enterprise technology leadership',
      education: 'PhD Computer Science, Stanford University',
      expertise: ['Strategic Planning', 'Digital Transformation', 'Enterprise Architecture'],
      achievements: ['Founded 3 successful tech companies', 'Former CTO at Fortune 100 company', 'Published 50+ research papers']
    },
    { 
      name: 'Sarah Johnson', 
      role: 'Chief Technology Officer', 
      experience: '18+ years in cloud architecture and system design',
      education: 'MS Computer Engineering, MIT',
      expertise: ['Cloud Architecture', 'DevOps', 'Microservices'],
      achievements: ['Led cloud migration for 200+ enterprises', 'AWS Community Hero', 'Speaker at 30+ conferences']
    },
    { 
      name: 'Michael Rodriguez', 
      role: 'Chief Security Officer', 
      experience: '22+ years in cybersecurity and risk management',
      education: 'MS Cybersecurity, Carnegie Mellon',
      expertise: ['Zero Trust Architecture', 'Threat Intelligence', 'Compliance'],
      achievements: ['Former NSA cybersecurity analyst', 'CISSP certified', 'Led security for government agencies']
    },
    // { 
    //   name: 'Emily Wang', 
    //   role: 'VP of Engineering', 
    //   experience: '15+ years in software development and team leadership',
    //   education: 'BS Software Engineering, UC Berkeley',
    //   expertise: ['Agile Development', 'Team Leadership', 'Quality Assurance'],
    //   achievements: ['Built engineering teams of 100+ developers', 'Reduced deployment time by 90%', 'Patent holder in cloud computing']
    // },
    // { 
    //   name: 'David Kim', 
    //   role: 'VP of Sales & Business Development', 
    //   experience: '16+ years in enterprise sales and partnerships',
    //   education: 'MBA, Wharton School',
    //   expertise: ['Enterprise Sales', 'Strategic Partnerships', 'Market Expansion'],
    //   achievements: ['Generated $500M+ in revenue', 'Established partnerships with 50+ vendors', 'Expanded to 15 countries']
    // },
    // { 
    //   name: 'Lisa Thompson', 
    //   role: 'VP of Customer Success', 
    //   experience: '14+ years in customer relationship management',
    //   education: 'MS Business Administration, Harvard',
    //   expertise: ['Customer Success', 'Account Management', 'Service Delivery'],
    //   achievements: ['Achieved 98% customer retention rate', 'Built customer success team of 50+', 'Reduced churn by 75%']
    // }
  ];

  // const certifications = [
  //   { name: 'AWS Advanced Consulting Partner', description: 'Highest tier AWS partnership with proven expertise', year: '2019' },
  //   { name: 'Microsoft Gold Partner', description: 'Gold competency in Cloud Platform and DevOps', year: '2018' },
  //   { name: 'VMware Premier Partner', description: 'Premier level partnership for virtualization solutions', year: '2017' },
  //   { name: 'Cisco Gold Partner', description: 'Gold certification for networking solutions', year: '2020' },
  //   { name: 'ISO 27001 Certified', description: 'International standard for information security management', year: '2021' },
  //   { name: 'SOC 2 Type II Compliant', description: 'Compliance for security, availability, and confidentiality', year: '2022' }
  // ];

  const companyValues = [
    {
      title: 'Client Success',
      description: "We are dedicated to our clients' success, delivering solutions that drive real results and long-term value.",
      icon: '🚀'
    },
    {
      title: 'Customer Commitment',
      description: "We build trusted relationships by understanding our clients' needs and exceeding expectations through exceptional service.",
      icon: '🎯'
    },
    {
      title: 'Innovation',
      description: 'We embrace emerging technologies and fresh ideas to deliver modern, future-ready solutions.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency and accountability in every action and decision.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We aim for the highest standards, ensuring quality and reliability in everything we deliver.',
      icon: '🏆'
    },
    {
      title: 'Teamwork',
      description: 'We collaborate closely, respecting diverse perspectives to create better outcomes together.',
      icon: '👥'
    },
    {
      title: 'Security First',
      description: 'We design with security at the core, ensuring data protection and business continuity.',
       icon: '🛡️'
    },
     {
      title: 'Continuous Learning',
      description: 'We foster a culture of growth, staying ahead through training, research and knowledge sharing.',
      icon: '📚'
    }
  ];

  // const milestones = [
  //   { year: '2014', event: 'Company Founded', description: 'Started with 5 engineers and a vision to democratize enterprise cloud solutions' },
  //   { year: '2015', event: 'First Major Client', description: 'Secured Fortune 500 manufacturing company as anchor client' },
  //   { year: '2016', event: 'AWS Partnership', description: 'Achieved AWS Advanced Consulting Partner status' },
  //   { year: '2017', event: '100 Clients Milestone', description: 'Reached 100 enterprise clients across Southeast Asia' },
  //   { year: '2018', event: 'Regional Expansion', description: 'Opened offices in Singapore, Malaysia, and Philippines' },
  //   { year: '2019', event: 'Security Excellence', description: 'Achieved SOC 2 Type II compliance and ISO 27001 certification' },
  //   { year: '2020', event: 'Digital Transformation Leader', description: 'Helped 200+ companies accelerate digital transformation during pandemic' },
  //   { year: '2021', event: '500 Clients Achievement', description: 'Reached 500 enterprise clients with 99.9% satisfaction rate' },
  //   { year: '2022', event: 'Innovation Lab Launch', description: 'Established R&D lab for AI, ML, and emerging technologies' },
  //   { year: '2023', event: 'Sustainability Initiative', description: 'Launched green cloud solutions reducing client carbon footprint by 40%' },
  //   { year: '2024', event: 'Next-Gen Platform', description: 'Launched AI-powered system integration platform' }
  // ];

  return (
    <div className="pt-24">
      {/* Enhanced About OneCloud Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">One Cloud</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Founded in 2024, One Cloud Technology Company Limited specializes in seamless IT systems and infrastructure integration. We deliver tailored solutions that streamline operations and accelerate digital transformation. Our expert team manages every step from planning to implementation and support. We help businesses drive innovation, growth and a strong competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl" style={{ height: '545px' }}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-base">
                   Founded in 2024, One Cloud started as a small group of dedicated and passionate engineers driven by a vision to simplify complex IT challenges.
                  </p>
                  <p className="text-base">
                   With a strong focus on innovation and customer success, we quickly gained recognition for delivering reliable and effective technology solutions.
                  </p>
                  <p className="text-base">
                   Over the years, our team has expanded, bringing in experts across various IT disciplines to broaden our capabilities.
                  </p>
                  <p className="text-base">
                    Today, we continue to build on our foundation with a commitment to excellence and forward-thinking solutions that meet the needs of a rapidly changing digital world.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose One Cloud</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Fresh and Innovative', desc: 'Founded in 2024, One Cloud brigns fresh energy and innovative solutions to the IT integration space.' },
                    { title: 'Expert Team', desc: 'Our team combines strong technical skills with a customer-first approach' },
                    { title: 'Tailored Solutions', desc: 'We deliver customized solutions that fit your unique business needs' },
                    { title: 'End-to-End Support', desc: 'From planning to implementation and ongoing support, we manage every step.' },
                    { title: '24/7 Availability', desc: 'Our support is avilable 24/7 to ensure your operations run smoothly.' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-16 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-5">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
               To ensure business continuity, performance, and long-term success through reliable infrastructure, system integration and ongoing service support.
              </p>
              {/* <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Democratize enterprise technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Drive digital transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Ensure security and compliance</span>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-16 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-5">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
               To build trusted technology infrastructure that supports lasting success and operational excellence.
              </p>
              {/* <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-indigo-500" />
                  <span className="text-gray-700">Regional technology leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-indigo-500" />
                  <span className="text-gray-700">Innovation-driven solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-indigo-500" />
                  <span className="text-gray-700">Sustainable technology practices</span>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Partner Logos Section */}
      <section className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Partnership with vendors
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We collaborate with industry leaders to deliver best-in-class solutions, maintaining the highest 
              levels of certification and partnership status with leading technology vendors.
            </p> */}
          </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
  {partners.map((partner, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center group"
    >
      <div className="w-[200px] h-[100px] mx-auto mb-6 rounded-3xl bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-300">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2">
        {partner.name}
      </h3>
      <p className="text-sm text-gray-600">{partner.description}</p>
    </motion.div>
  ))}
</div>


          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Premier Status</h4>
                <p className="text-indigo-100">Highest tier partnerships with leading vendors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Expert Training</h4>
                <p className="text-indigo-100">Continuous certification and skill development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Global Support</h4>
                <p className="text-indigo-100">Access to worldwide technical resources</p>
              </div>
            </div>
          </motion.div> */}

        </div>
      </section>

      {/* Enhanced Team Section */}
      {/* <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Industry veterans with deep expertise in cloud technologies, system integration, and digital transformation. 
              Our leadership team brings together decades of experience from leading technology companies and academic institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.education}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 text-xs flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Company Timeline */}
      {/* <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A decade of growth, innovation, and milestone achievements that have shaped us into the leading 
              system integration company we are today.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-2xl font-bold text-indigo-600">{milestone.year}</div>
                        <Calendar className="w-5 h-5 text-gray-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Enhanced Certifications Section */}
      {/* <section className='pt-32'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Maintaining the highest standards of security, quality, and service excellence through rigorous 
              certification processes and continuous compliance monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {cert.name}
                      </h3>
                      <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-2xl text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Compliance Commitment</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600">Compliance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">0</div>
                <div className="text-gray-600">Security Breaches</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Annual</div>
                <div className="text-gray-600">Audits</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Contact Information */}
      <section className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-16 text-center shadow-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
              Join the hundreds of enterprises who trust One Cloud for their digital transformation journey. 
              Let's discuss how we can help accelerate your business growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Call Us</h4>
                <p className="text-indigo-100">+66-83-225-6781</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Email Us</h4>
                <p className="text-indigo-100">yenaingtint@onecloudtechnology-th.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Visit Us</h4>
                <p className="text-indigo-100">No.18/8 Asoke Montri Road, Unit 604, Level 6, FICO Place BIdg, Soi Sukhumvit 21, Klongtoey Nua, Wattana, Bangkok 10110, Thailand</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </Link>
              {/* <button className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                Download Company Profile
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;