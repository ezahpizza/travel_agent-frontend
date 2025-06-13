
interface ProfileTabsProps {
  sections: Array<{ id: string; label: string; icon: string }>;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ProfileTabs = ({ sections, activeSection, onSectionChange }: ProfileTabsProps) => {
  return (
    <div className="flex border-b-4 border-black">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`flex-1 py-4 px-4 font-bold text-lg border-r-4 border-black last:border-r-0 transition-colors ${
            activeSection === section.id
              ? 'bg-dark-blue text-white'
              : 'bg-flamingo text-black hover:bg-brut-orange'
          }`}
        >
          <span className="mr-2">{section.icon}</span>
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
