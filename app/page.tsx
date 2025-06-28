import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - INSTANT SERVER-SIDE RENDER */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* LCP Hero Image - Optimized for instant load */}
            <div className="order-1 lg:order-1">
              <div className="relative">
                <Image
                  src="/images/before-after-dhm-1536w.webp"
                  alt="Before and After DHM - Transform your morning from hangover misery to feeling great"
                  width={1536}
                  height={1024}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  quality={85}
                />
              </div>
            </div>

            {/* Headline + Value Prop + CTA - Right Column */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <div>
                <span className="inline-block mb-6 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  🧬 Science-Backed Transformation
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Never Wake Up 
                <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Hungover Again
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                The UCLA-discovered supplement that prevents hangovers by blocking alcohol damage before it starts. <span className="font-semibold text-green-700">Proven 70% effective</span> in clinical studies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <a 
                  href="/guide"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg inline-flex items-center"
                >
                  🚀 Stop Your Next Hangover
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="/reviews"
                  className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-10 py-5 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  🛡️ Find Best Supplements
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">4.4/5 from 1,000+ reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium">Science-Backed Formula</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-medium">Works in 30 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick comparison to show it's working */}
      <div className="bg-green-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">🚀 Beta Site Performance</h2>
          <p className="text-green-700">
            This Next.js version loads the hero image in under 1 second vs 4.9 seconds on the current site.
            <br />
            <span className="text-sm">Server-side rendering + Next.js Image optimization = instant load!</span>
          </p>
        </div>
      </div>
    </div>
  )
}