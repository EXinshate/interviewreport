import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Trophy } from 'lucide-react';
import { PerformanceMetric } from '../types';

interface AnalysisChartProps {
  data: PerformanceMetric[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center mb-6">
    <div className="w-1 h-5 bg-brand-blue rounded-full mr-3"></div>
    <h2 className="text-xl font-semibold text-brand-text">{children}</h2>
  </div>
);


const AnalysisChart: React.FC<AnalysisChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    subject: item.name,
    A: item.score,
    fullMark: 100,
  }));

  return (
    <section>
      <SectionTitle>AI智能分析</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid stroke="#E8E8E8" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#4A4A4A', fontSize: 14 }} />
              <Radar name="Score" dataKey="A" stroke="#4A90E2" fill="#4A90E2" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-6">
             <div className="absolute top-4 right-8 w-2 h-4 bg-yellow-300 rounded-full rotate-45 opacity-80"></div>
            <div className="absolute top-10 left-10 w-2 h-3 bg-red-300 rounded-full -rotate-30 opacity-80"></div>
            <div className="absolute top-16 right-12 w-1.5 h-3 bg-green-300 rounded-full rotate-12 opacity-80"></div>
            <div className="absolute top-8 left-16 w-1.5 h-1.5 bg-blue-300 rounded-full rotate-12 opacity-80"></div>
            <Trophy className="w-20 h-20 text-yellow-500 relative z-10" />
             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-semibold px-4 py-1.5 rounded-md shadow-lg z-20">
              有待提高
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center text-brand-text max-w-sm">
            <p className="leading-relaxed">
              回答准确且迅速，展现出深厚的专业知识和良好的逻辑思维能力。语音语调自然，表达清晰，沟通顺畅。整体表现优秀，符合要求。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisChart;