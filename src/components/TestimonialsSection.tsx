
const TestimonialsSection = () => {
  const testimonials = [
    {
      bg: 'bg-brutalist-green',
      textColor: 'text-black'
    },
    {
      bg: 'bg-brutalist-purple',
      textColor: 'text-white'
    },
    {
      bg: 'bg-brutalist-red',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="bg-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bg} ${testimonial.textColor} border-4 border-black p-8 md:p-10 text-left`}
            >
              <h3 className="font-syne font-bold text-xl md:text-2xl mb-6">
                user review:
              </h3>
              <p className="font-syne text-lg md:text-xl leading-relaxed">
                blah blah blah<br />
                blah blah blah
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
