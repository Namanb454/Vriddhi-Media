import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { MaskText } from './MaskText';

const Main = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const translateX = useTransform(scrollYProgress, [0, 1], [-1000, 2000]);
    return (
        <div className='overflow-hidden'>{/* Hero */}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center text-left">
                    <div>
                        <div className='overflow-hidden text-[20vw]'>
                            <motion.p
                                initial={{ y: '100%' }}
                                whileInView={{ y: '0', }}
                                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                                threshold={0.9999999}
                                viewport={{ once: true }}
                            >

                                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Do What's
                                    <span className="text-[#1309FF]"> Best </span>
                                    For Your
                                    <span className="text-[#1309FF]"> Brand</span>
                                </h1>
                            </motion.p>
                        </div>
                        {/* Buttons */}
                        <div className="mt-7 w-full">
                            <a className="py-3 px-4 inline-flex w-full justify-center items-center gap-x-2 font-medium border-2 border-[#1309FF] text-[#1309FF] hover:bg-[#1309FF] hover:text-white focus:outline-none focus:bg-[#1309FF] disabled:opacity-50 disabled:pointer-events-none" href="#">
                                Book a Meeting Now
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </div>
                    </div>
                    {/* End Col */}
                    <div className="relative ms-4">
                        <img className="w-full rounded-md" src="https://static.wixstatic.com/media/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg/v1/fill/w_1008,h_947,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg" alt="Hero Image" />
                        <div className="absolute inset-0 -z-[1] size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6" />
                        {/* SVG*/}
                        <div className="absolute bottom-0 start-0">
                            <svg className="w-2/3 ms-auto h-auto text-white" width={630} height={451} viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={531} y={352} width={99} height={99} fill="currentColor" />
                                <rect x={140} y={352} width={106} height={99} fill="currentColor" />
                                <rect x={482} y={402} width={64} height={49} fill="currentColor" />
                                <rect x={433} y={402} width={63} height={49} fill="currentColor" />
                                <rect x={384} y={352} width={49} height={50} fill="currentColor" />
                                <rect x={531} y={328} width={50} height={50} fill="currentColor" />
                                <rect x={99} y={303} width={49} height={58} fill="currentColor" />
                                <rect x={99} y={352} width={49} height={50} fill="currentColor" />
                                <rect x={99} y={392} width={49} height={59} fill="currentColor" />
                                <rect x={44} y={402} width={66} height={49} fill="currentColor" />
                                <rect x={234} y={402} width={62} height={49} fill="currentColor" />
                                <rect x={334} y={303} width={50} height={49} fill="currentColor" />
                                <rect x={581} width={49} height={49} fill="currentColor" />
                                <rect x={581} width={49} height={64} fill="currentColor" />
                                <rect x={482} y={123} width={49} height={49} fill="currentColor" />
                                <rect x={507} y={124} width={49} height={24} fill="currentColor" />
                                <rect x={531} y={49} width={99} height={99} fill="currentColor" />
                            </svg>
                        </div>
                        {/* End SVG*/}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>


            <div className='relative py-[12vh] overflo-hidden md:h-screen'>
                <motion.div
                    className='absolute lg:w-[60%] w-[100%] left-[50%] lg:top-[0%] top-[10%]'
                    style={{ translateX }}
                >
                    <img className=' opacity-60' src='https://sitescript.in/images/video.webp' alt='Images'
                    />
                </motion.div>
                <div className='text-neutral-800 lg:px-0 px-[5vw] lg:w-[80vw] w-full mx-auto lg:leading-tight text-left'>
                    <div
                        className='capitalize text-3xl sm:text-4xl lg:text-6xl font-medium shadow-[#1309FF]'
                    >
                        <span className='text-[#1309FF]'>*</span>
                        <MaskText text='Breathing life into Ideas, Crafting' />
                        <MaskText text='and Creating with Excellence.' />
                        <MaskText text='Your gateway to seamless solutions.' />
                    </div>
                </div>
            </div>




            






        </div>

    )
}

export default Main