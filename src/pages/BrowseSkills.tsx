import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, MapPin, Clock, ArrowRight } from 'lucide-react';

const BrowseSkills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    'all', 'Music', 'Technology', 'Culinary', 'Arts & Crafts', 'Languages', 
    'Fitness', 'Business', 'Photography', 'Writing'
  ];

  const skills = [
    {
      id: 1,
      title: 'Guitar Lessons for Beginners',
      teacher: 'Sarah Johnson',
      rating: 4.9,
      reviewCount: 127,
      price: 25,
      location: 'San Francisco, CA',
      duration: '1 hour',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Music',
      description: 'Learn to play guitar from scratch with personalized lessons.'
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      teacher: 'Mike Chen',
      rating: 4.8,
      reviewCount: 89,
      price: 40,
      location: 'San Francisco, CA',
      duration: '2 hours',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Technology',
      description: 'Master modern web development with React, Node.js, and more.'
    },
    {
      id: 3,
      title: 'Italian Cooking Masterclass',
      teacher: 'Maria Rodriguez',
      rating: 4.9,
      reviewCount: 156,
      price: 30,
      location: 'San Francisco, CA',
      duration: '3 hours',
      image: 'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Culinary',
      description: 'Learn authentic Italian recipes and cooking techniques.'
    },
    {
      id: 4,
      title: 'Digital Photography Basics',
      teacher: 'Alex Thompson',
      rating: 4.7,
      reviewCount: 73,
      price: 35,
      location: 'San Francisco, CA',
      duration: '2 hours',
      image: 'https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Photography',
      description: 'Master your camera and learn composition fundamentals.'
    },
    {
      id: 5,
      title: 'Spanish Conversation Practice',
      teacher: 'Carlos Mendez',
      rating: 4.8,
      reviewCount: 94,
      price: 20,
      location: 'San Francisco, CA',
      duration: '1 hour',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Languages',
      description: 'Improve your Spanish speaking skills with native speaker.'
    },
    {
      id: 6,
      title: 'Watercolor Painting Workshop',
      teacher: 'Emma Wilson',
      rating: 4.9,
      reviewCount: 112,
      price: 28,
      location: 'San Francisco, CA',
      duration: '2.5 hours',
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Arts & Crafts',
      description: 'Create beautiful watercolor paintings with expert guidance.'
    }
  ];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under25' && skill.price < 25) ||
                        (priceRange === '25-40' && skill.price >= 25 && skill.price <= 40) ||
                        (priceRange === 'over40' && skill.price > 40);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Skills</h1>
          <p className="text-gray-600">Discover amazing skills taught by local experts</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search skills or teachers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under25">Under $25</option>
                <option value="25-40">$25 - $40</option>
                <option value="over40">Over $40</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Link
              key={skill.id}
              to={`/skill/${skill.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
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
                    <span className="text-sm text-gray-400">({skill.reviewCount})</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">by {skill.teacher}</p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{skill.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{skill.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{skill.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">${skill.price}/hour</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No skills found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseSkills;