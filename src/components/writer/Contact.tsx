import { motion } from "framer-motion";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      className='flex'
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className='w-8 h-8 rounded-full bg-[#880E4F] text-white flex items-center justify-center font-medium text-sm flex-shrink-0'>
        {number}
      </div>
      <div className='ml-4'>
        <h4 className='font-medium text-[#3E2723]'>{title}</h4>
        <p className='text-sm text-neutral-600 mt-1'>{description}</p>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description:
        "We'll discuss your documentation needs, audience, and goals in detail.",
      delay: 0.1,
    },
    {
      number: 2,
      title: "Research & Planning",
      description:
        "I'll research your product/technology and create a detailed content plan.",
      delay: 0.2,
    },
    {
      number: 3,
      title: "Content Creation",
      description:
        "I'll develop clear, accurate, and engaging technical content.",
      delay: 0.3,
    },
    {
      number: 4,
      title: "Review & Refinement",
      description:
        "We'll iterate on the content based on your feedback for perfect results.",
      delay: 0.4,
    },
  ];

  return (
    <section
      id='contact-writer'
      className='px-4 sm:px-8 lg:px-16 py-16 bg-[#ebe5dc]'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl font-poppins font-bold text-[#3E2723] mb-2'>
          Let's <span className='text-[#880E4F]'>Connect</span>
        </h2>
        <p className='text-neutral-600 mb-10 max-w-2xl'>
          Interested in working together? I'd love to hear about your project.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <form className='space-y-6'>
            <div>
              <label
                htmlFor='name-writer'
                className='block text-sm font-medium text-neutral-500 mb-1'
              >
                Name
              </label>
              <input
                type='text'
                id='name-writer'
                className='w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#880E4F] focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='email-writer'
                className='block text-sm font-medium text-neutral-500 mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email-writer'
                className='w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#880E4F] focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='project-type'
                className='block text-sm font-medium text-neutral-500 mb-1'
              >
                Project Type
              </label>
              <select
                id='project-type'
                className='w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#880E4F] focus:border-transparent'
                defaultValue=''
              >
                <option value='' disabled>
                  Select a project type
                </option>
                <option value='api-docs'>API Documentation</option>
                <option value='tutorial'>Technical Tutorial</option>
                <option value='user-guide'>User Guides</option>
                <option value='content-marketing'>Technical Content</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='message-writer'
                className='block text-sm font-medium text-neutral-500 mb-1'
              >
                Message
              </label>
              <textarea
                id='message-writer'
                rows={5}
                className='w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#880E4F] focus:border-transparent'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full px-6 py-3 bg-[#880E4F] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all'
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='bg-white p-8 rounded-xl border border-neutral-300 shadow-sm'>
            <h3 className='text-xl font-poppins font-semibold text-[#3E2723] mb-6'>
              Working Process
            </h3>

            <div className='space-y-8'>
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  delay={step.delay}
                />
              ))}
            </div>

            <div className='mt-8 flex flex-col space-y-4'>
              <a
                href='mailto:david.herbert@example.com'
                className='flex items-center text-[#880E4F] hover:underline'
              >
                <i className='ri-mail-line mr-2'></i>
                <span>david.herbert@example.com</span>
              </a>
              <p className='flex items-center text-neutral-600'>
                <i className='ri-map-pin-line mr-2'></i>
                <span>San Francisco, California</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
