import { motion } from "framer-motion";

const Experience = () => {
  // experience data
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Spowse",
      period: "2023",
      description:
        "Frontend development for multiple client projects, developed reusablecuser interfaces and components, and converted figma designs to frontend applications.",
      technologies: ["React", "TypeScript", "Next.js"],
      delay: 0.1,
    },
    {
      title: "Frontend Developer",
      company: "IDS Company",
      period: "2022 - 2023",
      description:
        "Developed and maintained multiple web applications, collaborated with design team to implement responsive UIs, and optimized app performance.",
      technologies: ["React", "JavaScript", "Next.js", "CSS"],
      delay: 0.2,
    },
    {
      title: "Frontend Developer",
      company: "Sprinthub",
      period: "2021 - 2022",
      description:
        "Built responsive websites for clients, collaborated on UX improvements, and maintained existing web applications.",
      technologies: ["HTML/CSS", "JavaScript", "jQuery"],
      delay: 0.3,
    },
  ];

  return (
    <section
      id='experience'
      className='px-4 sm:px-8 lg:px-16 py-16 bg-neutral-700 bg-opacity-30'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl font-poppins font-bold text-white mb-2'>
          Professional <span className='text-[#00BFA5]'>Experience</span>
        </h2>
        <p className='text-neutral-300 mb-10 max-w-2xl'>
          My journey in tech, highlighting key roles and responsibilities.
        </p>
      </motion.div>

      <div className='relative pl-8 md:pl-12 max-w-3xl'>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            technologies={exp.technologies}
            delay={exp.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;

// Experience item
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  delay: number;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  delay,
}: ExperienceItemProps) => {
  return (
    <motion.div
      className='mb-12 relative timeline-dot text-[#00BFA5]'
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className='bg-neutral-700 bg-opacity-50 p-6 rounded-xl hover:shadow-lg transition-all'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-4'>
          <h3 className='text-xl font-poppins font-semibold text-white'>
            {title}
          </h3>
          <span className='text-sm font-medium text-[#00BFA5] mt-1 md:mt-0'>
            {period}
          </span>
        </div>
        <h4 className='text-neutral-300 font-medium mb-4'>{company}</h4>
        <p className='text-neutral-400'>{description}</p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='text-xs font-medium px-2 py-1 rounded bg-[#4A148C] bg-opacity-20 text-[#00BFA5]'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
