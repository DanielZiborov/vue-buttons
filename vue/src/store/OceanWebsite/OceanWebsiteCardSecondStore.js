export default {
    namespaced: true,
    state: {
          news: [
              {
                  id: 1,
                  name: "Is the danger of sharks exaggerated?",
                  image: "/OceanWebsite/news1.jpg",
                  text: "The danger of sharks has greatly increased, the Save Our Seas Foundation notes. On average, 10 people per year die from attacks by these predators, while 30 people die from Muravyov’s bites, and elephants trample about 600 people annually.But it’s still worth remembering that sharks are potentially dangerous to humans, although they are not the monsters that the media portrays them as.",
              },
              {
                  id: 2,
                  name: "Are sharks older than trees?",
                  image: "/OceanWebsite/news2.jpg",
                  text: "Sharks have existed for over 450 million years, while the earliest tree appeared about 350 million years ago.",
              },
              {
                  id: 3,
                  name: "There are more than 400 species of sharks around the world!",
                  image: "/OceanWebsite/news3.jpg",
                  text: "Sharks come in all shapes and sizes! At one end we have the whale shark, which can be up to 12 meters long, and at the other end we have the dwarf lantern shark, which can fit in your hand. About 180 species live in Australian seas.",
              },
              {
                  id: 4,
                  name: "Are sharks sleepwalking?",
                  image: "/OceanWebsite/news4.jpg",
                  text: "Researchers found in a study of 40 gray reef sharks that their diving behavior was influenced by the moon, water temperature and time of day. It appears that the sharks descended to greater depths and used a wider range of depths around the time of the full moon.",
              },
              {
                  id: 5,
                  name: "Do sharks see colors?",
                  image: "/OceanWebsite/news5.jpg",
                  text:"Even though sharks have excellent eyesight, scientists believe that sharks are most likely color blind.",
              },
              {
                  id: 6,
                  name: "How important are sharks?",
                  image: "/OceanWebsite/news6.jpg",
                  text:"Research in 2017 found that sharks play a key role in regulating the health of coral reefs. During a four-month expedition from Cairns to Broome, a team of scientists from the University of Western Australia discovered that healthier reefs were home to larger numbers of sharks. Because sharks keep medium-sized predators in check, this allows small reef fish to thrive and care for real corals.",
              },
          ]
    },
    getters: {
        getNews: state => state.news,
        getNewsById: state => id => state.news.find(news => news.id === id)
    },
    mutations: {},
    actions: {}
}
