<template>
  <button type="button" class="button">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'SmallButtonComponent',
  props: {
    label: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 640px) {
  button {
    font-size: 1.5vw;
    width: 10vw;
    background-color: #585858;
    color: white;
  } 
}

@media only screen and (min-width: 320px) and (max-width: 640px) and (orientation: portrait) {
    button {
      font-size: 3vw;
      width: 100%;
      background-color: #585858;
      color: white;
    }
}
  
@media only screen and (min-width: 600px) and (max-width: 700px) and (orientation: landscape) {
  button {
      font-size: 2.5vw;
      width: 100%;
      background-color: #585858;
      color: white;
    }
}

</style>
