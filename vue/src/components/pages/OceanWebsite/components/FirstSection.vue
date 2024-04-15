<template>
  <div class="first">
		<div class="first-section">
			<div class="first-section__envelope">
				<div class="first-section__description">
					<h1 class="first-section__title">Look at some of the ocean's representatives</h1>
				</div>
				<CustomSearch placeholderText="Search..." @search="filterMembers" />
			</div>
			<div class="first-section__cards">
				<OceanCards 
					v-for='member in filteredMembers'
					:key="member.id"
					:id="member.id"
					:image="member.image"
					:name="member.name"
					:status="member.status"
					:maxAge="member.maxAge"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import OceanCards from "./OceanCards";
import CustomSearch from "./CustomSearch";
import { mapGetters } from "vuex";
export default {
	name: 'FirstSection',
  components: {
    OceanCards,
    CustomSearch,
  },
	data () {
		return {
			filteredMembersData: []
		};
  },
	computed: {
		...mapGetters('OceanWebsiteCardFirstStore', [
			'getMembers'
		]),
		filteredMembers () {
      return this.filteredMembersData.length != 0 ? this.filteredMembersData : this.getMembers;
    }
	},
  methods: {
    filterMembers (searchText) {
      this.filteredMembersData = this.getMembers.filter(member =>
        member.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }
};
</script>

<style scoped lang="less">
.first-section {
	width: 100%;
	padding-top: 50px;
	padding-bottom: 50px;
	background-color: #f5cfff;
	&__cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
		grid-gap: 10px;
		margin: 0 auto;
		max-width: 1200px;
	}
	&__envelope {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	&__description {
		font-style: normal;
		font-weight: 600;
		margin-left: -3%;
	}
	&__text {
		font-size: 15px;
	}
	&__title {
		margin-top: 8px;
		margin-left: 70px;
		font-size: 20px;
		color: #000000;
	}
}
</style>
