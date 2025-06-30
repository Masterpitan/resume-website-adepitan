import { motion } from "framer-motion";

interface Certification {
  title: string;
  issuer: string;
  url: string;
  linkText: string;
  level: "foundational" | "associate" | "specialty";
  icon: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/badges/1e1f74a7-ccbd-4c5f-8d54-5a7829d6d409/public_url",
    linkText: "view certification",
    level: "foundational",
    icon: "☁️"
  },
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/badges/194ae2de-9899-4786-8140-153ed45e1184/public_url",
    linkText: "view certification",
    level: "associate",
    icon: "🏗️"
  },
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "AWS Academy",
    url: "https://www.credly.com/badges/f3d6b89f-2aa9-4b94-978d-2a14174bd0a9/public_url",
    linkText: "view certificate",
    level: "specialty",
    icon: "🎓"
  },
  {
    title: "AWS AI/ML Machine Learning Course",
    issuer: "Udacity",
    url: "https://www.udacity.com/certificate/e/20c12578-417f-11f0-b66e-63450a65b3ed",
    linkText: "view certificate",
    level: "specialty",
    icon: "🤖"
  }
];

const levelColors = {
  foundational: "from-blue-500 to-cyan-500",
  associate: "from-orange-500 to-red-500",
  specialty: "from-purple-500 to-pink-500"
};

function Certifications() {
  return (
    <section className="custom-container py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/40 pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-white mb-6">
            Professional 
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Certifications</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-green-500" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-green-500" />
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 transform-gpu">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${levelColors[cert.level]} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-2">{cert.icon}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${levelColors[cert.level]} text-white`}>
                      {cert.level.toUpperCase()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 font-medium">
                    {cert.issuer}
                  </p>
                  
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-sm transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span>{cert.linkText}</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* AWS Ecosystem Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-gray-800/60 via-gray-900/60 to-gray-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/30">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-xl opacity-60" />
            
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                AWS Ecosystem 
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Mastery</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="text-green-400 font-semibold mb-1">Cloud Architecture</h4>
                  <p className="text-gray-300 text-sm">Scalable, resilient infrastructure design</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="text-blue-400 font-semibold mb-1">Security & Compliance</h4>
                  <p className="text-gray-300 text-sm">IAM, encryption, and governance</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="text-purple-400 font-semibold mb-1">AI/ML Integration</h4>
                  <p className="text-gray-300 text-sm">Machine learning and automation</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Certified across the AWS ecosystem with deep expertise in cloud architecture, security frameworks, 
                and AI/ML services. Proven ability to design cost-effective, scalable solutions that drive business 
                transformation while maintaining enterprise-grade security and compliance standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;