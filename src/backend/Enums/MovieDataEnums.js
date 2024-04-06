const HEADER = { 
    'Authorization': import.meta.env.VITE_MOVIE_TOKEN,
    'accept': 'application/json'
};

const PAYLOADS = {
    MOST_POPULAR: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    TOP_RATED: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    SEARCH: 'https://api.themoviedb.org/3/search/multi?query=',
};

export {
    HEADER,
    PAYLOADS,
};