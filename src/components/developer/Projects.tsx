import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  type: string;
  techs: string[];
  delay: number;
  thumbnail?: string;
  link: string;
}

const ProjectCard = ({
  title,
  description,
  type,
  techs,
  delay,
  thumbnail,
  link,
}: ProjectCardProps) => {
  return (
    <motion.div
      className='bg-neutral-700 bg-opacity-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <div
        className={`h-48 ${thumbnail ? "bg-cover bg-no-repeat" : "bg-[#3a148c]" } bg-opacity-30 relative overflow-hidden`} //prettier-ignore
        style={{ backgroundImage: thumbnail ? `url(${thumbnail})` : "" }}
      ></div>
      <div className='p-6'>
        <div className='flex items-center justify-between mb-3'>
          <h3 className='text-xl font-poppins font-medium text-white'>
            {title}
          </h3>
          <span className='text-xs font-medium bg-[#00BFA5] bg-opacity-20 text-[#00BFA5] px-2 py-1 rounded'>
            {type}
          </span>
        </div>
        <p className='text-neutral-300 text-sm mb-4'>{description}</p>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-2'>
            {techs.map((tech, index) => (
              <span
                key={index}
                className='text-xs font-medium px-2 py-1 rounded bg-neutral-600 text-neutral-300'
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={link}
            className='text-[#00BFA5] font-medium text-sm flex items-center'
          >
            View Project <i className='ri-arrow-right-line ml-1'></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Varxell Team - Creative Design",
      description:
        "A creative animated landing page inspired by Vercel's team design landing page.",
      type: "React",
      techs: ["TypeScript", "Redux"],
      delay: 0.1,
      thumbnail: "./varxell-screenshot.png",
      link: "https://varxell.netlify.app/",
    },
    {
      title: "FlexGrid Studio - CSS Layout Visualizer",
      description:
        "A modern, interactive web application for generating and visualizing CSS Flexbox and Grid layouts in real-time.",
      type: "React",
      techs: ["React", "TypeScript", "Tailwind CSS"],
      delay: 0.2,
      thumbnail: "./flexgrid-studio.png",
      link: "https://flexgridstudio.netlify.app/",
    },
    {
      title: "Planify - Task Management App",
      description:
        "Modern collaborative workspace for remote teams with project management and chat.",
      type: "React",
      techs: ["Firestore", "React,", "CSS", "Firebase Auth", "Vite", "React Router 6"], //prettier-ignore
      delay: 0.3,
      thumbnail: "./planify-screenshot.png",
      link: "https://planify-project-manageme-3db7b.web.app/",
    },
  ];

  return (
    <section
      id='projects'
      className='px-4 sm:px-8 lg:px-16 py-16 bg-neutral-700 bg-opacity-30'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl font-poppins font-bold text-white mb-2'>
          Featured <span className='text-[#00BFA5]'>Projects</span>
        </h2>
        <p className='text-neutral-300 mb-10 max-w-2xl'>
          Showcasing my most significant development work. Each project
          represents different skills and challenges.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            type={project.type}
            techs={project.techs}
            delay={project.delay}
            thumbnail={project.thumbnail}
            link={project.link}
          />
        ))}
      </div>

      <div className='mt-12 text-center'>
        <a
          href='#'
          className='inline-block px-8 py-3 border border-[#00BFA5] text-[#00BFA5] font-medium rounded-lg hover:bg-[#00BFA5] hover:bg-opacity-10 transition-all'
        >
          View All Projects <i className='ri-arrow-right-line ml-1'></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;
