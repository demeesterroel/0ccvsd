
import React from 'react';
import { PageId } from '../types';

interface SidebarProps {
  currentPage: PageId;
  onNavigate: (id: PageId) => void;
  progress: number;
  isOpen: boolean;
  onClose: () => void;
}

const SectionLabel = ({ children }: React.PropsWithChildren<{}>) => (
  <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 px-4 mt-6">
    {children}
  </p>
);

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate, progress, isOpen, onClose }) => {
  const NavLink = ({ id, icon, label, sub = false }: { id: PageId, icon?: string, label: string, sub?: boolean }) => (
    <button
      onClick={() => onNavigate(id)}
      className={`flex items-center gap-3 px-4 py-2 rounded transition-all text-sm w-full text-left
        ${currentPage === id ? 'bg-ink text-white shadow-lg' : 'hover:bg-black/5 text-ink-light'}
        ${sub ? 'pl-10 text-[11px] font-medium' : ''}
      `}
    >
      {icon && <span className="material-symbols-outlined text-xl">{icon}</span>}
      <span>{label}</span>
    </button>
  );

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-cream border-r border-ink/10 transition-transform duration-300 transform
        md:translate-x-0 md:static md:h-screen md:sticky md:top-0
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        overflow-y-auto shrink-0
      `}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="size-10 flex items-center justify-center border-2 border-ink">
                <span className="material-symbols-outlined text-2xl font-bold">robot_2</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-ink text-sm font-bold leading-tight tracking-tight uppercase">CCVSD Guidebook</h1>
                <p className="text-ink-light text-[10px] font-medium tracking-tighter">Care-Centered VSD Framework</p>
              </div>
            </div>
            {/* Close button for mobile */}
            <button onClick={onClose} className="md:hidden size-8 flex items-center justify-center text-ink-light">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <nav className="flex-1">
            <SectionLabel>Navigation</SectionLabel>
            <NavLink id="intro" icon="home" label="Introduction" />
            <NavLink id="philosophy" icon="psychology" label="Philosophy" />

            <SectionLabel>The 3 Phases</SectionLabel>
            <NavLink id="phase1-overview" icon="explore" label="Phase I: Exploration" />
            {(currentPage.startsWith('p1') || (isOpen && currentPage === 'phase1-overview')) && (
              <div className="flex flex-col gap-0.5 border-l border-ink/10 ml-6 mt-1">
                <NavLink id="p1-s1" label="1. Context of Care" sub />
                <NavLink id="p1-s2" label="2. Stakeholder Map" sub />
                <NavLink id="p1-s3" label="3. Value Analysis" sub />
                <NavLink id="p1-s4" label="4. Semantic Gap" sub />
                <NavLink id="p1-s5" label="5. Value Hierarchy" sub />
                <NavLink id="p1-s6" label="6. Design Requirements" sub />
              </div>
            )}
            
            <NavLink id="phase2-overview" icon="architecture" label="Phase II: Development" />
            {(currentPage.startsWith('p2') || (isOpen && currentPage === 'phase2-overview')) && (
              <div className="flex flex-col gap-0.5 border-l border-ink/10 ml-6 mt-1">
                <NavLink id="p2-s1" label="1. Analysis" sub />
                <NavLink id="p2-s2" label="2. Synthesis" sub />
                <NavLink id="p2-s3" label="3. Simulation" sub />
                <NavLink id="p2-s4" label="4. Evaluation" sub />
                <NavLink id="p2-s5" label="5. Decision" sub />
              </div>
            )}

            <NavLink id="phase3-overview" icon="rule" label="Phase III: Integration" />
            {(currentPage.startsWith('p3') || (isOpen && currentPage === 'phase3-overview')) && (
               <div className="flex flex-col gap-0.5 border-l border-ink/10 ml-6 mt-1">
                <NavLink id="p3-s1" label="1. Scenario Deployment" sub />
                <NavLink id="p3-s2" label="2. Qualitative Friction" sub />
                <NavLink id="p3-s3" label="3. Value Instability" sub />
                <NavLink id="p3-s4" label="4. Rule Synthesis" sub />
                <NavLink id="p3-s5" label="5. Bifurcated Guides" sub />
              </div>
            )}

            <SectionLabel>Resources</SectionLabel>
            <NavLink id="glossary" icon="menu_book" label="Glossary" />
            <NavLink id="pdf-guide" icon="picture_as_pdf" label="PDF Guide" />
          </nav>

          <div className="mt-8 pt-8 border-t border-ink/5">
            <div className="p-4 border border-ink/10 rounded">
              <div className="flex justify-between items-end mb-2">
                <p className="text-[10px] font-bold uppercase">Guidebook Progress</p>
                <p className="text-[10px] font-bold font-mono">{progress}%</p>
              </div>
              <div className="w-full bg-ink/5 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-ink h-full transition-all duration-700 ease-out" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
