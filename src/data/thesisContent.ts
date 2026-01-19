export const thesisContent = {
    manifesto: {
        title: "The Argument",
        text: "The failure of care robotics is not a deficit of Moral Will (intent), but a deficit of Moral Skill (method). We lack the 'Intermediate-Level Knowledge' to translate abstract values like 'Dignity' into concrete C++ constraints.",
    },
    phase1: {
        concept: "The Semantic Gap",
        definition: "Identical terms masking conflicting priorities.",
        dataPoints: [
            {
                value: "Reciprocity",
                nurseDefinition: "A dialogical partnership requiring mutual adaptation.",
                engineerDefinition: "System acknowledgment (e.g., button press/LED flash).",
            },
            {
                value: "Attentiveness",
                nurseDefinition: "Noticing the need (holistic).",
                engineerDefinition: "Sensor detection (binary obstacle).",
            },
        ],
        artifact: {
            title: "The Prospective Value Hierarchy (PVH)",
            topLayer: "Care",
            translationChain: [
                "Responsiveness",
                "Kinematic Legibility",
                "Intention-Aware Path Generation",
            ],
        },
    },
    phase2: {
        concept: "The Normative Void",
        definition:
            "A structural gap where ethical decisions are silently hard-coded as arbitrary constants.",
        fallacy: {
            title: "The Ex Nihilo Fallacy",
            text: "Engineers do not build from scratch; they assemble existing stacks (Nav2) optimized for efficiency, not care.",
        },
        hiddenWeights: {
            codeSnippet: `goal_cost = 2.0\nsocial_momentum_cost = -11.0`,
            insight:
                "The robot values politeness 5.5x more than efficiency, but this was hidden in source code, not exposed as a parameter.",
        },
    },
    phase3: {
        concept: "The Generalist Trap",
        definition:
            "A robot acting efficiently is competent in a hospital but rude in a care home.",
        guidelines: {
            hospital: {
                logic: "Prioritize Flow",
                specs: ["Velocity > 0.8m/s", "Low Inflation Radius"],
                constraint: "Efficiency",
                behavior: "Maintain Lane",
            },
            careHome: {
                logic: "Prioritize Yielding",
                specs: ["Active Deceleration (v→0 as d→0)", "High Inflation Radius"],
                constraint: "Responsiveness",
                behavior: "Yield & Stop",
            },
        },
    },
};
