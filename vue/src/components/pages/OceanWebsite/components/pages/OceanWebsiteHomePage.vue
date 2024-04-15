<template>
	<div class="home">
		<div class="home__container">
			<HomeHeader class="home__header"/>
			<FirstSection />
			<SecondSection />
			<HomeFooter class="home__footer"/>
		</div>
	</div>
</template>

<script>
import HomeHeader from "../HomeHeader.vue"
import HomeFooter from "../HomeFooter.vue"
import FirstSection from "../FirstSection.vue"
import SecondSection from "../SecondSection.vue"
export default {
  name: "OceanWebsiteHomePage",
	components: {
		HomeHeader,
		HomeFooter,
		FirstSection,
		SecondSection
  }
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
* {
	font-family: "Montserrat";
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	overflow: hidden;
}
.home {
	background-color: #00fff7;
	&__container {
		max-width: 1520px;
		margin: 0 auto;
	}
}
</style>
