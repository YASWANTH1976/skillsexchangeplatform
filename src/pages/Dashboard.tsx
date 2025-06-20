import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Calendar, MessageCircle, Star, TrendingUp, Users, BookOpen, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Skills', value: '3', icon: BookOpen, color: 'blue' },
    { label: 'Total Students', value: '47', icon: Users, color: 'green' },
    { label: 'Hours Taught', value: '156', icon: Clock, color: 'purple' },
    { label: 'Average Rating', value: '4.8', icon: Star, color: 'yellow' }
  ];

  const recentBookings = [
    {
      id: 1,
      student: 'Alice Johnson',
      skill: 'Guitar Lessons',
      date: '2024-01-15',
      time: '2:00 PM',
      status: 'confirmed'
    },
    {
      id: 2,
      student: 'Bob Smith',
      skill: 'Guitar Lessons',
      date: '2024-01-16',
      time: '4:00 PM',
      status: 'pending'
    },
    {
      id: 3,
      student: 'Carol Davis',
      skill: 'Guitar Lessons',
      date: '2024-01-17',
      time: '3:00 PM',
      status: 'confirmed'
    }
  ];

  const mySkills = [
    {
      id: 1,
      title: 'Guitar Lessons for Beginners',
      students: 15,
      rating: 4.9,
      earnings: '$375',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Advanced Guitar Techniques',
      students: 8,
      rating: 4.8,
      earnings: '$240',
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your teaching activities</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
                <Link to="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{booking.student}</h4>
                        <p className="text-sm text-gray-600">{booking.skill}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{booking.date}</p>
                      <p className="text-sm text-gray-600">{booking.time}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Skills */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">My Skills</h2>
                <Link
                  to="/add-skill"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Skill</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mySkills.map((skill) => (
                  <div key={skill.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-2">{skill.title}</h3>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <p className="text-gray-600">Students</p>
                          <p className="font-medium">{skill.students}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Rating</p>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="font-medium">{skill.rating}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-600">Earnings</p>
                          <p className="font-medium text-green-600">{skill.earnings}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/add-skill"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add New Skill</span>
                </Link>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Manage Schedule</span>
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>View Messages</span>
                </button>
              </div>
            </div>

            {/* Earnings Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">This Month</span>
                  <span className="text-lg font-semibold text-green-600">$615</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Last Month</span>
                  <span className="text-gray-900">$542</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-600">Total Earnings</span>
                  <span className="text-xl font-bold text-gray-900">$3,247</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+13% from last month</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-900">New booking from Alice Johnson</p>
                    <p className="text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-900">Received 5-star review</p>
                    <p className="text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-1">
                    <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-900">Completed session with Bob Smith</p>
                    <p className="text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;