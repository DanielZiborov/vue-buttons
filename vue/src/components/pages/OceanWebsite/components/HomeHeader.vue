<template>
	<div class="header">
		<NavMenu class="header__menu"/>
		<div class="header__contentBox">
			<h1 class="header__title">Interesting facts about the ocean<br>and its inhabitants</h1>
			<p class="header__text">The ocean is an endless expanse of water, full of secrets and wonders. 
                The ocean regulates the Earth's climate and provides us with oxygen. Ocean exploration and conservation is critical to our future well-being.</p>
			<button class="header__btn header__btn--first">Introduction</button>
			<button class="header__btn header__btn--second">Explore Now</button>
		</div>
		<img 
			src="/OceanWebsite/mainShark.png"
			alt="shark" 
			class="header__img" 
		>
	</div>
</template>

<script>
import NavMenu from "./NavMenu.vue"
export default {
  name: "OceanWebsiteHomePage",
	components: {
		NavMenu
  },
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.header {
	position: relative;
	overflow: hidden;
	background-color: #00ccff;
	padding: 40px 130px;
	height: 735px;
	&__menu {
		position: relative;
		z-index: 100;
		margin-bottom: 110px;
	}
	&__contentBox {
		width: 475px;
	}
	&__title {
		font-family: 'Times New Roman';
		font-size: 60px;
		font-weight: 620;
		color: #a609b1;
		margin-bottom: 40px;
	}
	&__text {
		font-weight: 550;
		line-height: 2;
		margin-bottom: 40px;
	}
	&__btn {
		height: 45px;
		width: 170px;
		border-radius: 30px;
		border: none;
		outline: none;
		&:hover {
			cursor: pointer;
		}
		&--first {
			background-color:#f9a9ff ;
			border: 3px solid black;
			border-radius: 0;
			transition: 0.5s all;
			margin-right: 10px;
			&:hover {
				border-color: #0026ff;
				color:#0026ff;
			}
		}
		&--second {
			background-color: #f9a9ff;
			border: 3px solid black;
			transition: 0.5s all;
			margin-right: 10px;
			&:hover {
				border-color: #0026ff;
				color:#0026ff;
			}
		}
	}
	&__img {
		position: absolute;
		bottom: 0;
		right: 90px;
		z-index: 20;
		width: 650px;
		height: 650px;
	}
}
</style>
