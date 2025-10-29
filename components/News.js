import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getCategoryIcon = (category) => {
    const icons = {
      all: '📰',
      sports: '⚽',
      technology: '💻',
      world: '🌍',
      finance: '💰',
      entertainment: '🎬',
      science: '🔬',
      health: '🏥'
    }
    return icons[category] || '📰'
  }

  const getCategoryColor = (category) => {
    const colors = {
      all: 'from-blue-500 to-blue-600',
      sports: 'from-orange-500 to-orange-600',
      technology: 'from-purple-500 to-purple-600',
      world: 'from-green-500 to-green-600',
      finance: 'from-emerald-500 to-emerald-600',
      entertainment: 'from-pink-500 to-pink-600',
      science: 'from-cyan-500 to-cyan-600',
      health: 'from-red-500 to-red-600'
    }
    return colors[category] || 'from-blue-500 to-blue-600'
  }

  const updateNews = async () => {
    try {
      props.setProgress(10);
      const url = `https://api.nytimes.com/svc/news/v3/content/all/${props.category}.json?api-key=j1XOfD0tWFHQxx02ooeeA0iisGK4Z0xH`;
      setLoading(true)
      setError(null)
      
      let data = await fetch(url);
      props.setProgress(30);
      
      if (!data.ok) {
        throw new Error('Failed to fetch news');
      }
      
      let parseData = await data.json()
      props.setProgress(70);
      
      setArticles(parseData.results || []);
      setLoading(false)
      props.setProgress(100);
    } catch (err) {
      setError(err.message)
      setLoading(false)
      props.setProgress(100);
    }
  }

  useEffect(() => {
    document.title = `TrendLines - ${capitalize(props.category)}`
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r ${getCategoryColor(props.category)}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-6xl animate-pulse">{getCategoryIcon(props.category)}</span>
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg">
                {capitalize(props.category)} Headlines
              </h1>
              <p className="text-white/90 text-lg mt-2 font-medium">
                Latest news and updates from around the world
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48h1440V0c-360 48-720 48-1080 0C240 48 120 48 0 24v24z" fill="#0f172a"/>
          </svg>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-20">
          <Spinner />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto bg-red-500/10 border border-red-500/50 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-red-400 text-xl font-bold mb-2">Oops! Something went wrong</h3>
            <p className="text-slate-300 mb-6">{error}</p>
            <button 
              onClick={updateNews}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {!loading && !error && (
        <div className="container mx-auto px-4 py-12">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-white text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-slate-400">Check back later for updates</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-white text-2xl font-bold">
                  Latest Stories <span className="text-slate-400 text-lg font-normal">({articles.length})</span>
                </h2>
                <button 
                  onClick={updateNews}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-xl transition-colors duration-200 border border-slate-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-sm font-medium">Refresh</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((element) => {
                  if (element.title && element.abstract && element.multimedia && element.url && element.byline && element.published_date) {
                    return (
                      <NewsItem 
                        key={element.slug_name || element.url}
                        title={element.title} 
                        description={element.abstract} 
                        imageUrl={element.multimedia[3]?.url || element.multimedia[0]?.url} 
                        newsUrl={element.url} 
                        author={element.byline} 
                        date={element.published_date}
                      />
                    )
                  }
                  return null;
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* Back to Top Button */}
      {!loading && articles.length > 6 && (
        <div className="container mx-auto px-4 pb-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mx-auto flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Back to Top</span>
          </button>
        </div>
      )}
    </div>
  )
}

News.defaultProps = {
  category: 'all',
}

News.propTypes = {
  category: PropTypes.string,
  setProgress: PropTypes.func
}