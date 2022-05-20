<template>
  <div class="input-holder">
      <input type="text" placeholder="搜索..." v-model="searchKey" @change="change">
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      searchKey: ''
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
    change() {
      console.log(this.searchKey)
      this.$emit('searchChange', this.searchKey)
    }
  },
}
</script>

<style scoped>
.input-holder {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1000;
}
.input-holder input {
    flex: 1; /** 占一行 */
    font-size: 24px;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 15px;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
    outline: 0;
}

.input-holder input:hover {
    background: #e1e1e1
}
</style>