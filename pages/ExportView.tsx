import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IntroPage from './IntroPage';
import PhilosophyPage from './PhilosophyPage';
import PhaseOverviewPage from './PhaseOverviewPage';
import Phase1StepPage from './Phase1StepPage';
import Phase2StepPage from './Phase2StepPage';
import Phase3StepPage from './Phase3StepPage';
import GlossaryPage from './GlossaryPage';

const ExportView: React.FC<{ onNavigate?: any }> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Small delay to ensure all content is rendered before triggering print
    const timer = setTimeout(() => {
      window.print();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const tocItems = [
    { title: "Introduction", page: "I" },
    { title: "The Ethical Foundation (Philosophy)", page: "II" },
    { title: "Phase I: Exploration (Value Domain)", page: "1" },
    { title: "Phase II: Development (Technical Domain)", page: "12" },
    { title: "Phase III: Integration (Evaluation Domain)", page: "21" },
    { title: "Technical Glossary", page: "31" }
  ];

  return (
    <div className="bg-white text-ink print-view-container max-w-[210mm] mx-auto p-0">
      {/* 1. Title Page */}
      <section className="page-break flex flex-col justify-center items-center h-screen p-20 text-center border-[20px] border-double border-ink/10">
        <div className="size-24 flex items-center justify-center border-4 border-ink mb-16">
          <span className="material-symbols-outlined text-6xl">robot_2</span>
        </div>
        <h1 className="text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
          Care-Centered <br /> Value Sensitive <br /> Design
        </h1>
        <div className="w-48 h-1.5 bg-ink mb-8"></div>
        <p className="text-2xl italic font-light max-w-xl mb-24 opacity-70">
          A Technical Methodology for Translating the Ethics of Care into Healthcare Robotics
        </p>
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest">Engineering Ethics Division</p>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Methodology Guidebook • 2024 Edition</p>
        </div>
      </section>

      {/* 2. Table of Contents */}
      <section className="page-break p-20 min-h-screen">
        <h2 className="text-4xl font-bold mb-16 uppercase tracking-widest border-b-4 border-ink pb-8">Table of Contents</h2>
        <div className="space-y-8">
          {tocItems.map((item, i) => (
            <div key={i} className="flex justify-between items-end gap-4">
              <span className="text-xl font-bold italic">{item.title}</span>
              <div className="flex-1 border-b border-dotted border-ink/30 mb-1.5"></div>
              <span className="text-xl font-mono opacity-60">{item.page}</span>
            </div>
          ))}
        </div>
        <div className="mt-32 p-12 bg-cream/50 border border-ink/10">
          <h3 className="font-bold mb-4 uppercase text-xs tracking-widest">Instructions</h3>
          <p className="text-sm italic opacity-70">This document is designed as a sequential methodology. For best results, engineers should proceed from Phase I exploration before making technical commitments in Phase II.</p>
        </div>
      </section>

      {/* 3. Intro */}
      <div className="page-break no-prev-next">
        <IntroPage onNavigate={() => { }} />
      </div>

      {/* 4. Philosophy */}
      <div className="page-break no-prev-next">
        <PhilosophyPage onNavigate={() => { }} />
      </div>

      {/* 5. Phase I Overview & Steps */}
      <div className="page-break no-prev-next">
        <PhaseOverviewPage phase={1} onNavigate={() => { }} />
      </div>
      {['p1-s1', 'p1-s2', 'p1-s3', 'p1-s4', 'p1-s5', 'p1-s6'].map(step => (
        <div key={step} className="page-break no-prev-next">
          <Phase1StepPage stepId={step} onNavigate={() => { }} />
        </div>
      ))}

      {/* 6. Phase II Overview & Steps */}
      <div className="page-break no-prev-next">
        <PhaseOverviewPage phase={2} onNavigate={() => { }} />
      </div>
      {['p2-s1', 'p2-s2', 'p2-s3', 'p2-s4', 'p2-s5'].map(step => (
        <div key={step} className="page-break no-prev-next">
          <Phase2StepPage stepId={step} onNavigate={() => { }} />
        </div>
      ))}

      {/* 7. Phase III Overview & Steps */}
      <div className="page-break no-prev-next">
        <PhaseOverviewPage phase={3} onNavigate={() => { }} />
      </div>
      {['p3-s1', 'p3-s2', 'p3-s3', 'p3-s4', 'p3-s5'].map(step => (
        <div key={step} className="page-break no-prev-next">
          <Phase3StepPage stepId={step} onNavigate={() => { }} />
        </div>
      ))}

      {/* 8. Glossary */}
      <div className="page-break no-prev-next">
        <GlossaryPage onNavigate={() => { }} />
      </div>

      {/* Return Button (Only visible on screen) */}
      <div className="no-print fixed bottom-8 right-8 z-50">
        <button
          onClick={() => navigate('/pdf-guide')}
          className="bg-ink text-white px-8 py-4 font-bold shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined">close</span>
          Exit Print View
        </button>
      </div>

      <style>{`
        .no-prev-next footer { display: none !important; }
        @media print {
            .no-prev-next footer { display: none !important; }
            .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default ExportView;
