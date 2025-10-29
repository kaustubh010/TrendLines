import React from 'react'

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  const cleanAuthor = (authorString) => {
    if (!authorString) return "Unknown";
    // Remove "By " prefix if it exists
    return authorString.replace(/^By\s+/i, '');
  }

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return formatDate(dateString);
  }

  return (
    <article className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50">
      {/* Image Container with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={imageUrl} 
          alt={title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x240/1e293b/94a3b8?text=TrendLines+News';
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
        
        {/* Time Badge */}
        <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {getTimeAgo(date)}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="font-bold text-xl text-white leading-tight line-clamp-2 group-hover:text-red-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Author and Date Section */}
        <div className="flex items-center space-x-3 pt-3 border-t border-slate-700/50">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">
              {cleanAuthor(author).charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {cleanAuthor(author)}
            </p>
            <p className="text-xs text-slate-400">
              {formatDate(date)}
            </p>
          </div>
        </div>

        {/* Read More Button */}
        <a 
          href={newsUrl} 
          rel="noreferrer" 
          target="_blank"
          className="group/btn relative inline-flex items-center justify-center w-full mt-4 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl overflow-hidden"
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span>Read Full Story</span>
            <svg 
              className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </a>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16"></div>
    </article>
  )
}