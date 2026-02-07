import Link from 'next/link';

export default function Solution() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 mt-10 lg:mt-0">
            <h2 className="text-h2-mobile md:text-h2-desktop text-balance">
              One glance. Every morning.
              <br className="hidden md:block" />
              Everything you need.
            </h2>
            
            <p className="mt-6 text-lg text-medium-gray max-w-xl mx-auto lg:mx-0">
              SkoolCatch reads your WhatsApp export and extracts what matters. Homework, events, deadlines — neatly organized. No more scrolling.
            </p>
            
            <Link 
              href="#how-it-works"
              className="btn-secondary mt-8 inline-flex"
            >
              See It In Action →
            </Link>
          </div>
          
          {/* App Mockup */}
          <div className="flex-1 flex justify-center order-1 lg:order-2">
            <div className="w-64 md:w-72 lg:w-80">
              {/* Phone frame */}
              <div className="bg-dark-gray rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                  {/* App header */}
                  <div className="bg-gradient-to-r from-brand-navy to-calm-blue text-white p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🎒</span>
                        <span className="font-semibold text-sm">SkoolCatch</span>
                      </div>
                      <span className="text-xs opacity-80">Feb 7</span>
                    </div>
                  </div>
                  
                  {/* Greeting */}
                  <div className="bg-light-gray p-4 h-full">
                    <div className="text-center mb-4">
                      <span className="text-3xl">☀️</span>
                      <h3 className="text-lg font-semibold text-dark-gray mt-1">Good Morning, Priya!</h3>
                    </div>
                    
                    {/* Briefing Card */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-brand-navy uppercase tracking-wide">
                          Today for Arjun
                        </span>
                        <span className="text-[10px] bg-calm-blue/10 text-calm-blue px-2 py-0.5 rounded-full font-medium">
                          Class 4B
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex gap-2 items-start">
                          <div className="w-7 h-7 rounded-full bg-brand-navy/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm">📚</span>
                          </div>
                          <div>
                            <p className="font-semibold text-dark-gray text-sm">Bring</p>
                            <p className="text-xs text-medium-gray">Chart paper, color pencils</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 items-start">
                          <div className="w-7 h-7 rounded-full bg-morning-gold/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm">📝</span>
                          </div>
                          <div>
                            <p className="font-semibold text-dark-gray text-sm">Submit</p>
                            <p className="text-xs text-medium-gray">Math HW (pg 45-47)</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 items-start">
                          <div className="w-7 h-7 rounded-full bg-calm-blue/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm">🎨</span>
                          </div>
                          <div>
                            <p className="font-semibold text-dark-gray text-sm">Special</p>
                            <p className="text-xs text-medium-gray">Art class today!</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                        <p className="text-xs text-medium-gray">
                          ✨ That&apos;s it. Have a great day!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
