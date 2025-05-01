import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          {t('nav.contact')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">Prathmik Vidhyalay Narauna</p>
                  <p className="text-gray-600">Kakori, Lucknow</p>
                  <p className="text-gray-600">Uttar Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Clock size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">School Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 8:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h2>
            
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-10">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
            <div className="w-full h-96 rounded-lg flex items-center justify-center bg-gray-100">
              <div className="text-center p-6">
                <MapPin size={48} className="text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">School Location</h3>
                <p className="text-gray-600">Prathmik Vidhyalay Narauna, Kakori</p>
                <p className="text-gray-600">Google Maps integration would be here</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visit Info */}
        <div className="bg-green-50 rounded-lg p-8 border border-green-200">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Visit Our School</h2>
          <p className="text-center text-gray-700 mb-6">
            Interested in learning more about our eco-initiatives? Schedule a visit to our school premises to see our plant collection and eco-friendly practices.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;