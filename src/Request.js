const key = '321b82151809193be16467d36913ef2f';

const requests ={
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestComedy : `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    requestUpcomming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests;