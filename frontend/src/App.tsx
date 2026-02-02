import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';

// Pages
import Landing from '@/pages/Landing';
import SignupLogin from '@/pages/SignupLogin';
import Dashboard from '@/pages/Dashboard';
import TrackOverview from '@/pages/TrackOverview';
import NoteReader from '@/pages/NoteReader';
import CodePlayground from '@/pages/CodePlayground';
import ResumeRoaster from '@/pages/ResumeRoaster';
import ResumeReport from '@/pages/ResumeReport';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignupLogin mode="signup" />} />
          <Route path="/login" element={<SignupLogin mode="login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tracks/:trackSlug" element={<TrackOverview />} />
          <Route
            path="/tracks/:trackSlug/chapters/:chapterSlug"
            element={<NoteReader />}
          />
          <Route
            path="/tracks/:trackSlug/challenges/:challengeSlug"
            element={<CodePlayground />}
          />
          <Route path="/resume-roaster" element={<ResumeRoaster />} />
          <Route
            path="/resume-roaster/report/:reportId"
            element={<ResumeReport />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
