import { motion, useTransform, useScroll } from "framer-motion";
import { title } from "framer-motion/client";
import { useRef } from "react";

const Showcases_Examples = () => {

    return (
        <div className="py-24">
            <h2 className="text-3xl font-bold text-[#1309FF] md:mb-20">
                What We Do
            </h2>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[200vh] md:h-[200vh] w-[100%]">
            <div className="sticky top-0 flex bg-cover items-center overflow-hidden mx-auto md:w-[100%] w-full h-screen"
            >
                <motion.div

                    style={{ x }} className='flex group' >
                    {cards.map((card) => {
                        return <Card card={card} key={card.id}

                        />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export const Card = ({ card, index }) => {
    return (
        <motion.div

            key={card.id}
            className="hover:backdrop-blur-sm group-hover:scale-75 group-hover:transition-transform group-hover:ease-in-out group-hover:duration-700 hover:!scale-100 hover:z-10 hover:transition-transform hover:ease-in-out hover:duration-700 relative lg:w-[30vw] w-80 md:h-[100vh] h-[] p-5 overflow-hidden shadow-md shadow-neutral-900 rounded-2xl space-y-10 text-left mx-auto border2"
        >
            <div className="w-60 mx-auto">
                <svg className="text-center mx-auto">
                    <path width='10px' fill={card.fill} d={card.url} data-color="1"></path>
                </svg>
            </div>
            <h2 className="md:text-4xl text-2xl md:h-[10vh] h-[5vh] text-[#1309FF] underline">
                {card.title}
            </h2>
            <p className="md:h-[20vh] h-[20vh]">{card.desc}</p>
            <div className="mt-7 w-full">
                <a className="py-3 px-4 inline-flex w-full justify-center items-center gap-x-2 font-medium border-2 border-[#1309FF] text-[#1309FF] hover:bg-[#1309FF] hover:text-white focus:outline-none focus:bg-[#1309FF] disabled:opacity-50 disabled:pointer-events-none" href="/">
                    Book a Meeting Now
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
            </div>
        </motion.div >
    );
};

export default Showcases_Examples;

const cards = [
    {
        url: 'M182 95.715h-61.028l56.138-23.936-3.361-7.882-55.066 23.479 42.329-42.329-6.059-6.059L111.8 82.141l22.77-56.621-7.95-3.197-22.335 55.54V18h-8.569v61.028L71.779 22.89l-7.882 3.361 23.479 55.066-42.329-42.329-6.059 6.059L82.141 88.2 25.52 65.43l-3.197 7.95 55.54 22.335H18v8.569h61.028L22.89 128.22l3.361 7.883 55.066-23.479-42.329 42.329 6.059 6.059L88.2 117.859 65.43 174.48l7.95 3.197 22.336-55.54V182h8.569v-61.028l23.936 56.138 7.882-3.361-23.479-55.066 42.329 42.329 6.059-6.059-43.153-43.153 56.621 22.77 3.197-7.95-55.54-22.336H182v-8.569z',
        fill: '#FFADFF',
        title: 'Shifting The Narratives',
        desc: "We help you in shifting all your negative PR into positive ones using our strategic UGC push.",
    },

    {
        url: 'M180 80.527c0 33.428-27.099 60.527-60.527 60.527s-60.527-27.099-60.527-60.527S86.045 20 119.473 20 180 47.099 180 80.527z" data-color="1">',
        fill: "#1308FE",
        title: 'Building An Online Presence',
        desc: "We give your brand a much-needed push in all the relevant communities and forums to make sure that you don't go unnoticed.",
    },

    {
        url: 'M91.817 55.453l24.974-28.416 3.528 37.691 36.881-8.287-19.265 32.57 34.7 15.008-34.7 15.007 19.265 32.57-36.881-8.287L116.791 181l-24.974-28.416L66.843 181l-3.528-37.691-36.88 8.287 19.265-32.57L11 104.019l34.7-15.008-19.265-32.57 36.88 8.287 3.528-37.691 24.974 28.416z',
        fill: "#FE4E1A",
        title: 'Building A Personal Brand',
        desc: "People relate with founders much better than they relate with Brands. We help you become more relatable and connect with your audience on a deeper lever.",
    },

    {
        url: 'M167.5 170c-8.331 0-16.747-4.054-25.014-12.049-2.708-2.619-5.402-5.679-8.033-9.111C123.731 162.607 111.838 170 99.998 170v-16.429c7.404 0 16.489-7.276 24.814-19.521-.416-.743-.828-1.496-1.236-2.256-11.343-21.136-18.39-46.082-18.39-65.102 0-10.306 2.028-18.673 6.028-24.868C116.208 34.089 124.001 30 133.749 30c9.976 0 17.954 4.265 23.071 12.336 4.093 6.455 6.168 15.146 6.168 25.833 0 19.287-6.912 43.977-18.039 64.435-.27.496-.54.987-.812 1.474 8.128 12.106 16.802 19.495 23.363 19.495V170zM133.749 46.429c-4.075 0-6.744 1.32-8.655 4.279-2.229 3.452-3.407 8.979-3.407 15.984 0 14.15 4.904 33.074 12.779 50.025 7.422-16.204 12.021-34.477 12.021-48.548 0-7.427-1.252-13.327-3.62-17.063-2.052-3.235-4.863-4.677-9.118-4.677z',
        fill: "#1308FE",
        title: 'Building Your Content Funnel',
        desc: "Boost website traffic by 20% and brand awareness by 35%! Our all-in-one solution, encompassing research, writing, SEO-optimized blogs, and captivating videos, helps you build an impeccable content machine that gets results."
    },
];