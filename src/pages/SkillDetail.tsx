import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Calendar, User, MessageCircle, Shield } from 'lucide-react';

const SkillDetail: React.FC = () => {
  // Mock data - in a real app, this would be fetched based on the ID
  const skill = {
    id: 1,
    title: 'Guitar Lessons for Beginners',
    teacher: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      reviewCount: 127,
      yearsTeaching: 8,
      studentsCount: 250,
      bio: 'Professional musician and certified music teacher with over 8 years of experience. I specialize in acoustic and electric guitar for beginners and intermediate players.'
    },
    rating: 4.9,
    reviewCount: 127,
    price: 25,
    location: 'San Francisco, CA',
    duration: '1 hour',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Music',
    description: 'Learn to play guitar from scratch with personalized lessons tailored to your musical interests. Whether you want to strum your favorite songs or master complex techniques, I\'ll guide you every step of the way.',
    whatYouLearn: [
      'Basic chord progressions and strumming patterns',
      'Proper finger positioning and technique',
      'Reading guitar tabs and basic music theory',
      'Playing popular songs across different genres',
      'Developing rhythm and timing skills'
    ],
    requirements: [
      'Bring your own acoustic or electric guitar',
      'No prior musical experience required',
      'Enthusiasm to learn and practice'
    ],
    availability: [
      'Monday: 2:00 PM - 8:00 PM',
      'Wednesday: 2:00 PM - 8:00 PM',
      'Friday: 2:00 PM - 8:00 PM',
      'Saturday: 10:00 AM - 6:00 PM',
      'Sunday: 10:00 AM - 4:00 PM'
    ]
  };

  const reviews = [
    {
      id: 1,
      name: 'Mike Thompson',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Sarah is an amazing teacher! I went from never touching a guitar to playing my first song in just 3 lessons. Highly recommended!'
    },
    {
      id: 2,
      name: 'Lisa Chen',
      rating: 5,
      date: '1 month ago',
      comment: 'Very patient and encouraging. The lessons are well-structured and Sarah adapts to your learning pace perfectly.'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      rating: 4,
      date: '2 months ago',
      comment: 'Great teacher with lots of experience. I\'ve learned so much in just a few sessions. The only minor issue is scheduling can be tricky sometimes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                    {skill.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{skill.rating}</span>
                    <span className="text-gray-500">({skill.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{skill.title}</h1>
                
                <div className="flex items-center space-x-6 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{skill.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{skill.duration} sessions</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed">{skill.description}</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <ul className="space-y-3">
                {skill.whatYouLearn.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {skill.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">${skill.price}</div>
                <div className="text-gray-600">per hour</div>
              </div>
              
              <Link
                to={`/book/${skill.id}`}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center block mb-4"
              >
                Book a Session
              </Link>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Message Teacher</span>
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Shield className="h-4 w-4" />
                  <span>Verified Teacher</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
            </div>

            {/* Teacher Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Teacher</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={skill.teacher.avatar}
                  alt={skill.teacher.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{skill.teacher.name}</h4>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{skill.teacher.rating}</span>
                    <span className="text-gray-500">({skill.teacher.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4">{skill.teacher.bio}</p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-blue-600">{skill.teacher.yearsTeaching}</div>
                  <div className="text-xs text-gray-600">Years Teaching</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-blue-600">{skill.teacher.studentsCount}+</div>
                  <div className="text-xs text-gray-600">Students Taught</div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
              <div className="space-y-2">
                {skill.availability.map((time, index) => (
                  <div key={index} className="text-sm text-gray-700">
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
