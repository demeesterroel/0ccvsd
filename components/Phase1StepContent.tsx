'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';

const stepData = {
    '1': {
        title: 'Context of Care Practice',
        subtitle: 'Operational Constraints & Workflow',
        desc: 'Observing and documenting the messy reality of daily care work to find robotic opportunities and constraints.',
        details: 'The Context of Care Practice is the foundational starting point. We observe how nurses, patients, and staff move, what noises are constant, and where physical bottlenecks exist.',
        metricTitle: 'Operational Factors',
        metrics: ['Workflow Bottlenecks', 'Physical Navigation Constraints', 'Atmospheric Baselines (Light/Sound)'],
        icon: 'clinical_notes'
    },
    '2': {
        title: 'Stakeholder Map',
        subtitle: 'Actor Characterization',
        desc: 'Identifying the web of individuals—direct and indirect—who inhabit the care ecosystem.',
        details: 'We go beyond "User" to "Actor". A stakeholder might be the patient (Direct), the night-shift nurse (Direct), or even the visiting family member (Indirect).',
        metricTitle: 'Stakeholder Roles',
        metrics: ['Primary Care Recipients', 'Secondary Professional Staff', 'Indirect/Tertiary Environmental Actors'],
        icon: 'groups'
    },
    '3': {
        title: 'Value Analysis',
        subtitle: 'Semi-Structured Interviews',
        desc: 'Engaging stakeholders directly to uncover the moral priorities of the specific care site.',
        details: 'Through semi-structured interviews, we extract Tier 1 values like Dignity, Privacy, and Trust. We ask: "What makes you feel cared for in this space?"',
        metricTitle: 'Extracted Values',
        metrics: ['Human Dignity', 'Relational Trust', 'Patient Privacy'],
        icon: 'diamond'
    },
    '4': {
        title: 'Semantic Gap',
        subtitle: 'Nurse Def ≠ Engineer Def',
        desc: 'Bridging linguistic disconnects where technical optimization conflicts with care ethics.',
        details: 'Engineers might define "Efficiency" as path length, while Nurses define it as "Time spent with patient". This gap must be bridged to ensure the robot speaks the language of care.',
        metricTitle: 'Gap Analysis',
        metrics: ['Terminology Mapping', 'Value Priority Conflicts', 'Linguistic Friction Points'],
        icon: 'error'
    },
    '5': {
        title: 'Prospective Value Hierarchy',
        subtitle: 'Translation: Tier 1 → Tier 2',
        desc: 'Converting abstract moral values into intermediate-level design principles and social norms.',
        details: 'In this step, we take a Tier 1 value like "Privacy" and translate it into a Tier 2 principle: "The robot must always knock and pause before entering a patient room."',
        metricTitle: 'Value Translation',
        metrics: ['Tier 1: Moral Values', 'Tier 2: Design Principles', 'Contextual Social Norms'],
        icon: 'account_tree'
    },
    '6': {
        title: 'Design Requirements',
        subtitle: 'Technical Parameters (Tier 3)',
        desc: 'The final translation into concrete engineering metrics that can be programmed and tested.',
        details: 'This is the "Moral Skill" moment. A Tier 2 principle ("Knock and pause") becomes Tier 3 technical specs: "300ms audio output (knocking sound) followed by 2s stationary state."',
        metricTitle: 'Tier 3 Parameters',
        metrics: ['Acoustic Output (dB)', 'Proximity Thresholds (cm)', 'Interaction Latency (ms)'],
        icon: 'straighten'
    }
};

export default function Phase1StepContent({ stepId }: { stepId: string }) {
    const router = useRouter();
    const { markVisited } = useNavigation();

    useEffect(() => {
        if (stepId) {
            markVisited(`p1-s${stepId}` as any);
        }
    }, [stepId, markVisited]);

    if (!stepId) return null;

    const step = stepData[stepId as keyof typeof stepData] || stepData['1'];
    const stepNum = parseInt(stepId);

    return (
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-10 md:py-20">
            <header className="mb-16">
                <div className="inline-flex items-center gap-2 border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Phase I: Step 0{stepNum}
                </div>
                <h1 className="text-6xl font-medium text-ink leading-[1.1] tracking-tight mb-8">
                    {step.title.split(' ').map((w, i) => i === 1 ? <span key={i} className="italic underline decoration-1 underline-offset-8"> {w} </span> : w)}
                </h1>
                <p className="text-2xl text-ink-light leading-relaxed max-w-3xl font-light">
                    {step.desc}
                </p>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
                <div className="space-y-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-ink/50 border-b border-ink/10 pb-2">The Methodology</h3>
                    <p className="text-lg leading-relaxed italic">
                        "{step.details}"
                    </p>
                    <div className="p-6 bg-ink text-white rounded shadow-xl">
                        <h4 className="font-bold mb-3 flex items-center gap-2 text-xs uppercase tracking-widest">
                            <span className="material-symbols-outlined text-base">info</span>
                            Phase I Requirement
                        </h4>
                        <p className="text-sm opacity-90 leading-relaxed">
                            Every finding in this stage forms the <strong>Empirical Baseline</strong> for the technical stack choices in Phase II.
                        </p>
                    </div>
                </div>
                <div className="hand-drawn-border bg-white p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="size-12 rounded-full border-2 border-ink flex items-center justify-center bg-cream">
                            <span className="material-symbols-outlined">{step.icon}</span>
                        </div>
                        <div>
                            <h4 className="font-bold">{step.metricTitle}</h4>
                            <p className="text-xs text-ink-light uppercase">Empirical Output</p>
                        </div>
                    </div>
                    <ul className="space-y-4">
                        {step.metrics.map((m, i) => (
                            <li key={i} className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-ink mt-0.5">check_circle</span>
                                <div className="text-sm font-medium">{m}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <footer className="border-t-2 border-ink pt-12 flex flex-col md:flex-row gap-8">
                <button
                    onClick={() => {
                        const prev = stepNum - 1;
                        router.push(prev > 0 ? `/phase1/step/${prev}` : '/phase1');
                    }}
                    className="flex-1 p-8 border-2 border-ink bg-white hover:bg-cream transition-all group flex items-center gap-6"
                >
                    <span className="material-symbols-outlined text-4xl group-hover:-translate-x-2 transition-transform">arrow_back</span>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Previous</p>
                        <h4 className="text-xl font-bold">{stepNum === 1 ? 'Phase I: Exploration' : `Step 0${stepNum - 1}`}</h4>
                    </div>
                </button>
                <button
                    onClick={() => {
                        const next = stepNum + 1;
                        if (next <= 6) {
                            router.push(`/phase1/step/${next}`);
                        } else {
                            router.push('/phase2');
                        }
                    }}
                    className="flex-[2] p-8 border-2 border-ink bg-ink text-white hover:bg-neutral-800 transition-all group flex items-center justify-between"
                >
                    <div className="flex items-center gap-6">
                        <div className="size-14 border border-white/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">{stepNum === 6 ? 'architecture' : 'explore'}</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">{stepNum === 6 ? 'Phase II Transition' : 'Next Step'}</p>
                            <h4 className="text-2xl font-bold italic">{stepNum === 6 ? 'Development' : `Step 0${stepNum + 1}`}</h4>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
            </footer>
        </div>
    );
}
