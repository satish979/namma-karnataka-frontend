import React from 'react'
import { FaMapMarkerAlt, FaClock, FaPlay } from 'react-icons/fa'

const PostCard = ({ post, onClick }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div
      className="card cursor-pointer group"
      onClick={() => onClick && onClick(post)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay for Reels */}
        {post.isReel && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 rounded-full p-4">
              <FaPlay className="text-primary-600 text-2xl" />
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {post.isFeatured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Category Badge */}
        {post.category && (
          <div className="absolute top-4 right-4">
            <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center">
              <span className="mr-1">{post.category.icon}</span>
              {post.category.name}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          {/* Location */}
          {post.location && (
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1 text-primary-500" />
              <span>{post.location}</span>
            </div>
          )}

          {/* Date */}
          {post.createdAt && (
            <div className="flex items-center">
              <FaClock className="mr-1" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostCard
