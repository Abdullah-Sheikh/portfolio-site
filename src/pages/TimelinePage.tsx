
import { ArrowUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TimelinePage = () => {
  const isMobile = useIsMobile();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto py-10 px-4">
        <div className="relative">
          <div className="text-center mb-16">
            <h1 className="text-8xl md:text-[12rem] font-bubble text-[#1A1F2C] tracking-wider">TIMELINE</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 mt-4">
            Step into the winding path that shaped my career into what it is today.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0">
              <svg className="absolute top-0 left-1/2 transform -translate-x-1/2" width="800" height="2000" viewBox="0 0 800 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M400,0 Q450,400 300,800 Q150,1200 500,1600 Q700,1800 400,2000" stroke="#CBD5E0" strokeWidth="4" fill="none" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start mb-32">
              <div className="md:w-1/2 md:pr-16 md:text-right">
                <div className="mb-2 text-orange-500 font-bold uppercase">Software Graduate</div>
               
                <p className="mb-4">Fresh from FAST University with a robust computer science background, I bring a passion for innovative technologies and a drive to create impactful software solutions.</p>
                
              </div>
              
              <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-orange-500 border-4 border-white"></div>
              </div>
              
           
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row-reverse items-start mb-32">
              <div className="md:w-1/2 md:pl-16 md:text-left">
                <div className="mb-2 text-red-500 font-bold uppercase">Software Engineer Intern</div>
              
                <p className="mb-6">At Cinch Software, I quickly adapted to mobile development by building Flutter UI components and integrating REST APIs—gaining essential real-world coding and problem-solving skills.</p>
                
                <div className="hidden md:block">
                  <img 
                    src="/lovable-uploads/software-engineer-certificate.png" 
                    alt="Software Engineer Intern" 
                    className="rounded-xl max-w-xs" 
                  />
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-red-500 border-4 border-white"></div>
              </div>
              
              <div className="md:w-1/2 md:pr-16 mt-4 md:mt-0">
               
                
                <div className="md:hidden mt-4 mb-8">
                  <img 
                    src="/lovable-uploads/software-engineer-certificate.png" 
                    alt="Software Engineer Intern" 
                    className="rounded-xl max-w-xs mx-auto" 
                  />
                </div>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start mb-32">
              <div className="md:w-1/2 md:pr-16 md:text-right">
                <div className="mb-2 text-purple-500 font-bold uppercase">Assoicate Software Engineer</div>
               
                <p className="mb-4">At Tkxel, I contributed to cutting-edge React Native projects, honing my technical skills by optimizing code and implementing robust state management in a collaborative, agile environment.</p>
                
                <div className="hidden md:flex justify-end mt-8">
                  <div className="w-48 h-48 relative bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-5xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-purple-500 border-4 border-white"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-16 mt-4 md:mt-0">
               
                
                <div className="md:hidden mt-4 mb-8">
                  <div className="w-32 h-32 relative bg-purple-200 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row-reverse items-start mb-32">
              <div className="md:w-1/2 md:pl-16 md:text-left">
                <div className="mb-2 text-blue-500 font-bold uppercase">Software Engineer</div>
                
                <p className="mb-6">Currently at Tkxel, I specialize in React Native development with strong expertise in state management, delivering scalable, user-friendly mobile applications in dynamic agile environments.</p>
                
                <div className="hidden md:block mt-2 bg-gray-800 rounded-lg p-4 max-w-md">
                  <pre className="text-xs text-green-400 overflow-auto">
                    <code>{`const el = document.createElement(String.fromCharCode(99,97,110,118,97,115));
el.width = 300; el.height = 100; document.body.appendChild(el);
const ctx = el.getContext(String.fromCharCode(116,101,120,116,50,100));
for (let x = 0; x < el.width; x++) {
  let y = 50 + 30 * Math.sin(0.05 * x) + 15 * Math.sin(0.15 * x + Math.random());
  ctx.fillStyle = String.fromCharCode(114,103,98,40) + Math.floor(y * 2) + String.fromCharCode(44,50,44) + 200 + String.fromCharCode(41);
  ctx.fillRect(x, y, 1, 2);
}`}</code>
                  </pre>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-blue-500 border-4 border-white"></div>
              </div>
              
              <div className="md:w-1/2 md:pr-16 mt-4 md:mt-0">
                
                
                <div className="md:hidden mt-4 mb-8 bg-gray-800 rounded-lg p-4">
                  <pre className="text-xs text-green-400 overflow-auto">
                    <code>{`const el = document.createElement(String.fromCharCode(99,97,110,118,97,115));
el.width = 300; el.height = 100; document.body.appendChild(el);
const ctx = el.getContext(String.fromCharCode(116,101,120,116,50,100));
for (let x = 0; x < el.width; x++) {
  let y = 50 + 30 * Math.sin(0.05 * x) + 15 * Math.sin(0.15 * x + Math.random());
  ctx.fillStyle = String.fromCharCode(114,103,98,40) + Math.floor(y * 2) + String.fromCharCode(44,50,44) + 200 + String.fromCharCode(41);
  ctx.fillRect(x, y, 1, 2);
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start mb-32">
              <div className="md:w-1/2 md:pr-16 md:text-right">
                <div className="mb-2 text-green-500 font-bold uppercase">Technical Consultant</div>
                
                <p className="mb-6">Drawing on diverse project experience and a collaborative approach, I offer strategic insights to optimize software solutions, ensuring robust performance and user satisfaction.</p>
                
                <div className="hidden md:flex justify-end mt-4">
                  <div className="grid grid-cols-2 gap-3 max-w-xs">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img src="/lovable-uploads/1.png" alt="Team photo" className="w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img src="/lovable-uploads/3.png" alt="Team lunch" className="w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img src="/lovable-uploads/2.png" alt="Team lunch" className="w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img src="/lovable-uploads/5.png" alt="Team lunch" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-green-500 border-4 border-white"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-16 mt-4 md:mt-0">
               
                
                <div className="md:hidden mt-4 mb-8">
                  <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img src="/lovable-uploads/1.png" alt="Team lunch" className="w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img src="/lovable-uploads/3.png" alt="Team lunch" className="w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img src="/lovable-uploads/2.png" alt="Team lunch" className="w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img src="/lovable-uploads/5.png" alt="Team lunch" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={scrollToTop}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowUp size={24} />
        </button>
      </div>
      
      <Footer />
    </div>
  );
};

export default TimelinePage;
