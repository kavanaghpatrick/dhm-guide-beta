import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { CheckCircle, Clock, Shield, Zap, AlertCircle, ChevronRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ultimate DHM Hangover Prevention Guide | How to Never Wake Up Hungover',
  description: 'Complete guide to using DHM (Dihydromyricetin) for hangover prevention. Learn optimal dosing, timing, and scientifically-proven strategies to prevent hangovers before they start.',
}

export default function GuidePage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              🎯 Evidence-Based Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Ultimate DHM Hangover Prevention Guide
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how to use DHM effectively to prevent hangovers, based on 15+ clinical studies 
              and real-world evidence from thousands of users.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ⚡ Quick Start: Your 3-Step DHM Protocol
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Before Drinking</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Take 600-900mg of DHM 30 minutes before your first drink to prime your liver enzymes.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <Clock className="w-4 h-4 mr-1" />
                  30 min before
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">While Drinking</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Alternate with water and consider an additional 300mg after 3-4 drinks.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <Shield className="w-4 h-4 mr-1" />
                  Continuous protection
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Before Bed</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Take 600-900mg with a full glass of water before sleeping for overnight recovery.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <Zap className="w-4 h-4 mr-1" />
                  Wake up refreshed
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/reviews"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Find Your Perfect DHM Supplement
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Dosing Guide */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📊 Complete DHM Dosing Guide
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-600 to-green-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Drinking Level
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    DHM Dose
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Timing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <strong>Light</strong> (1-2 drinks)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    300-600mg
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Before drinking only
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <strong>Moderate</strong> (3-5 drinks)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    600-900mg
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Before + before bed
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <strong>Heavy</strong> (6+ drinks)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    900-1200mg
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Before + during + before bed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                Important Dosing Notes
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Start with lower doses to assess tolerance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Maximum daily dose: 1,500mg (clinical safety limit)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Take with food to improve absorption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Always hydrate between doses</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 text-green-600 mr-2" />
                Pro Tips for Maximum Effect
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Combine with B-complex vitamins for synergy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Eat protein-rich foods before drinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Keep electrolytes balanced with coconut water</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Set reminders for consistent dosing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🧬 The Science: How DHM Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <Image
                src="/dhm-liver-protection-mechanism.png"
                alt="DHM Liver Protection Mechanism"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm font-semibold text-gray-900">Liver Pathway Protection</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/dhm-gaba-protection.png"
                alt="DHM GABA Receptor Protection"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm font-semibold text-gray-900">Brain GABA Protection</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              DHM's Dual-Action Protection System
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  1. Liver Protection (Primary Action)
                </h4>
                <p className="text-gray-600 mb-3">
                  DHM enhances the production of alcohol dehydrogenase (ADH) and aldehyde dehydrogenase (ALDH), 
                  the two key enzymes responsible for breaking down alcohol. This results in:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li>• 60% faster clearance of toxic acetaldehyde</li>
                  <li>• Reduced liver inflammation and oxidative stress</li>
                  <li>• Protection against long-term liver damage</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  2. Brain Protection (Secondary Action)
                </h4>
                <p className="text-gray-600 mb-3">
                  DHM prevents alcohol from binding to GABA-A receptors in the brain, which:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li>• Reduces intoxication without affecting social enjoyment</li>
                  <li>• Prevents rebound anxiety (hangxiety)</li>
                  <li>• Maintains cognitive function and coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Never Wake Up Hungover Again?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands who've discovered the science-backed way to enjoy drinking without the consequences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reviews"
              className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Compare Top DHM Supplements
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/research"
              className="inline-flex items-center gap-2 bg-green-800 text-white hover:bg-green-900 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Read the Research
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}