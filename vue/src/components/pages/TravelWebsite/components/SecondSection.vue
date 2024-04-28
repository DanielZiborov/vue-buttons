<template>
    <div class="second">
          <div class="second-section">
              <div class="second-section__envelope">
                  <div class="second-section__description">
                      <h1 class="second-section__title">Featured products</h1>
                  </div>
                  <CustomSearch placeholderText="" @search="filterMembers" />
              </div>
              <div class="second-section__cards-place">
                <div class="second-section__cards">
                    <TravelCards 
                        v-for='member in filteredMembers'
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
  import { mapGetters } from "vuex";
  export default {
      name: 'SecondSection',
    components: {
      TravelCards,
      CustomSearch,
    },
      data () {
          return {
              filteredMembersData: []
          };
    },
      computed: {
          ...mapGetters('TravelWebsiteCardSecondStore', [
              'getMembers'
          ]),
          filteredMembers () {
        return this.filteredMembersData.length != 0 ? this.filteredMembersData : this.getMembers;
      }
      },
    methods: {
      filterMembers (searchText) {
        this.filteredMembersData = this.getMembers.filter(member =>
          member.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    }
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
        width:100%;
        background-color: #252527;
      }
      &__envelope {
          display: flex;
          justify-content: space-around;
          align-items: center;
      }
      &__description {
          width:100%;
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
  