'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ComparisonWidget from '@/components/ComparisonWidget'
import { 
  Star, 
  CheckCircle, 
  Award, 
  DollarSign, 
  Shield, 
  Zap,
  ArrowRight,
  Filter,
  TrendingUp,
  Users,
  ThumbsUp,
  ExternalLink,
  Plus,
  Check,
  X
} from 'lucide-react'

export default function Reviews() {
  const router = useRouter()
  const [sortBy, setSortBy] = useState('rating')
  const [filterBy, setFilterBy] = useState('all')
  const [selectedForComparison, setSelectedForComparison] = useState<any[]>([])

  const handleComparisonToggle = (product: any) => {
    setSelectedForComparison(prev => {
      const isSelected = prev.find(p => p.id === product.id)
      if (isSelected) {
        return prev.filter(p => p.id !== product.id)
      } else if (prev.length < 4) { // Limit to 4 products
        return [...prev, product]
      }
      return prev
    })
  }

  const handleRemoveFromComparison = (productId: number) => {
    setSelectedForComparison(prev => prev.filter(p => p.id !== productId))
  }

  const handleClearComparison = () => {
    setSelectedForComparison([])
  }

  const handleCompare = () => {
    // Navigate to compare page with selected products
    const productIds = selectedForComparison.map(p => p.id).join(',')
    router.push(`/compare?products=${productIds}`)
  }

  const topProducts = [
    {
      id: 1,
      name: "No Days Wasted DHM Detox",
      brand: "No Days Wasted",
      rating: 4.3,
      reviews: 201,
      price: "$26.99",
      pricePerServing: "$1.80",
      servings: 15,
      dhm: "1000mg",
      purity: "98%+",
      badge: "Editor's Choice",
      badgeColor: "bg-yellow-500",
      score: 9.5,
      affiliateLink: "https://amzn.to/3HSHjgu",
      pros: [
        "1K+ bought this month - join 350,000+ satisfied customers",
        "Science-backed formula with 1000mg DHM + 200mg L-Cysteine per serving",
        "Plant-powered with essential electrolytes and B-vitamins",
        "Convenient 15-serving jar - perfect for nights out",
        "Research from Journal of Neuroscience on Japanese Raisin Tree Extract",
        "GMP certified manufacturing"
      ],
      cons: [
        "Higher price point",
        "Only 15 servings per package"
      ],
      bestFor: "Users seeking maximum effectiveness and willing to pay premium prices for quality",
      ingredients: ["DHM 1000mg", "L-Cysteine 200mg", "Milk Thistle", "Prickly Pear", "B-Complex", "Electrolytes"],
      category: "premium"
    },
    {
      id: 2,
      name: "Double Wood Supplements DHM",
      brand: "Double Wood",
      rating: 4.4,
      reviews: 552,
      price: "$19.75",
      pricePerServing: "$0.66",
      servings: 30,
      dhm: "1000mg",
      purity: "98%",
      badge: "Best Value",
      badgeColor: "bg-green-500",
      score: 9.2,
      affiliateLink: "https://amzn.to/44sczuq",
      pros: [
        "Amazon's Choice with 2K+ monthly buyers",
        "1000mg pure DHM per serving",
        "Great value at under $20 per bottle",
        "30-day supply per bottle",
        "Third-party tested for purity",
        "Fast Amazon Prime shipping"
      ],
      cons: [
        "Basic formula without additional ingredients",
        "Some users report capsule size is large"
      ],
      bestFor: "Budget-conscious users who want pure DHM without extras",
      ingredients: ["DHM 1000mg", "Vegetable Cellulose (capsule)"],
      category: "value"
    },
    {
      id: 3,
      name: "Cheers Restore",
      brand: "Cheers",
      rating: 3.9,
      reviews: 467,
      price: "$34.99",
      pricePerServing: "$1.75",
      servings: 20,
      dhm: "Most DHM per dose",
      purity: "Not specified",
      badge: "Shark Tank",
      badgeColor: "bg-blue-500",
      score: 8.5,
      affiliateLink: "https://amzn.to/3T8cO8H",
      pros: [
        "Featured on Shark Tank",
        "25+ million doses sold",
        "Patented Restore Blend formula",
        "Money-back guarantee",
        "Created by Princeton scientists",
        "Includes multiple liver support ingredients"
      ],
      cons: [
        "More expensive than competitors",
        "Proprietary blend (exact DHM amount not disclosed)"
      ],
      bestFor: "Those who trust Shark Tank products and want a comprehensive formula",
      ingredients: ["Proprietary Restore Blend", "DHM", "L-Cysteine", "Milk Thistle", "B-Vitamins"],
      category: "premium"
    },
    {
      id: 4,
      name: "Nutricost DHM",
      brand: "Nutricost",
      rating: 4.2,
      reviews: 189,
      price: "$16.95",
      pricePerServing: "$0.57",
      servings: 30,
      dhm: "500mg",
      purity: "98%",
      badge: "Budget Pick",
      badgeColor: "bg-purple-500",
      score: 8.0,
      affiliateLink: "https://amzn.to/48Y7Jxx",
      pros: [
        "Most affordable option",
        "Clean label with minimal fillers",
        "GMP certified facility",
        "30-day supply",
        "Non-GMO and gluten-free",
        "Good for DHM beginners"
      ],
      cons: [
        "Lower DHM dose (500mg)",
        "No additional support ingredients"
      ],
      bestFor: "First-time DHM users or those on a tight budget",
      ingredients: ["DHM 500mg", "Rice Flour", "Vegetable Capsule"],
      category: "budget"
    },
    {
      id: 5,
      name: "Life Extension Anti-Alcohol",
      brand: "Life Extension",
      rating: 4.0,
      reviews: 312,
      price: "$22.50",
      pricePerServing: "$0.75",
      servings: 30,
      dhm: "600mg",
      purity: "Standardized",
      badge: "Trusted Brand",
      badgeColor: "bg-indigo-500",
      score: 8.3,
      affiliateLink: "https://amzn.to/3CKMM9e",
      pros: [
        "From established supplement company",
        "Enhanced with additional antioxidants",
        "Rigorous quality testing",
        "Good middle-ground option",
        "Vegetarian capsules",
        "Includes Vitamin C and Thiamine"
      ],
      cons: [
        "Mid-range DHM content",
        "Some find it less effective than higher doses"
      ],
      bestFor: "Those who prefer established supplement brands with quality guarantees",
      ingredients: ["DHM 600mg", "Vitamin C", "Thiamine", "Milk Thistle Extract"],
      category: "trusted"
    },
    {
      id: 6,
      name: "BAJA Bobs DHM",
      brand: "BAJA Bobs",
      rating: 4.1,
      reviews: 156,
      price: "$21.99",
      pricePerServing: "$0.73",
      servings: 30,
      dhm: "800mg",
      purity: "95%+",
      badge: "New Favorite",
      badgeColor: "bg-pink-500",
      score: 8.7,
      affiliateLink: "https://amzn.to/48mHQ6K",
      pros: [
        "Growing popularity on social media",
        "Good DHM dose at 800mg",
        "Fun branding appeals to younger users",
        "Includes electrolyte blend",
        "Vegan-friendly formula",
        "60-day satisfaction guarantee"
      ],
      cons: [
        "Newer brand with less track record",
        "Limited availability outside Amazon"
      ],
      bestFor: "Social drinkers who want effective DHM with modern branding",
      ingredients: ["DHM 800mg", "Electrolyte Blend", "B-Complex", "Natural Flavoring"],
      category: "trending"
    }
  ]

  // Filter and sort products
  const filteredProducts = topProducts.filter(product => {
    if (filterBy === 'all') return true
    return product.category === filterBy
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
      case 'value':
        return parseFloat(a.pricePerServing.replace('$', '')) - parseFloat(b.pricePerServing.replace('$', ''))
      default:
        return 0
    }
  })

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-8 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
                <Award className="w-4 h-4 mr-2" />
                Expert Reviews 2025
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Best DHM Supplements
                <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Reviewed & Ranked
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                We've tested 23 DHM supplements to find the ones that actually work. 
                Compare ingredients, prices, and real user experiences.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">23</div>
                    <div className="text-sm text-gray-600">Products Tested</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">2,481</div>
                    <div className="text-sm text-gray-600">User Reviews</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">70%</div>
                    <div className="text-sm text-gray-600">Avg. Effectiveness</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Independent</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Sorting */}
        <section className="py-8 px-4 bg-white border-y">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <div className="flex gap-2">
                  <Button
                    variant={filterBy === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterBy('all')}
                  >
                    All Products
                  </Button>
                  <Button
                    variant={filterBy === 'premium' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterBy('premium')}
                  >
                    Premium
                  </Button>
                  <Button
                    variant={filterBy === 'value' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterBy('value')}
                  >
                    Best Value
                  </Button>
                  <Button
                    variant={filterBy === 'budget' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterBy('budget')}
                  >
                    Budget
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="value">Best Value</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Product Reviews */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              {sortedProducts.map((product, index) => {
                const isSelected = selectedForComparison.find(p => p.id === product.id)
                
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="grid md:grid-cols-3 gap-0">
                        {/* Product Info */}
                        <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <Badge className={`${product.badgeColor} text-white mb-2`}>
                                {product.badge}
                              </Badge>
                              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                              <p className="text-gray-600">{product.brand}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-green-600">{product.price}</div>
                              <div className="text-sm text-gray-500">{product.pricePerServing}/serving</div>
                              <div className="text-sm text-gray-500">{product.servings} servings</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${
                                    i < Math.floor(product.rating)
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="ml-2 text-lg font-semibold">{product.rating}</span>
                            </div>
                            <span className="text-gray-500">({product.reviews} reviews)</span>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">DHM Content:</span>
                              <span className="font-semibold">{product.dhm}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Purity:</span>
                              <span className="font-semibold">{product.purity}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Overall Score:</span>
                              <span className="font-bold text-green-600">{product.score}/10</span>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              asChild
                              className="flex-1 bg-green-600 hover:bg-green-700"
                            >
                              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                                Buy Now
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </a>
                            </Button>
                            <Button
                              variant={isSelected ? 'default' : 'outline'}
                              onClick={() => handleComparisonToggle(product)}
                              className={isSelected ? 'bg-blue-600 hover:bg-blue-700' : ''}
                            >
                              {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>

                        {/* Pros and Cons */}
                        <div className="p-8 bg-white">
                          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                            Pros
                          </h3>
                          <ul className="space-y-2 mb-6">
                            {product.pros.map((pro, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                <span className="text-green-600 mr-2">•</span>
                                {pro}
                              </li>
                            ))}
                          </ul>

                          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <X className="w-5 h-5 text-red-500 mr-2" />
                            Cons
                          </h3>
                          <ul className="space-y-2">
                            {product.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Details and Best For */}
                        <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                          <h3 className="font-semibold text-gray-900 mb-4">Best For</h3>
                          <p className="text-gray-700 mb-6">{product.bestFor}</p>

                          <h3 className="font-semibold text-gray-900 mb-4">Full Ingredients</h3>
                          <div className="flex flex-wrap gap-2">
                            {product.ingredients.map((ingredient, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {ingredient}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Not Sure Which DHM Supplement Is Right for You?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Use our interactive comparison tool to find your perfect match
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-green-700 hover:bg-gray-100"
            >
              <Link href="/compare">
                Compare All DHM Supplements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Comparison Widget */}
      <ComparisonWidget
        selectedProducts={selectedForComparison}
        onRemoveProduct={handleRemoveFromComparison}
        onClearAll={handleClearComparison}
        onCompare={handleCompare}
        isVisible={selectedForComparison.length > 0}
      />
    </>
  )
}