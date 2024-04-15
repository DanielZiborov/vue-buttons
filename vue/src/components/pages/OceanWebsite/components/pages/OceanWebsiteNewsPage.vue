<template>
	<div class="news-page">
		<div class="news-page__container">
			<NavMenu class="news-page__menu"/>
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
import NavMenu from "../NavMenu.vue"
import HomeFooter from "../HomeFooter.vue"
export default {
	name: "OceanWebsiteNewsPage",
	components: {
		NavMenu,
		HomeFooter,
	},
	computed: {
		...mapGetters('OceanWebsiteCardSecondStore', [
			'getNews',
			'getId'
		]),
		filteredNews () {
			const newsId = this.$route.params.id;
			return this.getNews.filter(news => news.id === newsId);
		}
	}
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.news-page {
	background-color: #00fff7;
	&__container {
		padding: 40px;
	}
	&__menu {
		margin-bottom: 50px;
	}
	&__card {
		border: 2px solid white;
		margin: 0 auto;
		text-align: center;
		padding: 50px 0;
		border-radius: 20px;
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
