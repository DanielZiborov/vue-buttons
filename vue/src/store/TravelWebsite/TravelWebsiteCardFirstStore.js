export default {
  namespaced: true,
  state: {
    news: [
      {
        id: 1,
        image: "/TravelWebsite/news1.jpg",
        name: "Hawaii",
        text: "Hawaii is an island state of the United States, in the Pacific Ocean about 2,000 miles (3,200 km) southwest of the U.S. mainland.",
        price: "from $980",
      },
      {
        id: 2,
        image: "/TravelWebsite/news2.jpg",
        name: "Machu Picchu",
        text: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. ",
        price: "from $980",
      },
      {
        id: 3,
        image: "/TravelWebsite/news3.jpg",
        name: "Bahamas",
        text: "The Bahamas, officially the Commonwealth of The Bahamas, is an island country within the Lucayan Archipelago of the West Indies in the Atlantic Ocean.",
        price: "from $980",
      },
    ],
  },
  getters: {
    getNews: (state) => state.news,
  },
  mutations: {},
  actions: {},
};
