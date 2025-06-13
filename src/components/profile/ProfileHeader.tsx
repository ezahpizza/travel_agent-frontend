
import { UserButton } from '@clerk/clerk-react';

const ProfileHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-black">My Travel Profile</h1>
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="/travel" 
          className="bg-dark-blue text-neon-green font-bold text-lg px-6 py-3 border-4 border-black hover:bg-neon-green hover:text-black transition-colors"
        >
          Plan New Trip
        </a>
      </div>
    </div>
  );
};

export default ProfileHeader;
