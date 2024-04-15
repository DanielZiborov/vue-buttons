<template>
	<div class="custom-search">
		<label class="custom-search__label" for="search-input">
			<img
				src="/OceanWebsite/search.svg"
				alt="search"
				class="custom-search__icon"
			>
		</label>
		<input
			type="text"
			:placeholder="placeholderText"
			id="search-input"
			class="custom-search__input"
			v-model="searchText"
			@input="handleSearch"
		>
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
		this.$emit("search", this.searchText);
    },
  },
}
</script>

<style scoped>
.custom-search {
	width: 515px;
	height: 40px;
	display:flex;
	justify-content: start;
	align-items: center;
	padding-left: 20px;
	background-color: white;
	border-radius: 20px;
}

.custom-search__icon {
	margin-right: 10px;
	cursor: pointer;
}

.custom-search__input {
	border: none;
	outline: none;
	border-radius: 20px;
}
</style>
