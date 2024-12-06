import React, { useState, useEffect, useRef } from 'react';
import { Search, Send, Bot } from 'lucide-react';

// Sample FAQ data - can be expanded or fetched from an API
const faqData = [
    {
        id: 1,
        question: "How do I reset my password?",
        answer: "You can reset your password by clicking 'Forgot Password' on the login page and following the instructions sent to your email."
    },
    {
        id: 2,
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, PayPal, and bank transfers. All transactions are securely processed."
    },
    {
        id: 3,
        question: "How long does shipping take?",
        answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery."
    },
    {
        id: 4,
        question: "Can I cancel my order?",
        answer: "Orders can be cancelled within 24 hours of placement. After that, you may need to return the item according to our return policy."
    }
];

const FAQChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 0,
            text: "Hi! I'm the FAQ assistant. What can I help you with today?",
            type: 'bot'
        }
    ]);
    const messagesEndRef = useRef(null);

    // Filter FAQs based on search term
    const filteredFAQs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Scroll to bottom of messages
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handle user selecting an FAQ
    const handleFAQSelect = (faq) => {
        setMessages(prev => [
            ...prev,
            { id: prev.length + 1, text: faq.question, type: 'user' },
            { id: prev.length + 2, text: faq.answer, type: 'bot' }
        ]);
        setSearchTerm('');
    };

    // Handle manual message input
    const handleSendMessage = () => {
        if (searchTerm.trim() === '') return;

        const matchedFAQs = faqData.filter(faq =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setMessages(prev => [
            ...prev,
            { id: prev.length + 1, text: searchTerm, type: 'user' },
            ...(matchedFAQs.length > 0
                ? matchedFAQs.map((faq, index) => ({
                    id: prev.length + 2 + index,
                    text: faq.answer,
                    type: 'bot'
                }))
                : [{
                    id: prev.length + 2,
                    text: "I couldn't find an exact match. Could you rephrase your question?",
                    type: 'bot'
                }]
            )
        ]);
        setSearchTerm('');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chatbot Launcher */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#1309FF] text-white p-3 rounded-full shadow-lg hover:bg-[#1309FF] transition"
            >
                <Bot size={24} />
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div className="w-96 h-[500px] bg-white border rounded-lg shadow-xl flex flex-col">
                    {/* Header */}
                    <div className="bg-[#1309FF] text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h2 className="text-lg font-semibold">FAQ Assistant</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-[#1309FF] p-1 rounded"
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-grow overflow-y-auto p-4 space-y-2">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`
                  max-w-[80%] p-2 rounded-lg 
                  ${msg.type === 'bot'
                                        ? 'bg-blue-100 text-[#1309FF] self-start'
                                        : 'bg-[#1309FF] text-white self-end ml-auto'}
                `}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Search/Input Area */}
                    <div className="p-4 border-t flex items-center">
                        <div className="relative flex-grow mr-2">
                            <input
                                type="text"
                                placeholder="Ask a question..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                className="w-full p-2 pl-8 border rounded-full"
                            />
                            <Search
                                size={18}
                                className="absolute left-2 top-3 text-gray-400"
                            />
                        </div>
                        <button
                            onClick={handleSendMessage}
                            className="bg-[#1309FF] text-white p-2 rounded-full hover:bg-[#1309FF]"
                        >
                            <Send size={18} />
                        </button>
                    </div>

                    {/* FAQ Suggestions */}
                    {searchTerm && (
                        <div className="p-4 border-t max-h-40 overflow-y-auto">
                            {filteredFAQs.map((faq) => (
                                <button
                                    key={faq.id}
                                    onClick={() => handleFAQSelect(faq)}
                                    className="block w-full text-left p-2 hover:bg-blue-50 rounded"
                                >
                                    {faq.question}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FAQChatbot;