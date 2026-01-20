
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';

const SectionLabel = ({ children }: React.PropsWithChildren<{}>) => (
  <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 px-4 mt-6">
    {children}
  </p>
);

const Sidebar: React.FC = () => {
  const { progress, isSidebarOpen, setIsSidebarOpen, resetProgress } = useNavigation();
  const pathname = usePathname();

  const NavLink = ({ to, icon, label, sub = false }: { to: string, icon?: string, label: string, sub?: boolean }) => {
    const isActive = pathname === to;
    return (
      <Link
        href={to}
        className={`flex items-center gap-3 px-4 py-2 rounded transition-all text-sm w-full text-left
        ${isActive ? 'bg-ink text-white shadow-lg' : 'hover:bg-black/5 text-ink-light'}
        ${sub ? 'pl-10 text-[11px] font-medium' : ''}
      `}
      >
        {icon && <span className="material-symbols-outlined text-xl">{icon}</span>}
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-cream border-r border-ink/10 transition-transform duration-300 transform
        md:translate-x-0 md:static md:h-screen md:sticky md:top-0
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
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
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden size-8 flex items-center justify-center text-ink-light">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <nav className="flex-1">
            <SectionLabel>Navigation</SectionLabel>
            <NavLink to="/" icon="home" label="Introduction" />
            <NavLink to="/philosophy" icon="psychology" label="Philosophy" />

            <SectionLabel>The 3 Phases</SectionLabel>
            <NavLink to="/overview" icon="view_timeline" label="Phase Overview" />
            <NavLink to="/phase1" icon="explore" label="Phase I: Exploration" />
            {(pathname.startsWith('/phase1') || (isSidebarOpen && pathname === '/phase1')) && (
              <div className="flex flex-col gap-0.5 border-l border-ink/10 ml-6 mt-1">
                <NavLink to="/phase1/step/1" label="1. Context of Care" sub />
                <NavLink to="/phase1/step/2" label="2. Stakeholder Map" sub />
                <NavLink to="/phase1/step/3" label="3. Value Analysis" sub />
                <NavLink to="/phase1/step/4" label="4. Semantic Gap" sub />
                <NavLink to="/phase1/step/5" label="5. Value Hierarchy" sub />
                <NavLink to="/phase1/step/6" label="6. Design Requirements" sub />
              </div>
            )}

            <NavLink to="/phase2" icon="architecture" label="Phase II: Development" />
            {(pathname.startsWith('/phase2') || (isSidebarOpen && pathname === '/phase2')) && (
              <div className="flex flex-col gap-0.5 border-l border-ink/10 ml-6 mt-1">
                <NavLink to="/phase2/step/1" label="1. Analysis" sub />
                <NavLink to="/phase2/step/2" label="2. Synthesis" sub />
                <NavLink to="/phase2/step/3" label="3. Simulation" sub />
                <NavLink to="/phase2/step/4" label="4. Evaluation" sub />
                <NavLink to="/phase2/step/5" label="5. Decision" sub />
              </div>
            )}

            <NavLink to="/phase3" icon="rule" label="Phase III: Integration" />
            {(pathname.startsWith('/phase3') || (isSidebarOpen && pathname === '/phase3')) && (
              <div className="flex flex-col gap-0.5 border-l border-ink/10 ml-6 mt-1">
                <NavLink to="/phase3/step/1" label="1. Scenario Deployment" sub />
                <NavLink to="/phase3/step/2" label="2. Qualitative Friction" sub />
                <NavLink to="/phase3/step/3" label="3. Value Instability" sub />
                <NavLink to="/phase3/step/4" label="4. Rule Synthesis" sub />
                <NavLink to="/phase3/step/5" label="5. Bifurcated Guides" sub />
              </div>
            )}

            <SectionLabel>Resources</SectionLabel>
            <NavLink to="/glossary" icon="menu_book" label="Glossary" />
            <NavLink to="/pdf-guide" icon="picture_as_pdf" label="PDF Guide" />
          </nav>

          <div className="mt-8 pt-8 border-t border-ink/5">
            <div className="p-4 border border-ink/10 rounded">
              <div className="flex justify-between items-end mb-2">
                <p className="text-[10px] font-bold uppercase">Guidebook Progress</p>
                <div className="flex items-center gap-2">
                  <p className="text-[10px] font-bold font-mono">{progress}%</p>
                  <button
                    onClick={resetProgress}
                    title="Reset progress"
                    className="text-ink/40 hover:text-accent transition-colors flex items-center"
                  >
                    <span className="material-symbols-outlined text-[10px] leading-none">refresh</span>
                  </button>
                </div>
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

