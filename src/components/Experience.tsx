import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "ALX-AWS Programme Volunteer Mentor",
    company: "ALX Africa",
    period: "March 2025 - Present",
    description: "Leading and mentoring aspiring cloud professionals in AWS technologies, fostering the next generation of cloud architects and engineers.",
    highlights: [
      "Mentoring 50+ students in AWS cloud fundamentals and best practices",
      "Designing hands-on workshops for real-world cloud scenarios",
      "Facilitating technical discussions and problem-solving sessions"
    ]
  },
  {
    title: "Backend-Pro Trainee (SQL, Python, DevOps)",
    company: "ALX Africa",
    period: "June 2025 - Present",
    description: "Mastering advanced backend development with focus on database optimization, Python frameworks, and DevOps automation practices.",
    highlights: [
      "Building scalable backend systems with Python and SQL",
      "Implementing CI/CD pipelines and infrastructure automation",
      "Developing microservices architecture patterns"
    ]
  },
  {
    title: "AWS Solutions Architect Trainee",
    company: "ALX Africa",
    period: "June 2024 - February 2025",
    description: "Intensive training in AWS cloud architecture, gaining expertise in designing resilient, scalable, and cost-effective cloud solutions.",
    highlights: [
      "Designed and deployed multi-tier cloud architectures",
      "Implemented security best practices and compliance frameworks",
      "Optimized cloud costs through strategic resource management"
    ]
  },
  {
    title: "Public Relations Officer",
    company: "Temvert Empowerment Foundation",
    period: "August 2023 - Present",
    description: "Driving strategic communications and community engagement initiatives, building strong stakeholder relationships and brand presence.",
    highlights: [
      "Increased community engagement by 200% through digital campaigns",
      "Managed cross-functional teams for successful project delivery",
      "Developed strategic partnerships with key industry stakeholders"
    ]
  }
];

function Experience() {
  return (
    <section className="custom-container py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white mb-4">
          Professional Experience
        </h2>
        <div className="bg-green-500 h-[4px] w-20 mx-auto mb-6" />
        <p className="text-gray-300 text-base max-w-2xl mx-auto">
          Building expertise across cloud architecture, backend development, and strategic leadership
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 h-full">
              <div className="flex flex-col mb-3">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-green-400 font-semibold text-base">
                  {exp.company}
                </p>
                <span className="text-gray-400 font-medium text-sm mt-1">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {exp.description}
              </p>
              
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-green-400 mr-2 mt-1 text-xs">▸</span>
                      <span className="text-xs">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;