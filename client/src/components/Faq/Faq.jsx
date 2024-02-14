import React, { useState } from 'react';

const FAQ = ({ darkMode }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAccordion = (questionNumber) => {
    setOpenQuestion((prevQuestion) => (prevQuestion === questionNumber ? null : questionNumber));
  };

  const faqData = [
    {
      "question": "Question 1: What is AI tech?",
      "answer": "AI tech, or artificial intelligence technology, refers to the development of computer systems that can perform tasks that normally require human intelligence. This includes things like machine learning, natural language processing, and computer vision."
    },
    {
      "question": "Question 2: How are AI tech tools used?",
      "answer": "AI tech tools are used in various industries and applications, such as healthcare, finance, and marketing. They can be used for tasks like data analysis, pattern recognition, and automation to improve efficiency and decision-making."
    },
    {
      "question": "Question 3: What are some popular AI tech tools?",
      "answer": "Some popular AI tech tools include TensorFlow, PyTorch, scikit-learn, and OpenCV. These tools provide libraries and frameworks for building and deploying AI models and applications."
    }
  ]
  

  return (
    <div className={` ${darkMode?"text-white bg-gray-700":"text-black bg-white"}`}>
      <div className="py-10 max-w-3xl mx-auto ">
        <h2 className=" flex w-full text-4xl font-bold mb-4 justify-center bebas-neue-regular">FAQs About AI Tech Tools</h2>
        <div className="border rounded overflow-hidden">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                className="flex justify-between w-full p-4 text-left focus:outline-none"
                onClick={() => toggleAccordion(index + 1)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span>{openQuestion === index + 1 ? '-' : '+'}</span>
              </button>
              {openQuestion === index + 1 && (
                <div className="px-4 py-2">
                  <p className={`${darkMode?"":"text-gray-700"}`}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
