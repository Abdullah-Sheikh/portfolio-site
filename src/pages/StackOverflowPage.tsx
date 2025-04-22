
import { ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SocialHandlesNavigation } from './SocialHandlesPage';

const StackOverflowPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <SocialHandlesNavigation activeTab="stackoverflow" />
          
          <div className="text-center mt-12 mb-8">
            <div className="flex justify-center mb-6">
              <ExternalLink size={80} className="text-[#F48024]" />
            </div>
            
            <h1 className="text-5xl font-bold mb-6">Stack Overflow</h1>
            
            <p className="text-xl mb-12">
              I'm active on Stack Overflow helping others solve programming challenges and contributing to the developer community.
              Follow me to see my latest questions and answers.
            </p>
          </div>
          
          <div className="mb-16">
            <a 
              href="https://stackoverflow.com/users/13052034" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#F48024] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#da7020] transition-colors mx-auto block text-center"
            >
              Visit My Stack Overflow Profile
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">My Stack Overflow Stats</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-gray-500">Reputation</h3>
                <p className="text-3xl font-bold">224</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-gray-500">Answers</h3>
                <p className="text-3xl font-bold">14</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-gray-500">Questions</h3>
                <p className="text-3xl font-bold">0</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-gray-500">Badges</h3>
                <p className="text-3xl font-bold">16</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Top Tags</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">android</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">6 score</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">responsiveness</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">4 score</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">android-layout</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">4 score</span>
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

export default StackOverflowPage;
