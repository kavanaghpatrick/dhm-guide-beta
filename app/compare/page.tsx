'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
  X,
  Plus,
  Crown,
  Target,
  BarChart3,
  Microscope,
  Clock,
  Package,
  Truck,
  RefreshCw,
  ShoppingCart
} from 'lucide-react'

export default function Compare() {
  const searchParams = useSearchParams()
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])
  const [showAll, setShowAll] = useState(false)

  // Product data - same as Reviews page but with additional comparison fields
  const allProducts = [
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
      // Additional comparison fields
      dhmPerDollar: 37.0, // mg per dollar
      additionalIngredients: ["L-Cysteine 200mg", "Milk Thistle", "Prickly Pear", "B-Complex", "Electrolytes"],
      thirdPartyTested: true,
      moneyBackGuarantee: true,
      shippingSpeed: "Prime 1-2 days",
      manufacturingLocation: "USA",
      certifications: ["GMP", "FDA Registered"],
      bestForUseCase: "Premium effectiveness",
      valueScore: 8.5,
      effectivenessScore: 9.5,
      safetyScore: 9.0,
      customerSatisfaction: 4.3,
      monthlyBuyers: "1K+",
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
      // Additional comparison fields
      dhmPerDollar: 50.6,
      additionalIngredients: ["Electrolytes", "Essential Minerals"],
      thirdPartyTested: true,
      moneyBackGuarantee: false,
      shippingSpeed: "Prime 1-2 days",
      manufacturingLocation: "USA",
      certifications: ["Third-party tested"],
      bestForUseCase: "Budget-conscious users",
      valueScore: 9.8,
      effectivenessScore: 9.0,
      safetyScore: 8.5,
      customerSatisfaction: 4.4,
      monthlyBuyers: "2K+",
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
      // Additional comparison fields
      dhmPerDollar: 0, // Unknown due to proprietary blend
      additionalIngredients: ["L-Cysteine", "Milk Thistle", "B-Vitamins", "Ginger Extract"],
      thirdPartyTested: false,
      moneyBackGuarantee: true,
      shippingSpeed: "Standard 3-5 days",
      manufacturingLocation: "USA",
      certifications: ["Shark Tank Featured"],
      bestForUseCase: "Brand recognition seekers",
      valueScore: 7.5,
      effectivenessScore: 8.5,
      safetyScore: 8.0,
      customerSatisfaction: 3.9,
      monthlyBuyers: "Unknown",
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
      // Additional comparison fields
      dhmPerDollar: 29.5,
      additionalIngredients: ["Rice Flour", "Vegetable Capsule"],
      thirdPartyTested: true,
      moneyBackGuarantee: false,
      shippingSpeed: "Prime 1-2 days",
      manufacturingLocation: "USA",
      certifications: ["GMP Certified"],
      bestForUseCase: "First-time users",
      valueScore: 9.0,
      effectivenessScore: 7.5,
      safetyScore: 8.5,
      customerSatisfaction: 4.2,
      monthlyBuyers: "500+",
      category: "budget"
    }
  ]

  // Load selected products from URL params
  useEffect(() => {
    const productIds = searchParams.get('products')
    if (productIds) {
      const ids = productIds.split(',').map(id => parseInt(id))
      const selected = allProducts.filter(p => ids.includes(p.id))
      setSelectedProducts(selected)
    } else {
      // Default to top 3 products
      setSelectedProducts(allProducts.slice(0, 3))
    }
  }, [searchParams])

  const handleAddProduct = (product: any) => {
    if (selectedProducts.length < 4 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product])
    }
  }

  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId))
  }

  const availableProducts = allProducts.filter(
    p => !selectedProducts.find(sp => sp.id === p.id)
  )

  const getWinner = (products: any[], key: string) => {
    if (products.length === 0) return null
    
    switch(key) {
      case 'price':
        return products.reduce((prev, current) => 
          parseFloat(prev.price.replace('$', '')) < parseFloat(current.price.replace('$', '')) ? prev : current
        )
      case 'value':
        return products.reduce((prev, current) => 
          parseFloat(prev.pricePerServing.replace('$', '')) < parseFloat(current.pricePerServing.replace('$', '')) ? prev : current
        )
      case 'rating':
        return products.reduce((prev, current) => 
          prev.rating > current.rating ? prev : current
        )
      case 'dhmPerDollar':
        return products.reduce((prev, current) => 
          prev.dhmPerDollar > current.dhmPerDollar ? prev : current
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <BarChart3 className="w-4 h-4 mr-2" />
              Side-by-Side Analysis
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Compare DHM Supplements
              <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Find Your Perfect Match
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Compare up to 4 DHM supplements side-by-side. Analyze ingredients, prices, 
              effectiveness scores, and real user reviews to make the best choice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <Card className="overflow-hidden shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl">Product Comparison</CardTitle>
                <div className="text-sm">
                  Comparing {selectedProducts.length} of 4 products
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-700 sticky left-0 bg-gray-50 z-10 min-w-[200px]">
                        Feature
                      </th>
                      {selectedProducts.map(product => (
                        <th key={product.id} className="p-4 text-center min-w-[250px]">
                          <div className="space-y-2">
                            <Badge className={`${product.badgeColor} text-white`}>
                              {product.badge}
                            </Badge>
                            <h3 className="font-bold text-gray-900">{product.name}</h3>
                            <button
                              onClick={() => handleRemoveProduct(product.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </th>
                      ))}
                      {selectedProducts.length < 4 && (
                        <th className="p-4 text-center min-w-[250px]">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                            <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500">Add Product</p>
                          </div>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Rating Row */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Overall Rating
                      </td>
                      {selectedProducts.map(product => {
                        const isWinner = getWinner(selectedProducts, 'rating')?.id === product.id
                        return (
                          <td key={product.id} className="p-4 text-center">
                            {isWinner && <Crown className="w-5 h-5 text-yellow-500 mx-auto mb-1" />}
                            <div className="flex items-center justify-center gap-1">
                              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                              <span className={`font-bold ${isWinner ? 'text-green-600' : 'text-gray-900'}`}>
                                {product.rating}
                              </span>
                            </div>
                            <div className="text-sm text-gray-500">({product.reviews} reviews)</div>
                          </td>
                        )
                      })}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Price Row */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Price
                      </td>
                      {selectedProducts.map(product => {
                        const isWinner = getWinner(selectedProducts, 'price')?.id === product.id
                        return (
                          <td key={product.id} className="p-4 text-center">
                            {isWinner && <Crown className="w-5 h-5 text-yellow-500 mx-auto mb-1" />}
                            <div className={`text-2xl font-bold ${isWinner ? 'text-green-600' : 'text-gray-900'}`}>
                              {product.price}
                            </div>
                            <div className="text-sm text-gray-500">{product.servings} servings</div>
                          </td>
                        )
                      })}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Price Per Serving */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Price Per Serving
                      </td>
                      {selectedProducts.map(product => {
                        const isWinner = getWinner(selectedProducts, 'value')?.id === product.id
                        return (
                          <td key={product.id} className="p-4 text-center">
                            {isWinner && <Crown className="w-5 h-5 text-yellow-500 mx-auto mb-1" />}
                            <div className={`text-xl font-bold ${isWinner ? 'text-green-600' : 'text-gray-900'}`}>
                              {product.pricePerServing}
                            </div>
                          </td>
                        )
                      })}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* DHM Content */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        DHM Content
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          <div className="font-bold text-gray-900">{product.dhm}</div>
                          <div className="text-sm text-gray-500">Purity: {product.purity}</div>
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* DHM per Dollar */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        DHM per Dollar
                      </td>
                      {selectedProducts.map(product => {
                        const isWinner = getWinner(selectedProducts.filter(p => p.dhmPerDollar > 0), 'dhmPerDollar')?.id === product.id
                        return (
                          <td key={product.id} className="p-4 text-center">
                            {isWinner && <Crown className="w-5 h-5 text-yellow-500 mx-auto mb-1" />}
                            <div className={`font-bold ${isWinner ? 'text-green-600' : 'text-gray-900'}`}>
                              {product.dhmPerDollar > 0 ? `${product.dhmPerDollar}mg/$` : 'N/A'}
                            </div>
                          </td>
                        )
                      })}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Additional Ingredients */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Additional Ingredients
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4">
                          <div className="space-y-1">
                            {product.additionalIngredients.map((ing: string, i: number) => (
                              <div key={i} className="text-sm text-gray-600">• {ing}</div>
                            ))}
                          </div>
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Certifications */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Certifications
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          <div className="flex flex-wrap gap-2 justify-center">
                            {product.certifications.map((cert: string, i: number) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Third Party Tested */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Third-Party Tested
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          {product.thirdPartyTested ? (
                            <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )}
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Money Back Guarantee */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Money-Back Guarantee
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          {product.moneyBackGuarantee ? (
                            <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )}
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Shipping Speed */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Shipping Speed
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Truck className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-700">{product.shippingSpeed}</span>
                          </div>
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Score Breakdown */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Score Breakdown
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Value</span>
                              <span className="font-semibold">{product.valueScore}/10</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Effectiveness</span>
                              <span className="font-semibold">{product.effectivenessScore}/10</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Safety</span>
                              <span className="font-semibold">{product.safetyScore}/10</span>
                            </div>
                            <div className="border-t pt-2 mt-2">
                              <div className="flex justify-between font-bold">
                                <span>Overall</span>
                                <span className="text-green-600">{product.score}/10</span>
                              </div>
                            </div>
                          </div>
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Best For */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-white z-10">
                        Best For
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          <div className="text-sm text-gray-700">{product.bestForUseCase}</div>
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>

                    {/* Buy Now */}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 sticky left-0 bg-gray-50 z-10">
                        Purchase
                      </td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          <Button
                            asChild
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <a 
                              href={product.affiliateLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              Buy Now
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </td>
                      ))}
                      {selectedProducts.length < 4 && <td />}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Add More Products */}
      {selectedProducts.length < 4 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Add More Products to Compare
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {availableProducts.slice(0, showAll ? undefined : 4).map(product => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className={`${product.badgeColor} text-white mb-2`}>
                      {product.badge}
                    </Badge>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.brand}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-bold">{product.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">DHM:</span>
                        <span className="font-bold">{product.dhm}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="font-bold">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleAddProduct(product)}
                      className="w-full"
                      variant="outline"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Comparison
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            {!showAll && availableProducts.length > 4 && (
              <div className="text-center mt-8">
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                >
                  Show All Products
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Winner Summary */}
      {selectedProducts.length > 1 && (
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Our Recommendation
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <CardTitle>Best Overall</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-lg text-gray-900">
                    {getWinner(selectedProducts, 'rating')?.name}
                  </p>
                  <p className="text-gray-600">Highest rated by users</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <CardTitle>Best Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-lg text-gray-900">
                    {getWinner(selectedProducts, 'value')?.name}
                  </p>
                  <p className="text-gray-600">Lowest cost per serving</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Most DHM/$</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-lg text-gray-900">
                    {getWinner(selectedProducts.filter(p => p.dhmPerDollar > 0), 'dhmPerDollar')?.name || 'N/A'}
                  </p>
                  <p className="text-gray-600">Best bang for your buck</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}