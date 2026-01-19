import HeroCycle from "@/components/HeroCycle";
import PhaseSection from "@/components/PhaseSection";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-thesis-gold selection:text-black">
      <HeroCycle />

      {/* PHASE I: EXPLORATION */}
      <PhaseSection
        id="exploration"
        title="Phase I: Exploration"
        mainImageSrc="/assets/phase_1_ines.png"
        color="#8CBCE8" // Thesis Blue
        steps={[
          {
            title: "Context of Care",
            content: (
              <p>
                Care is not just a service; it is a complex ecosystem of relationships. Before writing a single line of code, we must understand the &quot;Semantic Gap&quot;—where identical terms mask conflicting priorities between engineers and nurses.
              </p>
            ),
          },
          {
            title: "Stakeholder Map",
            content: (
              <div className="space-y-4">
                <p>Mapping the hidden power dynamics in a care facility. Who defines &quot;success&quot;? The Administrator (Efficiency) or the Resident (Dignity)?</p>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image src="/assets/stakeholdersmap.png" alt="Stakeholder Map" fill className="object-contain" />
                </div>
              </div>
            ),
          },
          {
            title: "Value Analysis",
            content: (
              <p>
                We identified core values: <strong>Reciprocity</strong>, <strong>Attentiveness</strong>, and <strong>Responsiveness</strong>. In engineering terms, these are often reduced to binary sensor states, stripping them of their moral weight.
              </p>
            ),
          },
          {
            title: "The Prospective Value Hierarchy (PVH)",
            content: (
              <div className="space-y-4">
                <p>Technological translation of values. This artifact bridges the Semantic Gap by converting abstract values into concrete engineering requirements.</p>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image src="/assets/PVH_ines.jpg" alt="PVH Artifact" fill className="object-contain" />
                </div>
              </div>
            ),
          },
        ]}
      />

      {/* PHASE II: DEVELOPMENT */}
      <PhaseSection
        id="development"
        title="Phase II: Development"
        mainImageSrc="/assets/phase2_ines.png"
        color="#E88C8C" // Thesis Red
        steps={[
          {
            title: "The Normative Void",
            content: (
              <p>
                We discovered a structural gap: ethical decisions are silently hard-coded as arbitrary constants. A cost function weight of <code>-11.0</code> for social momentum implies a value judgment that was never explicitly debated.
              </p>
            ),
          },
          {
            title: "Analysis & Synthesis",
            content: (
              <p>
                Deconstructing the navigation stack (Nav2). We found that &quot;optimization&quot; often means &quot;efficiency at the cost of social comfort.&quot; We must expose these hidden trades-offs to the stakeholders.
              </p>
            ),
          },
          {
            title: "Simulation",
            content: (
              <p>
                Testing the new cost functions in a controlled digital twin. Does the robot yield? does it acknowledge presence? Simulation allows us to fail safely before entering the physical space.
              </p>
            ),
          },
        ]}
      />

      {/* PHASE III: INTEGRATION */}
      <PhaseSection
        id="integration"
        title="Phase III: Integration"
        mainImageSrc="/assets/phase3_ines.png"
        color="#8CE8A6" // Thesis Green
        steps={[
          {
            title: "Contextual Instability",
            content: (
              <p>
                A generalist robot fails because it cannot code-switch. Strategies successful in a hospital (high velocity, lane keeping) are perceived as rude or dangerous in a care home (low velocity, yielding).
              </p>
            ),
          },
          {
            title: "Prototype Deployment",
            content: (
              <p>
                Deploying the &quot;Socially Aware Navigation&quot; stack on physical hardware. The robot must now balance the &quot;Hospital Logic&quot; (Efficiency) with the &quot;Care Home Logic&quot; (Responsiveness).
              </p>
            ),
          },
          {
            title: "Design Guidelines",
            content: (
              <div className="rounded-xl bg-gray-50 p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Key Takeaway</h4>
                <p className="text-sm">
                  Robots must possess <strong>Moral Skill</strong>—the intermediate-level knowledge to adapt abstract values to specific contexts. This requires a dynamic costmap that changes based on the environment.
                </p>
              </div>
            ),
          },
        ]}
      />

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 bg-white py-24 text-center text-gray-500">
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-[0.5em] text-gray-900 uppercase">
            From Moral Will to Moral Skill
          </h2>
          <p className="mt-2 text-xs">
            Operationalizing Care-Centered Value Sensitive Design in Robotics
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-gray-100 hover:shadow-lg"
        >
          <Download size={16} />
          <span>DOWNLOAD METHODOLOGY (PDF)</span>
        </a>

        <div className="mt-16 text-[10px] tracking-widest opacity-50">
          SYSTEM VERSION 3.0 // GUIDEBOOK_ACTIVE
        </div>
      </footer>
    </main>
  );
}
