import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Assuming you're using a wrapper for the Google API
import { Bot } from 'lucide-react';

const VRIDDHI_MEDIA_CONTEXT = `
You are a professional virtual assistant for Vriddhi Media, a digital brand development agency. 
Provide shortest, concise, helpful, and professional responses to user queries.
Here's the things to know about Vriddhi Media:
Services:
- Shifting Narratives  
- Building Online Presence  
- Personal Branding  
- Content Funnel Development  

Highlight key achievements:  
- 50,000+ weekly impressions  
- 15% sales increase in 3 months  
- 30% improved engagement in 2 months  
- Impact on 20+ businesses  

Provide contact details when necessary:  
Email: info@vriddhi.media  
Phone: +91 92665 37839   

For payment terms, direct users to contact Vriddhi Media. Ensure responses remain brief and directly address user queries.
`;

const GeminiChatbot = ({ apiKey }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { text: userInput, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setUserInput('');
        setIsLoading(true);

        try {
            const fullPrompt = `${VRIDDHI_MEDIA_CONTEXT}\n\nUser Query: ${userInput}`;

            const result = await model.generateContent([fullPrompt]);
            const botMessage = { text: result.response.text(), sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Sorry, please try again.', sender: 'bot' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='fixed bottom-4 right-4 z-50'>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#1309FF] text-white p-3 rounded-full shadow-lg hover:bg-[#1309FF] transition"
            >
                <Bot size={24} />
            </button>

            {isOpen && (
                <div className="fixed bottom-4 right-4 w-96 bg-white rounded-xl shadow-lg">
                    <div className="h-[400px] overflow-y-auto p-4">
                        <div className="bg-[#1309FF] text-white p-4 rounded-t-lg flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Vriddhi Media</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-[#1309FF] p-1 rounded"
                            >
                                ×
                            </button>
                        </div>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`mb-2 p-2 rounded ${message.sender === 'user'
                                    ? 'bg-blue-100 text-right'
                                    : 'bg-gray-100 text-left'
                                    }`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex p-4 border-t">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Enter your query here"
                            className="flex-grow p-2 border rounded-l-lg"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-[#1309FF] text-white p-2 rounded-r-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GeminiChatbot;
