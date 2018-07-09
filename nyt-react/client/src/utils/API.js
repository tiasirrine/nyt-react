import axios from 'axios';

const API = {
  scrape: function(searchParams) {
    const { search, start, end } = searchParams;
    const apiKey = '5fcf6285e6ed4c1ebd651591c0135415';
    const baseURL =
      'https://api.nytimes.com/svc/search/v2/articlesearch.json' +
      '?api-key=' +
      apiKey +
      '&q=' +
      search +
      '&begin_date=' +
      start +
      '&end_date=' +
      end;

    console.log('URL searched: ' + baseURL);

    return axios.get(baseURL);
  },

  saveArticle: function(data) {
    return axios.post('./api/articles', data);
  },

  getSavedArticles: function() {
    return axios.get('./');
  }
};

export default API;
