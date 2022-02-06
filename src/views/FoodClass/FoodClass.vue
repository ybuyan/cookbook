<template>
  <div class="food-class-console">
    <div class="image" style="background-image:url(https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg);"></div>
    <div class="title">PC</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
.food-class-consoles .food-class-console {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-right: 1px solid #aaa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 44px;
    color: #fff;
    font-family: ExpCondensed,"Exo 2",sans-serif;
    text-shadow: 0 0 30px #000;
    padding: 30px;
    position: relative;
    -webkit-transition: ease .25s all;
    transition: ease .25s all;
    cursor: pointer;
}

.food-class-consoles .food-class-console:hover {
    -webkit-box-flex: 1.15;
    -ms-flex: 1.15;
    flex: 1.15;
}

.food-class-consoles:hover .food-class-console:hover .image {
    filter: grayscale(1%);
}

.food-class-consoles:hover .food-class-console .image {
    filter: grayscale(100%);
}

.food-class-consoles .food-class-console .image {
    filter: grayscale(25%);
}

.food-class-consoles .food-class-console .image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    -webkit-transition: ease .25s all;
    transition: ease .25s all;
}

.food-class-consoles .food-class-console .title {
    position: relative;
}
</style>