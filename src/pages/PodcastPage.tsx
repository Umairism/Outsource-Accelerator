import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Play, Calendar, Clock, Headphones, Video, ArrowRight } from 'lucide-react';

const PodcastPage = () => {
  const [activeTab, setActiveTab] = useState('podcast');

  const podcastEpisodes = [
    {
      title: 'The Evolution of Global Outsourcing with Industry Leaders',
      description: 'Join us as we discuss the transformation of the outsourcing industry with top executives from leading BPO companies.',
      duration: '45:32',
      date: '2025-01-15',
      guests: ['John Smith - CEO, GlobalTech BPO', 'Maria Garcia - VP Operations, TechVantage'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      featured: true
    },
    {
      title: 'Building Remote Teams That Actually Work',
      description: 'Practical strategies for creating and managing high-performing remote teams across different time zones.',
      duration: '38:15',
      date: '2025-01-12',
      guests: ['Sarah Chen - Remote Work Expert'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Data Security in the Age of Remote Work',
      description: 'Essential cybersecurity practices for businesses working with offshore teams and BPO providers.',
      duration: '42:18',
      date: '2025-01-10',
      guests: ['Michael Rodriguez - Cybersecurity Consultant'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'The Philippines: Still the Top BPO Destination?',
      description: 'Analyzing the Philippines\' position in the global BPO market and emerging competition.',
      duration: '35:45',
      date: '2025-01-08',
      guests: ['Lisa Thompson - Industry Analyst'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'AI and Automation: Friend or Foe to BPO?',
      description: 'Exploring how artificial intelligence is reshaping the BPO industry and creating new opportunities.',
      duration: '41:22',
      date: '2025-01-05',
      guests: ['Dr. Alex Kumar - AI Research Director'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Cost Optimization Strategies for 2025',
      description: 'Expert tips on maximizing your outsourcing ROI while maintaining quality standards.',
      duration: '39:10',
      date: '2025-01-03',
      guests: ['Derek Gallimore - OutsourceAccel Founder'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const videos = [
    {
      title: 'Outsourcing 101: Complete Beginner\'s Guide',
      description: 'A comprehensive video guide covering everything you need to know about outsourcing.',
      duration: '12:45',
      date: '2025-01-14',
      views: '15.2K',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
    },
    {
      title: 'Virtual Office Tour: Inside a Top BPO Facility',
      description: 'Take a behind-the-scenes look at a world-class BPO facility in Manila.',
      duration: '8:30',
      date: '2025-01-11',
      views: '8.7K',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
    },
    {
      title: 'Interview: CEO Shares Outsourcing Success Story',
      description: 'Learn how one CEO transformed their business through strategic outsourcing.',
      duration: '15:20',
      date: '2025-01-09',
      views: '12.1K',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
    },
    {
      title: 'Common Outsourcing Mistakes to Avoid',
      description: 'Expert advice on avoiding the most common pitfalls in outsourcing.',
      duration: '10:15',
      date: '2025-01-07',
      views: '9.8K',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
    }
  ];

  const featuredEpisode = podcastEpisodes.find(episode => episode.featured);
  const regularEpisodes = podcastEpisodes.filter(episode => !episode.featured);

  return (
    <div>
      <PageHeader 
        title="Podcast & Videos"
        subtitle="Insights, interviews, and expert discussions on outsourcing and remote work."
        breadcrumb={['Home', 'The Source', 'Podcast & Videos']}
      />

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('podcast')}
              className={`flex items-center px-6 py-3 font-medium rounded-lg transition-colors ${
                activeTab === 'podcast'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Headphones className="h-5 w-5 mr-2" />
              Podcast Episodes
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center px-6 py-3 font-medium rounded-lg transition-colors ${
                activeTab === 'videos'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Video className="h-5 w-5 mr-2" />
              Videos
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'podcast' && (
        <>
          {/* Featured Episode */}
          {featuredEpisode && (
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Episode</h2>
                </div>
                <Card className="overflow-hidden" hover>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative">
                      <img 
                        src={featuredEpisode.image} 
                        alt={featuredEpisode.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all">
                          <Play className="h-8 w-8 text-blue-600 ml-1" />
                        </button>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredEpisode.title}</h3>
                      <p className="text-gray-600 mb-6">{featuredEpisode.description}</p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(featuredEpisode.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          {featuredEpisode.duration}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">Guests:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {featuredEpisode.guests.map((guest, index) => (
                            <li key={index}>• {guest}</li>
                          ))}
                        </ul>
                      </div>
                      <Button icon={Play}>
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {/* Episode List */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Episodes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularEpisodes.map((episode, index) => (
                  <Card key={index} className="overflow-hidden" hover>
                    <div className="relative">
                      <img 
                        src={episode.image} 
                        alt={episode.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all">
                          <Play className="h-6 w-6 text-blue-600 ml-1" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{episode.title}</h3>
                      <p className="text-gray-600 mb-4">{episode.description}</p>
                      <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(episode.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {episode.duration}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" icon={Play}>
                        Listen
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'videos' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Video Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden" hover>
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all">
                        <Play className="h-8 w-8 text-blue-600 ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(video.date).toLocaleDateString()}
                      </div>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Episode</h2>
          <p className="text-xl text-blue-100 mb-8">Subscribe to get notified about new podcast episodes and videos</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-blue-600 border-white hover:bg-gray-100">
              Subscribe on Spotify
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-blue-600 border-white hover:bg-gray-100">
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;