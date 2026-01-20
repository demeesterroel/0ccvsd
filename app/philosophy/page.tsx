'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '../../context/NavigationContext';

const PhilosophyPage: React.FC = () => {
    const router = useRouter();
    const { markVisited } = useNavigation();

    useEffect(() => {
        markVisited('philosophy');
    }, []);

    const elements = [
        { num: '01', title: 'Attentiveness', icon: 'visibility', desc: 'Recognizing needs of others. Translated to sensor fidelity and context awareness.' },
        { num: '02', title: 'Responsibility', icon: 'handshake', desc: 'Taking on the burden of care. Defining accountability structures and safety protocols.' },
        { num: '03', title: 'Competence', icon: 'verified', desc: 'Technical adequacy and hardware capability to perform care tasks safely.' },
        { num: '04', title: 'Responsiveness', icon: 'record_voice_over', desc: 'The recipient feedback loop. Designing HCI interfaces for comfort signal expression.' }
    ];

    return (
        <div className="max-w-5xl mx-auto px-16 py-20">
            <header className="mb-20">
                <div className="inline-block border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white">
                    The Ethical Foundation
                </div>
                <h1 className="text-6xl font-medium text-ink leading-[1.1] tracking-tight mb-8">
                    Philosophy: From Moral Will to <span className="italic">Moral Skill</span>
                </h1>
                <p className="text-2xl text-ink-light leading-relaxed max-w-3xl font-light">
                    Building caring healthcare robots demands the translation of abstract ethical theory into technical adequacy.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                    <span className="material-symbols-outlined">groups</span>
                    The Four Moral Elements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {elements.map((el, i) => (
                        <div key={i} className="hand-drawn-border p-8 bg-white hover:bg-cream transition-colors group">
                            <div className="flex justify-between items-start mb-6">
                                <span className="material-symbols-outlined text-3xl">{el.icon}</span>
                                <span className="text-5xl font-black step-number-outline opacity-20">{el.num}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{el.title}</h3>
                            <p className="text-ink-light text-sm leading-relaxed mb-6">{el.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="border-t border-ink pt-16 flex flex-col md:flex-row gap-8">
                <button onClick={() => router.push('/')} className="flex-1 p-8 border-2 border-ink bg-white/50 hover:bg-ink hover:text-white transition-all group text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Previous Section</p>
                    <h4 className="text-xl font-bold">Introduction</h4>
                </button>
                <button onClick={() => router.push('/overview')} className="flex-1 p-8 border-2 border-ink hover:bg-ink hover:text-white transition-all group text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Next Section</p>
                    <h4 className="text-xl font-bold flex items-center justify-between">
                        Structure Overview
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">view_timeline</span>
                    </h4>
                </button>
            </footer>
        </div>
    );
};

export default PhilosophyPage;
