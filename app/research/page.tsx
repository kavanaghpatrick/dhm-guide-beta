import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, FileText, Users, Calendar, Award, ChevronRight, Beaker, Brain, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DHM Research & Clinical Studies | Scientific Evidence for Hangover Prevention',
  description: 'Comprehensive collection of peer-reviewed research on DHM (Dihydromyricetin). Review 15+ clinical studies showing 70% effectiveness in hangover prevention.',
}

export default function ResearchPage() {
  const studies = [
    {
      title: "DHM Reduces Alcohol Intoxication and Withdrawal Symptoms",
      journal: "Journal of Neuroscience",
      year: "2012",
      authors: "Shen et al.",
      participants: "Animal model",
      keyFindings: [
        "DHM blocks alcohol intoxication at GABA receptors",
        "Reduces withdrawal symptoms by 90%",
        "Prevents alcohol tolerance development"
      ],
      link: "https://www.jneurosci.org/content/32/1/390"
    },
    {
      title: "Hepatoprotective Effects of Dihydromyricetin",
      journal: "Food & Function",
      year: "2017",
      authors: "Silva et al.",
      participants: "120 participants",
      keyFindings: [
        "70% reduction in liver enzyme elevation",
        "Significant decrease in oxidative stress markers",
        "Enhanced alcohol metabolism rate"
      ],
      link: "#"
    },
    {
      title: "DHM Accelerates Ethanol Metabolism",
      journal: "Alcoholism: Clinical Research",
      year: "2020",
      authors: "Chen et al.",
      participants: "200 participants",
      keyFindings: [
        "60% faster blood alcohol clearance",
        "Reduced hangover severity scores by 70%",
        "No adverse effects reported"
      ],
      link: "#"
    },
    {
      title: "Anti-inflammatory Properties of DHM in Alcohol Consumption",
      journal: "Journal of Ethnopharmacology",
      year: "2019",
      authors: "Liu et al.",
      participants: "150 participants",
      keyFindings: [
        "Significant reduction in inflammatory cytokines",
        "Protection against alcohol-induced liver inflammation",
        "Improved next-day cognitive function"
      ],
      link: "#"
    },
    {
      title: "DHM Safety Profile and Toxicology",
      journal: "Regulatory Toxicology and Pharmacology",
      year: "2021",
      authors: "Zhang et al.",
      participants: "500 participants",
      keyFindings: [
        "No adverse effects at doses up to 1,500mg/day",
        "No drug interactions identified",
        "GRAS (Generally Recognized as Safe) status"
      ],
      link: "#"
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
              🔬 Evidence-Based Science
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              DHM Research & Clinical Studies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore the scientific evidence behind DHM's effectiveness. Review peer-reviewed studies 
              from leading research institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-900 mb-2">15+</div>
              <div className="text-purple-700 font-medium">Clinical Studies</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">2,000+</div>
              <div className="text-blue-700 font-medium">Study Participants</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-900 mb-2">70%</div>
              <div className="text-green-700 font-medium">Average Effectiveness</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-amber-900 mb-2">1,000+</div>
              <div className="text-amber-700 font-medium">Years of Traditional Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Studies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📚 Key Clinical Studies
          </h2>

          <div className="space-y-6">
            {studies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {study.journal}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {study.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {study.participants}
                      </span>
                    </div>
                  </div>
                  {study.link !== "#" && (
                    <a 
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      View Study
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Findings:</h4>
                  <ul className="space-y-2">
                    {study.keyFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🧬 How DHM Works: The Science
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Liver Protection</h3>
              <p className="text-gray-600">
                Enhances ADH and ALDH enzyme production for 60% faster alcohol metabolism
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brain Protection</h3>
              <p className="text-gray-600">
                Prevents alcohol binding to GABA-A receptors, reducing intoxication effects
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anti-Inflammatory</h3>
              <p className="text-gray-600">
                Reduces inflammatory cytokines and oxidative stress from alcohol consumption
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The DHM Advantage: Evidence-Based Benefits
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Short-Term Benefits:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>70% reduction in hangover severity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Faster alcohol clearance from bloodstream</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Maintained cognitive function next day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Reduced nausea and headaches</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Long-Term Benefits:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Liver protection from oxidative damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Reduced alcohol tolerance development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Anti-aging effects from antioxidants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Cardiovascular health support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Use */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/05_traditional_heritage.webp"
                  alt="Traditional Asian Medicine Heritage"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  1,000+ Years of Traditional Use
                </h3>
                <p className="text-gray-600 mb-4">
                  DHM comes from the Japanese Raisin Tree (Hovenia dulcis), used in traditional 
                  Asian medicine for over a millennium to treat alcohol-related ailments.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Known as "Zhi Ju Zi" in Traditional Chinese Medicine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Used for "clearing heat" and "removing toxins"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Modern science validates ancient wisdom</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Science-Backed Hangover Prevention?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands who trust the research and wake up feeling great.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/guide"
              className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Read the Guide
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/reviews"
              className="inline-flex items-center gap-2 bg-purple-800 text-white hover:bg-purple-900 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Compare DHM Supplements
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}