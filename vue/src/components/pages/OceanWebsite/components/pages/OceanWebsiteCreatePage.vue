<template>
	<div class="create">
		<div class="create__container">
			<NavMenu class="create__nav"/>
			<div class="create__section">
				<div class="create__form">
					<label for="name" class="create__label">Name:</label>
					<input 
						v-model="formData.name" 
						type="text" 
						placeholder="Name" 
						id="name" 
						class="create__input"
					>
				</div>
				<div class="create__form">
					<label for="id" class="create__label">Id:</label>
					<input 
						v-model="formData.id" 
						type="text" 
						placeholder="Id" 
						id="id" 
						class="create__input"
					>
				</div>
				<div class="create__form">
					<label for="img" class="create__label">Image:</label>
					<input 
						v-model="formData.image" 
						type="url" 
						placeholder="URL of image" 
						id="img" 
						class="create__input"
					>
				</div>
				<div class="create__form">
					<label for="maxAge" class="create__label">maxAge:</label>
					<input 
						v-model="formData.maxAge" 
						type="text" 
						placeholder="maxAge" 
						id="maxAge" 
						class="create__input"
					>
				</div>
				<div class="create__form">
					<label for="status" class="create__label">status:</label>
					<input 
						v-model="formData.status" 
						type="text" 
						placeholder="status" 
						id="status" 
						class="create__input"
					>
				</div>
				<button @click="createMember" class="create__btn">Create</button>
			</div>
			<Footer />
		</div>
	</div>
</template>

<script>
import NavMenu from "../NavMenu.vue"
import Footer from "../HomeFooter.vue"
import { mapActions } from "vuex";
export default {
  name: "OceanWebsiteHomePage",
	components: {
		NavMenu,
		Footer
	},
	data () {
    return {
      formData: {
        name: '',
        id: '',
        image: '',
		maxAge: '',
		status: '',
      }
    };
  },
	methods: {
		...mapActions('OceanWebsiteCardFirstStore', [
      'addMember'
    ]),
    createMember () {
      const newMember = {
        name: this.formData.name,
        id: this.formData.id,
        image: this.formData.image,
		maxAge: this.formData.maxAge,
		status: this.formData.status,
      };
    this.addMember(newMember);
    this.formData.name = '';
    this.formData.id = '';
    this.formData.image = '';
	this.formData.maxAge = '';
	this.formData.status = '';
    }
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
.create {
	background-color: #00fff7;
	padding: 40px 130px 0;
	&__container {
		max-width: 1520px;
		margin: 0 auto;
	}
	&__nav {
		margin-bottom: 50px;
	}
	&__section {
		border: 2px solid white;
		padding: 20px 0;
		border-radius: 20px;
		text-align: center;
		margin-bottom: 50px;
	}
	&__label {
		margin-right: 10px;
		font-size: 14px;
	}
	&__input {
		margin-bottom: 20px;
		border: none;
		outline: none;
		border-radius: 20px;
		width: 515px;
		height: 40px;
		padding-left: 20px;
	}
	&__btn {
		height: 45px;
		width: 170px;
		border-radius: 30px;
		border: none;
		outline: none;
		background-color: #75bfff;
		color: #000000;
		transition: 0.5s all;
		&:hover {
			cursor: pointer;
			background-color: #fc5dff;
		}
	}
}
</style>
