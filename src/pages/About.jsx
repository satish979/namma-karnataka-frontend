import React from 'react'
import { FaHeart, FaCamera, FaMapMarkedAlt, FaUtensils } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-primary-600" />,
      title: 'Travel Destinations',
      description: 'Explore hidden gems and popular tourist spots across Karnataka'
    },
    {
      icon: <FaUtensils className="text-4xl text-primary-600" />,
      title: 'Culinary Journey',
      description: 'Discover authentic Karnataka cuisine and traditional recipes'
    },
    {
      icon: <FaCamera className="text-4xl text-primary-600" />,
      title: 'Visual Stories',
      description: 'Experience Karnataka through stunning photography and videos'
    },
    {
      icon: <FaHeart className="text-4xl text-primary-600" />,
      title: 'Cultural Heritage',
      description: 'Learn about the rich traditions and festivals of Karnataka'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Namma Karnataka
          </h1>
          <p className="text-xl text-gray-100">
            Your gateway to exploring Karnataka's beauty and culture
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Namma Karnataka is dedicated to showcasing the incredible diversity and beauty of Karnataka.
              From the misty hills of Coorg to the ancient ruins of Hampi, from the bustling streets of Bangalore
              to the serene beaches of Gokarna, we bring you the very best of Karnataka.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Our goal is to inspire travelers, food lovers, and culture enthusiasts to explore and appreciate
              the rich heritage and natural beauty that Karnataka has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-4 text-center">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Everything you need to explore Karnataka
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Founded by passionate travelers and Karnataka enthusiasts, Namma Karnataka started as a
              simple Instagram page sharing beautiful moments from across the state. What began as a hobby
              quickly grew into a community of thousands of followers who share our love for Karnataka.
            </p>
            <p className="mb-4">
              Today, we're more than just a social media presence. We're a platform that connects people
              with the places, traditions, and flavors that make Karnataka unique. Through our curated content,
              we aim to preserve and promote Karnataka's cultural identity while encouraging sustainable tourism.
            </p>
            <p>
              Whether you're a local looking to rediscover your home state or a visitor planning your first
              trip to Karnataka, we're here to guide and inspire you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-100">Posts Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-gray-100">Instagram Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-100">Destinations Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-gray-100">Districts Explored</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-16 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Follow us on social media to stay updated with the latest from Karnataka
        </p>
        <a
          href="https://www.instagram.com/mr_sharma_045?igsh=MXByMjVtc2g4aWE4OQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center"
        >
          Follow on Instagram
        </a>
      </section>
    </div>
  )
}

export default About
