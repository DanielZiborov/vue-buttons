<template>
  <div class="cards">
    <div class="cards__content">
			<img 
				class="cards__image" 
				:src="image" 
				:alt="name" 
			/>
      <div class="cards__text">
        <h2 class="cards__name">{{ name }}</h2>
        <div class="cards__description">
          <span class="cards__status">Status: <strong>{{ status }}</strong></span>
          <span class="cards__maxAge">Max age: <strong>{{ maxAge }}</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OceanCards",
  props: {
  id: Number,
  image: String,
  name: String, 
  status: String,
  maxAge: Number
  }
};
</script>

<style scoped lang="less">
.cards {
	&__content {
  display: flex;
  flex-direction: column;
  width: 262px;
  background-color: #dffffc;
  border-radius: 25px;
  margin-top: 15px;
  cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
	&__image {
		width: 246px;
		height: 240px;
		margin: 8px;
		border-radius: 25px;
	}
	&__text {
		margin-left: 16px;
		margin-top: 5px;
		margin-bottom: 10px;
		font-style: normal;
	}
	&__name {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 7px;
	}
	&__description {
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 5px;
	}
	&__status {
		color: #000000;
		margin-right: 10px;
	}
	&__maxAge {
		color: #000000;
		&:before {
			content: "•";
			color: #000000;
			padding-right: 10px;
		}
	}
}
</style>
