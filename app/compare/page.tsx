import { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, ChevronRight, Shield, Award, TrendingUp, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compare DHM Supplements | Side-by-Side Comparison Chart',
  description: 'Compare top DHM hangover prevention supplements side-by-side. Compare ingredients, dosages, prices, and effectiveness to find the best DHM supplement for you.',
}

export default function ComparePage() {
  const products = [
    {
      name: "No Days Wasted DHM",
      rating: 4.8,
      price: "$35",
      dhmContent: "300mg",
      servingSize: "2 capsules",
      additionalIngredients: ["Milk Thistle", "B Vitamins", "Electrolytes", "L-Cysteine"],
      effectiveness: 95,
      value: 90,
      purity: 98,
      thirdPartyTested: true,
      veganFriendly: true,
      madeinUSA: true,
      moneyBackGuarantee: "30 days",
      link: "https://amzn.to/3PsHT4Q"
    },
    {
      name: "Cheers Restore",
      rating: 4.6,
      price: "$35",
      dhmContent: "Proprietary Blend",
      servingSize: "2-4 capsules",
      additionalIngredients: ["L-Cysteine", "B Vitamins", "Vine Tea Extract"],
      effectiveness: 85,
      value: 80,
      purity: 85,
      thirdPartyTested: false,
      veganFriendly: true,
      madeinUSA: true,
      moneyBackGuarantee: "30 days",
      link: "https://amzn.to/3T8cO8H"
    },
    {
      name: "Purple Tree",
      rating: 4.5,
      price: "$30",
      dhmContent: "300mg",
      servingSize: "2 capsules",
      additionalIngredients: ["Milk Thistle", "NAC", "Vitamins"],
      effectiveness: 85,
      value: 85,
      purity: 90,
      thirdPartyTested: true,
      veganFriendly: true,
      madeinUSA: true,
      moneyBackGuarantee: "60 days",
      link: "#"
    },
    {
      name: "DHM Depot",
      rating: 4.4,
      price: "$25",
      dhmContent: "300mg",
      servingSize: "1 capsule",
      additionalIngredients: ["None - Pure DHM"],
      effectiveness: 80,
      value: 95,
      purity: 100,
      thirdPartyTested: true,
      veganFriendly: true,
      madeinUSA: true,
      moneyBackGuarantee: "30 days",
      link: "#"
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              📊 Side-by-Side Analysis
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compare Top DHM Supplements
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              See how the leading DHM supplements stack up against each other. 
              Compare ingredients, effectiveness, and value to make the right choice.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table - Desktop */}
      <section className="py-16 px-4 bg-white hidden lg:block">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider sticky left-0 bg-blue-600 z-10">
                      Feature
                    </th>
                    {products.map(product => (
                      <th key={product.name} className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider min-w-[200px]">
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Rating Row */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                      Rating
                    </td>
                    {products.map(product => (
                      <td key={product.name} className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="font-bold text-gray-900">{product.rating}</span>
                          <span className="text-gray-500">/5</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Price Row */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-white z-10">
                      Price
                    </td>
                    {products.map(product => (
                      <td key={product.name} className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-green-600">{product.price}</span>
                        <span className="text-gray-500 text-sm block">per bottle</span>
                      </td>
                    ))}
                  </tr>

                  {/* DHM Content Row */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                      DHM Content
                    </td>
                    {products.map(product => (
                      <td key={product.name} className="px-6 py-4 text-center">
                        <span className="font-bold text-gray-900">{product.dhmContent}</span>
                        <span className="text-gray-500 text-sm block">per serving</span>
                      </td>
                    ))}
                  </tr>

                  {/* Additional Ingredients Row */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-white z-10">
                      Additional Ingredients
                    </td>
                    {products.map(product => (
                      <td key={product.name} className="px-6 py-4">
                        <ul className="text-sm text-gray-600 space-y-1">
                          {product.additionalIngredients.map((ing, idx) => (
                            <li key={idx} className="flex items-center justify-center">
                              <Check className="w-4 h-4 text-green-500 mr-1" />
                              {ing}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Third Party Tested Row */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                      Third Party Tested
                    </td>
                    {products.map(product => (
                      <td key={product.name} className="px-6 py-4 text-center">
                        {product.thirdPartyTested ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Vegan Friendly Row */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-white z-10">
                      Vegan Friendly
                    </td>
                    {products.map(product => (
                      <td key={product.name} className="px-6 py-4 text-center">
                        {product.veganFriendly ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Money Back Guarantee Row */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                      Money Back Guarantee
                    </td>
                    {products.map(product => (
                      <td key={product.name} className="px-6 py-4 text-center">
                        <span className="font-semibold text-gray-900">{product.moneyBackGuarantee}</span>
                      </td>
                    ))}
                  </tr>

                  {/* CTA Row */}
                  <tr className="bg-gradient-to-r from-green-50 to-blue-50">
                    <td className="px-6 py-6 text-sm font-semibold text-gray-900 sticky left-0 bg-green-50 z-10">
                      Get Best Price
                    </td>
                    {products.map(product => (
                      <td key={product.name} className="px-6 py-6 text-center">
                        <a 
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          Check Price
                          <TrendingUp className="w-4 h-4" />
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Comparison Cards */}
      <section className="py-16 px-4 bg-white lg:hidden">
        <div className="container mx-auto max-w-lg">
          <div className="space-y-6">
            {products.map(product => (
              <div key={product.name} className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-bold">{product.rating}/5</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price</span>
                    <span className="text-xl font-bold text-green-600">{product.price}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">DHM Content</span>
                    <span className="font-bold">{product.dhmContent}</span>
                  </div>

                  <div className="pt-2">
                    <span className="text-gray-600 text-sm">Key Features:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.thirdPartyTested && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                          ✓ Lab Tested
                        </span>
                      )}
                      {product.veganFriendly && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                          ✓ Vegan
                        </span>
                      )}
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {product.moneyBackGuarantee} Guarantee
                      </span>
                    </div>
                  </div>

                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                  >
                    Check Price →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Effectiveness Scores */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📈 Effectiveness Scores
          </h2>

          <div className="space-y-6">
            {products.map(product => (
              <div key={product.name} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{product.name}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Effectiveness</span>
                      <span className="text-sm font-semibold">{product.effectiveness}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${product.effectiveness}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Value for Money</span>
                      <span className="text-sm font-semibold">{product.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${product.value}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Purity & Quality</span>
                      <span className="text-sm font-semibold">{product.purity}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${product.purity}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/reviews"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Read Detailed Reviews
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}