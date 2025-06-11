
const TestimonialsSection = () => {
    const testimonials = [
            {
                name: 'John Doe',
                bg: 'bg-brutalist-green',
                textColor: 'text-black',
                text: 'This is a fantastic product. Really impressed with the design and usability.'
            },
            {
                name: 'Jane Smith',
                bg: 'bg-brutalist-purple',
                textColor: 'text-white',
                text: 'Amazing experience! Support was super helpful and the results are great.'
            },
            {
                name: 'Alice Johnson',
                bg: 'bg-brutalist-red',
                textColor: 'text-black',
                text: 'High quality and very reliable. I would recommend it to anyone looking for a robust solution.'
            }
    ];

    return (
        <section className="p-6 md:p-8 mx-2 md:mx-4">
            <div className="max-w-9xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {testimonials.map((testimonial, index) => (
                    <div
                    key={index}
                    className={`${testimonial.bg} ${testimonial.textColor} border-4 border-black p-8 md:p-12 text-left`}
                    >
                        <h3 className="font-syne font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                            {testimonial.name}
                        </h3>
                        <p className="font-syne text-lg md:text-xl lg:text-2xl leading-relaxed">
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
