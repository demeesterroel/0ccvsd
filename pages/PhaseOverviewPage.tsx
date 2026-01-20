import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

interface PhaseOverviewProps {
  phase: 1 | 2 | 3;
  onNavigate?: any; // Legacy support
}

const PhaseOverviewPage: React.FC<PhaseOverviewProps> = ({ phase }) => {
  const navigate = useNavigate();
  const { markVisited } = useNavigation();

  useEffect(() => {
    markVisited(`phase${phase}-overview`);
  }, [phase]);

  console.log('PhaseOverviewPage rendering for phase:', phase);

  const phaseData = {
    1: {
      tag: "The Value Domain",
      title: "Phase I: Exploration Overview",
      desc: "Establishing the ethical baseline of the care environment by identifying human values and mapping the stakeholder ecosystem.",
      steps: [
        { path: '/phase1/step/1', title: 'Context of Care Practice', icon: 'clinical_notes', text: 'Discovery of operational constraints and workflow baselines.' },
        { path: '/phase1/step/2', title: 'Map Stakeholders & Roles', icon: 'groups', text: 'Actor characterization and social network graph mapping.' },
        { path: '/phase1/step/3', title: 'Value Analysis', icon: 'diamond', text: 'Extraction of core values through the Value Mapping Exercise.' },
        { path: '/phase1/step/4', title: 'Semantic Gap', icon: 'error', text: 'Identifying linguistic conflicts between clinical and technical domains.' },
        { path: '/phase1/step/5', title: 'Prospective Value Hierarchy', icon: 'account_tree', text: 'Translating abstract values (Tier 1) into social norms (Tier 2).' },
        { path: '/phase1/step/6', title: 'Design Requirements', icon: 'settings_input_component', text: 'Defining technical parameters (Tier 3) for development.' }
      ],
      prev: '/overview',
      next: '/phase1/step/1'
    },
    2: {
      tag: "Technical Domain",
      title: "Phase II: Development Overview",
      desc: "Moving from philosophy to reality by integrating moral requirements into the robotic technical stack and building a working prototype.",
      steps: [
        { path: '/phase2/step/1', title: 'Analysis', icon: 'search', text: 'Auditing infrastructure bias and hardware constraints.' },
        { path: '/phase2/step/2', title: 'Synthesis', icon: 'construction', text: 'Assembling care-centered logic into the prototype architecture.' },
        { path: '/phase2/step/3', title: 'Simulation', icon: 'computer', text: 'Digital twin testing with ethical dilemma injection.' },
        { path: '/phase2/step/4', title: 'Evaluation', icon: 'balance', text: 'Benchmarking prototype performance against Care Elements.' },
        { path: '/phase2/step/5', title: 'Decision', icon: 'alt_route', text: 'Finalizing the moral log and validating deployment readiness.' }
      ],
      prev: '/phase1/step/6',
      next: '/phase2/step/1'
    },
    3: {
      tag: "The Evaluation/Context Design",
      title: "Phase III: Integration Overview",
      desc: "Bridging the gap between lab prototypes and messy ward reality through field deployment and ethical assessment results.",
      steps: [
        { path: '/phase3/step/1', title: 'Scenario Deployment', icon: 'movie', text: 'Controlled A/B testing in authentic clinical environments.' },
        { path: '/phase3/step/2', title: 'Qualitative Friction', icon: 'psychology_alt', text: 'Identifying logic conflicts through stakeholder interviews.' },
        { path: '/phase3/step/3', title: 'Value Instability', icon: 'balance', text: 'Detecting how context changes priority judgments.' },
        { path: '/phase3/step/4', title: 'Rule Synthesis', icon: 'terminal', text: 'Updating robotic behavior rules based on field data.' },
        { path: '/phase3/step/5', title: 'Bifurcated Guides', icon: 'menu_book', text: 'Creating dual-path technical and clinical documentation.' }
      ],
      prev: '/phase2/step/5',
      next: '/phase3/step/1'
    }
  };

  const content = phaseData[phase];

  if (!content) {
    console.error('PhaseOverviewPage: Invalid phase prop', phase);
    return <div className="p-10 text-red-500">Error: Phase content not found for phase {phase}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-20">
      <header className="mb-12 md:mb-20">
        <div className="inline-block border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8 bg-white">
          {content.tag}
        </div>
        <h1 className="text-4xl md:text-6xl font-medium text-ink leading-[1.1] tracking-tight mb-6 md:mb-8 italic">
          {content.title}
        </h1>
        <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl font-light">
          {content.desc}
        </p>
      </header>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.steps.map((step, i) => (
            <button key={i} onClick={() => navigate(step.path)} className="hand-drawn-border p-8 bg-white hover:bg-cream transition-colors group text-left">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                <span className="text-4xl font-black step-number-outline opacity-20">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-ink-light text-sm leading-relaxed">{step.text}</p>
            </button>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink pt-16 flex flex-col md:flex-row gap-8">
        <button onClick={() => navigate(content.prev)} className="flex-1 p-8 border-2 border-ink hover:bg-ink hover:text-white transition-all group text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Previous Section</p>
          <h4 className="text-xl font-bold">Back</h4>
        </button>
        <button onClick={() => navigate(content.next)} className="flex-1 p-8 border-2 border-ink hover:bg-ink hover:text-white transition-all group text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Next Step</p>
          <h4 className="text-xl font-bold">Begin Phase</h4>
        </button>
      </footer>
    </div>
  );
};

export default PhaseOverviewPage;
