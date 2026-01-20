'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';

const IntroPage: React.FC = () => {
    const router = useRouter();
    const { markVisited } = useNavigation();

    useEffect(() => {
        markVisited('intro');
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-10 md:py-20">
            <header className="mb-16">
                <div className="inline-block border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white">
                    Methodology Overview
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-ink leading-[1] tracking-tight mb-10">
                    From Moral Will to <span className="italic underline decoration-1 underline-offset-[12px]">Moral Skill</span>
                </h1>
                <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl font-light">
                    An engineering methodology for translating the ethics of care into the design of healthcare robotics.
                </p>
            </header>

            <section className="mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-7">
                        <div className="prose prose-xl prose-ink">
                            <p className="text-xl leading-relaxed mb-8">
                                Welcome to the <strong>CCVSD (Care-Centered Value Sensitive Design)</strong> Guidebook. This framework was developed to bridge the "implementation gap" in healthcare robotics.
                            </p>
                            <p className="text-xl leading-relaxed mb-8">
                                Most engineers approach design with a "Moral Will"—the sincere desire to do good. However, building systems that can truly care for vulnerable human subjects requires more than intent; it requires <strong>Moral Skill</strong>.
                            </p>
                            <div className="p-8 border-l-4 border-ink bg-white/50 mb-8 italic">
                                "The goal of CCVSD is to provide engineers with the technical adequacy necessary to realize moral values in practice."
                            </div>
                            <p className="text-xl leading-relaxed">
                                This guidebook serves as a navigational tool through the three cyclical phases of CCVSD: <strong>Exploration</strong> (The Value Domain), <strong>Development</strong> (The Technical Domain), and <strong>Integration</strong> (The Evaluation/Context Design).
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-5 no-print">
                        <div className="hand-drawn-border p-4 bg-white aspect-[4/5] flex items-center justify-center overflow-hidden">
                            <img
                                alt="Relational Care Model"
                                className="w-full h-full object-contain filter grayscale contrast-125"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpmrPy8aq-sVNchLMe_F15paRC3Qb7E52zpPwA8TGhjIrqmMtCwEOfYAAkvlirYzkk7u2dYfpfEbxYIK-IhvEVgrN6mxT-hboDdNl6Mzs7yVPIyAwkvDHjH9EOrrjKpIfZ0L0_goQTU1J_lA0NTzAMO0aXIQThDLPn_mXANXg2l9ZNjGYpCB9s2vEODQRd21d9G_cEuDSw3rhkWIuU9FzprKtPhpra_9cpmtXUZFtknEDNaOFvJov3Ga7hh4qspVilu9IEnEvRAq7i"
                            />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mt-4 text-center opacity-50">Fig 1.1: The Relational Care Model</p>
                    </div>
                </div>
            </section>

            <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: 'clinical_notes', title: 'The Problem', text: 'Robots often fail in clinics because they prioritize efficiency over relational care.' },
                    { icon: 'settings_suggest', title: 'The Solution', text: 'A systematic bridge between abstract care ethics and low-level technical specifications.' },
                    { icon: 'schema', title: 'The Output', text: 'A set of 12 design patterns and validation metrics for caring robots.' }
                ].map((item, idx) => (
                    <div key={idx} className="p-8 border border-ink/10 bg-white/30 rounded-lg">
                        <span className="material-symbols-outlined text-3xl mb-4">{item.icon}</span>
                        <h3 className="font-bold text-lg mb-2 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-sm text-ink-light leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </section>

            <footer className="border-t border-ink pt-16 flex flex-col md:flex-row gap-8 no-print">
                <button onClick={() => router.push('/pdf-guide')} className="flex-1 p-8 border-2 border-ink hover:bg-ink hover:text-white transition-all group text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Reference</p>
                    <h4 className="text-2xl font-bold mb-4 flex items-center justify-between">
                        Download PDF
                        <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">download</span>
                    </h4>
                    <p className="text-sm opacity-80 group-hover:opacity-100">Get the full CCVSD framework document for offline reference.</p>
                </button>
                <button onClick={() => router.push('/philosophy')} className="flex-1 p-8 border-2 border-ink hover:bg-ink hover:text-white transition-all group text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Begin the Journey</p>
                    <h4 className="text-2xl font-bold mb-4 flex items-center justify-between">
                        The Philosophy
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </h4>
                    <p className="text-sm opacity-80 group-hover:opacity-100">Understanding Tronto’s four elements of care as functional requirements.</p>
                </button>
            </footer>
        </div>
    );
};

export default IntroPage;
