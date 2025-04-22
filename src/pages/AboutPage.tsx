
import { Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* About Me Header with Fun Graphic */}
        <div className="relative mb-16">
          <h1 className="font-bubble text-9xl md:text-[10rem] text-center text-[#1A1F2C]">ABOUT ME</h1>
          <div className="mt-8 text-center">
            <h2 className="text-2xl md:text-3xl font-medium">A closer look at the person behind the code</h2>
          </div>
        </div>
        
        {/* Profile Section with Illustrations */}
        <div className="relative max-w-6xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/4">
              {/* <img
                src="/lovable-uploads/e192413f-273c-4e7b-b57b-5c9113da1366.png"
                alt="Illustration of hair tools"
                className="w-full"
              /> */}
            </div>
            <div className="w-full md:w-1/3">
              <img
                src="/lovable-uploads/c6e39b70-c434-4d1a-9aa5-8453aaccb03f.png"
                alt="Profile Photo"
                className="rounded-2xl w-full"
              />
            </div>
            <div className="w-full md:w-1/4">
              {/* <img
                src="/lovable-uploads/93651507-bccf-4ab8-92a6-df9459d0fe59.png"
                alt="Illustration of roller skate"
                className="w-full"
              /> */}
            </div>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
          <p className="text-lg mb-8">Find me on these platforms and let's connect!</p>
          <SocialLinks />
        </div>
        
        {/* How I Spend My Weekends Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">How I spend my weekends</h2>
              
              <div className="space-y-6">
                <p className="text-lg">
                In my spare time, I enjoy diving into the mysteries of the universe through cosmology—it’s a passion that keeps me curious and always learning. Traveling is another hobby I truly value; exploring new places, cultures, and landscapes gives me a fresh perspective and a sense of adventure. 


                </p>
                
                <p className="text-lg">
                I also prioritize spending quality time with my family—those moments of connection, laughter, and shared experiences are some of the most rewarding parts of life.                </p>
                
               
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="relative w-full">
                <img 
                  src="/lovable-uploads/hobbies.jpg" 
                  alt="Weekend activities" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Hobbies Collection Section */}
        <div className="bg-[#1A1F2C] text-white rounded-3xl py-16 px-8 mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">I dabble in a bit of everything.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/hobby-1.jpg" 
                  alt="Pickleball" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Cosmology Enthusiast</h3>
              <p className="text-center text-gray-300">I love exploring the mysteries of the universe and diving deep into the wonders of space and time.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/hobby-3.jpg" 
                  alt="Ice Skating" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Traveler at Heart </h3>
              <p className="text-center text-gray-300">Discovering new places, cultures, and perspectives fuels my curiosity and sense of adventure.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/hobby-2.jpg" 
                  alt="Drawing" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Community Connector</h3>
              <p className="text-center text-gray-300">I enjoy being part of meaningful conversations, building connections, and sharing ideas that bring people together.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/hobby-4.jpeg" 
                  alt="3D Illustration" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Entertainment Lover</h3>
              <p className="text-center text-gray-300">Whether it’s movies, music, or a good series, I’m all in for a great story and a chill vibe.</p>
            </div>
          </div>
        </div>
        
        {/* Music Section */}
        {/* <div className="max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden mb-2">
                  <img 
                    src="/lovable-uploads/384e246f-9d99-4d09-a19f-3a744094c858.png" 
                    alt="Fleetwood Mac" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Fleetwood Mac</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden mb-2">
                  <img 
                    src="/lovable-uploads/384e246f-9d99-4d09-a19f-3a744094c858.png" 
                    alt="Luther Vandross" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Luther Vandross</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden mb-2">
                  <img 
                    src="/lovable-uploads/384e246f-9d99-4d09-a19f-3a744094c858.png" 
                    alt="Jungle" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Jungle</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden mb-2">
                  <img 
                    src="/lovable-uploads/384e246f-9d99-4d09-a19f-3a744094c858.png" 
                    alt="Maggie Rogers" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Maggie Rogers</h3>
              </div>
              
             
              
             
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">What's playing through my headphones</h2>
              
              <div className="space-y-6">
                <p className="text-lg">
                  My passion for music spans across decades, and I constantly draw inspiration from its rich history.
                </p>
                
                <p className="text-lg">
                  Lately, I've found myself deeply immersed in the captivating melodies of the 70s, with Fleetwood Mac's timeless tunes playing on repeat.
                </p>
                
                <p className="text-lg">
                  I'm constantly on the lookout for new ways to invigorate my mixes, as I never want to fall into a state of monotony. If you have any recommendations, I would absolutely love to hear them!
                </p>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* Resume CTA Section */}
        {/* <div className="bg-[#1A1F2C] text-white rounded-3xl py-16 px-8 text-center mb-24">
          <div className="flex justify-center mb-4">
            <Briefcase size={48} />
          </div>
          <h2 className="text-4xl font-bold mb-4">Check out my resume!</h2>
          <p className="text-xl mb-8">Want to know more about my skills and accomplishments? Great!</p>
          
          <Link to="/resume" className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Learn More →
          </Link>
        </div> */}
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
