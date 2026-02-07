import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="download" className="section-padding gradient-hero">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h2-mobile md:text-h2-desktop text-white text-balance">
            Stop scrolling. Start relaxing.
          </h2>
          
          <p className="mt-6 text-lg text-white/80">
            Your mornings deserve better than 99+ unread messages. Try SkoolCatch free for 14 days.
          </p>
          
          <Link 
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 mt-8
                       bg-morning-gold text-dark-gray font-bold 
                       rounded-lg transition-all duration-200
                       hover:brightness-110 hover:scale-[1.02]
                       focus:outline-none focus:ring-2 focus:ring-morning-gold focus:ring-offset-2 focus:ring-offset-brand-navy
                       text-lg"
          >
            Download SkoolCatch Free →
          </Link>
          
          {/* Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 
                         text-white px-6 py-3 rounded-xl transition-colors"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-70">Download on the</p>
                <p className="font-semibold">App Store</p>
              </div>
            </Link>
            
            <Link 
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 
                         text-white px-6 py-3 rounded-xl transition-colors"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-70">Get it on</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-white/60">
            Available on iOS and Android
          </p>
        </div>
      </div>
    </section>
  );
}
