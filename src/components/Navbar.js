import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef, useState } from 'react'
import { FaHome } from 'react-icons/fa';
import { HiBars2 } from 'react-icons/hi2';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md';
import { RxComponent2, RxComponentBoolean } from 'react-icons/rx';

const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

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

    const navs = [
        {
            'nav': 'Newsletter',
            'hover': 'Home',
            'link': '/',
        },
        {
            'nav': 'Services',
            'hover': 'Components',
            'link': '/',
        },
        {
            'nav': 'Contact',
            'hover': 'CustomComponents',
            'link': '/',
        },

    ]
    const subnavs = [
        {
            'subnav': 'Slider',
            'link': '#slider',
        },
        {
            'subnav': 'Scroll Parallax',
            'link': '#scroll_parallax',
        },
        {
            'subnav': 'Scroll Text',
            'link': '#scroll_text',
        },
        {
            'subnav': 'Text Up',
            'link': '#text_up',
        },
        {
            'subnav': 'Text Reveal',
            'link': '#text_reveal',
        },
        {
            'subnav': 'Text Highlight',
            'link': '#text_highlight',
        },

    ]

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={variants}>
            <header ref={menuRef} className="scroll-smooth relative top-0 inset-x-0 flex flex-rap md:justify-start md:flex-nowrap z-50 w-full text-sm md:px-10">
                <div
                    className='mt-4 w-full relative py-2.5 md:flex md:items-center md:justifybetween md:py-0'>
                    <motion.a
                        variants={item}
                        className="flex-none inline-block font-bold" href="/">
                        <img className='w-[50%]' src='https://static.wixstatic.com/media/22791e_043cdd660d5f451a80750e04f8da012e~mv2.png/v1/fill/w_441,h_147,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-19%20234401.png' />
                    </motion.a>
                </div>

                <motion.nav
                    variants={item}
                    className={`my-5 relative border rounded-full mx-2 py-2.5 md:flex md:items-center md:justify- md:py-0 md:px-4 md:mx-auto border-2 border-[#1309FF] xl:w-fit ${isOpen ? 'w-full' : 'w-fit'}`}>
                    <div className="px-4 md:px-0 flex justify-between items-center">
                        <div className="md:hidden ml-auto w-fit">
                            <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
                                {!isOpen ?
                                    <HiBars2 />
                                    :
                                    <IoCloseOutline />
                                }
                            </button>
                        </div>
                    </div>

                    <motion.div

                        id="hs-navbar-header-floating" className={isOpen ? `hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block hsc` : 'hidden md:block'} aria-labelledby="hs-navbar-header-floating-collapse">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-2 md:ps-0 md:space-x-10 mx-auto text-center w-fit text-lg">
                            {navs.map((nav, index) => {
                                return (
                                    <motion.div class="group relative"
                                        variants={item}
                                    >
                                        <a className="py-0.5 md:py-0 px-4 md:px-0 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-[#1309FF]  " href={nav.link}>
                                            {nav.nav}
                                        </a>
                                        {/* <span class="absolute md:top-14 top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">{nav.hover}<span>
                                        </span></span> */}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </motion.nav>
            </header>
        </motion.div>

    )
}

export default Navbars