
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import IntroPage from './pages/IntroPage';
import PhilosophyPage from './pages/PhilosophyPage';
import PhaseOverviewPage from './pages/PhaseOverviewPage';
import Phase1StepPage from './pages/Phase1StepPage';
import Phase2StepPage from './pages/Phase2StepPage';
import Phase3StepPage from './pages/Phase3StepPage';
import GlossaryPage from './pages/GlossaryPage';
import PDFPage from './pages/PDFPage';
import ExportView from './pages/ExportView';
import { PageId } from './types';

const TOTAL_PAGES: PageId[] = [
  'intro', 'philosophy', 
  'phase1-overview', 'p1-s1', 'p1-s2', 'p1-s3', 'p1-s4', 'p1-s5', 'p1-s6',
  'phase2-overview', 'p2-s1', 'p2-s2', 'p2-s3', 'p2-s4', 'p2-s5',
  'phase3-overview', 'p3-s1', 'p3-s2', 'p3-s3', 'p3-s4', 'p3-s5',
  'glossary', 'pdf-guide'
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('intro');
  const [visitedPages, setVisitedPages] = useState<Set<PageId>>(new Set(['intro']));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (currentPage === 'export') return;
    setVisitedPages(prev => {
      if (prev.has(currentPage)) return prev;
      const next = new Set(prev);
      next.add(currentPage);
      return next;
    });
    // Close sidebar on page change for mobile
    setIsSidebarOpen(false);
  }, [currentPage]);

  const progress = Math.round((visitedPages.size / TOTAL_PAGES.length) * 100);

  const renderPage = () => {
    switch (currentPage) {
      case 'intro': return <IntroPage onNavigate={setCurrentPage} />;
      case 'philosophy': return <PhilosophyPage onNavigate={setCurrentPage} />;
      case 'phase1-overview': return <PhaseOverviewPage phase={1} onNavigate={setCurrentPage} />;
      case 'p1-s1': 
      case 'p1-s2': 
      case 'p1-s3': 
      case 'p1-s4': 
      case 'p1-s5': 
      case 'p1-s6': return <Phase1StepPage stepId={currentPage} onNavigate={setCurrentPage} />;
      case 'phase2-overview': return <PhaseOverviewPage phase={2} onNavigate={setCurrentPage} />;
      case 'p2-s1': 
      case 'p2-s2': 
      case 'p2-s3': 
      case 'p2-s4': 
      case 'p2-s5': return <Phase2StepPage stepId={currentPage} onNavigate={setCurrentPage} />;
      case 'phase3-overview': return <PhaseOverviewPage phase={3} onNavigate={setCurrentPage} />;
      case 'p3-s1': 
      case 'p3-s2': 
      case 'p3-s3': 
      case 'p3-s4': 
      case 'p3-s5': return <Phase3StepPage stepId={currentPage} onNavigate={setCurrentPage} />;
      case 'glossary': return <GlossaryPage onNavigate={setCurrentPage} />;
      case 'pdf-guide': return <PDFPage onNavigate={setCurrentPage} />;
      case 'export': return <ExportView onNavigate={setCurrentPage} />;
      default: return <IntroPage onNavigate={setCurrentPage} />;
    }
  };

  const showChrome = currentPage !== 'export';

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Mobile Top Bar */}
      {showChrome && (
        <header className="md:hidden sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-ink/10 px-6 py-4 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <div className="size-8 flex items-center justify-center border-2 border-ink">
              <span className="material-symbols-outlined text-lg font-bold">robot_2</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-tighter">CCVSD Guide</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="size-10 flex items-center justify-center bg-white border-2 border-ink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>
      )}

      {showChrome && (
        <Sidebar 
          currentPage={currentPage} 
          onNavigate={setCurrentPage} 
          progress={progress} 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
      
      <main className={`flex-1 overflow-y-auto bg-cream ${!showChrome ? 'p-0' : ''}`}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;