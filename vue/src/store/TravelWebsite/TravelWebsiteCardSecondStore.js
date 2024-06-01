import axios from "axios";

const state = {
  cardsList: []
}

const getters = {
  getCard: state => state.cardsList
}

const mutations = {
  setCard: (state, payload) => {
    state.cardsList = payload
  }
}

const actions = {
  loadCard: ({ commit }, searchText = '') => {
    axios.get('http://localhost:3000/cardsList', {
      params: {
        name: searchText
      }
    })
    .then((res) => {
      commit('setCard', res.data)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Done")
    })
  },
  addCard: ({ dispatch }, newCard) => {
    axios.post('http://localhost:3000/cardsList', newCard)
      .then(() => {
        dispatch('loadCard');
      })
      .catch((error) => {
        console.error(error);
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
