
import { ArrowBigDown, ArrowLeft, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TicTacToe = () => {
  return (
    <div>
      <div className="mb-6">
        <div className="text-gray-500 mb-4">Abdullah Apps</div>
        <h1 className="text-4xl font-bold mb-6">Tic Tac Toe</h1>
        <p className="text-gray-700 mb-6">
          A classic game with a modern twist. Play against AI or with a friend in this minimal designed app.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
        <div>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Background</h2>
          </div>
          <p className="text-gray-700">
            Created a modern version of the classic Tic Tac Toe game with multiple play modes, including playing against AI or with a friend. Designed with a minimal, attractive interface.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Timeline</h2>
          </div>
          <p className="mb-2">4 months</p>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Role</h2>
          </div>
          <p className="text-gray-700">Design, development, and publishing</p>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Tools</h2>
          </div>
          <p className="text-gray-700">Android Studio, Adobe XD</p>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <a href="https://play.google.com/store/apps/details?id=com.techsoldev.tictactoegame" target="_blank" rel="noopener noreferrer" className="inline-flex items-center button-primary">
            View on Google Play <ArrowLeft className="ml-2 rotate-180" size={16} />
          </a>
        </div>
      </div>
      
      <div className="flex justify-center mb-16">
        <img 
          src="/lovable-uploads/9c36320b-fa5d-41f5-a416-0f19c213b160.png" 
          alt="Tic Tac Toe App" 
          className="max-w-full md:max-w-md"
        />
      </div>
      
      {/* <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-2 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Play with AI</h3>
              </div>
              <p className="text-gray-700">
                Challenge yourself against the computer in different difficulty levels. Perfect for honing your strategy or a quick game when no one else is around.
              </p>
              <div className="mt-4">
                <img src="/lovable-uploads/f5e286f8-be21-4576-8d43-69264f72408d.png" alt="AI Game Mode" className="rounded-lg shadow-md" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-400 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Multiplayer</h3>
              </div>
              <p className="text-gray-700">
                Enjoy a game with friends on the same device. Enter your names and take turns placing your marks on the board.
              </p>
              <div className="mt-4">
                <img src="/lovable-uploads/d104ef14-8bcb-448f-8d7e-33f16b4027d5.png" alt="Multiplayer Setup" className="rounded-lg shadow-md" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Game Statistics</h3>
              </div>
              <p className="text-gray-700">
                Track your wins, losses, and draws. See who has the upper hand in your friendly competitions.
              </p>
              <div className="mt-4">
                <img src="/lovable-uploads/80f39608-000d-4b9a-a5d9-e950a8c59c85.png" alt="Game Statistics" className="rounded-lg shadow-md" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Customization</h3>
              </div>
              <p className="text-gray-700">
                Choose your side (X or O), toggle sound and vibration effects, and personalize your gaming experience.
              </p>
              <div className="mt-4">
                <img src="/lovable-uploads/2aa2da06-a198-47bc-9f45-8b24a1437139.png" alt="Customization Options" className="rounded-lg shadow-md" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div> */}
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Game Flow</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-xl mb-4">
              <img src="/lovable-uploads/f5e286f8-be21-4576-8d43-69264f72408d.png" alt="Choose Mode" className="w-48" />
            </div>
            <p className="text-center font-medium">Select Play Mode</p>
          </div>
          <div className="hidden md:block">
            <ArrowLeft className="rotate-180" size={24} />
          </div>
          <div className="md:hidden">
            <ArrowBigDown className="rotate-270" size={24} />
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-xl mb-4">
              <img src="/lovable-uploads/d104ef14-8bcb-448f-8d7e-33f16b4027d5.png" alt="Player Setup" className="w-48" />
            </div>
            <p className="text-center font-medium">Enter Names</p>
          </div>
          <div className="hidden md:block">
            <ArrowLeft className="rotate-180" size={24} />
          </div>
          <div className="md:hidden">
          <ArrowBigDown className="rotate-270" size={24} />
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-xl mb-4">
              <img src="/lovable-uploads/80f39608-000d-4b9a-a5d9-e950a8c59c85.png" alt="Choose Side" className="w-48" />
            </div>
            <p className="text-center font-medium">Pick Your Side</p>
          </div>
          <div className="hidden md:block">
            <ArrowLeft className="rotate-180" size={24} />
          </div>
          <div className="md:hidden">
          <ArrowBigDown className="rotate-270" size={24} />
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-xl mb-4">
              <img src="/lovable-uploads/2aa2da06-a198-47bc-9f45-8b24a1437139.png" alt="Play Game" className="w-48" />
            </div>
            <p className="text-center font-medium">Play Game</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-center text-white mb-16">
        <h2 className="text-3xl font-bold mb-4">Available on Google Play</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Download Tic Tac Toe now and enjoy the classic game with a modern twist. Perfect for all ages!
        </p>
        <a 
          href="https://play.google.com/store/apps/details?id=com.techsoldev.tictactoegame" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img 
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
            alt="Get it on Google Play" 
            className="h-16"
          />
        </a>
      </div>
    </div>
  );
};

export default TicTacToe;
