import { React } from 'react'
import { getArticlesByCategory } from "../utils/api";
import NewsItem from '@/components/NewsItem';

const Technology = ({ articles }) => {

  const capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <h1 className="text-white text-center p-4 mt-24 text-3xl font-bold">PressPlay - Top {capitalize(articles.section)} Headlines</h1>
      <div className="container">
        <div className="flex flex-wrap justify-center mx-auto">
          {articles.results.slice(2).map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.abstract} imageUrl={element.multimedia[0].url} newsUrl={element.url} author={element.byline} date={element.published_date} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const articles = await getArticlesByCategory("technology");
  return { props: { articles } };
};

export default Technology