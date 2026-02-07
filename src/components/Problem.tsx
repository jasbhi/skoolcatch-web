const painPoints = [
  {
    emoji: '⚡',
    title: '99+ unread messages every morning',
    description: 'The school group never sleeps.',
  },
  {
    emoji: '🔍',
    title: 'Important updates scattered everywhere',
    description: 'That homework reminder? Buried under 20 other messages.',
  },
  {
    emoji: '😰',
    title: 'That sinking feeling: "Did I miss something?"',
    description: 'Even after scrolling, you\'re never sure.',
  },
  {
    emoji: '⏰',
    title: '15 minutes scrolling to find one message',
    description: 'Time you don\'t have in the morning rush.',
  },
];

export default function Problem() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* WhatsApp Mockup */}
          <div className="flex-1 flex justify-center mb-10 lg:mb-0">
            <div className="w-60 md:w-72">
              {/* Phone frame */}
              <div className="bg-dark-gray rounded-[2rem] p-2 shadow-xl">
                <div className="bg-[#075e54] rounded-t-[1.5rem] p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm">👨‍👩‍👧‍👦</span>
                    </div>
                    <div className="text-white">
                      <p className="font-semibold text-sm">Class 4B Parents</p>
                      <p className="text-xs opacity-80">47 participants</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#e5ddd5] p-3 space-y-2 rounded-b-[1.5rem]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4cfc4" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
                  {/* Notification badge */}
                  <div className="bg-red-500 text-white text-xs font-bold rounded-full w-12 h-6 flex items-center justify-center mx-auto mb-2">
                    99+
                  </div>
                  
                  {/* Messages */}
                  <div className="bg-white rounded-lg p-2 text-xs max-w-[85%]">
                    <p className="text-gray-500">6:02 AM</p>
                    <p>📢 Reminder: Fee payment last date 15th Feb</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-2 text-xs max-w-[85%]">
                    <p className="text-gray-500">6:15 AM</p>
                    <p>📎 Annual Day circular attached</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-2 text-xs max-w-[85%]">
                    <p className="text-gray-500">6:28 AM</p>
                    <p>Holiday on Monday for Republic Day</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-2 text-xs max-w-[85%]">
                    <p className="text-gray-500">6:45 AM</p>
                    <p className="font-medium">⚠️ Tomorrow bring chart paper and color pencils for project</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-2 text-xs max-w-[85%]">
                    <p className="text-gray-500">6:47 AM</p>
                    <p>PTM scheduled for Saturday 10am-1pm</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-2 text-xs max-w-[85%]">
                    <p className="text-gray-500">7:02 AM</p>
                    <p>📝 Math test on Chapter 5 next week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pain Points */}
          <div className="flex-1">
            <h2 className="text-h2-mobile md:text-h2-desktop text-center lg:text-left mb-8">
              Sound familiar?
            </h2>
            
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 border-l-4 border-error/70 shadow-sm"
                >
                  <div className="flex gap-3">
                    <span className="text-2xl">{point.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-dark-gray">{point.title}</h3>
                      <p className="text-sm text-medium-gray mt-1">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
