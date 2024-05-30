const GOOGLE_API_KEY = "AIzaSyA4oETWjo935rJRqZhm3JKlUjGGJNbTKKA";


export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const Search_API= 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';