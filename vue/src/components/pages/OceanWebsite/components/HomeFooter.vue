<template>
	<div class="footer">
		<div class="footer__register">
			<div class="footer__text"><span>Register Now So You Support Us</span></div>
			<div class="footer__inputBox">
				<input 
					type="text" 
					class="footer__input" 
					placeholder="Enter your Email"
				>
				<button class="footer__btn">Subcribe Now</button>
			</div>
		</div>
		<div class="footer__navBox">
			<div class="footer__nav">
				<ul class="footer__list">
					<router-link to="/OceanWebsiteHomePage">
						<li class="footer__item">Home</li>
					</router-link>
					<router-link to="#">
						<li class="footer__item">Category</li>
					</router-link>
					<router-link to="#">
						<li class="footer__item">About us</li>
					</router-link>
					<router-link to="/OceanWebsiteCreatePage">
						<li class="footer__item">Create</li>
					</router-link>
				</ul>
			</div>
			<div class="footer__icons">
				<router-link to="#" class="footer__icon">
					<img src="/OceanWebsite/facebook.svg" alt="facebook">
				</router-link>
				<router-link to="#" class="footer__icon">
					<img src="/OceanWebsite/twitter.svg" alt="twitter">
				</router-link>
				<router-link to="#" class="footer__icon">
					<img src="/OceanWebsite/instagram.svg" alt="instagram">
				</router-link>
				<router-link to="#" class="footer__icon">
					<img src="/OceanWebsite/youtube.svg" alt="youtube">
				</router-link>
			</div>
		</div>
		<hr class="footer__line">
		<div class="footer__last">
			<div class="footer__c">
				<span>Ⓒ 2010 OceanInc. All rights reserved.</span>
			</div>
			<div class="footer__servAndPrivacy">
				<ul class="footer__listLast">
					<li class="footer__itemsLast"><a href="/" class="footer__linkLast">Our partners</a></li>
					<li class="footer__itemsLast"><a href="/" class="footer__linkLast">Privacy Policy</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "HomeFooter",
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.footer {
	height: 450px; 
	background-color: #00ccff;
	padding: 76px 121px 100px;
	&__register {
		background-color: #f5cfff;
		width: 100%;
		border-radius: 20px;
		padding: 32px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 40px;
	}
	&__text {
		color: #a609b1;
		font-size: 30px;
		font-weight: 600;
		width: 500px;
		line-height: 1.5;
	}
	&__inputBox {
		width: 711px;
		height: 70px;
		background-color: #d1fdff;
		display: flex;
		border-radius: 20px;
		align-items: center;
		justify-content: space-around;
		padding: 10px;
	}
	&__input{
		width: 509px;
		height: 45px;
		background-color: transparent;
		border-radius: 15px;
		border: 1px solid #000000;
		padding-left: 20px;
		outline: none;
	}
	&__btn {
		height: 45px;
		width: 162px;
		border-radius: 15px;
		background-color: #75bfff;
		border: none;
		color: #000000;
		transition: 0.5s all;
		&:hover {
			background-color: #fc5dff;
			cursor: pointer;
		}
	}
	&__navBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
	}
	&__list {
		list-style: none;
		width: 425px;
		display: flex;
		justify-content: space-between;
	}
	&__item {
		font-weight: 600;
		text-decoration: none;
		color: black;
		transition: 0.5s all;
		&:hover {
		color: #a609b1;
		}
	}
	&__icon {
		margin-right: 50px;
		&:last-child {
			margin-right: 0;
		}
	}
	&__line {
		color:black;
		margin-bottom: 40px;
	}
	&__last {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__c {
		color: rgb(0, 0, 0);
		font-weight: 600;
	}
	&__listLast {
		list-style: none;
		width: 300px;
		display: flex;
		justify-content: space-between;
	}
	&__linkLast {
		color:#000000;
		&:hover {
		color: #a609b1;
		}
	}
}
</style>
