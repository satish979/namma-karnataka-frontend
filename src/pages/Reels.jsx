import React, { useState, useEffect } from 'react'
import { FaPlay, FaMapMarkerAlt } from 'react-icons/fa'
import Loading from '../components/Loading'
import { getReels } from '../services/api'

const Reels = () => {
  const [reels, setReels] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedReel, setSelectedReel] = useState(null)

  useEffect(() => {
    const fetchReels = async () => {
      try {
        setLoading(true)
        const response = await getReels()
        setReels(response)
      } catch (err) {
        console.error('Error fetching reels:', err)
        setError('Failed to load reels. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchReels()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Karnataka Reels
          </h1>
          <p className="text-xl text-gray-100">
            Experience Karnataka through short video stories
          </p>
        </div>
      </div>

      {/* Reels Grid */}
      <div className="container-custom py-12">
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        ) : reels.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No reels available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setSelectedReel(reel)}
              >
                {/* Thumbnail: IMAGE or VIDEO */}
                {reel.videoUrl ? (
                  <video
                    src={reel.videoUrl}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={reel.imageUrl}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <FaPlay className="text-primary-600 text-2xl ml-1" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                    {reel.title}
                  </h3>

                  {reel.location && (
                    <div className="flex items-center text-sm">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>{reel.location}</span>
                    </div>
                  )}

                  {reel.category && (
                    <span className="inline-block mt-2 bg-white bg-opacity-20 backdrop-blur-sm px-2 py-1 rounded text-xs">
                      {reel.category.icon} {reel.category.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedReel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedReel(null)}
        >
          <div
            className="bg-black rounded-xl max-w-sm w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedReel.videoUrl ? (
              <video
                src={selectedReel.videoUrl}
                controls
                autoPlay
                className="w-full"
              />
            ) : (
              <img
                src={selectedReel.imageUrl}
                alt={selectedReel.title}
                className="w-full"
              />
            )}

            <div className="p-4 text-white">
              <h2 className="text-xl font-bold mb-2">{selectedReel.title}</h2>
              <p className="text-gray-300">{selectedReel.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reels
