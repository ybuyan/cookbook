<template>
  <div class="chinese-content">
      <div class="food-class-consoles">
          <FoodClass/>
          <FoodClass/>
          <FoodClass/>
          <FoodClass/>
          <FoodClass/>
          <FoodClass/>
          <FoodClass/>
          <FoodClass/>
      </div>
      <div class="input-holder">
          <input type="text" placeholder="搜索食品..." name="food">
      </div>
      <div class="food-container container-fluid text-center">
          <Food v-for="item in lists" :key="item.id" :foodDetails='item'/>
      </div>
  </div>
</template>

<script>
import Food from './../Food/Food.vue'
import FoodClass from './../FoodClass/FoodClass.vue'

export default {
    name:'chinese',
    components: {
        Food,
        FoodClass
    },
    data() {
        return {
            lists: [
                {
                    'id' : 1,
                    'title' : '西红柿炒鸡蛋1',
                    'class' : '川菜'
                },
                {
                    'id' : 2,
                    'title' : '西红柿炒鸡蛋2',
                    'class' : '川菜'
                },
                {
                    'id' : 3,
                    'title' : '西红柿炒鸡蛋3',
                    'class' : '川菜'
                },
                {
                    'id' : 4,
                    'title' : '西红柿炒鸡蛋4',
                    'class' : '川菜'
                },
                {
                    'id' : 5,
                    'title' : '西红柿炒鸡蛋5',
                    'class' : '川菜'
                },
                {
                    'id' : 6,
                    'title' : '西红柿炒鸡蛋6',
                    'class' : '川菜'
                },
                {
                    'id' : 7,
                    'title' : '西红柿炒鸡蛋7',
                    'class' : '川菜'
                },
                {
                    'id' : 8,
                    'title' : '西红柿炒鸡蛋5',
                    'class' : '川菜'
                },
                {
                    'id' : 9,
                    'title' : '西红柿炒鸡蛋6',
                    'class' : '川菜'
                },
                {
                    'id' : 10,
                    'title' : '西红柿炒鸡蛋7',
                    'class' : '川菜'
                },
                {
                    'id' : 11,
                    'title' : '西红柿炒鸡蛋7',
                    'class' : '川菜'
                },
                {
                    'id' : 12,
                    'title' : '西红柿炒鸡蛋7',
                    'class' : '川菜'
                },
                {
                    'id' : 13,
                    'title' : '西红柿炒鸡蛋7',
                    'class' : '川菜'
                }
            ]
        }
    }
}
</script>

<style scope>
.food-class-consoles {
    display: flex;
    height: 568px;
    background: #ccc;
}

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

.text-center {
    text-align: center!important;
}

.container-fluid {
    /* width: 100%; */
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.food-container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-content: center;
}
</style>