<template>
	<div class="news-page">
		<div class="news-page__container">
			<div 
				class="news-page__card"
				v-for="news in filteredNews"
				:key="news.id"
			>
				<img 
					:src="news.image"
					:alt="news.id"
					class="news-page__image"
				>
				<h1 class="news-page__name">{{ news.name }}</h1>
				<p class="news-page__text">{{ news.text }}</p>
			</div>
		</div>
		<HomeFooter />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeFooter from "../HomeFooter.vue"
export default {
	name: "TravelWebsiteNewsPage",
	components: {
		HomeFooter,
	},
	computed: {
		...mapGetters('TravelWebsiteCardFirstStore', [
			'getNews',
		]),
		filteredNews () {
			const newsId = this.$route.params.id;
			return this.getNews.filter(news => news.id === newsId);
		}
	}
}
</script>

<style lang="less" scoped>
.news-page {
	&__container {
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
		width: 70%
	}
	&__image {
		width: 500px;
		margin-bottom: 30px;
	}
	&__name {
		width: 500px;
		margin: 0 auto;
		margin-bottom: 30px;
	}
	&__text {
		width: 700px;
		margin: 0 auto;
	}
}
</style>
