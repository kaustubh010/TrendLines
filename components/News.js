import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://api.nytimes.com/svc/news/v3/content/all/${props.category}.json?api-key=j1XOfD0tWFHQxx02ooeeA0iisGK4Z0xH&offset=${page}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json()
    console.log(parseData);
    props.setProgress(70);
    setArticles(parseData.results);
    setTotalResults(parseData.num_results);
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `TrendLines - ${capitalize(props.category)}`
    updateNews();
    console.log()
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/${props.category}.json?api-key=j1XOfD0tWFHQxx02ooeeA0iisGK4Z0xH&offset=${page + 1}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(articles.concat(parseData.results))
    setTotalResults(parseData.num_results)
  }
  return (
    <>
      <h1 className="text-white text-center p-4 mt-24 text-3xl font-bold">TrendLines - Top {capitalize(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={totalResults}
        next={fetchMoreData}
        hasMore={articles !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="flex flex-wrap justify-center mx-auto">
            {articles?.map((element) => {
              if (element.title && element.abstract && element.multimedia && element.url && element.byline && element.published_date) {
                return <div className="col-md-4" key={element.slug_name}>
                  <NewsItem title={element.title} description={element.abstract} imageUrl={element.multimedia[0].url} newsUrl={element.url} author={element.byline} date={element.published_date} />
                </div>
              }
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  category: 'home page',
}

News.propTypes = {
  category: PropTypes.string
}
