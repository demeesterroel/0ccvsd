import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

const GeneralPhaseOverviewPage: React.FC = () => {
    const navigate = useNavigate();
    const { markVisited } = useNavigation();

    useEffect(() => {
        markVisited('overview');
    }, []);

    const phases = [
        {
            num: 'I',
            title: 'Exploration',
            desc: 'The Value Domain',
            detail: 'Identifying human values and mapping the stakeholder ecosystem.',
            icon: 'explore',
            path: '/phase1'
        },
        {
            num: 'II',
            title: 'Development',
            desc: 'The Technical Domain',
            detail: 'Translating moral requirements into a tangible robotic prototype.',
            icon: 'architecture',
            path: '/phase2'
        },
        {
            num: 'III',
            title: 'Integration',
            desc: 'The Context Domain',
            detail: ' deploying and validating the system in real-world clinical settings.',
            icon: 'rule',
            path: '/phase3'
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-20">
            <header className="mb-16 md:mb-24 text-center">
                <div className="inline-block border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 bg-white">
                    Methodology Structure
                </div>
                <h1 className="text-4xl md:text-6xl font-medium text-ink leading-[1.1] tracking-tight mb-8">
                    The <span className="italic">Three-Phase</span> Cycle
                </h1>
                <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl mx-auto font-light">
                    CCVSD bridges the gap between abstract ethics and concrete engineering through a structured, iterative process.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {phases.map((phase, i) => (
                    <div key={i} className="hand-drawn-border p-8 bg-white hover:bg-cream transition-colors group relative flex flex-col">
                        <div className="size-16 border-2 border-ink flex items-center justify-center mb-6 bg-white group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl">{phase.icon}</span>
                        </div>
                        <h2 className="text-4xl font-black opacity-10 mb-2 absolute right-6 top-6">0{i + 1}</h2>
                        <h3 className="text-xl font-bold mb-1">Phase {phase.num}</h3>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-ink/50 mb-4">{phase.title}</h4>
                        <p className="text-sm text-ink-light leading-relaxed mb-6 flex-grow">{phase.detail}</p>
                        <button
                            onClick={() => navigate(phase.path)}
                            className="text-[10px] font-bold uppercase tracking-widest border-b border-ink/20 hover:border-ink self-start pb-1"
                        >
                            Explore Phase
                        </button>
                    </div>
                ))}
            </section>

            <footer className="border-t border-ink pt-16 flex flex-col md:flex-row gap-8">
                <button
                    onClick={() => navigate('/philosophy')}
                    className="flex-1 p-8 border-2 border-ink bg-white/50 hover:bg-ink hover:text-white transition-all group text-left"
                >
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Previous Section</p>
                    <h4 className="text-xl font-bold">Philosophy</h4>
                </button>
                <button
                    onClick={() => navigate('/phase1')}
                    className="flex-1 p-8 border-2 border-ink hover:bg-ink hover:text-white transition-all group text-left"
                >
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Begin the Process</p>
                    <h4 className="text-xl font-bold flex items-center justify-between">
                        Phase I: Exploration
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </h4>
                </button>
            </footer>
        </div>
    );
};

export default GeneralPhaseOverviewPage;
