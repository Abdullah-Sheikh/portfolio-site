
import { User } from 'lucide-react';

interface QuoteProps {
  text: string;
}

const UserQuote = ({ text }: QuoteProps) => (
  <div className="bg-gray-900 rounded-3xl p-6 mb-6">
    <div className="flex items-center justify-center mb-4">
      <div className="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center">
        <User size={20} color="white" />
      </div>
    </div>
    <p className="text-white text-center">"{text}"</p>
  </div>
);

export default UserQuote;
