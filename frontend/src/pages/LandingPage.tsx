import { ArrowRight, Brain, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Big Projects into
            <span className="text-indigo-600"> Achievable Steps</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Break down overwhelming assignments into clear, manageable phases.
            Stay organized, focused, and in control of your progress.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              Create Free Account
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full border-2 border-indigo-600 hover:bg-indigo-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Momentum.io?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Breakdown</h3>
              <p className="text-gray-600">
                AI-powered task analysis that suggests optimal project phases based on your goals
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Time Management</h3>
              <p className="text-gray-600">
                Intelligent scheduling that helps you allocate time effectively for each phase
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
              <p className="text-gray-600">
                Visual progress indicators and milestone celebrations to keep you motivated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Build Momentum?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their project management experience with Momentum.io
          </p>
          <Link
            to="/signup"
            className="bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-50 transition font-semibold inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Momentum.io</span>
            </div>
            <div className="text-gray-600">
              © 2025 Momentum.io. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;