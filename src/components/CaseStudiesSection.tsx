import { useState } from 'react';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  features: string[];
  image: string;
  background: string;
  link: string;
  passwordProtected?: boolean;
  onCardClick: (link: string, title: string, isProtected: boolean) => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  category, 
  features, 
  image, 
  background, 
  link, 
  passwordProtected = false,
  onCardClick 
}: ProjectCardProps) => {
  return (
    <div className={`${background} rounded-3xl overflow-hidden p-8 flex flex-col`}>
      <div className="mb-6">
        <div className="text-sm uppercase tracking-wide mb-1">{category}</div>
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="mb-6">{description}</p>
        
        <div className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => onCardClick(link, title, passwordProtected)}
          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          View Project
          {passwordProtected && (
            <Lock className="ml-2" size={14} />
          )}
        </button>
      </div>
      
      <div className="mt-auto flex-1 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="max-w-full rounded-lg" 
          style={{ height: 400, width: '100%' }} 
        />
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{id: string, name: string} | null>(null);
  const navigate = useNavigate();

  const handleProjectClick = (link: string, title: string, isProtected: boolean) => {
    const projectId = link.split('/').pop() || '';
    
    if (isProtected) {
      if (sessionStorage.getItem(`auth-${projectId}`) === 'true') {
        navigate(link);
      } else {
        setSelectedProject({ id: projectId, name: title });
        setPasswordDialogOpen(true);
      }
    } else {
      navigate(link);
    }
  };

  const projects = [
   
    {
      title: "Tic Tac Toe",
      category: "Abdullah Apps",
      description: "A classic game with a modern twist. Play against AI or with a friend in this minimal designed app.",
      features: [
        "Play against AI",
        "Multiplayer mode",
        "Game statistics",
        "Sound & vibration controls"
      ],
      image: "/lovable-uploads/a8cb6634-53cf-4281-b267-a9199f387a16.png",
      background: "card-gradient-pink",
      link: "/projects/tic-tac-toe",
      passwordProtected: false
    },
    {
      title: "Star Wars Planets",
      category: "Cinch Software",
      description: "Flutter app showcasing Star Wars planets and their details using SWAPI.dev API.",
      features: [
        "Planet details & stats",
        "Interactive UI",
        "Data from SWAPI API",
        "Open source project"
      ],
      image: "/lovable-uploads/star-wars-app.png",
      background: "card-gradient-orange",
      link: "/projects/star-wars-planets",
      passwordProtected: false
    },
  ];

  const publicProjects = projects.filter(project => !project.passwordProtected);

  return (
    <div className="bg-[#1A1F2C] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center mb-16">
          <h2 className="text-4xl text-white font-bold">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publicProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              onCardClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectsSection;
