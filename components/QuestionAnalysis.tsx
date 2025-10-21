
import React, { useState } from 'react';
import { QuestionAnalysisData } from '../types';
import { CirclePlay } from 'lucide-react';

interface QuestionAnalysisProps {
  data: QuestionAnalysisData;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center mb-6">
    <div className="w-1 h-5 bg-brand-blue rounded-full mr-3"></div>
    <h2 className="text-xl font-semibold text-brand-text">{children}</h2>
  </div>
);

const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeQuestion = data.questions[activeTab];

  return (
    <section>
      <SectionTitle>题目解析</SectionTitle>
      <div className="border-b border-brand-border mb-6">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {data.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === index
                  ? 'border-brand-blue text-brand-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              第{index + 1}题
            </button>
          ))}
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-brand-text mb-4">对话记录</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg text-brand-text text-sm">
              {activeQuestion.question}
            </div>
            <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors">
                <CirclePlay className="w-8 h-8 text-brand-blue"/>
                <div className="w-full mx-4 h-1.5 bg-gray-300 rounded-full">
                    <div className="w-1/4 h-full bg-brand-blue rounded-full"></div>
                </div>
                <span className="text-sm text-brand-text-light font-mono">00:41</span>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg text-sm relative" style={{'borderTopRightRadius': '0px'}}>
              {activeQuestion.answer}
              <div className="absolute top-0 right-0 transform translate-x-full">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-brand-text mb-4">题目解析</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-brand-text-light leading-relaxed">
            {activeQuestion.analysis}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionAnalysis;
