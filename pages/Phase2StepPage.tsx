
import React from 'react';
import { PageId } from '../types';

const Phase2StepPage: React.FC<{ stepId: string, onNavigate: (id: PageId) => void }> = ({ stepId, onNavigate }) => {
  const stepData = {
    'p2-s1': {
      title: "Analysis",
      desc: "Evaluating the Phase I Value Hierarchy and stakeholder norms against technical constraints.",
      details: "In this step, we take the perspective value hierarchy and begin auditing the technical infrastructure. We analyze how sensor choices or algorithm biases might conflict with the 'Attentiveness' and 'Competence' required by the care site.",
      output: "Technical Feasibility & Bias Audit",
      metrics: ["Value Alignment Check", "Infrastructure Bias Scan", "Constraint Mapping"],
      icon: "search"
    },
    'p2-s2': {
      title: "Synthesis",
      desc: "Integrating moral requirements into the technical architecture.",
      details: "Synthesis is the moment of 'Moral Skill'. We construct the prototype by translating design principles into software logic and hardware configurations. It's the physical and digital assembly of care-centered components.",
      output: "Prototype Architecture",
      metrics: ["Component Integration", "Logic Flow Synthesis", "Safety-Care Mapping"],
      icon: "construction"
    },
    'p2-s3': {
      title: "Simulation",
      desc: "Stress-testing the prototype in high-fidelity virtual care environments.",
      details: "Before field deployment, the system is subjected to semantic simulation injection. We observe how the robot handles care dilemmas in digital twins, monitoring for unintended behaviors in complex social scenarios.",
      output: "Simulation Feedback Loop",
      metrics: ["Scenario Performance", "Dilemma Handling", "Pathing Adequacy"],
      icon: "computer"
    },
    'p2-s4': {
      title: "Evaluation",
      desc: "Assessing the simulated prototype against the original ethical requirements.",
      details: "This evaluation stage benchmarks the prototype's performance. We measure the success of the technical implementation in upholding the values extracted in Phase I, identifying areas for iterative refinement.",
      output: "Internal Evaluation Report",
      metrics: ["Metric Benchmark", "Value Integrity Score", "Iterative Fix List"],
      icon: "balance"
    },
    'p2-s5': {
      title: "Decision",
      desc: "Finalizing the validated prototype ready for clinical integration.",
      details: "Based on evaluation results, a final decision is made on the prototype's readiness. We document every technical compromise in a transparent 'Technical Moral Log', marking the point where the prototype is ready for real-world Phase III testing.",
      output: "Validated Prototype (Ready for Integration)",
      metrics: ["Deployment Readiness", "Moral Log Completion", "Integration Protocol"],
      icon: "alt_route"
    }
  };

  const stepNum = stepId.slice(-1);
  const step = stepData[stepId as keyof typeof stepData] || stepData['p2-s1'];

  return (
    <div className="max-w-5xl mx-auto px-16 py-20">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Phase II: Development - Step 0{stepNum}
        </div>
        <h1 className="text-6xl font-medium text-ink leading-[1.1] tracking-tight mb-8 italic underline decoration-1 underline-offset-8">
          {step.title}
        </h1>
        <p className="text-2xl text-ink-light leading-relaxed max-w-3xl font-light">
          {step.desc}
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink/50 border-b border-ink/10 pb-2">Technical Implementation</h3>
          <p className="text-lg leading-relaxed text-ink-light">
            {step.details}
          </p>
          <div className="p-6 bg-cream border-2 border-ink rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-bold mb-3 flex items-center gap-2 text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-base">assignment</span>
              Required Output
            </h4>
            <p className="text-sm font-bold text-accent italic">
              {step.output}
            </p>
          </div>
        </div>
        <div className="hand-drawn-border bg-white p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-12 rounded-full border-2 border-ink flex items-center justify-center bg-cream">
              <span className="material-symbols-outlined">{step.icon}</span>
            </div>
            <div>
              <h4 className="font-bold">Engineering Metrics</h4>
              <p className="text-xs text-ink-light uppercase">Validation Parameters</p>
            </div>
          </div>
          <ul className="space-y-4">
            {step.metrics.map((m, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-ink mt-0.5">settings</span>
                <div className="text-sm font-medium">{m}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t-2 border-ink pt-12 flex flex-col md:flex-row gap-8">
        <button
          onClick={() => {
            const prev = parseInt(stepNum) - 1;
            onNavigate(prev > 0 ? `p2-s${prev}` as PageId : 'phase2-overview');
          }}
          className="flex-1 p-8 border-2 border-ink bg-white hover:bg-cream transition-all group flex items-center gap-6"
        >
          <span className="material-symbols-outlined text-4xl group-hover:-translate-x-2 transition-transform">arrow_back</span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Previous</p>
            <h4 className="text-xl font-bold">{parseInt(stepNum) === 1 ? 'Phase II: Development' : `Step 0${parseInt(stepNum) - 1}`}</h4>
          </div>
        </button>
        <button
          onClick={() => {
            const next = parseInt(stepNum) + 1;
            if (next <= 5) {
              onNavigate(`p2-s${next}` as PageId);
            } else {
              onNavigate('phase3-overview');
            }
          }}
          className="flex-[2] p-8 border-2 border-ink bg-ink text-white hover:bg-neutral-800 transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-6">
            <div className="size-14 border border-white/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">terminal</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">{parseInt(stepNum) === 5 ? 'Phase III Transition' : 'Next Step'}</p>
              <h4 className="text-2xl font-bold italic">{parseInt(stepNum) === 5 ? 'Integration' : `Step 0${parseInt(stepNum) + 1}`}</h4>
            </div>
          </div>
          <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default Phase2StepPage;
