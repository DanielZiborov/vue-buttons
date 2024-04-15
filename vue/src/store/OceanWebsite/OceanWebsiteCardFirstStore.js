export default {
    namespaced: true,
    state: {
          members: JSON.parse(localStorage.getItem('members')) || [
              {
                  id: 1,
                  name: "Whale shark",
                  image: "./OceanWebsite/shark1.jpg",
                  status: "EN",
                  maxAge: "100 years",
              },
              {
                  id: 2,
                  name: "White shark",
                  image: "./OceanWebsite/shark2.jpg",
                  status: "VU",
                  maxAge: "80 years",
              },
              {
                  id: 3,
                  name: "Hammerhead shark",
                  image: "./OceanWebsite/shark3.jpg",
                  status: "EN",
                  maxAge: "50 years",
              },
              {
                  id: 4,
                  name: "Tiger shark",
                  image: "./OceanWebsite/shark4.jpg",
                  status: "NT",
                  maxAge: "50 years",
              },
              {
                  id: 5,
                  name: "Bull shark",
                  image: "./OceanWebsite/shark5.jpg",
                  status: "NT",
                  maxAge: "25 years",
              },
              {
                  id: 6,
                  name: "Atlantic polar shark",
                  image: "./OceanWebsite/shark6.jpg",
                  status: "VU",
                  maxAge: "500 years",
              },
              {
                  id: 7,
                  name: "Mako shark",
                  image: "./OceanWebsite/shark7.jpg",
                  status: "EN",
                  maxAge: "32 years",
              },
              {
                  id: 8,
                  name: "Longwing shark",
                  image: "./OceanWebsite/shark8.jpg",
                  status: "CR",
                  maxAge: "22 years",
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
