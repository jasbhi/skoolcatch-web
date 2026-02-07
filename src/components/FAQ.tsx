'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What data does SkoolCatch use?',
    answer: 'Only your school group chats — the announcements teachers already share with all parents. We extract homework, events, and deadlines. Nothing personal.',
  },
  {
    question: 'Does this work with any school?',
    answer: 'Yes! SkoolCatch works with any WhatsApp group export. Indian schools, international schools, playgroups — if it\'s on WhatsApp, we can parse it.',
  },
  {
    question: 'How do I import new messages?',
    answer: 'Just export and import again. Takes 30 seconds. Or let other parents in your class do it — when anyone imports, everyone benefits!',
  },
  {
    question: 'Can both parents use the app?',
    answer: 'Yes! With cloud sync, both parents see the same briefing. No more miscommunication.',
  },
  {
    question: 'What if I have multiple children?',
    answer: 'Our Family Plan supports up to 3 children. Each child gets their own briefing.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Anytime. No questions asked. No hidden fees.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-inset rounded"
      >
        <span className="font-semibold text-dark-gray pr-4">{question}</span>
        <span 
          className={`text-brand-navy flex-shrink-0 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-medium-gray">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-light-gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop">
            Common questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
