<!-- player profile -->
<template>
  <div class="class-container class-container-fluid text-center">
    <div class="details" v-for="item in details" :key="item.id">
      <a href="" class="item">
          <div class="image" :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }"></div>
          <div class="name"> {{ item.name }} </div>
          <div class="nationality"> {{ item.nationality }} </div>
          <div class="nationality"> {{ item.channel + "、" + item.club }} </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'snapcard',
  props: {
      details: {
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
    
  },
}
</script>

<style scoped>
.details {
    /* 每行固定6个 */
    flex: 0 0 15%;
}

.item {
    margin-right: 15px;
    margin-bottom: 15px;
    margin-bottom: 30px;
    display: inline-block;
    width: 175px;
    line-height: 1;
}

.details a {
    color: #e35f00;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

.details a:hover {
    color: #973f00;
    text-decoration: underline;
}

.item .image {
    height: 240px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 15px;
    background-position: center;
    background-size: cover;
    transition: ease .25s all;
    background-repeat: no-repeat;
    box-shadow: 0 7px 30px 0 rgb(0 0 0 / 25%);
    /* background-image: ; */
    
}

.item .image:hover {
    transform: scale(1.05)
}

.item .name {
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
}

.item .nationality {
    color: #555;
    overflow: hidden;
    white-space: nowrap;
}

.text-center {
    text-align: center!important;
}

.class-container-fluid {
    /* width: 100%; */
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.class-container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-content: center;
}
</style>