import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

const GlossaryPage: React.FC<{ onNavigate?: any }> = () => {
  const navigate = useNavigate();
  const { markVisited } = useNavigation();

  useEffect(() => {
    markVisited('glossary');
  }, []);

  const abbreviations = {
    ethics: [
      { abbr: 'CCVSD', def: 'Care Centered Value Sensitive Design' },
      { abbr: 'VSD', def: 'Value Sensitive Design' },
      { abbr: 'ILK', def: 'Intermediate Level Knowledge' },
      { abbr: 'PVH', def: 'Prospective Value Hierarchy' },
      { abbr: 'RtD', def: 'Research through Design' },
    ],
    robotics: [
      { abbr: 'DoF', def: 'Degrees of Freedom' },
      { abbr: 'HRI', def: 'Human-Robot Interaction' },
      { abbr: 'LIDAR', def: 'Light Detection and Ranging' },
      { abbr: 'MPPI', def: 'Model Predictive Path Integral' },
      { abbr: 'Nav2', def: 'Navigation 2 (ROS 2 Navigation Stack)' },
      { abbr: 'KPI', def: 'Key Performance Indicators' },
      { abbr: 'PIR', def: 'Path Irregularity Ratio' },
      { abbr: 'PSI', def: 'Personal Space Intrusion' },
      { abbr: 'ROS 2', def: 'Robot Operating System 2' },
      { abbr: 'SFM', def: 'Social Force Model' },
      { abbr: 'TF', def: 'Transform (Coordinate Frame System)' },
      { abbr: 'TTC', def: 'Time-to-Collision' },
    ]
  };

  const terms = [
    { name: 'Accountability', def: 'The obligation of designers and systems to explain and justify technical decisions that impact care.' },
    { name: 'Acoustic Baseline', def: 'The ambient noise floor of a clinical environment, used to set non-intrusive robotic volume limits.' },
    { name: 'Actuator Compliance', def: 'The physical flexibility or "give" in robotic joints, essential for safe human-robot physical interaction.' },
    { name: 'Attentiveness', def: 'The first element of care: the capacity to recognize and identify the unmet needs of care recipients.' },
    { name: 'Autonomy (Patient)', def: 'The value of supporting a patient’s right to make choices about their own care and environment.' },
    { name: 'Behavioral Observational Data', def: 'Data collected during field deployment regarding how humans and robots interact in real-time.' },
    { name: 'Bifurcated Guides', def: 'Documentation split into technical specs for engineers and relational protocols for healthcare staff.' },
    { name: 'Care-Centered Value Sensitive Design (CCVSD)', def: 'An engineering methodology prioritizing care as the primary value throughout the design lifecycle.' },
    { name: 'Care Dilemmas', def: 'Scenarios where two or more care values conflict, requiring prioritized ethical navigation.' },
    { name: 'Clinical Scenarios', def: 'Structured testing environments modeled after authentic hospital ward interactions.' },
    { name: 'Competence', def: 'The third element of care: the technical adequacy and capability to perform a care task correctly.' },
    { name: 'Conceptual Investigation', def: 'Philosophical analysis of values to define what they mean in a specific design context.' },
    { name: 'Contextual Norms', def: 'The unwritten social rules governing behavior, space, and interaction in a specific care setting.' },
    { name: 'Contextual Variance Matrix', def: 'A tool for tracking how value priorities shift across different clinical situations.' },
    { name: 'Digital Twin', def: 'A high-fidelity virtual model of the care environment used for safe simulation testing.' },
    { name: 'Direct Stakeholders', def: 'Actors who interact directly with the robot, such as patients and primary nurses.' },
    { name: 'Empirical Discovery', def: 'The use of social science methods (interviews, observation) to uncover actual human needs.' },
    { name: 'Engineering Ethics', def: 'The application of moral principles to the practice of engineering and technical design.' },
    { name: 'Ethics of Care', def: 'A relational moral theory emphasizing the importance of responsiveness to others’ needs.' },
    { name: 'Haptic Fidelity', def: 'The precision and "feel" of touch-based feedback between the robot and a human.' },
    { name: 'Human Dignity', def: 'The inherent value of the person, requiring that robots do not dehumanize or objectify patients.' },
    { name: 'ILK (Intermediate-Level Knowledge)', def: 'Design knowledge that bridges the gap between abstract ethics and concrete technical code.' },
    { name: 'Indirect Stakeholders', def: 'Actors affected by the robot without direct use, such as cleaning staff or visiting family.' },
    { name: 'Infrastructure Bias', def: 'Unintended ethical assumptions built into underlying hardware, OS, or pre-trained ML models.' },
    { name: 'Interaction Protocols', def: 'Defined rules for how a robot initiates, sustains, and ends an encounter with a human.' },
    { name: 'Logic Conflicts', def: 'Situations where the robot’s programmed efficiency contradicts the relational needs of care.' },
    { name: 'Moral Skill', def: 'The practical engineering ability to translate ethical intentions into technical reality.' },
    { name: 'Moral Will', def: 'The sincere intent or desire of a designer to build an ethical or "good" system.' },
    { name: 'Path Smoothness', def: 'A metric of navigation that avoids erratic movements to prevent patient anxiety.' },
    { name: 'Privacy', def: 'The value of protecting a patient’s information and physical space from unwarranted intrusion.' },
    { name: 'Proximity Buffers', def: 'Calculated safety zones (often in cm) that define the "personal space" of a care recipient.' },
    { name: 'Qualitative Friction', def: 'Points of tension where human users feel the robot is not acting in a "caring" manner.' },
    { name: 'Relational Care', def: 'A model of care that views the provider and recipient as an interconnected, interdependent unit.' },
    { name: 'Responsibility', def: 'The second element of care: taking on the burden of ensuring a care need is met.' },
    { name: 'Responsiveness', def: 'The fourth element of care: attending to the feedback and vulnerability of the care recipient.' },
    { name: 'Semantic Gap', def: 'The distance between care-language (e.g., "patience") and technical-language (e.g., "latency").' },
    { name: 'Simulation Injection', def: 'The process of testing ethical dilemmas within a virtual environment to stress-test logic.' },
    { name: 'Technical Adequacy', def: 'The minimum level of performance required for a robot to be considered "competent" in care.' },
    { name: 'Technical Moral Log', def: 'A transparent record of all technical trade-offs and ethical compromises made during design.' },
    { name: 'Value Instability', def: 'The phenomenon where a value’s importance or meaning changes based on shifting context.' },
    { name: 'VSD (Value Sensitive Design)', def: 'A design approach that accounts for human values in a principled and comprehensive manner.' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-16 py-10 md:py-20">
      <header className="mb-16">
        <div className="inline-block border border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Terminology & Definitions
        </div>
        <h1 className="text-6xl font-medium text-ink leading-tight tracking-tight mb-8">
          Technical <span className="italic">Glossary</span>
        </h1>
        <p className="text-2xl text-ink-light leading-relaxed max-w-3xl font-light">
          A comprehensive lexicon for the CCVSD framework, bridging the gap between care ethics, technical implementation, and clinical evaluation.
        </p>
      </header>

      {/* Abbreviation Section (As requested from image) */}
      <section className="mb-24">
        <div className="overflow-x-auto border-t-2 border-ink">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-ink">
                <th className="py-4 px-4 font-bold text-sm uppercase">Abbreviation</th>
                <th className="py-4 px-4 font-bold text-sm uppercase">Definition</th>
              </tr>
            </thead>
            <tbody>
              {/* I. Ethics & Methodology */}
              <tr className="bg-ink/5 border-b border-ink/10">
                <td colSpan={2} className="py-3 px-4 font-bold italic text-sm">I. Ethics & Methodology</td>
              </tr>
              {abbreviations.ethics.map((item, idx) => (
                <tr key={`eth-${idx}`} className="border-b border-ink/10 hover:bg-ink/5 transition-colors">
                  <td className="py-3 px-4 font-bold text-sm">{item.abbr}</td>
                  <td className="py-3 px-4 text-sm italic">{item.def}</td>
                </tr>
              ))}

              {/* II. Robotics & Engineering */}
              <tr className="bg-ink/5 border-b border-ink/10">
                <td colSpan={2} className="py-3 px-4 font-bold italic text-sm mt-4">II. Robotics & Engineering</td>
              </tr>
              {abbreviations.robotics.map((item, idx) => (
                <tr key={`rob-${idx}`} className="border-b border-ink/10 hover:bg-ink/5 transition-colors">
                  <td className="py-3 px-4 font-bold text-sm">{item.abbr}</td>
                  <td className="py-3 px-4 text-sm italic">{item.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Terms Section */}
      <h2 className="text-3xl font-bold mb-10 pb-4 border-b-2 border-ink inline-block italic">Extended Definitions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {terms.map((term, i) => (
          <div key={i} className="border-b border-ink/10 pb-6 hover:bg-ink/5 transition-colors p-4 rounded group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{term.name}</h3>
            <p className="text-sm text-ink-light leading-relaxed">{term.def}</p>
          </div>
        ))}
      </div>

      <footer className="mt-20 pt-16 border-t border-ink flex flex-col md:flex-row gap-8">
        <button
          onClick={() => navigate('/phase3/step/5')}
          className="flex-1 p-8 border-2 border-ink bg-white hover:bg-cream transition-all group flex items-center gap-6"
        >
          <span className="material-symbols-outlined text-4xl group-hover:-translate-x-2 transition-transform">arrow_back</span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Previous Step</p>
            <h4 className="text-xl font-bold">Bifurcated Guides</h4>
          </div>
        </button>
        <button
          onClick={() => navigate('/pdf-guide')}
          className="flex-[2] p-8 border-2 border-ink bg-ink text-white hover:bg-neutral-800 transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-6">
            <div className="size-14 border border-white/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Next Section</p>
              <h4 className="text-2xl font-bold italic">PDF Guide</h4>
            </div>
          </div>
          <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default GlossaryPage;
