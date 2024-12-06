import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { MaskText } from './MaskText';
import { useInView } from 'react-intersection-observer';
const Stats = () => {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const x = useTransform(scrollYProgress, [0, 1], [1500, -1000]);
    const translateY = useTransform(scrollYProgress, [0, 1], [1500, -1000]);
    const { ref, inView } = useInView({ triggerOnce: true });

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: inView ? 1 : 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };
    return (
        <div className='overflow-hidden'>{/* Features */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
                {/* Grid */}
                <h2 className="text-3xl font-bold text-[#1309FF] mb-20">
                    The Difference We've Made So Far
                </h2>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    variants={variants} className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
                    <div className="lg:col-span-4">
                        {/* Stats */}
                        <motion.div
                            variants={item} className="lg:pe-6 xl:pe-12">
                            <p className="text-6xl font-bold leading-10 text-[#1309FF]">
                                50K+
                            </p>
                            <p className="mt-2 sm:mt-3 text-gray-500">average Impressions/per week/per brand</p>
                        </motion.div>
                        {/* End Stats */}
                    </div>
                    {/* End Col */}
                    <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:">
                        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
                            {/* Stats */}
                            <motion.div
                                variants={item}
                            >
                                <p className="text-3xl font-semibold text-[#1309FF]">15%</p>
                                <p className="mt-1 text-gray-500">Avg. Increase in sales within 3 months of our content service.</p>
                            </motion.div>
                            {/* End Stats */}
                            {/* Stats */}
                            <motion.div
                                variants={item}
                            >
                                <p className="text-3xl font-semibold text-[#1309FF]">30%</p>
                                <p className="mt-1 text-gray-500">Better engagement on personal accounts within 2 months</p>
                            </motion.div>
                            {/* End Stats */}
                            {/* Stats */}
                            <motion.div
                                variants={item}
                            >
                                <p className="text-3xl font-semibold text-[#1309FF]">20+</p>
                                <p className="mt-1 text-gray-500">Business Impacted so far</p>
                            </motion.div>
                            {/* End Stats */}
                        </div>
                    </div>
                    {/* End Col */}
                </motion.div>
                {/* End Grid */}

            </div>

            <div className='lg:px-[5vw] tracking-wider lg:flex lg:py-[24vh] py-[12vh] relative text-left'>

                <motion.div
                    className='-z-1 absolute lg:w-[60%] w-[100%] left-[50%] lg:top-[50%] top-[45%]'
                    style={{ translateY, x }}
                >
                    <img className='opacity-' src='https://sitescript.in/images/Saly-43.png' alt='Images'
                    // data-scroll data-scroll-speed='1'
                    />
                </motion.div>
                <h2 className='lg:text-[5vw] text-[10vw] border-dashed border-l-4 border-t-4 border-b-4 border-[#1309FF] text-neutral-800 px-[2.5vw] py-[12vh] leading-10 mx-auto w-[90%] lg:w-[50%] shadow-neutral-500'>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Full service
                    </motion.div>
                    <br />
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        place for both
                    </motion.div>
                    <br />
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        startups and
                    </motion.div>
                    <br />
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        established
                    </motion.div>
                    <br />
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        businesses
                    </motion.div>
                </h2>

                <div className='lg:w-[50%] w-[90%] border-dashed border-r-4 border-t-4 border-b-4 border-[#1309FF] text-[#1309FF] bg-orange-400 px-[2.5vw] py-[12vh] lg:text-[6vw] text-[9vw] mx-auto lg:my-0 my-[vh] font-[extrabold] '>
                    <motion.div
                    //  opacity={['1.5', '0']}
                    >
                        <div className='drop-shadow-[5px_5px_5px_var(--tw-shadow-color)] shadow-[#FF9800]'>
                            <MaskText text="Let's discuss" />
                            <MaskText text="your ideas!" />
                        </div>
                    </motion.div>
                    <div className='w-fit mx-auto my-auto'>
                        <a href='#contact'
                            class="text-[#1309FF] hover:text-[#FF9800] backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent py-2 px-6 shadow shadow-neutral-400 hover:shadow-neutral-50 duration-700 lg:text-[1.2vw] text-[5vw]"
                        >
                            Let's Talk
                        </a>
                    </div>

                </div>
            </div>
            {/* End Features */}</div>

    )
}

export default Stats