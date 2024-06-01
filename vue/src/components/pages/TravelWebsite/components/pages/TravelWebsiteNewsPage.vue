<template>
  <div class="news-page">
    <div class="news-page__container">
      <img class="news-page__image" :src="getSingleNews.image" :alt="getSingleNews.name" />
      <h1 class="news-page__name">{{ getSingleNews.name }}</h1>
      <p class="news-page__text">{{ getSingleNews.text }}</p>
    </div>
    <HomeFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeFooter from "../HomeFooter.vue";
export default {
  name: "TravelWebsiteNewsPage",
  components: {
    HomeFooter,
  },
  computed: {
   ...mapGetters("TravelWebsiteCardFirstStore", ["getSingleNews"]),
  },
  created() {
    const newsId = this.$route.params.id;
    this.$store.dispatch('TravelWebsiteCardFirstStore/loadSingleNews', newsId);
  },
};
</script>

<style lang="less" scoped>
.news-page {
  &__container {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    padding: 40px;
  }
  &__menu {
    margin-bottom: 50px;
  }
  &__card {
    border: none;
    margin: 0 auto;
    text-align: center;
    padding: 50px 0;
    width: 70%;
  }
  &__image {
    width: 500px;
    margin-bottom: 30px;
  }
  &__name {
    width: 500px;
    margin: 0 auto;
    margin-bottom: 30px;
    display: block; 
    text-align: center; 
  }
  &__text {
    width: 700px;
    margin: 0 auto;
    display: block; 
    text-align: center; 
  }
}
</style>
