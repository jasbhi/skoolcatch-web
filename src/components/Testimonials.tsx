const testimonials = [
  {
    quote: "Finally! I don't wake up anxious about missing something from the school group. This app is a lifesaver.",
    name: "Meera S.",
    role: "Mother of 2",
    location: "Mumbai",
  },
  {
    quote: "My wife and I both get the same briefing. No more 'I thought you saw that message' arguments.",
    name: "Rajesh K.",
    role: "Father of 1",
    location: "Bangalore",
  },
  {
    quote: "It's embarrassingly simple. Export, import, done. I recommend it to every parent I meet.",
    name: "Aisha T.",
    role: "Mother of 3",
    location: "Delhi",
  },
];

const stats = [
  { emoji: '📊', value: '10,000+', label: 'parents using SkoolCatch' },
  { emoji: '⭐', value: '4.8/5', label: 'average rating' },
  { emoji: '🏫', value: '500+', label: 'schools work with' },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop">
            Parents are breathing easier.
          </h2>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-light-gray rounded-2xl p-6 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-4 left-4 text-4xl text-brand-navy/10 font-serif">
                &ldquo;
              </span>
              
              <p className="text-dark-gray italic mb-6 pt-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-dark-gray">{testimonial.name}</p>
                  <p className="text-sm text-medium-gray">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
                <div className="flex text-morning-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Bar */}
        <div className="bg-brand-navy rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-2xl mb-2">{stat.emoji}</span>
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
