import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MaskText } from '../components/MaskText'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { motion } from 'framer-motion';

const Testimonials = () => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const client = [
        {
            'desc': 'Was a bit sceptical after having bad experiences with other agencies. Gave them a chance anyways and 3 months down the line before we even know it we are ranking like crazy and our sales were 30% up.',
            'name': 'Rahul Jain',
        },
        {
            'desc': "I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service.",
            'name': 'Lindsey Wallace',
        },
        {
            'desc': 'Was a bit sceptical after having bad experiences with other agencies. Gave them a chance anyways and 3 months down the line before we even know it we are ranking like crazy and our sales were 30% up.',
            'name': 'Rahul Jain',
        },
        {
            'desc': "I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service.",
            'name': 'Lindsey Wallace',
        },
    ]
    return (
        <ParallaxProvider>

            <div className='bgneutral-950 lg:py-[12vh] font-semibold px-[5vw]'>
                <div>
                    <div className=""
                        data-scroll data-scroll-speed='0.2'>
                        <section className="mx-auto w-full p-[] overflow-hidden">
                            <div className="flex items-center justify-center flex-col gap-y-2 py-5"
                            // data-scroll data-scroll-speed='0.5'
                            >
                                <h2 className="w-full text-3xl mx-auto text-center text-[#1309FF] font-bold">
                                    <Parallax>
                                        What People Are Saying
                                    </Parallax>
                                </h2>
                            </div>


                            <div className='lg:w-[100%]'
                            >
                                <Slider {...settings}>
                                    {client.map((testimonial) => (


                                        <div className="">
                                            <div className="bg-[#FED6FE] mx-[1vw]">
                                            <svg className='w-fit mx-auto' preserveAspectRatio="xMidYMid meet" data-bbox="81.07 98.182 442.001 316.88" viewBox="81.07 98.182 442.001 316.88" height="40" width="40" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="quotation mark"><defs><style>#comp-kizzmngk svg [data-color="1"]</style></defs>
                                                <g>
                                                    <path d="M263.976 264.504c0-50.508-40.945-91.453-91.453-91.453S81.07 213.996 81.07 264.504c0 24.735 9.824 47.173 25.778 63.635 6.45 7.335 29.665 35.902 32.926 70.486 1.286 13.641 16.557 20.973 27.961 13.378 43.781-29.158 94.233-81.848 96.24-144.483l-.056.021c.035-1.01.057-2.021.057-3.037z" fill="#1308FE" data-color="1"></path>
                                                    <path d="M464.971 264.504c0-50.508-40.945-91.453-91.453-91.453s-91.453 40.945-91.453 91.453c0 24.735 9.824 47.173 25.778 63.635 6.45 7.335 29.665 35.902 32.926 70.486 1.286 13.641 16.557 20.973 27.961 13.378 43.781-29.158 94.233-81.848 96.24-144.483l-.056.021c.035-1.01.057-2.021.057-3.037z" fill="#1308FE" data-color="1"></path>
                                                    <path fill="#FE4E1A" d="M523.071 168.919h-55.548l51.097-21.787-3.059-7.174-50.122 21.371 38.529-38.529-5.516-5.515-39.278 39.278 20.726-51.536-7.237-2.91-20.329 50.552V98.182h-7.8v55.548l-21.787-51.097-7.175 3.059 21.371 50.121-38.528-38.528-5.515 5.515 39.278 39.279-51.537-20.726-2.91 7.236 50.553 20.33h-54.487v7.8h55.548l-51.097 21.787 3.059 7.174 50.121-21.371-38.528 38.529 5.515 5.515 39.278-39.278-20.725 51.536 7.236 2.91 20.33-50.553v54.488h7.8v-55.548l21.786 51.097 7.175-3.059-21.371-50.121 38.528 38.528 5.516-5.515-39.279-39.279 51.537 20.726 2.91-7.236-50.553-20.33h54.488v-7.8z" data-color="2"></path>
                                                </g>
                                            </svg>
                                                <div className="md:h-[40vh] h-[40vh] flex-auto p-4 md:p-6">
                                                    <p className="lg:text-[1.2vw] text-[4vw] text-justify">
                                                        " {testimonial.desc} "
                                                    </p>
                                                </div>
                                                <div className="p-4  rounded-b-xl md:px-7 ">
                                                    <div className="flex items-center">
                                                        <div className="grow ms-3">
                                                            <p className="text-sm sm:text-base text-[#1309FF]">
                                                                {testimonial.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                    ))}
                                </Slider>
                            </div>

                        </section>
                    </div>
                </div>
            </div>


        </ParallaxProvider>
    )
}

export default Testimonials