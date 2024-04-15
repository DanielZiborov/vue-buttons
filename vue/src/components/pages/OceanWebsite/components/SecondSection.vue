<template>
	<div class="second-section">
    <h3 class="second-section__text">Something you didn't know but wanted to know</h3>
    <h1 class="second-section__name">Interesting facts about the ocean</h1>
		<div class="second-section__cards">
			<NewsCard />
		</div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue"
export default {
	name: "SecondSection",
	components: {
		NewsCard,
	}
};
</script>

<style scoped lang="less">
.second-section {
    font-weight: 600;
	padding: 50px 130px;
	&__text {
		font-size: 15px;
	}
	
	&__name {
		margin-top: 8px;
		font-size: 20px;
		color: #000000;
	}
}
</style>
