<template>
  <div class="food-ditails">
      <a href="" class="food">
          <div class="image">

          </div>
          <div class="title"> {{ this.foodDetails.title }} </div>
          <div class="class"> {{ this.foodDetails.class }} </div>
      </a>
  </div>
</template>

<script>
export default {
    name: 'food',
    props: {
        foodDetails: {
            type: Object
        }
    },
    data() {
        return {
           
        }
    },
    mount() {
     
    }
}
</script>

<style scope>
.food-ditails {
    /* 每行固定6个 */
    flex: 0 0 15%;
}

.food {
    margin-right: 15px;
    margin-bottom: 15px;
    margin-bottom: 30px;
    display: inline-block;
    width: 175px;
    line-height: 1;
}

.food-ditails a {
    color: #e35f00;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

.food-ditails a:hover {
    color: #973f00;
    text-decoration: underline;
}

.food .image {
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

.food .image:hover {
    transform: scale(1.05)
}

.food .title {
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
}

.food .class {
    color: #555;
    overflow: hidden;
    white-space: nowrap;
}
</style>