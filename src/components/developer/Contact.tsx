import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id='contact' className='px-4 sm:px-8 lg:px-16 py-16'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl font-poppins font-bold text-white mb-2'>
          Get in <span className='text-[#00BFA5]'>Touch</span>
        </h2>
        <p className='text-neutral-300 mb-10 max-w-2xl'>
          Have a project in mind or want to discuss opportunities? Let's
          connect!
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
                htmlFor='name'
                className='block text-sm font-medium text-neutral-300 mb-1'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full bg-neutral-700 bg-opacity-50 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA5]'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-neutral-300 mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full bg-neutral-700 bg-opacity-50 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA5]'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-neutral-300 mb-1'
              >
                Message
              </label>
              <textarea
                id='message'
                rows={5}
                className='w-full bg-neutral-700 bg-opacity-50 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA5]'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full px-6 py-3 bg-[#00BFA5] text-[#212121] font-medium rounded-lg hover:bg-opacity-90 transition-all'
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
          <div className='bg-pattern bg-neutral-700 bg-opacity-30 p-8 rounded-xl'>
            <h3 className='text-xl font-poppins font-semibold text-white mb-6'>
              Contact Information
            </h3>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='w-10 h-10 flex items-center justify-center bg-[#4A148C] bg-opacity-30 rounded-lg text-[#00BFA5] shrink-0'>
                  <i className='ri-mail-line text-xl'></i>
                </div>
                <div className='ml-4 flex flex-col'>
                  <h4 className='text-sm font-medium text-neutral-300'>
                    Email
                  </h4>
                  <a
                    href='mailto:contact@daveyhert.com'
                    className='text-white hover:text-[#00BFA5] transition-colors'
                  >
                    contact@daveyhert.com
                  </a>
                  <a
                    href='mailto:daviehert@gmail.com'
                    className='text-white hover:text-[#00BFA5] transition-colors'
                  >
                    daviehert@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-10 h-10 flex items-center justify-center bg-[#4A148C] bg-opacity-30 rounded-lg text-[#00BFA5] shrink-0'>
                  <i className='ri-map-pin-line text-xl'></i>
                </div>
                <div className='ml-4'>
                  <h4 className='text-sm font-medium text-neutral-300'>
                    Location
                  </h4>
                  <p className='text-white'>Lagos, Nigeria</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-10 h-10 flex items-center justify-center bg-[#4A148C] bg-opacity-30 rounded-lg text-[#00BFA5] shrink-0'>
                  <i className='ri-time-line text-xl'></i>
                </div>
                <div className='ml-4'>
                  <h4 className='text-sm font-medium text-neutral-300'>
                    Working Hours
                  </h4>
                  <p className='text-white'>
                    Monday - Friday, 9AM - 5PM (GMT+1)
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='text-sm font-medium text-neutral-300 mb-4'>
                Social Profiles
              </h4>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center bg-neutral-700 rounded-lg text-neutral-300 hover:text-[#00BFA5] hover:bg-[#4A148C] hover:bg-opacity-30 transition-all'
                >
                  <i className='ri-github-fill text-xl'></i>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center bg-neutral-700 rounded-lg text-neutral-300 hover:text-[#00BFA5] hover:bg-[#4A148C] hover:bg-opacity-30 transition-all'
                >
                  <i className='ri-linkedin-fill text-xl'></i>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center bg-neutral-700 rounded-lg text-neutral-300 hover:text-[#00BFA5] hover:bg-[#4A148C] hover:bg-opacity-30 transition-all'
                >
                  <i className='ri-twitter-fill text-xl'></i>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center bg-neutral-700 rounded-lg text-neutral-300 hover:text-[#00BFA5] hover:bg-[#4A148C] hover:bg-opacity-30 transition-all'
                >
                  <i className='ri-dribbble-fill text-xl'></i>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
