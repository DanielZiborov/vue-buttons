<template>
  <div class="scroll-container">
    <div class="cards" ref="сontainer">
      <div
        v-for="(news, index) in getNews"
        :key="news.id"
        :style="{
          'scroll-snap-align': activeIndex === index ? 'start' : 'none',
        }"
		class="cards__content"
      >
        <router-link :to="{ name: 'OCEANWEBSITENEWSPAGE', params: { id: news.id } }">
          <img 
            class="cards__image" 
            :src="news.image" 
            :alt="news.name" 
          />
          <div class="cards__text">
            <div class="cards__label">
              <p class="cards__labelText">Ocean facts</p>
            </div>
            <h2 class="cards__name">{{ news.name }}</h2>
            <div class="cards__description">
              <span class="cards__descriptionText">{{ news.text }}</span>
            </div>
          </div>
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
  data () {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    ...mapGetters('OceanWebsiteCardSecondStore', [
      'getNews'
    ]),
    indicatorsCount() {
      return Math.ceil(this.getNews.length / 2 + 1);
    }
  },
  methods: {
    goToSlide(index) {
      this.activeIndex = index;
    },
  },
  mounted () {
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
}
.cards {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  max-width: 1200px;
  margin: 0 auto;
  &__content {
    display: flex;
    flex-direction: column;
    width: 373px;
    background-color: #dffffc;
    border-radius: 25px;
    margin-top: 15px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  &__image {
    width: 358px;
    height: 240px;
    margin: 8px;
    border-radius: 20px;
  }
  &__label {
    margin-bottom: 8px;
    width: 94px;
    height: 20px;
    border-radius: 50px;
    background-color:#00ccff;
    border: none;
    color: #000000;
    font-weight: 600;
    font-size: 10px;
  }
  &__labelText {
    text-align: center;
    padding-top: 3px;
  }
  &__text {
    margin-left: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-style: normal;
    line-height: 17px;
  }
  &__name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 7px;
    line-height: 24px;
  }
  &__description {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
    padding-right: 5px;
    height: 55px;
    overflow: hidden;
	color: black;
  }
}
.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.indicator {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
  &.active { 
    background-color: #333;
  }
}
</style>
