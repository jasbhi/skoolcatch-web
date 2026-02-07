const features = [
  {
    emoji: '🎯',
    title: 'Smart Extraction',
    description: 'Automatically finds homework, events, deadlines — filters out the noise.',
  },
  {
    emoji: '📅',
    title: 'Calendar Sync',
    description: 'Exams, PTMs, holidays — all in one place. Never miss a date again.',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Multi-Child Support',
    description: 'Got 2 kids? 3? One briefing per child. Switch with a tap.',
  },
  {
    emoji: '🤝',
    title: 'One Parent, All Benefit',
    description: 'When one parent imports, everyone in the class gets the updates. Teamwork!',
  },
  {
    emoji: '🔔',
    title: 'Smart Notifications',
    description: 'Urgent updates pushed immediately. Routine stuff waits for your briefing.',
  },
  {
    emoji: '✈️',
    title: 'Works Offline',
    description: 'No internet? No problem. Your briefing is always there.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-light-gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop">
            Everything extracted. Nothing missed.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.emoji}</span>
              </div>
              <h3 className="text-h3-mobile md:text-h3-desktop text-dark-gray mb-2">
                {feature.title}
              </h3>
              <p className="text-medium-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
