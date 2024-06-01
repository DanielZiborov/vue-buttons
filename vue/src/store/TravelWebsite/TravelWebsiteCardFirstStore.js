import axios from "axios"

const state = {
  newsList: [],
  singleNews: {}
}

const getters = {
  getNews: (state) => state.newsList,
  getSingleNews: (state) => state.singleNews
}

const mutations = {
  setNews: (state, payload) => {
    state.newsList = payload
  },
  setSingleNews: (state, payload) => {
    state.singleNews = payload;
  },
}

const actions = {
  loadNews: ({ commit }) => {
    axios.get('http://localhost:3000/newsList')
      .then((res) => {
        commit('setNews', res.data)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Done")
      })
  },
  loadSingleNews: ({ commit }, newsId) => {
    axios.get(`http://localhost:3000/newsList/${newsId}`)
      .then((res) => {
        commit('setSingleNews', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
