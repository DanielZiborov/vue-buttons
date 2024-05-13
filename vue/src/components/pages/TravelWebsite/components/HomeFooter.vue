<template>
  <div class="footer">
    <ul class="footer__list">
      <router-link to="#">
        <li class="footer__item">Information</li>
      </router-link>
      <router-link to="#">
        <li class="footer__item">My account</li>
      </router-link>
      <router-link to="#">
        <li class="footer__item">Follow us</li>
      </router-link>
      <router-link to="#">
        <li class="footer__item">Newsletter</li>
      </router-link>
      <router-link to="/TravelWebsiteCreatePage">
        <li class="footer__item">Create</li>
      </router-link>
    </ul>
    <div class="footer__input-box">
      <input
        type="text"
        placeholder="Enter your Email                     >"
        class="footer__input"
      />
    </div>
    <div class="footer__icons">
      <img src="/TravelWebsite/facebook.png" class="footer__icon" />
      <img src="/TravelWebsite/twitter.png" class="footer__icon" />
      <img src="/TravelWebsite/3image.png" class="footer__icon" />
      <img src="/TravelWebsite/4image.png" class="footer__icon" />
      <img src="/TravelWebsite/5image.png" class="footer__icon" />
    </div>
    <ul class="footer__col1">
      <li class="footer__col1el">Specials</li>
      <li class="footer__col1el">New products</li>
      <li class="footer__col1el">Best seters</li>
      <li class="footer__col1el">Contact us</li>
      <li class="footer__col1el">Pages configuration</li>
    </ul>
    <ul class="footer__col2">
      <li class="footer__col2el">My orders</li>
      <li class="footer__col2el">My places return</li>
      <li class="footer__col2el">My credit slips</li>
      <li class="footer__col2el">My adventure</li>
      <li class="footer__col2el">My personal info</li>
    </ul>
    <p class="footer__last">Travel Ⓒ 2014 Privacy Policy</p>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
};
</script>

<style scoped lang="less">
.footer {
  display: inline-block;
  background-color: #343338;
  width: 100%;
  height: 470px;
  &__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  &__item {
    font-weight: 600px;
    color: white;
    font-family: "Trebuchet MS";
    padding-left: 65px;
    padding-top: 15px;
  }
  &__input {
    width: 200px;
    height: 45px;
    background-color: white;
    padding-left: 30px;
    border: none;
    margin-left: 1055px;
  }
  &__icons {
    width: 200px;
    margin-left: 750px;
    margin-top: -38px;
  }
  &__icon {
    width: 35px;
  }
  &__col1 {
    margin-top: -45px;
    margin-left: 70px;
    list-style: none;
    justify-content: space-between;
  }
  &__col1el {
    color: white;
    padding-top: 20px;
  }
  &__col2 {
    margin-top: -205px;
    margin-left: 385px;
    list-style: none;
    justify-content: space-between;
  }
  &__col2el {
    color: white;
    padding-top: 20px;
  }
  &__last {
    color: white;
    padding-top: 142px;
    padding-left: 105px;
  }
}
</style>
