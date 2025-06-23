import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Shield } from 'lucide-react';

const BookSkill: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('single');
  const [message, setMessage] = useState('');

  // Mock data - in a real app, this would be fetched based on the ID
  const skill = {
    id: 1,
    title: 'Guitar Lessons for Beginners',
    teacher: 'Sarah Johnson',
    price: 25,
    duration: '1 hour',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the booking
    alert('Booking request sent! The teacher will confirm your session shortly.');
    navigate('/dashboard');
  };

  const calculateTotal = () => {
    const basePrice = skill.price;
    const sessions = sessionType === 'package' ? 4 : 1;
    const discount = sessionType === 'package' ? 0.1 : 0;
    const subtotal = basePrice * sessions;
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;
    
    return {
      subtotal,
      discount: discountAmount,
      total,
      sessions
    };
  };

  const pricing = calculateTotal();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Book Your Session</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Session Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Session Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="relative">
                      <input
                        type="radio"
                        name="sessionType"
                        value="single"
                        checked={sessionType === 'single'}
                        onChange={(e) => setSessionType(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        sessionType === 'single' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <h3 className="font-medium text-gray-900">Single Session</h3>
                        <p className="text-sm text-gray-600">One-time lesson</p>
                        <p className="text-lg font-bold text-blue-600 mt-2">${skill.price}</p>
                      </div>
                    </label>
                    
                    <label className="relative">
                      <input
                        type="radio"
                        name="sessionType"
                        value="package"
                        checked={sessionType === 'package'}
                        onChange={(e) => setSessionType(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        sessionType === 'package' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <h3 className="font-medium text-gray-900">4-Session Package</h3>
                        <p className="text-sm text-gray-600">Save 10% with package</p>
                        <p className="text-lg font-bold text-blue-600 mt-2">
                          ${pricing.total} <span className="text-sm text-gray-500 line-through">${skill.price * 4}</span>
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="date"
                      id="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {availableTimes.map((time) => (
                      <label key={time} className="relative">
                        <input
                          type="radio"
                          name="time"
                          value={time}
                          checked={selectedTime === time}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="sr-only"
                          required
                        />
                        <div className={`p-3 text-center border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedTime === time 
                            ? 'border-blue-500 bg-blue-50 text-blue-700' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <span className="text-sm font-medium">{time}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message to Teacher (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Let the teacher know about your experience level, goals, or any special requests..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Request Booking
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h2>
              
              {/* Skill Info */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{skill.title}</h3>
                  <p className="text-sm text-gray-600">with {skill.teacher}</p>
                </div>
              </div>

              {/* Session Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{skill.duration} session</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{skill.location}</span>
                </div>
                {selectedDate && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(selectedDate).toLocaleDateString()}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{selectedTime}</span>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {sessionType === 'package' ? '4 sessions' : '1 session'} × ${skill.price}
                  </span>
                  <span className="text-gray-900">${pricing.subtotal}</span>
                </div>
                {sessionType === 'package' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Package discount (10%)</span>
                    <span className="text-green-600">-${pricing.discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-blue-600">${pricing.total}</span>
                </div>
              </div>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4" />
                  <span>Secure booking with payment protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSkill;
