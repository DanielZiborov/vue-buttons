<template>
  <div class="fone">
    <div class="custom-search">
      <input
        v-model="searchText"
        type="text"
        id="search-input"
        class="custom-search__input"
        :placeholder="placeholderText"
        @input="handleSearch"
      >
      <label class="custom-search__label" for="search-input">
        <img
          src="/TravelWebsite/search.svg"
          alt="search"
          class="custom-search__icon"
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSearch",
  props: {
    placeholderText: String
  },
  data () {
    return {
      searchText: '',
    };
  },
  methods: {
    handleSearch() {
      const emitSearch = () => {
        this.$emit("search", this.searchText);
      };
      emitSearch();
    }
  },
}
</script>

<style scoped lang="less">
.fone {
  background-color: #343338;
  padding-top: 25px;
  padding-bottom: 25px;
  height: 30px;
}
.custom-search {
  width: 300px;
  height: 40px;
  display:flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  background-color: white;
  &__icon {
    margin-left: 100px;
    cursor: pointer;
  }
  &__input {
    border: none;
    outline: none;
  }
}
</style>
