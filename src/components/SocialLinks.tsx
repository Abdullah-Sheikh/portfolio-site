
import { Facebook, Github, Instagram, Linkedin, Twitter, ExternalLink } from 'lucide-react';

interface SocialLinkProps {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

const SocialLink = ({ platform, url, icon }: SocialLinkProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      aria-label={`Visit ${platform}`}
    >
      {icon}
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <SocialLink 
        platform="LinkedIn" 
        url="https://www.linkedin.com/in/mabdullah-sheikh/" 
        icon={<Linkedin size={24} className="text-[#0077B5]" />} 
      />
      <SocialLink 
        platform="GitHub" 
        url="https://github.com/Abdullah-Sheikh" 
        icon={<Github size={24} className="text-[#333]" />} 
      />
      <SocialLink 
        platform="Stack Overflow" 
        url="https://stackoverflow.com/users/13052034" 
        icon={<ExternalLink size={24} className="text-[#F48024]" />} 
      />
      <SocialLink 
        platform="Twitter" 
        url="https://twitter.com/Abdullah_shk_" 
        icon={<Twitter size={24} className="text-[#1DA1F2]" />} 
      />
      <SocialLink 
        platform="Facebook" 
        url="https://web.facebook.com/sheikhabdullahSEO" 
        icon={<Facebook size={24} className="text-[#1877F2]" />} 
      />
      <SocialLink 
        platform="Instagram" 
       
        url="https://www.instagram.com/abdullah_shk.dev" 
        icon={<Instagram size={24} className="text-[#E4405F]" />} 
      />
    </div>
  );
};

export default SocialLinks;
