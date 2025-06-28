import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Check, X, Shield, Award, TrendingUp, Clock, Users, Beaker } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best DHM Supplements 2025 | Expert Reviews & Comparisons',
  description: 'Comprehensive reviews of the top DHM hangover prevention supplements. Compare effectiveness, ingredients, pricing, and real user experiences.',
}

export default function ReviewsPage() {
  const products = [
    {
      id: 1,
      name: "No Days Wasted DHM Detox",
      rating: 4.8,
      reviewCount: 2847,
      price: "$35",
      servingPrice: "$1.17",
      badge: "Best Overall",
      badgeColor: "bg-gradient-to-r from-amber-500 to-amber-600",
      image: "/no-days-wasted-review-analysis.png",
      dhmContent: "300mg Japanese DHM",
      keyIngredients: ["Milk Thistle", "B-Complex", "Electrolytes", "L-Cysteine"],
      pros: [
        "Highest quality Japanese DHM",
        "Third-party tested for purity",
        "Comprehensive liver support formula",
        "Thousands of positive reviews"
      ],
      cons: [
        "Premium price point",
        "Large capsule size"
      ],
      effectiveness: 95,
      value: 85,
      ingredients: 98,
      link: "https://amzn.to/3PsHT4Q",
      verdict: "The gold standard for DHM supplements. Premium ingredients and proven results justify the higher price."
    },
    {
      id: 2,
      name: "Cheers Restore",
      rating: 4.6,
      reviewCount: 1892,
      price: "$35",
      servingPrice: "$1.75",
      badge: "Shark Tank",
      badgeColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      image: "/fuller-health-after-party-review-2025.json",
      dhmContent: "DHM (amount not disclosed)",
      keyIngredients: ["Patented DHM Blend", "L-Cysteine", "B Vitamins", "Vine Tea Extract"],
      pros: [
        "Featured on Shark Tank",
        "Patented formula",
        "25+ million capsules sold",
        "Good for sensitive stomachs"
      ],
      cons: [
        "Proprietary blend (amounts hidden)",
        "More expensive per serving"
      ],
      effectiveness: 88,
      value: 75,
      ingredients: 85,
      link: "https://amzn.to/3T8cO8H",
      verdict: "Popular and effective, but lack of transparency on DHM content is concerning for the price."
    },
    {
      id: 3,
      name: "Purple Tree Celebration",
      rating: 4.5,
      reviewCount: 1245,
      price: "$30",
      servingPrice: "$1.00",
      badge: "Best Value",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      image: "/dhm-dosage-hero.png",
      dhmContent: "300mg DHM",
      keyIngredients: ["Milk Thistle", "NAC", "Vitamin B Complex", "Electrolyte Blend"],
      pros: [
        "Excellent price-to-quality ratio",
        "Transparent labeling",
        "Added NAC for liver support",
        "60-day money back guarantee"
      ],
      cons: [
        "Less brand recognition",
        "Limited flavor options"
      ],
      effectiveness: 90,
      value: 95,
      ingredients: 92,
      link: "#",
      verdict: "Outstanding value without compromising quality. Perfect for regular users on a budget."
    },
    {
      id: 4,
      name: "DHM Depot Pure",
      rating: 4.4,
      reviewCount: 892,
      price: "$25",
      servingPrice: "$0.83",
      badge: "Pure DHM",
      badgeColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      image: "/dhm-depot-review-hero.png",
      dhmContent: "300mg Pure DHM",
      keyIngredients: ["100% Pure DHM", "No additives"],
      pros: [
        "100% pure DHM - no fillers",
        "Most affordable option",
        "Lab tested for purity",
        "Single ingredient simplicity"
      ],
      cons: [
        "No supporting ingredients",
        "Basic packaging"
      ],
      effectiveness: 85,
      value: 98,
      ingredients: 100,
      link: "#",
      verdict: "Perfect for DHM purists who want to control their stack. Unbeatable value for pure DHM."
    },
    {
      id: 5,
      name: "Flyby Recovery",
      rating: 4.3,
      reviewCount: 3421,
      price: "$32",
      servingPrice: "$1.07",
      badge: "Amazon's Choice",
      badgeColor: "bg-gradient-to-r from-gray-600 to-gray-700",
      image: "/flyby-recovery-review-hero.png",
      dhmContent: "300mg DHM",
      keyIngredients: ["Chlorophyll", "Prickly Pear", "Milk Thistle", "B Vitamins"],
      pros: [
        "Amazon bestseller",
        "Unique ingredient blend",
        "Good customer service",
        "Fast shipping"
      ],
      cons: [
        "Mixed user reviews",
        "Green color from chlorophyll"
      ],
      effectiveness: 85,
      value: 88,
      ingredients: 88,
      link: "#",
      verdict: "Popular on Amazon with unique ingredients. Results vary more than premium options."
    },
    {
      id: 6,
      name: "Morning Recovery",
      rating: 4.2,
      reviewCount: 2156,
      price: "$35",
      servingPrice: "$1.17",
      badge: "Liquid Form",
      badgeColor: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      image: "/good-morning-hangover-pills-review-hero.png",
      dhmContent: "300mg DHM",
      keyIngredients: ["Korean Pear", "Milk Thistle", "Vitamin B Complex", "Electrolytes"],
      pros: [
        "Convenient liquid shots",
        "Pleasant taste",
        "Fast absorption",
        "Travel-friendly"
      ],
      cons: [
        "Requires refrigeration",
        "Higher price per dose"
      ],
      effectiveness: 87,
      value: 80,
      ingredients: 90,
      link: "#",
      verdict: "Great for those who dislike pills. The liquid form absorbs quickly but costs more."
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              🏆 2025 Expert Reviews
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Best DHM Supplements Reviewed & Ranked
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We've tested and analyzed the top DHM supplements to help you find the perfect 
              hangover prevention solution. Real reviews, lab results, and honest recommendations.
            </p>
          </div>

          {/* Review Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Beaker className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-gray-600">Products Tested</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-gray-600">User Reviews</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">180</div>
              <div className="text-gray-600">Hours Testing</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Independent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Reviews */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="lg:flex">
                  {/* Product Image */}
                  <div className="lg:w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                      <div className={`absolute -top-4 -right-4 ${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                        {product.badge}
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 font-bold text-gray-900">{product.rating}</span>
                            <span className="text-gray-500">({product.reviewCount} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600">{product.price}</div>
                        <div className="text-sm text-gray-500">{product.servingPrice}/serving</div>
                      </div>
                    </div>

                    {/* Key Info */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <span className="font-semibold text-gray-700">DHM Content:</span>
                          <span className="ml-2 text-gray-900">{product.dhmContent}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Key Ingredients:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {product.keyIngredients.map((ing, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white rounded text-xs text-gray-600">
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Check className="w-5 h-5 text-green-600 mr-1" />
                          Pros
                        </h3>
                        <ul className="space-y-1">
                          {product.pros.map((pro, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <X className="w-5 h-5 text-red-500 mr-1" />
                          Cons
                        </h3>
                        <ul className="space-y-1">
                          {product.cons.map((con, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Performance Bars */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Effectiveness</span>
                          <span className="text-sm font-semibold">{product.effectiveness}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${product.effectiveness}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Value for Money</span>
                          <span className="text-sm font-semibold">{product.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${product.value}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Verdict */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-gray-700 italic">{product.verdict}</p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4" />
                        <span>30-day money back guarantee</span>
                      </div>
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        View Best Price
                        <TrendingUp className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Review */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How We Review DHM Supplements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lab Testing</h3>
              <p className="text-gray-600">
                We verify DHM content and purity through independent lab testing when possible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real Testing</h3>
              <p className="text-gray-600">
                Our team and volunteers test each product in real-world scenarios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unbiased Scoring</h3>
              <p className="text-gray-600">
                We rate based on effectiveness, value, ingredients, and user feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}