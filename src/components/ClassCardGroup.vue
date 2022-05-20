<!-- class -->
<template>
  <div class="class-consoles">
    <div class="class-console" v-for="item in classDetails" :key="item.id">
      <div class="image" :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }"></div>
      <div class="title"> {{ item.title }} </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
      classDetails: {
          type: Array
      }
  },
  data() {
    return {

    };
  },

  computed: {},

  watch: {},

  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },

  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },

  methods: {
    
  }
}
</script>

<style scoped>
.class-consoles {
    display: flex;
    height: 568px;
    background: #ccc;
}

.class-consoles .class-console {
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
.class-consoles .class-console:hover {
    -webkit-box-flex: 1.15;
    -ms-flex: 1.15;
    flex: 1.15;
}
.class-consoles:hover .class-console:hover .image {
    filter: grayscale(1%);
}
.class-consoles:hover .class-console .image {
    filter: grayscale(100%);
}
.class-consoles .class-console .image {
    filter: grayscale(25%);
}
.class-consoles .class-console .image {
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
.class-consoles .class-console .title {
    position: relative;
}
</style>