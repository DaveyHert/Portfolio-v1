import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  company: string;
  type: string;
  quote: string;
  author: string;
  initial: string;
  bgColor: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  company,
  type,
  quote,
  author,
  initial,
  bgColor,
  delay,
}) => {
  return (
    <motion.div
      className='bg-neutral-100 p-6 rounded-xl'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className='flex items-center mb-4'>
        <div
          className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl`}
        >
          {initial}
        </div>
        <div className='ml-4'>
          <h3 className='font-poppins font-semibold text-[#3E2723]'>
            {company}
          </h3>
          <p className='text-sm text-neutral-500'>{type}</p>
        </div>
      </div>
      <blockquote className='text-neutral-600 italic mb-4'>{quote}</blockquote>
      <p className='text-sm text-neutral-500'>— {author}</p>
    </motion.div>
  );
};

const Clients: React.FC = () => {
  const testimonials = [
    {
      company: "ContentLabs",
      type: "Developer Platform",
      quote:
        "David transformed our API documentation from a confusing mess to a clear, comprehensive resource. Our developer adoption increased by 35% within three months of the new docs.",
      author: "Alex Chen, Developer Relations Lead",
      initial: "T",
      bgColor: "bg-[#880E4F]",
      delay: 0.1,
    },
    {
      company: "CloudStack Inc.",
      type: "Infrastructure as a Service",
      quote:
        "Working with David on our developer education content was a game-changer. He has a rare talent for simplifying complex topics without losing technical accuracy.",
      author: "Sarah Johnson, CTO",
      initial: "C",
      bgColor: "bg-[#FFD54F]",
      delay: 0.2,
    },
  ];

  const clients = ["CLIENT 1", "CLIENT 2", "CLIENT 3", "CLIENT 4", "CLIENT 5"];

  return (
    <section id='clients' className='px-4 sm:px-8 lg:px-16 py-16 bg-white'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl font-poppins font-bold text-[#3E2723] mb-2'>
          Client <span className='text-[#880E4F]'>Success Stories</span>
        </h2>
        <p className='text-neutral-600 mb-10 max-w-2xl'>
          Companies and projects I've helped with documentation and technical
          content.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            company={testimonial.company}
            type={testimonial.type}
            quote={testimonial.quote}
            author={testimonial.author}
            initial={testimonial.initial}
            bgColor={testimonial.bgColor}
            delay={testimonial.delay}
          />
        ))}
      </div>

      {/* Client Logos */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className='text-xl font-poppins font-semibold text-[#3E2723] text-center mb-8'>
          Trusted by innovative companies
        </h3>
      </motion.div>

      <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className='w-32 h-12 bg-neutral-200 rounded flex items-center justify-center text-neutral-600 font-bold'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            {client}
          </motion.div>
        ))}
      </div> */}
    </section>
  );
};

export default Clients;
