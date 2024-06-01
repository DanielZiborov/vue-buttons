<template>
  <div class="second">
    <div class="second-section">
      <div class="second-section__envelope">
        <div class="second-section__description">
          <h1 class="second-section__title">Featured products</h1>
        </div>
        <CustomSearch
          placeholderText=""
          @search="(searchText) => loadCard(searchText)"
        />
      </div>
      <div class="second-section__cards-place">
        <div class="second-section__cards">
          <TravelCards
            v-for="member in filteredMembers"
            :key="member.id"
            :id="member.id"
            :image="member.image"
            :name="member.name"
            :price="member.price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TravelCards from "./TravelCards.vue";
import CustomSearch from "./CustomSearch";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "SecondSection",
  components: {
    TravelCards,
    CustomSearch,
  },
  computed: {
    ...mapGetters("TravelWebsiteCardSecondStore", ["getCard"]),
    filteredMembers() {
      return this.getCard
    },
  },
  methods: {
    ...mapActions('TravelWebsiteCardSecondStore', [
      'loadCard'
    ]),
  },
  created () {
    this.loadCard('')
  },
};
</script>

<style scoped lang="less">
.second-section {
  margin-bottom: -16px;
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    grid-gap: 10px;
    margin: 0 auto;
    max-width: 1200px;
  }
  &__cards-place {
    width: 100%;
    background-color: #252527;
  }
  &__envelope {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__description {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #343338;
    height: 30px;
  }
  &__text {
    font-size: 15px;
  }
  &__title {
    margin-left: 130px;
    font-size: 20px;
    color: #ffffff;
  }
}
</style>
