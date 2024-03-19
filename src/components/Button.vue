<template>
  <button type="button" class="button-52">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    label: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button-52 {
  border: 1px solid lightgray;
  padding: 0.7vw 2vw;
  cursor: pointer;
  background-color: #ffdf6c;
  border-radius: 20px;
  width: inherit;
}

.button-52:hover {
  border: 1.25px solid black;
  font-weight: 400;
}

@media only screen and (min-width: 768px) {
    .button-52 {    
        font-size: 1.4vw;
    }  
}

@media only screen and (min-width: 320px) and (max-width: 768px) and (orientation: portrait) {
    .button-52 {    
        font-size: 3vw;
    }  
}
  
@media only screen and (min-width: 320px) and (max-width: 768px) and (orientation: landscape) {
    .button-52 {    
        font-size: 1.4vw;
    } 
} 


</style>
