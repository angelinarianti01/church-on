<template>
    <div class="cardcontainer" @click="goTo('ministry-form')">
      <div class="image">
        <img class="card-img-top" :src="(getImageSrc(imgFile))" :alt="imgAlt">
      </div>
      <div class="card-body">
          <h5 class="card-title">{{name}}</h5>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    name: String,
    imgFile: String, 
    imgAlt: String,
  },
  created() {
    console.log(this.imgFile)
  },
  data() {
    return {
      msg: '',
    }
  },
  methods: {
    getImageSrc(source){
        return require("../assets/"+source);     
    },
    goTo(page) {
      console.log(page)
      //router.push({ path: '/register', query: { plan: 'private' } })
      // https://router.vuejs.org/guide/essentials/navigation.html
    }
  }
}
</script>

<style scoped>

@media only screen and (min-width: 768px) {
  img {
    width:20vw;
    border-top-right-radius: 15%;
    border-top-left-radius: 15%;
  }
  .card-title {
    font-size: 1.5vw;
    font-family: NHaasGroteskMedium;  
    text-align: center;
    padding: 1.5vw 0vw;
  }
}

@media only screen and (min-width: 320px) and (max-width: 768px) and (orientation: portrait) {
  img {
    width: 60vw;
    border-top-right-radius: 15%;
    border-top-left-radius: 15%;
  }
  .card-title {
    font-size: 3vw;
    font-family: NHaasGroteskMedium;  
    text-align: center;
    padding: 3vw 0vw;
  }
}
  
@media only screen and (min-width: 600px) and (max-width: 768px) and (orientation: landscape) {
  img {
    width: 28vw;
    border-top-right-radius: 15%;
    border-top-left-radius: 15%;
  }
  .card-title {
    font-size: 2vw;
    font-family: NHaasGroteskMedium;  
    text-align: center;
    padding: 3vw 0vw;
  }
}

.cardcontainer {
  background-color: white;
  border: 1px solid rgb(234, 230, 230);
  border-radius: 15%;
  cursor: pointer;
}

.cardcontainer:hover {
  color: #4b4b4b;
  border: 1.25px solid #4b4b4b;
}



</style>