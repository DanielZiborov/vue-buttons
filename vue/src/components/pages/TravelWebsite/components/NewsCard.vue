<template>
  <div class="scroll-container">
    <div class="cards" ref="сontainer">
      <div
        v-for="(news, index) in getNews"
        class="cards__content"
        :key="news.id"
        :style="{
          'scroll-snap-align': activeIndex === index ? 'start' : 'none',
        }"
      >
        <router-link
          :to="{ name: 'TRAVELWEBSITENEWSPAGE', params: { id: news.id } }"
        >
          <img class="cards__image" :src="news.image" :alt="news.name" />
          <h2 class="cards__name">{{ news.name }}</h2>
          <h2 class="cards__price">{{ news.price }}</h2>
        </router-link>
      </div>
    </div>
    <div class="indicators">
      <span
        v-for="(indicator, index) in indicatorsCount"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="() => goToSlide(index)"
        class="indicator"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsCard",
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    ...mapGetters("TravelWebsiteCardFirstStore", ["getNews"]),
    indicatorsCount() {
      return Math.ceil(this.getNews.length / 2 + 1);
    },
  },
  methods: {
    goToSlide(index) {
      this.activeIndex = index;
      const cards = this.$refs.сontainer.querySelectorAll(".cards__content");
      cards.forEach((card, i) => {
        card.style.display = i === index ? "block" : "none";
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.сontainer.style.overflowX = "hidden";
    });
  },
};
</script>

<style scoped lang="less">
.scroll-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.cards {
  display: flex;
  position: relative;
  width: 100%;
  scroll-snap-type: x mandatory;
  overflow: hidden;
  &__content {
    width: 100%;
    border: none;
    display: none;
    &:first-child {
      display: block;
    }
  }
  &__image {
    width: 100%;
    height: auto;
    justify-content: center;
    align-content: center;
  }
  &__name {
    position: absolute;
    color: white;
    font-size: 100px;
    top: 150px;
    left: 190px;
  }
  &__price {
    position: absolute;
    color: white;
    top: 260px;
    left: 190px;
  }
}
.indicators {
  position: absolute;
  left: 190px;
  top: 380px;
}
.indicator {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  margin: 0 2px;
  cursor: pointer;
  &.active {
    background-color: white;
  }
}
</style>
