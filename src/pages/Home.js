import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Showcases_Examples from '../components/Services'
import Stats from '../components/Stats'
import { InlineWidget } from "react-calendly";
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
// import FAQChatbot from '../components/AIChatbot'
import GeminiChatbot from '../components/AIChatbot'
// import ChatBot from '../components/AIChatbot'

const Home = () => {
    const GEMINI_API_KEY = 'AIzaSyB_idYujW5OLTx_ONWzA1i_lNiZncUF35Y';
    return (
        <div className=''>
            <Navbar />
            <Main />
            <Showcases_Examples />
            <Stats />
            <div className="py-24">
                <h2 className='text-3xl font-bold text-[#1309FF]'>Schedule a Time To Discuss Your Needs</h2>
                <InlineWidget url="https://www-vriddhi-media.filesusr.com/html/22791e_3e039a3f17f6b05e0efe9c29552b3204.html" />
            </div>
            <Testimonials />
            <ContactUs />
            {/* <GeminiChatbot /> */}
            <GeminiChatbot apiKey={GEMINI_API_KEY} />
            {/* <ChatbotComponent /> */}
        </div>
    )
}

export default Home