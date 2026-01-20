import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
import Layout from './components/Layout';
import IntroPage from './pages/IntroPage';
import PhilosophyPage from './pages/PhilosophyPage';
import GeneralPhaseOverviewPage from './pages/GeneralPhaseOverviewPage';
import PhaseOverviewPage from './pages/PhaseOverviewPage';
import Phase1StepPage from './pages/Phase1StepPage';
import Phase2StepPage from './pages/Phase2StepPage';
import Phase3StepPage from './pages/Phase3StepPage';
import GlossaryPage from './pages/GlossaryPage';
import PDFPage from './pages/PDFPage';
import ExportView from './pages/ExportView';

// Temporary Wrappers for Step Pages to bridge params
const Phase1StepWrapper = () => {
  const { stepId } = useParams();
  // Assuming URL is /phase1/step/1, mapped to p1-s1
  return <Phase1StepPage stepId={`p1-s${stepId}`} onNavigate={() => { }} />;
};
const Phase2StepWrapper = () => {
  const { stepId } = useParams();
  return <Phase2StepPage stepId={`p2-s${stepId}`} onNavigate={() => { }} />;
};
const Phase3StepWrapper = () => {
  const { stepId } = useParams();
  return <Phase3StepPage stepId={`p3-s${stepId}`} onNavigate={() => { }} />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IntroPage onNavigate={() => { }} />} />
            <Route path="philosophy" element={<PhilosophyPage onNavigate={() => { }} />} />
            <Route path="overview" element={<GeneralPhaseOverviewPage />} />
            <Route path="phase1" element={<PhaseOverviewPage phase={1} onNavigate={() => { }} />} />
            <Route path="phase1/step/:stepId" element={<Phase1StepWrapper />} />

            <Route path="phase2" element={<PhaseOverviewPage phase={2} onNavigate={() => { }} />} />
            <Route path="phase2/step/:stepId" element={<Phase2StepWrapper />} />

            <Route path="phase3" element={<PhaseOverviewPage phase={3} onNavigate={() => { }} />} />
            <Route path="phase3/step/:stepId" element={<Phase3StepWrapper />} />

            <Route path="glossary" element={<GlossaryPage onNavigate={() => { }} />} />
            <Route path="pdf-guide" element={<PDFPage onNavigate={() => { }} />} />
          </Route>
          <Route path="/export" element={<Layout />}>
            <Route index element={<ExportView onNavigate={() => { }} />} />
          </Route>
          {/* Redirect legacy or unknown routes to Intro */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
};

export default App;