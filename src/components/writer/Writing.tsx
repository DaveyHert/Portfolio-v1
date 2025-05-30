import React from "react";
import { motion } from "framer-motion";

interface ArticleCardProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  delay: number;
  link?: string;
  thumbnail?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  date,
  readTime,
  title,
  description,
  delay,
  link,
  thumbnail,
}) => {
  return (
    <motion.div
      className='bg-white border border-neutral-300 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div
        className={`h-48 ${thumbnail ? "bg-cover bg-no-repeat" : "bg-neutral-200"} relative overflow-hidden`} //prettier-ignore
        style={{ backgroundImage: thumbnail ? `url(${thumbnail})` : "" }}
      >
        <div className='absolute top-4 left-4 bg-[#FFD54F] text-[#3E2723] text-xs font-medium px-2 py-1 rounded'>
          {category}
        </div>
      </div>
      <div className='p-6'>
        <div className='flex items-center text-neutral-500 text-sm mb-3'>
          <i className='ri-calendar-line mr-2'></i>
          <span>{date}</span>
          <span className='mx-2'>·</span>
          <i className='ri-time-line mr-2'></i>
          <span>{readTime}</span>
        </div>
        <h3 className='text-xl font-poppins font-medium text-[#3E2723] mb-3 group-hover:text-[#880E4F] transition-colors'>
          {title}
        </h3>
        <p className='text-neutral-600 text-sm mb-4'>{description}</p>
        <a
          href={link}
          target='_blank'
          className='text-[#880E4F] font-medium text-sm flex items-center hover:underline'
        >
          Read Article <i className='ri-arrow-right-line ml-1'></i>
        </a>
      </div>
    </motion.div>
  );
};

const Writing: React.FC = () => {
  const articles = [
    {
      category: "Tutorial",
      date: "Jun 15, 2022",
      readTime: "10 min read",
      title: "Beginners Guide to Mastering the useEffect Hook in React",
      description:
        "A comprehensive guide to understanding the useEffect hook like a pro, with practical examples and performance insights.",
      delay: 0.1,
      link: "https://jpv-1649076767739.hashnode.dev/a-beginners-guide-to-mastering-the-useeffect-hook-in-react",
      thumbnail: "./guide-to-useeffect.webp",
    },
    {
      category: "Tutorial",
      date: "April 3, 2023",
      readTime: "15 min read",
      title: "A better way of solving prop drilling in React apps",
      description:
        "Learn how the React library provides a workaround for prop drilling without Redux or the Context API.",
      delay: 0.2,
      thumbnail: "./solving-prop-drilling-react-apps.png",
    },

    {
      category: "Guide",
      date: "Jan 14, 2023",
      readTime: "11 min read",
      title: "Implementing Feature Flags in a Next.js Application",
      description:
        "A step-by-step guide on how to go about implementing feature flags in a Next.js application.",
      delay: 0.3,
      thumbnail: "./next-feature-flags.png",
    },
  ];

  return (
    <section id='writing' className='px-4 sm:px-8 lg:px-16 py-16 bg-white'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl font-poppins font-bold text-[#3E2723] mb-2'>
          Featured <span className='text-[#880E4F]'>Writing</span>
        </h2>
        <p className='text-neutral-600 mb-10 max-w-2xl'>
          A selection of my published technical content, documentation, and
          educational materials.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            category={article.category}
            date={article.date}
            readTime={article.readTime}
            title={article.title}
            description={article.description}
            delay={article.delay}
            link={article.link}
            thumbnail={article.thumbnail}
          />
        ))}
      </div>

      <div className='mt-12 text-center'>
        <a
          href='#'
          className='inline-block px-8 py-3 border border-[#880E4F] text-[#880E4F] font-medium rounded-lg hover:bg-[#880E4F] hover:bg-opacity-5 transition-all'
        >
          View All Articles <i className='ri-arrow-right-line ml-1'></i>
        </a>
      </div>
    </section>
  );
};

export default Writing;
