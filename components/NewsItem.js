import React from 'react'

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="md:w-96 rounded-2xl overflow-hidden shadow-lg m-4 bg-[#4b5c76]">
      <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-white text-opacity-90 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 mb-5">
        <p className='mb-4'><small className="text-white text-opacity-70">{!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Read More
        </a>
      </div>
    </div>
  )
}
