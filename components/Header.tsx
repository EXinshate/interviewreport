
import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';

interface HeaderProps {
  name: string;
  role: string;
  interviewDate: string;
  interviewDuration: string;
  overallScore: number;
}

const Header: React.FC<HeaderProps> = ({ name, role, interviewDate, interviewDuration, overallScore }) => {
  return (
    <header>
      <h1 className="text-3xl font-bold text-brand-text text-center mb-8">AI面试报告</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://picsum.photos/seed/xiaomin/64/64"
            alt="Candidate Avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-brand-text">
              {name} <span className="text-lg font-normal text-brand-text-light">· {role}</span>
            </h2>
            <div className="flex items-center space-x-4 text-sm text-brand-text-light mt-2">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-1.5" />
                <span>面试时间: {interviewDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                <span>面试时长: {interviewDuration}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 text-right">
          <span className="text-5xl font-bold text-brand-blue">{overallScore.toFixed(2)}</span>
          <span className="text-xl text-brand-text-light ml-1">分</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
