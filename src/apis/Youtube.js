import axios from "axios";

const KEY = "AIzaSyBGl0mbEk9WQeo3OCNgZjfOFRFmN3UUYLc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
