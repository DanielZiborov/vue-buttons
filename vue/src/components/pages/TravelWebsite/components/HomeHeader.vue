<template>
    <div class="header">
        <div class="header__cards"><NewsCard/></div>
        <div class="header__first">
            <img src="/TravelWebsite/smartphone.svg" class="header__phone">
            <span class="header__text-first">1 (800) 603 6035</span>
            <span class="header__text-first1">My Account</span>
            <span class="header__text-first2">124</span>
            <img src="/TravelWebsite/tick.svg" class="header__tick1">
            <span class="header__text-first3">5</span>
            <img src="/TravelWebsite/tick.svg" class="header__tick2">
        </div>
        <div class="header__second">            
            <h1 class="header__text-second">Travel</h1>
            <div class="header__cart">
                <span class="header__cart-text">CART EMPTY</span>
                <img src="TravelWebsite/cart.svg" class="header__cart-icon">
            </div>
        </div>
        <ul class="header__list">
            <li class="header__listel1">ARUBA</li>
            <li class="header__listel2">CANCUN</li>
            <li class="header__listel3">FLORIDA</li>
            <li class="header__listel4">ECO TOURS</li>
            <li class="header__listel5">FAMILY TOURS</li>
            <li class="header__listel6">HOT TOURS</li>
            <li class="header__listel7">HAWAII</li>
            <li class="header__listel8">MYRTLE BEACH</li>
            <li class="header__listel9">OTHER</li>
        </ul>
        <b class="header__line">_______</b>
        <div class="header__btn">
            <span class="header__btn-text1">More Info</span>
            <span class="header__btn-text2">></span>
        </div>
    </div>
</template>
  
<script>
    import NewsCard from "./NewsCard.vue";
    export default {
        name: "HomeHeader",
        components: {
            NewsCard,
        }
    }
</script>

<style scoped lang="less">
    .header {
        &__cards {
            position:relative;
        }
        &__first {
            position:absolute;
            top:0;
            width: 75%;
            left:12.5%;
            right: 12.5%;
            height:40px;
            background-color: #1b1b1d;
        }
        &__phone {
            display: inline-block;
            padding-top: 13px;
            padding-bottom: 13px;
            padding-left:8px;
            width:14px;
        }
        &__text-first {
            position: absolute;
            color:white;
            font-size: 14px;
            padding-top: 13px;
            padding-bottom: 13px;
            padding-left: 3px;
        }
        &__text-first1 {
            position:absolute;
            color:white;
            font-size: 10px;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left: 830px;
        }
        &__text-first2 {
            position:absolute;
            color:white;
            font-size: 10px;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left:890px;
        }
        &__tick1 {
            display: inline-block;
            width: 10px;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left:910px;
        }
        &__text-first3 {
            position:absolute;
            color:white;
            font-size: 10px;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left:20px;
        }
        &__tick2 {
            display: inline-block;
            width: 10px;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left:27px;
        }
        &__second {
            position:absolute;
            top:40px;
            background-color: #343338;
            width: 75%;
            left:12.5%;
            right:12.5%;
            height:70px;
        }
        &__text-second {
            color:white;
            font-size:40px;
            font-weight:bold;
            font-family:'Trebuchet MS';
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left:15px;
        }
        &__cart {
            position: absolute;
            background-color: red;
            height: 70px;
            width: 170px;
            top:0;
            right:0;
        }
        &__cart-text {
            position: relative;
            display: inline-block;
            color:white;
            padding-left:70px;
            font-size: 12px;
            padding-top:29px;
            padding-bottom:29px;
        }
        &__cart-icon {
            position:absolute;
            display: inline-block;
            width:14px;
            top:29px;
            left:40px;
        }
        &__list {
            display:flex;
            position:absolute;
            list-style-type:none;
            left:135px;
            top:120px;
        }
        &__listel1, &__listel2, &__listel3, &__listel4, &__listel5, &__listel6, &__listel7, &__listel8, &__listel9 {
            color:white;
            padding-left: 17px;
        }
        &__line {
            position: absolute;
            color:red;
            top:150px;
            left: 190px;
            font-size:14px;
        }
        &__btn {
            position:absolute;
            background-color: red;
            width: 120px;
            height: 37px;
            top:320px;
            left:190px;
        }
        &__btn-text1 {
            display: inline-block;
            color:white;
            padding-left: 15px;
            font-size:14px;
            padding-top: 10px;
            padding-bottom: 8px;
        }
        &__btn-text2 {
            display: inline-block;
            color:white;
            padding-left: 15px;
            font-size:14px;
            padding-top: 10px;
            padding-bottom: 8px;
        }
    }
</style>