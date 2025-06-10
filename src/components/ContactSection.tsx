
const ContactSection = () => {
  return (
    <section className="bg-neon-green border-4 border-black p-8 md:p-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-black">
          Reach out to us with your questions
        </h2>
        
        <button className="bg-white text-brutalist-orange font-syne font-bold text-xl px-8 py-4 border-4 border-brutalist-orange hover:bg-brutalist-orange hover:text-white transition-colors">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
