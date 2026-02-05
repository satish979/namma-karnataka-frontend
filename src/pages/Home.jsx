import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import PostCard from '../components/PostCard'
import Loading from '../components/Loading'
import { getFeaturedPosts, getAllCategories } from '../services/api'

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [postsResponse, categoriesResponse] = await Promise.all([
          getFeaturedPosts(),
          getAllCategories()
        ])

        setFeaturedPosts(postsResponse.data || [])
        setCategories(categoriesResponse.data || [])
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to load content. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Loading />

  if (error) {
    return (
      <div className="container-custom py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="container-custom py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Discover the Heart of Karnataka
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Explore the rich culture, breathtaking landscapes, delicious cuisine, and timeless heritage of Karnataka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/explore" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Start Exploring
              </Link>
              <Link to="/reels" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Watch Reels
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="section-title">Explore by Category</h2>
          <p className="section-subtitle">
            Discover Karnataka through different perspectives
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="section-title">Featured Posts</h2>
              <p className="section-subtitle">
                Handpicked highlights from Karnataka
              </p>
            </div>
            <Link
              to="/explore"
              className="hidden md:flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View All <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 6).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/explore" className="btn-primary inline-flex items-center">
              View All Posts <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Follow us on social media for daily doses of Karnataka's beauty and culture
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center"
          >
            Follow on Instagram
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
