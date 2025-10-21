
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AnalysisChart from './components/AnalysisChart';
import PerformanceBars from './components/PerformanceBars';
import QuestionAnalysis from './components/QuestionAnalysis';
import { reportData as mockReportData } from './constants';
import { ReportData } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data from a backend API
    const fetchReportData = async () => {
      try {
        // In a real application, you would fetch from an endpoint like:
        // const response = await fetch('/api/report');
        // if (!response.ok) {
        //   throw new Error('Failed to fetch report data');
        // }
        // const result: ReportData = await response.json();
        
        // For demonstration, we'll use a timeout to simulate network latency
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const result = mockReportData; // Using imported mock data as the API response
        setData(result);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-blue mx-auto"></div>
          <p className="text-lg text-brand-text-light mt-4">Generating AI Report...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-brand-background flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative max-w-md mx-auto" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline ml-2">{error}</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return null; // Should not happen if loading and error states are handled correctly
  }

  return (
    <div className="min-h-screen bg-brand-background font-sans p-4 sm:p-8 flex items-center justify-center">
      <main className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8 md:p-12">
          <Header
            name={data.candidate.name}
            role={data.candidate.role}
            interviewDate={data.candidate.interviewDate}
            interviewDuration={data.candidate.interviewDuration}
            overallScore={data.overallScore}
          />
          <div className="my-8 md:my-12 border-t border-brand-border"></div>
          <AnalysisChart data={data.performanceMetrics} />
          <div className="my-8 md:my-12 border-t border-brand-border"></div>
          <PerformanceBars data={data.performanceMetrics} />
          <div className="my-8 md:my-12 border-t border-brand-border"></div>
          <QuestionAnalysis data={data.questionAnalysis} />
        </div>
      </main>
    </div>
  );
};

export default App;
