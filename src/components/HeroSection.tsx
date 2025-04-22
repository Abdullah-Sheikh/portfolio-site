import { Link } from 'react-router-dom';
import AnimatedExpertise from './AnimatedExpertise';

const HeroSection = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 lg:pb-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bubble-text">
            HELLO, I'M ABDULLAH
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            5 year career ranging in <AnimatedExpertise />
          </p>
          <Link 
            to="/timeline" 
            className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Check Out My Career Timeline
          </Link>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="rounded-2xl overflow-hidden bg-gray-200 w-[63%] h-[63%]">
            <img
              src="/lovable-uploads/c6e39b70-c434-4d1a-9aa5-8453aaccb03f.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
