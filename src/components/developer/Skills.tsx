import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
}

const SkillBar = ({ name, percentage, delay }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className='flex justify-between mb-1'>
        <span className='text-sm font-medium text-neutral-300'>{name}</span>
        <span className='text-sm font-medium text-[#00BFA5]'>
          {percentage}%
        </span>
      </div>
      <div className='h-2 bg-neutral-700 rounded-full'>
        <motion.div
          className='progress-line bg-gradient-to-r from-[#4A148C] to-[#00BFA5] rounded-full'
          initial={{ width: "0%" }}
          animate={{ width: isInView ? `${percentage}%` : "0%" }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

interface OtherSkillProps {
  icon: string;
  title: string;
  subtitle: string;
  delay: number;
}

const OtherSkill = ({ icon, title, subtitle, delay }: OtherSkillProps) => {
  return (
    <motion.div
      className='bg-neutral-700 bg-opacity-30 p-4 rounded-lg flex items-center'
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className='w-10 h-10 flex items-center justify-center bg-[#4A148C] bg-opacity-30 rounded-lg text-[#00BFA5]'>
        <i className={`ri-${icon} text-xl`}></i>
      </div>
      <div className='ml-3'>
        <h4 className='text-white font-medium text-sm'>{title}</h4>
        <p className='text-neutral-400 text-xs'>{subtitle}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: "React", percentage: 90, delay: 0.1 },
    { name: "TypeScript", percentage: 85, delay: 0.2 },
    { name: "CS & SCSS", percentage: 92, delay: 0.3 },
    { name: "Tailwind & Styled Components", percentage: 90, delay: 0.4 },
    { name: "Next.js", percentage: 80, delay: 0.5 },
  ];

  const otherSkills = [
    {
      icon: "git-branch-line",
      title: "Git & GitHub",
      subtitle: "Version control",
      delay: 0.1,
    },

    {
      icon: "layout-4-line",
      title: "UI Design",
      subtitle: "Figma",
      delay: 0.4,
    },
    {
      icon: "database-2-line",
      title: "Databases",
      subtitle: "Firebase, Appwrite",
      delay: 0.5,
    },
    {
      icon: "open-source-line",
      title: "Open Source",
      subtitle: "Contributing, maintaining",
      delay: 0.6,
    },
  ];

  return (
    <section id='skills' className='px-4 sm:px-8 lg:px-16 py-16'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl font-poppins font-bold text-white mb-2'>
          Technical <span className='text-[#00BFA5]'>Skills</span>
        </h2>
        <p className='text-neutral-300 mb-10 max-w-2xl'>
          A comprehensive overview of my technical abilities and proficiency
          levels.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <h3 className='text-xl font-poppins font-medium text-white mb-6'>
            Frontend Development
          </h3>

          <div className='space-y-6'>
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-xl font-poppins font-medium text-white mb-6'>
            Other Skills
          </h3>

          <div className='grid grid-cols-2 gap-4'>
            {otherSkills.map((skill, index) => (
              <OtherSkill
                key={index}
                icon={skill.icon}
                title={skill.title}
                subtitle={skill.subtitle}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
