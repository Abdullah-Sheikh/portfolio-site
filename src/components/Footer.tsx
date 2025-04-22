
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] py-12 text-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Linkedin size={48} />
        </div>
        
        <h2 className="text-4xl font-bold mb-4">Connect with me on Linkedin!</h2>
        <p className="mb-8">Let's connect. I would love to hear more about opportunities you currently have.</p>
        
        <div className="flex justify-center">
          <Link 
            to="https://www.linkedin.com/in/mabdullah-sheikh/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 border border-white rounded-full inline-flex items-center"
          >
            Connect here <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
