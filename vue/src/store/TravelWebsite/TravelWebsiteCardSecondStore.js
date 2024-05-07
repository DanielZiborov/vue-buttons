export default {
    namespaced: true,
    state: {
          members: JSON.parse(localStorage.getItem('members')) || [
              {
                  id: 1,
                  price: "$649.95",
                  image: "./TravelWebsite/image1.jpg",
                  name:"Hawaii"
              },
              {
                  id: 2,
                  price: "$649.95",
                  image: "./TravelWebsite/image2.jpg",
                  name:"Statue of Liberty"
              },
              {
                  id: 3,
                  price: "$649.95",
                  image: "./TravelWebsite/image3.jpg",
                  name: "Venice"
              },
              {
                  id: 4,
                  price: "$649.95",
                  image: "./TravelWebsite/image4.jpg",
                  name: "New Zeland"
              },
              {
                  id: 5,
                  price: "$649.95",
                  image: "./TravelWebsite/image5.jpg",
                  name: "England"
              },
              {
                  id: 6,
                  price: "$649.95",
                  image: "./TravelWebsite/image6.jpg",
                  name: "Bahamas"
              },
              {
                  id: 7,
                  price: "$649.95",
                  image: "./TravelWebsite/image7.jpg",
                  name: "Bermuda",
              },
              {
                  id: 8,
                  price: "$649.95",
                  image: "./TravelWebsite/image8.jpg",
                  name: "Caribs",
              },
          ]
    },
    getters: {
      getMembers: state => state.members
    },
    mutations: {
      addMember (state, newMember) {
        state.members.push(newMember);
        localStorage.setItem('members', JSON.stringify(state.members));
      }
    },
    actions: {
      addMember({ commit }, newMember) {
        commit('addMember', newMember);
      }
    }
}
