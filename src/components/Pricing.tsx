import Link from 'next/link';

const singleChildFeatures = [
  'Daily morning briefings',
  'Smart task extraction',
  'Calendar & exam tracking',
  'Push notifications',
  'Offline access',
  '100% private',
];

const familyAdditionalFeatures = [
  'Up to 3 children',
  'Family calendar view',
  'Priority support',
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop">
            Less than ₹3/day.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Single Child Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-medium-gray uppercase tracking-wide">
                Single Child
              </h3>
              <div className="mt-4">
                <span className="text-5xl font-bold text-dark-gray">₹999</span>
                <span className="text-medium-gray">/year</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {singleChildFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark-gray">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="#download"
              className="btn-secondary w-full justify-center"
            >
              Start 14-Day Free Trial
            </Link>
          </div>
          
          {/* Family Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-calm-blue relative">
            {/* Best Value Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-morning-gold text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                ⭐ BEST VALUE
              </span>
            </div>
            
            <div className="text-center mb-6 mt-2">
              <h3 className="text-lg font-semibold text-calm-blue uppercase tracking-wide">
                Family Plan
              </h3>
              <div className="mt-4">
                <span className="text-5xl font-bold text-dark-gray">₹1999</span>
                <span className="text-medium-gray">/year</span>
              </div>
            </div>
            
            <p className="text-sm text-medium-gray mb-4 text-center">
              Everything in Single Child, plus:
            </p>
            
            <ul className="space-y-3 mb-8">
              {familyAdditionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark-gray font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="#download"
              className="btn-primary w-full justify-center"
            >
              Start 14-Day Free Trial
            </Link>
          </div>
        </div>
        
        {/* Trust Elements */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 text-sm text-medium-gray">
          <span className="flex items-center justify-center gap-2">
            <span>🔒</span>
            No credit card for trial
          </span>
          <span className="flex items-center justify-center gap-2">
            <span>💸</span>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
