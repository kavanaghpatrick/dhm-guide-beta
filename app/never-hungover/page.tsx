import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, ArrowRight, TrendingUp, Users, BookOpen } from 'lucide-react'
import { getRecentPosts } from './posts'

export const metadata: Metadata = {
  title: 'Never Hungover Blog | Science-Backed Hangover Prevention Tips',
  description: 'Expert guides on hangover prevention, DHM science, and smart drinking strategies. Learn how to enjoy social occasions without the morning-after regret.',
}

// Get recent blog posts
const blogPosts = getRecentPosts(6)

const categories = [
  { name: 'All Posts', count: 53 },
  { name: 'DHM Science', count: 12 },
  { name: 'Professional', count: 10 },
  { name: 'Student Life', count: 8 },
  { name: 'Social Events', count: 7 },
  { name: 'Product Reviews', count: 9 },
  { name: 'International', count: 7 }
]

export default function NeverHungoverPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
                Never
              </span>
              <span className="text-gray-900 ml-3 inline-block">
                Hungover
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              Science-backed strategies, expert guides, and real solutions for enjoying life without the morning-after regret
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <BookOpen className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">53</div>
              <div className="text-gray-600">Expert Articles</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="lg:flex gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              
              <div className="space-y-8">
                {blogPosts.map(post => (
                  <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <Link href={`/never-hungover/${post.slug}`}>
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime} min read
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              {post.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-xs text-gray-500">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <span className="flex items-center gap-1 text-green-600 font-medium text-sm">
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Load More Articles
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 mt-12 lg:mt-0">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <Link 
                      key={category.name}
                      href="#"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">{category.name}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Never Miss a Post</h3>
                <p className="mb-4 text-green-100">
                  Get science-backed hangover prevention tips delivered weekly.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-green-700 hover:bg-green-50 px-4 py-3 rounded-lg font-bold transition-colors">
                    Subscribe Free
                  </button>
                </form>
                <p className="text-xs text-green-100 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {['dhm science', 'dosage guide', 'wedding season', 'business dinners', 
                    'college parties', 'product reviews', 'liver health', 'prevention tips'].map(tag => (
                    <Link
                      key={tag}
                      href="#"
                      className="px-3 py-1 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}