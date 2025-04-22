
import { ArrowLeft, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StarWarsPlanets = () => {
  return (
    <div>
      <div className="mb-6">
        <div className="text-gray-500 mb-4">Cinch Software</div>
        <h1 className="text-4xl font-bold mb-6">Star Wars Planets App</h1>
        <p className="text-gray-700 mb-6">
          Flutter mobile application that showcases planets from the Star Wars universe and their details, powered by the SWAPI.dev API.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
        <div>
          <div className="flex items-center mb-2">
            <Globe className="w-5 h-5 mr-2" />
            <h2 className="text-xl font-semibold">Background</h2>
          </div>
          <p className="text-gray-700">
            Created a Flutter application that fetches and displays data about planets from the Star Wars universe using the SWAPI (Star Wars API). 
            Users can browse planets and view detailed information about each one.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Timeline</h2>
          </div>
          <p className="mb-2">3 months</p>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Role</h2>
          </div>
          <p className="text-gray-700">Mobile App Development, UI/UX Design</p>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Tools & Technologies</h2>
          </div>
          <p className="text-gray-700">Flutter, Dart, SWAPI API, GitHub</p>
        </div>
      </div>
      
       <div className="flex justify-center mb-16">
        <img 
          src="/lovable-uploads/star-wars-app.png" 
          alt="Star wars App" 
          className="max-w-full"
        />
      </div>
      
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl p-8 text-center text-white mb-16">
        <h2 className="text-3xl font-bold mb-4">Open Source Project</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          This is an open-source Flutter application that demonstrates modern app development practices and API integration. Check out the source code on GitHub.
        </p>
        <a 
          href="https://github.com/Abdullah-Sheikh/FlutterStarwarsApp" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          View on GitHub <ArrowLeft className="ml-2 rotate-180" size={16} />
        </a>
      </div>
    </div>
  );
};

export default StarWarsPlanets;
