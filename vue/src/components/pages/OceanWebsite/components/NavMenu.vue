<template>
	<div class="navMenu">
		<div class="navMenu__logo">
			<span class="navMenu__logo--large">Ocean</span><br>And it's inhabitants
		</div>
		<div class="navMenu__list">
			<router-link to="/OceanWebsiteHomePage">
				<div class="navMenu__items">Home</div>
			</router-link>
			<router-link to="#">
				<div class="navMenu__items">Category</div>
			</router-link>
			<router-link to="#">
				<div class="navMenu__items">About us</div>
			</router-link>
			<router-link to="/OceanWebsiteCreatePage">
				<div class="navMenu__items">Create</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavMenu"
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
.navMenu {
	display: flex;
	width: 100%;
	background-color: transparent;
	align-items: center;
	justify-content: left;
	grid-gap: 100px;
	padding-left: 20px;
	&__logo {
		text-align: center;
		color: #100602;
		font-weight: 600;
		font-size: 10px;
		&--large {
			font-family: "Lato";
			font-weight: 600;
			font-size: 25px;
		}
	}
	&__list {
		width: 400px;
		list-style: none;
		display: flex;
		justify-content: space-between;
	}
	&__items {
		text-decoration: none;
		color: #020000;
		font-weight: 600;
		transition: .5s all;
		&:hover {
			color: #b800fb;
		}
	}
}
</style>
