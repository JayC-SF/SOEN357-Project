import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NewAssignment from './pages/NewAssignment';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isNewAssignment = location.pathname === '/new-assignment';

  // Don't show the navigation bar on the auth pages or new assignment page
  if (isAuthPage || isNewAssignment) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/new-assignment" element={<NewAssignment />} />
      </Routes>
    );
  }

  return (
    <div className={isDashboard ? 'min-h-screen bg-gray-50' : 'min-h-screen bg-gradient-to-b from-indigo-50 to-white'}>
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Momentum.io</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {isDashboard ? (
                <>
                  <button className="text-gray-600 hover:text-indigo-600">Settings</button>
                  <button className="text-gray-600 hover:text-indigo-600">Profile</button>
                </>
              ) : (
                <>
                  <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
                  <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How it Works</a>
                </>
              )}
              {isDashboard ? (
                <Link
                  to="/"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition ml-4"
                >
                  Exit Dashboard
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition ml-4"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/new-assignment" element={<NewAssignment />} />
      </Routes>
    </div>
  );
}

export default App;