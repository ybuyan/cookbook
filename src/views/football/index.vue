<template>
  <div class="chinese-content">
      <ClassCardGroup :classDetails="classDetails"/>
      <Search @searchChange="searchProcess" />
      <SnapCardGroup :details='lists'/>
  </div>
</template>

<script>
import SnapCardGroup from '@/components/SnapCardGroup'
import ClassCardGroup from '@/components/ClassCardGroup'
import Search from '@/components/Search'

export default {
  name:'chinese',
  components: {
      SnapCardGroup,
      ClassCardGroup,
      Search
  },

  data() {
      return {
          lists: [
              {
                  id : 1,
                  imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
                  name : '梅西',
                  nationality : '阿根廷',
                  channel: "法甲",
                  club: '巴黎'
              },
              {
                  id : 2,
                  imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
                  name : 'C罗',
                  nationality : '阿根廷',
                  channel: "法甲",
                  club: '巴黎'
              },
              {
                  id : 3,
                  imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
                  name : '内马尔',
                  nationality : '阿根廷',
                  channel: "法甲",
                  club: '巴黎'
              },
          ],
          classDetails: [
            {
              id: 1,
              imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
              title: "英超"
            },
            {
              id: 2,
              imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
              title: "英超"
            },
            {
              id: 3,
              imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
              title: "英超"
            },
            {
              id: 4,
              imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
              title: "英超"
            },
            {
              id: 5,
              imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
              title: "英超"
            },
            {
              id: 6,
              imgUrl:"https://www.escapeportal.com.au/wp-content/themes/escape-portal/img/pc.jpg",
              title: "英超"
            },
          ]
      }
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
    searchProcess(searchKey = '') {
      console.log(searchKey)
    }
  },
}
</script>

<style scope>

</style>