import { Link } from 'react-router-dom';

const ContactSection = () => {
    return (
        <section className="p-6 md:p-12 mx-4 md:mx-8">
            <div className="max-w-9xl mx-auto text-left space-y-6">
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black">
                    Reach out to us with your questions
                </h2>

                <Link to="/contact">
                    <button className="bg-brut-orange text-black font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-8 py-3 md:py-4 border-4 border-black hover:bg-white transition-colors">
                        Contact us
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ContactSection;
