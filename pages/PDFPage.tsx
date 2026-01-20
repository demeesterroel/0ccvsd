
import React from 'react';
import { PageId } from '../types';

const PDFPage: React.FC<{ onNavigate: (id: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-16 py-20">
      <header className="mb-16">
        <div className="inline-block border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white">
          Offline Reference
        </div>
        <h1 className="text-6xl font-medium text-ink leading-tight tracking-tight mb-8">
          The Complete <span className="italic">Methodology Guide</span>
        </h1>
        <p className="text-2xl text-ink-light leading-relaxed max-w-3xl font-light">
          Generate a high-fidelity PDF version of the CCVSD framework for your engineering team or clinical department.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
        <div className="hand-drawn-border p-8 bg-white aspect-[3/4] flex flex-col justify-between items-center text-center">
          <div className="size-16 flex items-center justify-center border-2 border-ink mt-8">
            <span className="material-symbols-outlined text-4xl">robot_2</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Care-Centered Value Sensitive Design</h2>
            <p className="italic text-sm opacity-60">A Methodology for Healthcare Robotics</p>
          </div>
          <div className="text-[10px] font-bold uppercase mb-8">
            Engineering Ethics Division<br/>Current Edition
          </div>
        </div>
        <div>
           <h3 className="text-xl font-bold mb-6">PDF Generation Features:</h3>
           <ul className="space-y-6">
             {[
               "High-Fidelity Print Layout",
               "Title Page & Table of Contents",
               "No UI or Navigation Elements",
               "One Methodology Step per Page"
             ].map((item, i) => (
               <li key={i} className="flex gap-4 items-center">
                 <span className="material-symbols-outlined text-ink">check_circle</span>
                 <span className="font-bold">{item}</span>
               </li>
             ))}
           </ul>
           <button 
             onClick={() => onNavigate('export')}
             className="w-full mt-12 p-8 bg-ink text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-4 active:translate-y-1"
           >
              <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
              <div className="text-left">
                <p className="font-bold text-lg">Generate Full PDF</p>
                <p className="text-[10px] opacity-60 uppercase tracking-widest">Optimized for A4 Printing • Saves as PDF</p>
              </div>
           </button>
        </div>
      </section>

      <footer className="mt-20 pt-16 border-t border-ink no-print">
        <button onClick={() => onNavigate('intro')} className="p-8 border-2 border-ink hover:bg-ink hover:text-white transition-all text-left">
          <h4 className="text-xl font-bold">Back to Home</h4>
        </button>
      </footer>
    </div>
  );
};

export default PDFPage;