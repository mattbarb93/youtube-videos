import axios from "axios";

const KEY = "AIzaSyDurNcNh1VpdBbeJfAKm0SRFJFyENguvmQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video", //parameter to prevent "Warning: Each child in a list should have a unique "key" prop" warning message
    maxResults: 5,
    key: KEY,
  },
});
