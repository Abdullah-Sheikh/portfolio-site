
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-7xl font-bold bubble-text mb-6">404</h1>
          <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="button-primary inline-flex">
            Go back home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
