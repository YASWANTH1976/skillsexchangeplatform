import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, BookOpen, Star, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredSkills = [
    {
      id: 1,
      title: 'Guitar Lessons',
      teacher: 'Sarah Johnson',
      rating: 4.9,
      price: '$25/hour',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Music'
    },
    {
      id: 2,
      title: 'Web Development',
      teacher: 'Mike Chen',
      rating: 4.8,
      price: '$40/hour',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Cooking Classes',
      teacher: 'Maria Rodriguez',
      rating: 4.9,
      price: '$30/hour',
      image: 'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Culinary'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Learners' },
    { number: '5,000+', label: 'Skilled Teachers' },
    { number: '50+', label: 'Skill Categories' },
    { number: '25,000+', label: 'Sessions Completed' }
  ];

  const features = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Find Local Teachers',
      description: 'Discover skilled teachers in your area offering personalized lessons.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Build Community',
      description: 'Connect with like-minded learners and create lasting relationships.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Learn Anything',
      description: 'From music to coding, cooking to crafts - explore endless possibilities.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Skills from
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Local Experts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with passionate teachers in your community. Learn new skills, share your expertise, 
              and build meaningful connections through LocalSkillSwap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/browse"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/register"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Become a Teacher
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How LocalSkillSwap Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to connect, learn, and grow together as a community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Skills
            </h2>
            <p className="text-xl text-gray-600">
              Discover popular skills being taught in your community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSkills.map((skill) => (
              <Link
                key={skill.id}
                to={`/skill/${skill.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {skill.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{skill.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{skill.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">by {skill.teacher}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{skill.price}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/browse"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners and teachers who are already part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/browse"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Explore Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
