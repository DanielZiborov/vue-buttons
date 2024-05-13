<template>
  <div class="cards">
    <img class="cards__image" :src="image" :alt="name" />
    <div class="cards__text">
      <h2 class="cards__price">{{ price }}</h2>
      <div class="cards__description">
        <span class="cards__name"
          ><strong>{{ name }}</strong></span
        >
      </div>
    </div>
    <div class="cards__labels">
      <div class="cards__label1">
        <h class="cards__labelText1">Left</h>
      </div>
      <div class="cards__label2">
        <h class="cards__labelText2">Right</h>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelCards",
  props: {
    id: Number,
    image: String,
    name: String,
    price: String,
  },
};
</script>

<style scoped lang="less">
.cards {
  margin-top: 7px;
  &__image {
    width: 246px;
    height: 240px;
    margin: 8px;
  }
  &__text {
    margin-left: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-style: normal;
  }
  &__description {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  &__name {
    color: #ffffff;
    margin-right: 10px;
  }
  &__price {
    color: #ffffff;
    font-size: 20px;
  }
  &__labels {
    display: flex;
    margin-left: 10px;
    margin-top: 3px;
    margin-bottom: 60px;
  }
  &__label1 {
    margin-bottom: 8px;
    width: 94px;
    height: 30px;
    background-color: #fb504d;
  }
  &__label2 {
    margin-bottom: 8px;
    width: 60px;
    height: 30px;
    background-color: #48484a;
  }
  &__labelText1,
  &__labelText2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding-top: 7px;
  }
}
</style>
