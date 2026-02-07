import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
            <h1 className="text-h1-mobile md:text-h1-desktop text-dark-gray text-balance">
              School updates without the chaos.
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-medium-gray max-w-xl mx-auto lg:mx-0">
              One calm morning briefing. Everything you need to know about your child&apos;s school day. Nothing you don&apos;t.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#download"
                className="btn-primary w-full sm:w-auto text-base md:text-lg"
              >
                Start Free Trial →
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start text-sm text-medium-gray">
              <span className="flex items-center justify-center lg:justify-start gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center justify-center lg:justify-start gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Works with any WhatsApp group
              </span>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 md:w-72 lg:w-80 animate-float">
              {/* Phone frame */}
              <div className="relative bg-dark-gray rounded-[2.5rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                  {/* Status bar */}
                  <div className="bg-brand-navy text-white text-xs px-4 py-2 flex justify-between items-center">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3/4 h-full bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 bg-light-gray h-full">
                    <div className="text-center mb-4">
                      <span className="text-2xl">☀️</span>
                      <p className="text-sm font-semibold text-dark-gray mt-1">Good Morning, Priya!</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-xs font-semibold text-brand-navy mb-3">TODAY FOR ARJUN (Class 4B)</p>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex gap-2">
                          <span>📚</span>
                          <div>
                            <p className="font-medium text-dark-gray">Bring</p>
                            <p className="text-medium-gray text-xs">Chart paper, color pencils</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <span>📝</span>
                          <div>
                            <p className="font-medium text-dark-gray">Submit</p>
                            <p className="text-medium-gray text-xs">Math HW (pg 45)</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <span>🎨</span>
                          <div>
                            <p className="font-medium text-dark-gray">Special</p>
                            <p className="text-medium-gray text-xs">Art class today</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-center text-xs text-medium-gray mt-4">
                      ✨ That&apos;s it. Have a great day!
                    </p>
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
