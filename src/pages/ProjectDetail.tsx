import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TicTacToe from '../components/projects/TicTacToe';
import StarWarsPlanets from '../components/projects/StarWarsPlanets';

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [passwordVerified, setPasswordVerified] = useState(false);

  const renderProject = () => {
    switch (projectId) {
     
      case 'tic-tac-toe':
        return <TicTacToe />;
      case 'star-wars-planets':
        return <StarWarsPlanets />;
      default:
        return <div className="text-center py-12">Project not found</div>;
    }
  };

  const handlePasswordVerified = () => {
    setPasswordVerified(true);
    setShowPasswordDialog(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
       
        
        {(!isPasswordProtected || passwordVerified) && renderProject()}
        
      </main>
      
     
      
      <Footer />
    </div>
  );
}

export default ProjectDetail;
