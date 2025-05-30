import React from "react";
import { motion } from "framer-motion";

interface ExpertiseCardProps {
  icon: string;
  title: string;
  description: string;
  skills: string[];
  delay: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon,
  title,
  description,
  skills,
  delay
}) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-[#880E4F] bg-opacity-10 rounded-lg text-[#880E4F] mb-4">
        <i className={`ri-${icon} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-poppins font-semibold text-[#3E2723] mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-500">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <i className="ri-checkbox-circle-line text-[#FFD54F] mr-2"></i>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Expertise: React.FC = () => {
  const expertiseItems = [
    {
      icon: "code-box-line",
      title: "API Documentation",
      description: "Comprehensive API guides, reference documentation, and tutorials that help developers integrate quickly.",
      skills: ["RESTful API documentation", "OpenAPI/Swagger specifications", "SDK implementation guides"],
      delay: 0.1
    },
    {
      icon: "article-line",
      title: "Technical Tutorials",
      description: "Step-by-step guides and tutorials that break down complex technical concepts into manageable learning paths.",
      skills: ["Framework & library tutorials", "Code walkthroughs", "Best practice guides"],
      delay: 0.2
    },
    {
      icon: "book-open-line",
      title: "Product Documentation",
      description: "Clear, comprehensive user guides, technical specifications, and help center content for software products.",
      skills: ["User manuals & guides", "Setup & configuration docs", "Troubleshooting guides"],
      delay: 0.3
    },
    {
      icon: "open-source-line",
      title: "Open Source Documentation",
      description: "Contributing guides, project documentation, and API references for open source projects.",
      skills: ["Contributor guidelines", "Project architecture docs", "Release notes & changelogs"],
      delay: 0.4
    },
    {
      icon: "terminal-line",
      title: "Developer Guides",
      description: "In-depth technical guides for specific programming languages, frameworks, and development workflows.",
      skills: ["Architecture documentation", "Implementation guidelines", "Code style & standards"],
      delay: 0.5
    },
    {
      icon: "video-chat-line",
      title: "Technical Content Marketing",
      description: "Engaging articles, blog posts, and whitepapers that showcase technical expertise and thought leadership.",
      skills: ["Technical blog posts", "Case studies & whitepapers", "Technical newsletter content"],
      delay: 0.6
    }
  ];

  return (
    <section id="expertise" className="px-4 sm:px-8 lg:px-16 py-16 bg-[#ebe5dc]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-poppins font-bold text-[#3E2723] mb-2">Areas of <span className="text-[#880E4F]">Expertise</span></h2>
        <p className="text-neutral-600 mb-10 max-w-2xl">Specialized content creation and documentation services across multiple technical domains.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseItems.map((item, index) => (
          <ExpertiseCard 
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            skills={item.skills}
            delay={item.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
