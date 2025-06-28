import { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Target, Award, Users, Mail, ExternalLink, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About DHM Guide | Our Mission to End Hangovers',
  description: 'Learn about DHM Guide\'s mission to provide science-backed hangover prevention information. We review, research, and educate about DHM supplements.',
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              🌟 Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About DHM Guide
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to help people enjoy life without the consequences of hangovers, 
              backed by science and real-world evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission: Science-Based Hangover Prevention
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                DHM Guide was founded in 2023 with a simple goal: to provide honest, science-backed 
                information about DHM supplements and hangover prevention.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe everyone should be able to enjoy social occasions without sacrificing 
                their next day's productivity or well-being.
              </p>
              <p className="text-lg text-gray-600">
                Through rigorous research, independent testing, and real user feedback, we help 
                you make informed decisions about DHM supplementation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-gray-600">Studies Reviewed</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-gray-600">Products Tested</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">1,000+</div>
                <div className="text-gray-600">Readers Helped</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center">
                <Heart className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-gray-600">Independent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scientific Integrity</h3>
              <p className="text-gray-600">
                Every recommendation is backed by peer-reviewed research and clinical studies. 
                We never compromise on scientific accuracy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User-First Approach</h3>
              <p className="text-gray-600">
                Your health and well-being come first. We provide honest reviews and never 
                recommend products we wouldn't use ourselves.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Transparency</h3>
              <p className="text-gray-600">
                We disclose all affiliate relationships and testing methodologies. Our reviews 
                are independent and unbiased.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What We Do
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research & Review</h3>
                <p className="text-gray-600">
                  We analyze clinical studies, test products, and gather real user experiences to 
                  provide comprehensive DHM supplement reviews.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Educate & Inform</h3>
                <p className="text-gray-600">
                  Through detailed guides and articles, we help you understand how DHM works, 
                  optimal dosing strategies, and safety considerations.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compare & Recommend</h3>
                <p className="text-gray-600">
                  We provide side-by-side comparisons and personalized recommendations to help 
                  you find the right DHM supplement for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Important Disclaimer
            </h2>
            <p className="text-gray-600 mb-4">
              The information on DHM Guide is for educational purposes only and is not intended 
              as medical advice. Always consult with a healthcare professional before starting 
              any new supplement regimen.
            </p>
            <p className="text-gray-600 mb-4">
              While we strive for accuracy, individual results may vary. DHM supplements are 
              not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="text-gray-600">
              DHM Guide participates in affiliate programs and may earn commissions from 
              qualifying purchases. This does not affect our editorial independence or 
              product recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Have Questions? We're Here to Help
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you need personalized recommendations or have questions about DHM, 
            we're always happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@dhmguide.com"
              className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <Link 
              href="/never-hungover"
              className="inline-flex items-center gap-2 bg-green-800 text-white hover:bg-green-900 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Read Our Blog
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}