import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, ChevronRight } from 'lucide-react'
import { posts } from '../posts'

// Get post by slug
async function getPost(slug: string) {
  return posts[slug] || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Never Hungover',
    }
  }

  return {
    title: `${post.title} | Never Hungover`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/never-hungover" className="text-green-600 hover:text-green-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/never-hungover"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Never Hungover
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>By {post.author}</span>
              </div>
            )}
            <button className="flex items-center gap-1 text-green-600 hover:text-green-700 transition-colors ml-auto">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          {post.subtitle && (
            <h2 className="text-xl md:text-2xl text-gray-600 mt-3 leading-relaxed">
              {post.subtitle}
            </h2>
          )}

          {post.excerpt && (
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              {post.excerpt}
            </p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Image */}
        {post.image && (
          <div className="mb-12">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full rounded-xl shadow-lg"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg prose-green max-w-none">
          <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(post.content) }} />
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Never Wake Up Hungover?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Find the perfect DHM supplement for your needs with our comprehensive reviews and comparisons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/guide"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Read the Complete Guide
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/reviews"
              className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-700"
            >
              Compare DHM Supplements
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

// Simple markdown to HTML converter (in production, use a proper markdown parser)
function convertMarkdownToHTML(markdown: string): string {
  return markdown
    .replace(/### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/# (.*?)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\d+\. (.*)$/gm, '<li>$1</li>')
    .replace(/^- (.*)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
}