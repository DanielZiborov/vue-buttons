<template>
    <div class="home">
        <div class="home__container">
            <HomeHeader class="home__header"/>
            <UnderHead/>
            <SecondSection />
            <HomeFooter class="home__footer"/>
        </div>
    </div>
</template>

<script>
import HomeHeader from "../HomeHeader.vue"
import HomeFooter from "../HomeFooter.vue"
import SecondSection from "../SecondSection.vue"
import UnderHead from '../UnderHead.vue'
export default {
  name: "TravelWebsiteHomePage",
  components: {
    HomeHeader,
    SecondSection,
    HomeFooter,
    UnderHead
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: none;
  &__container {
    max-width: 1520px;
    margin: 0 auto;
  }
}
</style>
