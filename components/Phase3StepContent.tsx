'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';

const stepData = {
    '1': {
        title: "Scenario-Based Deployment",
        desc: "Deploying the system in controlled yet authentic clinical scenarios.",
        details: "We move the robot from simulation to the physical ward. We monitor emergent behaviors and situational appropriateness using A/B testing of navigation styles.",
        output: "Behavioral Observational Data",
        metrics: ["Human-Robot Collision Rates", "Task Completion Fidelity", "Staff Interruption Count"],
        icon: "movie"
    },
    '2': {
        title: "Collect Qualitative Friction",
        desc: "Interviewing staff and patients to identify 'Logic Conflicts'.",
        details: "Qualitative friction occurs where the robot's pre-programmed logic clashes with human care practices. 'It moves too fast when I'm tired' is a friction point.",
        output: "Value Friction Report",
        metrics: ["Subjective Comfort Scores", "Perceived Attentiveness", "Interaction Difficulty Log"],
        icon: "psychology_alt"
    },
    '3': {
        title: "Detect Value Instability",
        desc: "Identifying shifts in priority as the robot enters the field.",
        details: "Field data often shows that initial value priorities change. 'Privacy' might be less important than 'Immediate Safety' in a real emergency, requiring dynamic rule switching.",
        output: "Contextual Variance Matrix",
        metrics: ["Value Priority Shifts", "Emergency Override Frequency", "Context Switching Errors"],
        icon: "balance"
    },
    '4': {
        title: "Synthesize Interaction Rules",
        desc: "Translating qualitative feedback into concrete behavior updates.",
        details: "The feedback from Step 2 is converted back into 'Code-able Rules'. If patients felt crowded, we increase the personal space radius in the navigation stack.",
        output: "Validated Behavioral Rules",
        metrics: ["Constraint Update Accuracy", "New Rule Safety Check", "Conflict Resolution Rate"],
        icon: "terminal"
    },
    '5': {
        title: "Generate Bifurcated Guides",
        desc: "Creating dual-path documentation for technical and clinical teams.",
        details: "Final step: One guide for engineers (API/Specs) and one for nurses (Relational Interaction Guide). This ensures the robot remains a tool of care, not just a tool of work.",
        output: "Operational CCVSD Guidelines",
        metrics: ["Guideline Readability (Staff)", "Technical Spec Completeness", "Institutional Compliance"],
        icon: "menu_book"
    }
};

export default function Phase3StepContent({ stepId }: { stepId: string }) {
    const router = useRouter();
    const { markVisited } = useNavigation();

    useEffect(() => {
        if (stepId) {
            markVisited(`p3-s${stepId}` as any);
        }
    }, [stepId, markVisited]);

    if (!stepId) return null;

    const step = stepData[stepId as keyof typeof stepData] || stepData['1'];
    const stepNum = parseInt(stepId);

    return (
        <div className="max-w-5xl mx-auto px-16 py-20">
            <header className="mb-16">
                <div className="inline-flex items-center gap-2 border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Phase III: Integration - Step 0{stepNum}
                </div>
                <h1 className="text-6xl font-medium text-ink leading-[1.1] tracking-tight mb-8">
                    {step.title.split('-').map((s, i) => i === 1 ? <span key={i} className="italic"> {s} </span> : s)}
                </h1>
                <p className="text-2xl text-ink-light leading-relaxed max-w-3xl font-light">
                    {step.desc}
                </p>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
                <div className="space-y-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-ink/50 border-b border-ink/10 pb-2">Evaluation Strategy</h3>
                    <p className="text-lg leading-relaxed text-ink-light italic">
                        "{step.details}"
                    </p>
                    <div className="p-6 border-l-4 border-ink bg-white/50">
                        <h4 className="font-bold mb-3 flex items-center gap-2 text-xs uppercase tracking-widest">
                            <span className="material-symbols-outlined text-base">verified</span>
                            Methodology Outcome
                        </h4>
                        <p className="text-sm font-medium opacity-80">
                            Validated Result: <span className="text-ink">{step.output}</span>
                        </p>
                    </div>
                </div>
                <div className="hand-drawn-border bg-white p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="size-12 rounded-full border-2 border-ink flex items-center justify-center bg-cream">
                            <span className="material-symbols-outlined">{step.icon}</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Evaluation Metrics</h4>
                            <p className="text-xs text-ink-light uppercase">Field Observations</p>
                        </div>
                    </div>
                    <ul className="space-y-4">
                        {step.metrics.map((m, i) => (
                            <li key={i} className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-ink mt-0.5">task_alt</span>
                                <div className="text-sm font-bold">{m}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <footer className="border-t-2 border-ink pt-12 flex flex-col md:flex-row gap-8">
                <button
                    onClick={() => {
                        const prev = stepNum - 1;
                        router.push(prev > 0 ? `/phase3/step/${prev}` : '/phase3');
                    }}
                    className="flex-1 p-8 border-2 border-ink bg-white hover:bg-cream transition-all group flex items-center gap-6"
                >
                    <span className="material-symbols-outlined text-4xl group-hover:-translate-x-2 transition-transform">arrow_back</span>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Previous</p>
                        <h4 className="text-xl font-bold">Step 0{parseInt(stepNum.toString()) - 1 || '...'}</h4>
                    </div>
                </button>
                <button
                    onClick={() => {
                        const next = stepNum + 1;
                        if (next <= 5) {
                            router.push(`/phase3/step/${next}`);
                        } else {
                            router.push('/glossary');
                        }
                    }}
                    className="flex-[2] p-8 border-2 border-ink bg-ink text-white hover:bg-neutral-800 transition-all group flex items-center justify-between"
                >
                    <div className="flex items-center gap-6">
                        <div className="size-14 border border-white/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">{stepNum === 5 ? 'menu_book' : 'rule'}</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">{stepNum === 5 ? 'Next Section' : 'Next Step'}</p>
                            <h4 className="text-2xl font-bold italic">{stepNum === 5 ? 'Glossary' : `Step 0${stepNum + 1}`}</h4>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">check</span>
                </button>
            </footer>
        </div>
    );
}
