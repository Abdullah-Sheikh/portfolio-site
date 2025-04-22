
import { Github } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SocialHandlesNavigation } from './SocialHandlesPage';

const GithubPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <SocialHandlesNavigation activeTab="github" />
          
          <div className="text-center mt-12 mb-8">
            <div className="flex justify-center mb-6">
              <Github size={80} />
            </div>
            
            <h1 className="text-5xl font-bold mb-6">GitHub</h1>
            
            <p className="text-xl mb-12">
              Explore my open-source projects and contributions on GitHub. I'm passionate about building software 
              that solves real problems and sharing my code with the developer community.
            </p>
          </div>
          
          <div className="mb-16">
            <a 
              href="https://github.com/Abdullah-Sheikh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors mx-auto block text-center"
            >
              Visit My GitHub Profile
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">GitHub Stats</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-gray-500">Stars</h3>
                <p className="text-3xl font-bold">112</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-gray-500">Repositories</h3>
                <p className="text-3xl font-bold">20+</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-gray-500">Pull Requests</h3>
                <p className="text-3xl font-bold">23</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-gray-500">Followers</h3>
                <p className="text-3xl font-bold">81</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-bold">TicTacToe_in_Android</h3>
                <p className="text-gray-600 mb-2">Android Game built in Java language</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">⭐ 36</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Java</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-bold">FlutterStarwarsApp</h3>
                <p className="text-gray-600 mb-2">A simple Flutter app to see Star War Planets</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">⭐ 10</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Dart</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-bold">e-commerce_App</h3>
                <p className="text-gray-600 mb-2">E-commerce Android App with Firebase realtime database</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">⭐ 10</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GithubPage;
