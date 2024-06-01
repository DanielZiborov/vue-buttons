<template>
  <div class="create">
    <div class="create__container">
      <div class="create__section">
        <div class="create__form">
          <label for="name" class="create__label">name:</label>
          <input
            v-model="cardData.name"
            type="text"
            placeholder="name"
            id="name"
            class="create__input"
          />
        </div>
        <div class="create__form">
          <label for="id" class="create__label">Id:</label>
          <input
            v-model="cardData.id"
            type="text"
            placeholder="Id"
            id="id"
            class="create__input"
          />
        </div>
        <div class="create__form">
          <label for="img" class="create__label">image:</label>
          <input
            v-model="cardData.image"
            type="url"
            placeholder="URL of image"
            id="img"
            class="create__input"
          />
        </div>
        <div class="create__form">
          <label for="price" class="create__label">price:</label>
          <input
            v-model="cardData.price"
            type="text"
            placeholder="price"
            id="price"
            class="create__input"
          />
        </div>
        <button class="create__btn" @click="() => createCard()" >Create</button>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../HomeFooter.vue";
import { mapActions } from "vuex";
export default {
  name: "TravelWebsiteCreatePage",
  components: {
    Footer,
  },
  data() {
    return {
      cardData: {
        name: "",
        id: "",
        image: "",
        price: "",
      },
    };
  },
  methods: {
    ...mapActions("TravelWebsiteCardSecondStore", ["addCard", "loadCard"]),
    createCard() {
      this.addCard(this.cardData).then(() => {
        this.loadCard(); 
      });
      
      this.cardData.name = "";
      this.cardData.id = "";
      this.cardData.image = "";
      this.cardData.price = "";
    },
  },
};
</script>

<style lang="less" scoped>
.create {
  background-color: #252527;
  width: 100%;
  &__container {
    max-width: 1520px;
    margin: 0 auto;
  }
  &__section {
    padding: 20px 0;
    text-align: center;
    margin-bottom: 50px;
  }
  &__label {
    margin-right: 10px;
    font-size: 14px;
    color: white;
  }
  &__input {
    margin-bottom: 20px;
    border: none;
    outline: none;
    width: 515px;
    height: 40px;
    padding-left: 20px;
  }
  &__btn {
    height: 45px;
    width: 170px;
    background-color: #ff0000;
    color: white;
    font-size: 20px;
    border: none;
  }
}
</style>
