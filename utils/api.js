const API_KEY = process.env.NEWS_SECTION_API;

export const getArticlesByCategory = async (category) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();  
  return data;
};
