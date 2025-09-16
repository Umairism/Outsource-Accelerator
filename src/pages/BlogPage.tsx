import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Industry News', 'Best Practices', 'Case Studies', 'Trends', 'Technology'];

  const articles = [
    {
      title: 'The Future of Remote Work: How Outsourcing is Reshaping Business',
      excerpt: 'Explore how the shift to remote work has accelerated outsourcing adoption and what it means for the future of business operations.',
      author: 'Derek Gallimore',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Trends',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'Top 10 BPO Destinations for 2025',
      excerpt: 'Discover the most promising outsourcing destinations this year, including emerging markets and established hubs.',
      author: 'Sarah Chen',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Industry News',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Building Successful Remote Teams: A Complete Guide',
      excerpt: 'Learn proven strategies for managing and leading remote teams across different time zones and cultures.',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '15 min read',
      category: 'Best Practices',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Case Study: How TechCorp Reduced Costs by 65% with Strategic Outsourcing',
      excerpt: 'A detailed look at how one company transformed their operations and achieved significant cost savings.',
      author: 'Lisa Thompson',
      date: '2025-01-08',
      readTime: '10 min read',
      category: 'Case Studies',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'AI and Automation in BPO: Opportunities and Challenges',
      excerpt: 'Understanding how artificial intelligence is transforming the BPO industry and what it means for businesses.',
      author: 'Derek Gallimore',
      date: '2025-01-05',
      readTime: '11 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Data Security Best Practices for Outsourcing',
      excerpt: 'Essential security measures and compliance requirements to protect your data when outsourcing.',
      author: 'Sarah Chen',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Best Practices',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div>
      <PageHeader 
        title="News Hub & Articles"
        subtitle="Stay updated with the latest insights, trends, and best practices in outsourcing."
        breadcrumb={['Home', 'The Source', 'News Hub']}
      />

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>
            <Card className="overflow-hidden" hover>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                      {featuredArticle.category}
                    </span>
                    <span className="ml-2 bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredArticle.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(featuredArticle.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <Button icon={ArrowRight}>
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-600">
              {filteredArticles.length} articles found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.filter(article => 
              selectedCategory === 'All' || article.category === selectedCategory
            ).map((article, index) => (
              <Card key={index} className="overflow-hidden" hover>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{article.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <Button variant="outline" size="sm" icon={ArrowRight}>
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8">Get the latest outsourcing insights delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;