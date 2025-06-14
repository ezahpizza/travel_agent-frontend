
const TestimonialsSection = () => {
    const testimonials = [
            {
                name: 'Itineraries',
                bg: 'bg-brut-green',
                textColor: 'text-neon-cyan',
                text: 'Let AI plan your entire trip — from flights to daily activities — with personalized, optimized itineraries tailored to your travel goals.'
            },
            {
                name: 'Flights',
                bg: 'bg-brut-purple',
                textColor: 'text-black',
                text: 'Find the best flight options effortlessly with AI-powered search that understands your preferences and delivers real-time results using live data sources.'
            },
            {
                name: 'Research',
                bg: 'bg-brut-red',
                textColor: 'text-neon-green',
                text: 'Explore cities like a local — get curated insights on culture, weather, attractions, and more, intelligently compiled from across the web.'
            }
    ];

    return (
        <section className="p-6 md:p-8 mx-2 md:mx-4 font-syne">
            <div className="max-w-9xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {testimonials.map((testimonial, index) => (
                    <div
                    key={index}
                    className={`${testimonial.bg} ${testimonial.textColor} border-4 border-black p-8 md:p-12 text-left`}
                    >
                        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                            {testimonial.name}
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                            {testimonial.text}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
