import { reactive } from "vue";

export const store = reactive({
  apiURL: "https://api.themoviedb.org/3/search",
  apiKey: "02271e765b18b4b64347f49cbd81a43a",
  searchKey: "",
  loading: false,
  movies: [],
  series: [],
});

export const secondStore = reactive({});
