<template>
  <div class="under">
    <img
      src="/TravelWebsite/UnderHead.png"
      alt="image"
      class="under__image"
    >
    <span class="under__text1">Fantastic weekend in</span>
    <span class="under__text2">Rio</span>
    <div class="under__btn">
      <span class="under__btn-text1">More Info</span>
      <span class="under__btn-text2">></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnderHead",
}
</script>

<style scoped lang="less">
.under {
  position:relative;
  margin-top:-4px;
  margin-bottom:-4px;
  &__image {
    width: 100%;
    height: auto;
  }
  &__text1 {
  position:absolute;
    top:80px;
    left:210px;
    font-size:46px;
    font-weight:bold;
    color:white;
    font-family:century,times,verdana;
  }
  &__text2 {
    position:absolute;
    top:40px;
    left:650px;
    font-size:110px;
    font-weight:bold;
    color:yellow;
    font-style:italic;
    font-family:times,grotesk,geramond;
  }
  &__btn {
    position: absolute;
    top:85px;
    left:830px;
    width:120px;
    height:37px;
    background-color: white;
  }
  &__btn-text1 {
    display:inline-block;
    color:black;
    padding-left: 15px;
    font-size:14px;
    top: 3px;
    padding-bottom: 8px;
  }
  &__btn-text2 {
    display: inline-block;
    color:black;
    padding-left:19px;
    font-size:14px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
</style>
