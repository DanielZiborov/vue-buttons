const index = require('express');
const app = index();
const port = 3000;
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
app.use(index.json());

const newsList = [
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
];

const cardsList = [
  {
    id: 1,
    price: "$649.95",
    image: "./TravelWebsite/image1.jpg",
    name: "Hawaii",
  },
  {
    id: 2,
    price: "$649.95",
    image: "./TravelWebsite/image2.jpg",
    name: "Statue of Liberty",
  },
  {
    id: 3,
    price: "$649.95",
    image: "./TravelWebsite/image3.jpg",
    name: "Venice",
  },
  {
    id: 4,
    price: "$649.95",
    image: "./TravelWebsite/image4.jpg",
    name: "New Zeland",
  },
  {
    id: 5,
    price: "$649.95",
    image: "./TravelWebsite/image5.jpg",
    name: "England",
  },
  {
    id: 6,
    price: "$649.95",
    image: "./TravelWebsite/image6.jpg",
    name: "Bahamas",
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
];

app.get('/', (req, res) => {
  res.send('My backend!!!')
});

app.get('/newsList', (req, res) => {
  return res.json(newsList)
});

app.get('/cardsList', (req, res) => {
  const searchName = req.query.name;
  if (searchName) {
    const filteredCards = cardsList.filter(card =>
      card.name.toLowerCase().includes(searchName.toLowerCase())
    );
    return res.json(filteredCards);
  }
  return res.json(cardsList)
});

app.get('/newsList/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newsItem = newsList.find(news => news.id === id);
  if (newsItem) {
    return res.json(newsItem);
  } else {
    return res.status(404).send('News not found');
  }
});

app.post('/cardsList', (req, res) => {
  const newCard = req.body;
  if (cardsList.some(card => card.id === newCard.id)) {
    return res.status(400).send('Card with this ID already exists');
  }
  cardsList.push(newCard);
  res.status(201).json(newCard);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
