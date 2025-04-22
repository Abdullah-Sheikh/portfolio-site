import { Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Navigation component for social handles that can be reused across pages
export const SocialHandlesNavigation = ({ activeTab }: { activeTab?: string }) => {
  return (
    <div className="flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <Link to="/social/linkedin">
              <NavigationMenuLink 
                className={navigationMenuTriggerStyle() + (activeTab === "linkedin" ? " bg-accent" : "")}
              >
                LinkedIn
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/social/github">
              <NavigationMenuLink 
                className={navigationMenuTriggerStyle() + (activeTab === "github" ? " bg-accent" : "")}
              >
                GitHub
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/social/stackoverflow">
              <NavigationMenuLink 
                className={navigationMenuTriggerStyle() + (activeTab === "stackoverflow" ? " bg-accent" : "")}
              >
                Stack Overflow
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const SocialHandlesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <SocialHandlesNavigation activeTab="linkedin" />
          
          <div className="text-center mt-12 mb-8">
            <div className="flex justify-center mb-6">
              <Linkedin size={80} className="text-[#0077B5]" />
            </div>
            
            <h1 className="text-5xl font-bold mb-6">LinkedIn</h1>
            
            <p className="text-xl mb-12">
              I'm always open to connecting with fellow designers, developers, and industry professionals. Feel free to reach out if you'd like to collaborate, discuss potential opportunities, or just chat about design and technology.
            </p>
          </div>
          
          <div className="mb-16">
            <a 
              href="https://www.linkedin.com/in/mabdullah-sheikh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#0077B5] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#006097] transition-colors mx-auto block text-center"
            >
              Visit My LinkedIn Profile
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Why Connect?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-bold mb-2">Professional Networking</h3>
                <p>
                  Expand your professional network with other designers and developers in the industry.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Collaboration Opportunities</h3>
                <p>
                  Discover potential collaboration opportunities on exciting projects.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Knowledge Sharing</h3>
                <p>
                  Share insights, resources, and stay updated with the latest industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SocialHandlesPage;
