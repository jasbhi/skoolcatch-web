const steps = [
  {
    number: 1,
    title: 'Export your WhatsApp chat',
    description: 'Tap ⋮ → More → Export chat',
    note: '(Takes 10 seconds)',
    visual: '📱💬→📄',
  },
  {
    number: 2,
    title: 'Import to SkoolCatch',
    description: 'Open SkoolCatch, tap Import, select the file.',
    note: null,
    visual: '📄→🎒',
  },
  {
    number: 3,
    title: 'Relax every morning',
    description: 'Your briefing is ready. Re-import anytime for updates.',
    note: null,
    visual: '☕✨',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop">
            3 steps. 2 minutes. Done forever.
          </h2>
        </div>
        
        <div className="relative">
          {/* Connecting line - visible on desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-gradient-to-r from-brand-navy via-calm-blue to-morning-gold"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Vertical connecting line - mobile only */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-gradient-to-b from-brand-navy to-calm-blue"></div>
                )}
                
                <div className="bg-light-gray rounded-2xl p-8 text-center relative">
                  {/* Step number */}
                  <div className="w-14 h-14 rounded-full bg-brand-navy text-white text-xl font-bold flex items-center justify-center mx-auto mb-6 relative z-10">
                    {step.number}
                  </div>
                  
                  {/* Visual */}
                  <div className="text-4xl mb-4">
                    {step.visual}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-h3-mobile md:text-h3-desktop text-dark-gray mb-3">
                    {step.title}
                  </h3>
                  <p className="text-medium-gray">
                    {step.description}
                  </p>
                  {step.note && (
                    <p className="text-sm text-calm-blue mt-2 font-medium">
                      {step.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
