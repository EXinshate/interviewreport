import React from 'react';
import { PerformanceMetric } from '../types';

interface PerformanceBarsProps {
  data: PerformanceMetric[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center mb-6">
      <div className="w-1 h-5 bg-brand-blue rounded-full mr-3"></div>
      <h2 className="text-xl font-semibold text-brand-text">{children}</h2>
    </div>
  );

const PerformanceBar: React.FC<{ metric: PerformanceMetric }> = ({ metric }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-start mb-6">
      <div className="col-span-12 md:col-span-2 flex items-baseline pt-1">
        <span className="font-semibold text-brand-text mr-2">{metric.name}</span>
        <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded-md">{metric.rating}</span>
      </div>
      <div className="col-span-12 md:col-span-4 flex items-start">
        <div className="w-full">
            <div className="bg-gray-200 rounded-full h-2.5 mt-1.5">
                <div className="bg-teal-400 h-2.5 rounded-full" style={{ width: `${metric.score}%` }}></div>
            </div>
            <div className="w-full flex justify-between text-xs text-brand-text-light mt-1">
                <span>0</span>
                <span>20</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
                <span>100</span>
            </div>
        </div>
        <span className="ml-4 font-bold text-brand-blue text-lg">{metric.score}</span>
      </div>
      <div className="col-span-12 md:col-span-6 pt-1">
        <p className="text-sm text-brand-text-light">{metric.description}</p>
      </div>
    </div>
  );
};

const PerformanceBars: React.FC<PerformanceBarsProps> = ({ data }) => {
  return (
    <section>
      <SectionTitle>面试能力表现</SectionTitle>
      <div>
        {data.map((metric) => (
          <PerformanceBar key={metric.name} metric={metric} />
        ))}
      </div>
    </section>
  );
};

export default PerformanceBars;